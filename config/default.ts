export const config = {
    Sequelize: {
        username: "postgres",
        password: "",
        database: "my-dummy-project-auth",
        host: "localhost",
        dialect: "postgres",
        port: 5432,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+01:00",
        // models: ["@entities"],
        models: [__dirname + "/../src/app/infrastructure/entity"],
    },
};