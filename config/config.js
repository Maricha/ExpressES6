export default {
    database: 'books',
    username: '',
    password: '',
    params: {
        dialect: "sqlite",
        storage: 'books.sqlite',
        define: {
            underscored: true
        }
    },
    jwtSecret: 'Sec3t',
    jwtSession: { session: false }
}