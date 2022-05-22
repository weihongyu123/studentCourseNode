import Koa from "koa";
import KoaBody from "koa-body";
import routers from "./router";
import bodyParser from 'koa-body-parser'


const app = new Koa();

app.use(KoaBody({}));
app.use(bodyParser());

//加载路由
app.use(routers.routes()).use(routers.allowedMethods());

const port = process.env.PORT || "8082";

app.listen(port, function () {
    console.log(`服务器运行在http://127.0.0.1:${port}`);
});


