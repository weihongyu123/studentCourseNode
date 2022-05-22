import Router from "@koa/router";
import CrosMiddle from "../middleware/cros";

import { queryStudentList, saveStudent, updateStudent, deleteStudent, queryOne } from '../service/student'

const router = new Router();

router.get('/queryStudentList', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const data = await queryStudentList();
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


router.post('/saveStudent', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const params = ctx.query
        if (params.id) {
            const data = await updateStudent(ctx.query);
            ctx.body = data;
        } else {
            const data = await saveStudent(ctx.query);
            ctx.body = data;
        }
    } catch (error) {

    }
});

router.post('/deleteStudent', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;

    try {
        const data = await deleteStudent(ctx.query.id);
        ctx.body = data;
    } catch (error) {

    }
});



export default router.routes();



