import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

export class Teacher extends Model {
    id: number
}
Teacher.init(
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
        title: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        phone: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        identityNumber: {
            type: DataTypes.STRING(255),
            defaultValue: "",
        },
        address: {
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
        tableName: "teacher",
    }
);

export default {
    insert: function (model: any) {
        return Teacher.create(model);
    },
    get: function (where: any) {
        return Teacher.findOne({
            where
        });
    },
    queryTeacherList: function (p: {
        [key: string]: any
    } = {}) {
        return Teacher.findAll({
            where: p
        });
    },
    update: async function (model: Teacher, id: number) {
        const row = await Teacher.update(model, {
            where: {
                id
            }
        })
        return row
    },
    delete: function (id: number) {
        return Teacher.destroy({
            where: { // 删除条件
                id
            }
        })
    },
};
