const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	password: '123789',
	host: 'localhost',
	port: 5432,
	database: 'Frontend'
})

module.exports = pool