import Router from "@koa/router";
import CrosMiddle from "../middleware/cros";

const router = new Router();

router.all("/", CrosMiddle, function (ctx, next) {
    console.log('测试接口')
    ctx.body = "测试接口1";
});


export default router.routes();
