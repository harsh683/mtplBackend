
const pgp = require('pg-promise')()

const cn = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
}
const db = pgp(cn)


module.exports=db

