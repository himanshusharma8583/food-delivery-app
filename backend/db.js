const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://corelarris:gofood123@cluster0.qpvbbdt.mongodb.net/gofoodMERN?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, res) => {
      if (err) console.log(err);
      else {
        console.log("MongoDB Connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          // else console.log(data);
        });
      }
    }
  );
};
module.exports = mongoDB;
