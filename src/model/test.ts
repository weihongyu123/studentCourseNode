import { Model, DataTypes } from "sequelize";
import db from "../db//mysql";

class Student extends Model { }
Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            defaultValue: "",
            comment: "文件名称",
        },
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "student",
    }
);

//强制初始化数据库
// Files.sync({ force: true });

export default {
    insert: function (model: any) {
        return Student.create(model);
    },
    get: function (id: number) {
        return Student.findOne({
            where: {
                id,
            },
        });
    },
};
