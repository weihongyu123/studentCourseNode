import Router from "@koa/router";
import CrosMiddle from "../middleware/cros";

import { queryTeacherList, saveTeacher, updateTeacher, deleteTeacher, queryOne } from '../service/teacher'

const router = new Router();

router.get('/queryTeacherList', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const data = await queryTeacherList();
        ctx.body = data;
    } catch (error) {

    }
});

router.get('/queryOne', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const data = await queryOne(ctx.query);
        ctx.body = data;
    } catch (error) {

    }
});


router.post('/saveTeacher', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const params = ctx.query
        if (params.id) {
            const data = await updateTeacher(ctx.query);
            ctx.body = data;
        } else {
            const data = await saveTeacher(ctx.query);
            ctx.body = data;
        }
    } catch (error) {

    }
});

router.post('/deleteTeacher', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;

    try {
        const data = await deleteTeacher(ctx.query.id);
        ctx.body = data;
    } catch (error) {

    }
});



export default router.routes();



