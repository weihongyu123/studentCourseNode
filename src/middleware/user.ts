
import { getUserByName } from '../service/user';
import { md5password } from '../util/passwordHandel';

export const verifyUsers = async (ctx, next) => {
    // 1.获取用户名和密码
    const { userName, password } = ctx.query;

    //判断用户账号或者密码不为空
    if (!userName || !password) {
        const error = new Error('账号或密码为空');
        return ctx.app.emit("error", error, ctx);
    }

    // 3.判断这次注册的用户名是没有被注册过
    const result = await getUserByName(userName);

    if (result) {
        const error = new Error('用户已经退出');
        return ctx.app.emit('error', error, ctx);
    }
    //如果有效，则进入下一个中间件
    await next();
};

export const handlePassword = async (ctx, next) => {
    //将密码加密后继续调用后面的中间键
    const { password } = ctx.request.body;
    ctx.request.body.password = md5password(password)
    await next()
}

