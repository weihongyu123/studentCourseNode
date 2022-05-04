import StudentModel from '../model/student'

export async function queryStudentList() {
    return StudentModel.queryStudentList();
}

export async function queryOne(id: number) {
    return StudentModel.get(id);
}


export async function saveStudent(student: any) {
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

