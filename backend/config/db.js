const mysql = require("mysql");

let db;

const connectDatabase = () => {
  if (!db) {
    db = mysql.createConnection({
      host: process.env.DBHOST,
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD, 
    });

    db.connect((err) => {
      if (!err) {
        console.log("Database is connected!");
      } else {
        console.log("Error connecting to the database:", err);
      }
    });
  }
  return db;
};

module.exports = connectDatabase();
