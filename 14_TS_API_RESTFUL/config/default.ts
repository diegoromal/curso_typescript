const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

export default {
    port: 3000,
    dbUri: `mongodb://${dbUser}:${dbPassword}@localhost:27017/curso_typescript`,
};
