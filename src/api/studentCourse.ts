import Router from "@koa/router";
import CrosMiddle from "../middleware/cros";

import { queryCourseList, saveCourse, deleteCourse } from '../service/studentCourse'

const router = new Router();

router.get('/queryCourseList', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const data = await queryCourseList(ctx.query.studentId);
        ctx.body = data;
    } catch (error) {

    }
});


router.post('/saveCourse', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const params = ctx.query

        const data = await saveCourse(ctx.query);
        ctx.body = data;
    } catch (error) {

    }
});

router.post('/deleteCourse', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const data = await deleteCourse(ctx.query.id);
        ctx.body = data;
    } catch (error) {

    }
});

export default router.routes();



