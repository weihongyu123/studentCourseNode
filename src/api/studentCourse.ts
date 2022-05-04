import Router from "@koa/router";
import CrosMiddle from "../middleware/cros";

import { queryCourseList } from '../service/studentCourse'

const router = new Router();

router.get('/queryCourseList', CrosMiddle, async function (ctx) {
    const { uuid } = ctx.params;
    try {
        const data = await queryCourseList();
        ctx.body = data;
    } catch (error) {

    }
});

export default router.routes();



