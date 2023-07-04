const mysql = require("mysql2/promise");

let connection;

const connect = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "mytodo",
    });
  }
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, getConnection };
