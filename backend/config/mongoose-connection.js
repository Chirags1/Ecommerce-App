const mongoose = require("mongoose");
mongoose
  .connect(
    
  )
  .then((success) => {
    console.log("Connected Successfully" + success);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose.connection;
