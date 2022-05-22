import Router from "@koa/router";
import jwt from 'jsonwebtoken';
import CrosMiddle from "../middleware/cros";
import { verifyUsers, handlePassword } from '../middleware/user';
import { verifyLogin } from '../middleware/auth';
import { PRIVATE_KEY } from '../../config/index';

import { create } from '../service/user'

const router = new Router();

// 创建用户
router.post('/create', CrosMiddle, verifyUsers, handlePassword, async function (ctx) {
    const { uuid } = ctx.params;

    try {
        const data = await create(ctx.request.body);
        ctx.body = data;
    } catch (error) {
    }
});

// 用户登录
router.post('/login', CrosMiddle, verifyLogin, async function (ctx) {
    const { uuid } = ctx.params;

    try {
        const {id,userName} = ctx.user;

        const token = jwt.sign({ id, userName }, PRIVATE_KEY, {
            //24h后失效
            expiresIn: 60 * 60 * 24,
            //非对称加密
            algorithm: 'RS256'
        })
        ctx.body = { id, userName, token };
    } catch (error) {
    }
});




export default router.routes();



