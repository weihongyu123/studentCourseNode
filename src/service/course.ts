import CourseModel from '../model/course'

export async function queryCourseList() {
    return CourseModel.queryCourseList();
}

export async function saveCourse(course: any) {
    course.time = JSON.parse(course.time)
    return CourseModel.insert(course);
}

export async function queryOne(id: number) {
    return CourseModel.get(id);
}

export async function updateCourse(course: any) {
    const id = course.id;
    delete course.id;
    delete course.updatedAt;
    delete course.createdAt;
    course.time = JSON.parse(course.time)
    return CourseModel.update(course, id);
}

export async function deleteCourse(id: number) {
    return CourseModel.delete(id);
}

