import StudentModel from '../model/student'
import { md5password } from '../util/passwordHandel';
import { create } from '../service/user'

export async function queryStudentList(where: any) {

    console.log(where)
    return StudentModel.queryStudentList(where);
}

export async function queryOne(where: any) {
    return StudentModel.get(where);
}


export async function saveStudent(student: any) {
    // 创建学生用户
    create({
        userName: student.code,
        password: md5password('123456'),
        type: 3
    })

    return StudentModel.insert(student);
}

export async function updateStudent(student: any) {
    const id = student.id;
    delete student.id;
    delete student.updatedAt;
    delete student.createdAt;
    return StudentModel.update(student, id);
}

export async function deleteStudent(id: number) {
    return StudentModel.delete(id);
}

