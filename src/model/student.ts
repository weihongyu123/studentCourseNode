import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

export class Student extends Model {
    id: number
}
Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        code: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        age: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        },
        gender: {
            type: DataTypes.INTEGER,
            defaultValue: "",
        },
        major: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        password: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        courseId: {
            type: DataTypes.JSON,
            defaultValue: "",
        },
        createdAt: {
            type: DataTypes.TIME,
            defaultValue: "",
        },
        updatedAt: {
            type: DataTypes.TIME,
            defaultValue: "",
        }
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "student",
    }
);

export default {
    insert: function (model: any) {
        return Student.create(model);
    },
    get: function (where: any) {
        return Student.findOne({
            where
        });
    },
    queryStudentList: function () {
        return Student.findAll();
    },
    update: async function (model: Student, id: number) {
        const row = await Student.update(model, {
            where: {
                id
            }
        })
        return row
    },
    delete: function (id: number) {
        return Student.destroy({
            where: { // 删除条件
                id
            }
        })
    },
};
