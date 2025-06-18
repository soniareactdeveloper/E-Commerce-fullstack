const mongoose = require("mongoose")

const dbConfig = () => {
  mongoose.connect(process.env.DB_URL)
  .then(() => console.log('DB is Connected!'));
}


module.exports = dbConfig