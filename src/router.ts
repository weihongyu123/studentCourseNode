import Router from "@koa/router";

import test from "./api";
import student from './api/student'
import teacher from './api/teacher'
import course from './api/course'
import studentCourse from "./api/studentCourse";
import user from './api/user'

const router = new Router();

//对外提供的接口
router.use("/api/test", test);
router.use("/api/student", student);
router.use("/api/teacher", teacher);
router.use("/api/course", course);
router.use("/api/studentCourse", studentCourse);
router.use("/api/user", user);


export default router;
