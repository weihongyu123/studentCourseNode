import TeacherModel from '../model/teacher';
import { md5password } from '../util/passwordHandel';
import { create } from '../service/user'

export async function queryTeacherList(where: any) {
    return TeacherModel.queryTeacherList(where);
}

export async function queryOne(where: any) {
    return TeacherModel.get(where);
}


export async function saveTeacher(teacher: any) {
    // 创建的时候 创建登录用户

    create({
        userName: teacher.code,
        password: md5password('123456'),
        type: 2
    })

    return TeacherModel.insert(teacher);
}

export async function updateTeacher(teacher: any) {
    const id = teacher.id;
    delete teacher.id;
    delete teacher.updatedAt;
    delete teacher.createdAt;
    return TeacherModel.update(teacher, id);
}

export async function deleteTeacher(id: number) {
    return TeacherModel.delete(id);
}

