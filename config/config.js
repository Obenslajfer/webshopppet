const dotenv = require("dotenv");


require("dotenv").config()



const config = {
    databaseURL:process.env.DATABASE
}

module.exports = config