const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Rishikesh:Rishi2103@cluster0.a5aejrd.mongodb.net/goFood?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected Successfully");
        const fetchedData = await mongoose.connection.db.collection(
          "food_items"
        );
        fetchedData.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "food_category"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });
          // if(err) console.log(err);
          // else {
          //     global.food_items = data;
          // }
        });
      }
    }
  );
};

module.exports = mongoDB;
