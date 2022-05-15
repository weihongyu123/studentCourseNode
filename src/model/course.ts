import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

export class Course extends Model {
    // teacherId?: number;
}
Course.init(
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
        time: {
            type: DataTypes.JSON,
            defaultValue: "",
        },
        place: {
            type: DataTypes.STRING(255),
        },
        teacherId: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        createdAt: {
            type: DataTypes.TIME,
        },
        updatedAt: {
            type: DataTypes.TIME,
        }
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "course",
    }
);

export default {
    insert: async function (model: any) {
        return Course.create(model);
    },
    get: function (id: number) {
        return Course.findOne({
            where: {
                id,
            },
        });
    },
    queryCourseList: async function (p: {
        [key: string]: any
    } = {}) {
        await Course.sync()
        return Course.findAll({
            where: p
        });
    },
    update: async function (model: Course, id: number) {
        const row = await Course.update(model, {
            where: {
                id
            }
        })
        console.log(row)
        return row
    },
    delete: function (id: number) {
        return Course.destroy({
            where: { // 删除条件
                id
            }
        })
    },
};
