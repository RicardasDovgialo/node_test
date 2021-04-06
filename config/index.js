const dotenv = require('dotenv');

// default Node env
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//make sure that .env is present
const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("!!! .env file is not present");
};

module.exports = {
    port: parseInt(process.env.PORT, 10) || 5000,
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_pass: process.env.DB_PASS,
    db_port: process.env.DB_PORT
}