import { Model, DataTypes } from "sequelize";
import db from "../db//mysql";

class User extends Model {
    password: string;
    userName: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING(255),
            defaultValue: "",
            comment: "账户名",
        },
        password: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        type: {
            type: DataTypes.STRING(255),
            defaultValue: "",
            comment: "密码",
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
        tableName: "user",
    }
);

export default {
    insert: function (model: any) {
        return User.create(model);
    },
    update: async function (model: User, where: any) {
        const row = await User.update(model, {
            where
        })
        return row
    },
    getUserName: function (userName: string) {
        return User.findOne({
            where: {
                userName
            },
        });
    },
};
