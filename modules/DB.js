const mariaDB = require('mariadb')
const pool = mariaDB.createPool({
  database: 'employee',
  user: 'root',
  password: 'root',
  connectionLimit: 5
})

module.exports = class DB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn)

  }
  async read() {
    let sql = `select * from employees `
    let result = await this.conn.query(sql);
    return result;
  }


  create() {}
  update() {}
  async delete(id) {
    const sql = `
    delete from employees where id=${id}
    `
    let result = await this.conn.query(sql);
    return result;

  }


}