const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chats.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/Js")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method')); //Query String

main()
  .then(() => {
    console.log("Mongo Server is working");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

//Edit Route
app.get("/chats/:id/edit",async (req,res)=>{
  let {id}= req.params;
  let fchat = await chat.findById(id);
  res.render("edit.ejs",{fchat});
});
// Update Route 
app.put("/chats/:id",async(req,res)=>{
  let {id}= req.params;
  let {msg :newMsg} = req.body;
  let UpdatedChat =await chat.findByIdAndUpdate(id,{msg: newMsg},
                              {runValidators:true, new:true});
    console.log(UpdatedChat);
    res.redirect("/chats");
})

//Delete Route
app.delete("/chats/:id",async (req,res)=>{
  let {id}= req.params;
  let DeletedChat = await chat.findByIdAndDelete(id);
  console.log(DeletedChat);
  res.redirect("/chats");
})

app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});


app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
});

//create route
app.post("/chats",(req,res)=>{
  let {from, to, msg}= req.body;
  let newChat = new chat({
    from:from,
    to:to,
    msg:msg,
    created_at: new Date()
  })
  newChat.save()
  .then(res=> console.log("chat was saved "))
  .catch(err => console.log(err));
  res.redirect("/chats");
})


app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
