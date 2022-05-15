import TeacherModel from '../model/teacher'

export async function queryTeacherList() {
    return TeacherModel.queryTeacherList();
}

export async function queryOne(id: number) {
    return TeacherModel.get(id);
}


export async function saveTeacher(teacher: any) {
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

