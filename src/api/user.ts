import Router from "@koa/router";
import jwt from 'jsonwebtoken';
import CrosMiddle from "../middleware/cros";
import { verifyUsers, handlePassword } from '../middleware/user';
import { verifyLogin } from '../middleware/auth';
import { PRIVATE_KEY } from '../../config/index';

import { create } from '../service/user'
import { queryOne as queryTeacher } from '../service/teacher'
import { queryOne as queryStudent } from '../service/student'



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
        const { id, userName, type } = ctx.user;


        const token = jwt.sign({ id, userName }, PRIVATE_KEY, {
            //24h后失效
            expiresIn: 60 * 60 * 24,
            //非对称加密
            algorithm: 'RS256'
        })

        const info: {
            teacherId: undefined | number,
            studentId: undefined | number,
        } = {
            teacherId: undefined,
            studentId: undefined
        }

        if (type === 2) {
            const tracher = await queryTeacher({ code: userName })
            info.teacherId = tracher?.id
        } else if (type === 3) {
            const student = await queryStudent({ code: userName })
            info.studentId = student?.id
        }

        ctx.body = { id, userName, type, token, ...info };
    } catch (error) {
    }
});




export default router.routes();



