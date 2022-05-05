import { Model, DataTypes } from "sequelize";
import { Course } from './course';
import { Teacher } from './teacher'
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
        }
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "student_course",
    }
);

Course.belongsTo(Teacher);
Course.hasMany(StudentCourse);


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
    delete: function (id: number) {
        console.log(id)
        return StudentCourse.destroy({
            where: { // 删除条件
                id
            }
        })
    },
};
