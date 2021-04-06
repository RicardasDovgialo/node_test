const mysql = require('mysql');
const util = require( 'util' );
const config = require('../config')

function db_connector(){
  const connection = mysql.createConnection(
    {
      host: config.db_host, 
      user: config.db_user, 
      password: config.db_pass,
      database: config.db_name
    });

  return {
    query( sql, args ) {
      return util.promisify( connection.query )
        .call( connection, sql, args );
    },
    close() {
      return util.promisify( connection.end ).call( connection );
    }
  };
}
const db = db_connector();

module.exports = async (sql) =>{
  try {
    const data = await db.query(sql)
    return data
  }catch (err){ throw err};
}