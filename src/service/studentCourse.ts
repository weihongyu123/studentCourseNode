import StudentCourseModel from '../model/studentCourse'

export async function queryCourseList() {
    return StudentCourseModel.queryCourseList();
}

