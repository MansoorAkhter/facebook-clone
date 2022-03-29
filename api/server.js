const { response } = require("express");
const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const postModel = require("./schema");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://facebook-clone:clonefacebook@cluster0.mxq8h.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/add", (request, response) => {
  const { title, description } = request.body;

  postModel.create(request.body, (error, data) => {
    if (error) {
      response.send(error.message);
    } else {
      console.log(data);
      response.status(200).send("Successful")
    }
  });
});


// app.get("/", (req, res)=>{
//   res.send("Hello World")
// })

mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(`mongoose error ${error.message}`));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})