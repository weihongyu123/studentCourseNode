import jwt from 'jsonwebtoken'
import { PUBLIC_KEY } from '../../config/index'
import { md5password } from '../util/passwordHandel';
import { getUserByName } from '../service/user'

export const verifyLogin = async (ctx, next) => {
    //1.获取用户名和密码
    const { userName, password } = ctx.query;

    //2.判断用户名和密码是否为空
    if (!userName || !password) {
        const error = new Error('账号或密码为空');
        return ctx.app.emit("error", error, ctx);
    }
    // 3.判断用户是否存在
    const user = await getUserByName(userName);
    if (!user) {
        const error = new Error('用户不存在');
        return ctx.app.emit("error", error, ctx);
    }

    // 4.判断密码是否和数据库中的密码是一致(加密)
    if (md5password(password) !== user?.password) {
        const error = new Error('密码不正确');
        return ctx.app.emit("error", error, ctx);
    }
    //将user信息放入ctx，一边后面的中间件处理
    ctx.user = user
    await next();
};

export const verifyAuth = async (ctx, next) => {
    console.log('验证登陆的授权');
    //获取token
    const authorization = ctx.headers.authorization

    if (!authorization) {
        const error = new Error('没有登录');
        return ctx.app.emit('error', error, ctx)
    }
    //因为是postman发送过来的，因此会多出Bearer这个字符
    const token = authorization.replace('Bearer ', '');
    //验证token

    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        ctx.user = result
        await next()
    } catch (error) {
        const err = new Error('token 过期')
        return ctx.app.emit('error', err, ctx)
    }
}

