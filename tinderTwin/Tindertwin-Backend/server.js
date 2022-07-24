const express = require("express");
const mongoose = require("mongoose");
const Card = require("./Schema");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;
const CONNECT_URL =
  "mongodb+srv://VasuDevrani:mongoAtlasByVasu@cluster0.krlmc7x.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose
  .connect(CONNECT_URL, { useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("db connected with app");
  })
  .catch((err) => {
    console.log(err);
  });


// middleware function to access the body of req
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello guys");
});

app.post("/tinder/cards", (req, res) => {
  console.log(req.body);
  console.log(req.method);

  // const cardItem = new Card(req.body);
  // console.log(cardItem);

  // cardItem
  //   .save()
  //   .then(() => {
  //     res.status(200).send(cardItem);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });

    Card.create(req.body).then(() => {
      res.status(200).send(req.body);
  })
  .catch((err) => {
      res.status(404).send(err);
  });
});

app.get("/tinder/cards", async (req, res) => {
  console.log(req.method);

  try {
    const data = await Card.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log("server listening to PORT");
});

// app.post('/tinder/cards/post', (req, res) => {
//     const dbCard = req.body;

//     model.create(dbCard, (err, data) => {
//         if(err){
//             res.status(500).send(err)
//         }else{
//             res.status(200).send(data);
//         }
//     })
// })

// app.get('/tinder/cards/get', (req, res) => {
//     model.find((err, data) => {
//         if(err){
//             res.status(500).send(err)
//         }else{
//             res.status(200).send(data);
//         }
//     })
// })
