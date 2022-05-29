import { Model, DataTypes, Op } from "sequelize";
import { Course } from './course';
import { Teacher } from './teacher'
import { Student } from './student'
import db from "../db/mysql";


class StudentCourse extends Model { }
StudentCourse.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        studentId: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        },
        courseId: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        },
        createdAt: {
            type: DataTypes.TIME,
            defaultValue: "",
        },
        updatedAt: {
            type: DataTypes.TIME,
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
Teacher.hasMany(Course);

Course.belongsToMany(Student, { through: StudentCourse });
Student.belongsToMany(Course, { through: StudentCourse });

StudentCourse.belongsTo(Course);
StudentCourse.belongsTo(Student);

Course.hasMany(StudentCourse);
Student.hasMany(StudentCourse);


export default {
    // queryCourseList: function (studentId: number) {
    //     return Course.findAll({
    //         include: [{
    //             model: Teacher,
    //             required: false
    //         },
    //         {
    //             model: StudentCourse,
    //             required: false,
    //             where: {
    //                 studentId
    //             }
    //         }]
    //     });
    // },

    queryCourseList: function (studentId: number) {
        return Course.findAll({
            include: [{
                model: Teacher,
                required: false
            },
            {
                model: Student,
                required: false,
                where: {
                    id: studentId
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

    // queryResultList: function (teacherId: number) {
    //     return Course.findAll({
    //         where: {
    //             teacherId: teacherId
    //         },
    //         include: [{
    //             model: Teacher,
    //             required: false
    //         },
    //         {
    //             model: Student,
    //             required: true,
    //             right:true
    //         }]
    //     });
    // }

    // 选择教授课程的学生列表
    queryResultList: function (teacherId: number) {
        return StudentCourse.findAll({
            include: [{
                model: Course,
                required: true,
                where: {
                    teacherId: {
                        [Op.eq]: teacherId
                    }
                },
            }, {
                model: Student,
                required: false,

            }]
        });
    }
};
