import StudentCourseModel from '../model/studentCourse'

export async function queryCourseList(studentId: number) {
    return StudentCourseModel.queryCourseList(studentId);
}


export async function saveCourse(teacher: any) {
    return StudentCourseModel.insert(teacher);
}


export async function deleteCourse(id: number) {
    return StudentCourseModel.delete(id);
}

