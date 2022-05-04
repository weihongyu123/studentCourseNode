import { Model, DataTypes } from "sequelize";
import { Course } from './course'
import db from "../db/mysql";

class TeacherCourse extends Model { }
TeacherCourse.init(
    {
        teacherId: {
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
        tableName: "course",
    }
);
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
        tableName: "course",
    }
);

export default {
    queryCourseList: function () {
        return Course.findAll({
            include: [{
                model: TeacherCourse
            },
            {
                model: StudentCourse
            }]
        });
    },
};
