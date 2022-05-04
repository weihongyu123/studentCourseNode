/**
 * 默认配置
 */

module.exports = {
    //开发环境数据库
    db: {
        host: "127.0.0.1",
        port: "3306",
        database: "courseSelection",
        user: "root",
        password: "123456",
        connectionLimit: 2,
    },
    //mongodb配置
    mg: {
        name: "fe_topic",
        reset: "",
        url: "mongodb://127.0.0.1:27017",
    },
};
