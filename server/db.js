// server/db.js
const mysql = require("mysql2");
const util = require('util');

const db = mysql.createConnection({
  host: "mysql.railway.internal",
  user: "root",
  password: "EPMhulfaNpDKPKWDkUchPgOrMQEtfWrV",
  database: "carepet"
});

db.connect(err => {
  if (err) {
    console.error("❌ Erro MySQL:", err);
  } else {
    console.log("✅ Conectado ao MySQL!");
  }
});

db.query = util.promisify(db.query);


module.exports = db;
