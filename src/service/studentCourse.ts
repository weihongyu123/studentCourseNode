import StudentCourseModel from '../model/studentCourse'

export async function queryCourseList(studentId: number) {
    return StudentCourseModel.queryCourseList(studentId);
}


export async function bunchUpdate(studentCourseModel: any) {

    const params = JSON.parse(studentCourseModel.params)
    const promiseList = params.map(e => {
        const id = e.id;
        delete e.id;
        delete e.updatedAt;
        delete e.createdAt;

        return StudentCourseModel.update(e, id)
    })

    return await Promise.all(promiseList);
}

// 成绩查询
export async function queryResultList(teacherId: number) {
    return StudentCourseModel.queryResultList(teacherId);
}


export async function saveCourse(teacher: any) {
    return StudentCourseModel.insert(teacher);
}


export async function deleteCourse(id: number) {
    return StudentCourseModel.delete(id);
}

