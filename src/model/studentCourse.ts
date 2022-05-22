import { Model, DataTypes, Op } from "sequelize";
import { Course } from './course';
import { Teacher } from './teacher'
import { Student } from './student'
import db from "../db/mysql";


class StudentCourse extends Model { }
StudentCourse.init(
    {
        studentId: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        },
        courseId: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        },
        result: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        }
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "student_course",
    }
);

// 课程列表
Course.belongsTo(Teacher);
Course.hasOne(StudentCourse);

// 成绩查询主表
StudentCourse.belongsTo(Student)
StudentCourse.belongsTo(Course);

export default {
    queryCourseList: function (studentId: number) {
        return Course.findAll({
            include: [{
                model: Teacher,
                required: false
            },
            {
                model: StudentCourse,
                required: false,
                where: {
                    studentId
                }
            }]
        });
    },

    insert: function (model: any) {
        return StudentCourse.create(model);
    },

    update: async function (model: StudentCourse, id: number) {
        const row = await StudentCourse.update(model, {
            where: {
                id
            }
        })
        return row
    },

    delete: function (id: number) {
        return StudentCourse.destroy({
            where: { // 删除条件
                id
            }
        })
    },

    // 选择教授课程的学生列表
    queryResultList: function (teacherId: number) {
        return StudentCourse.findAll({
            include: [{
                model: Student,
                required: false,
            },
            {
                model: Course,
                required: false,
                where: {
                    teacherId: {
                        [Op.eq]: teacherId
                    }
                }
            }
            ]
        });
    }
};
