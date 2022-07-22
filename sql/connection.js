const mysql = require('mysql')


// const {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} = process.env

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '',
        user: '',
        password: '',
        database: '',
        port: 
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;