const { Pool } = require('pg')

const pool = new Pool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
})

const query = async (q_text, params) => {
    const res = await pool.query(q_text, params);
    return res;
  };
  
  module.exports = {
    query
  };
  