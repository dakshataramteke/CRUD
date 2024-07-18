const mongoose = require("mongoose");
const chat = require("./models/chats.js");

main()
.then(()=>{
    console.log("Mongo Server is working");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let Allchats = [{
    from:"Sneha",
    to:"priya",
    msg:"I am learning Node Js",
    created_at: new Date(),
},
    {
        from:"Dakshata",
    to:"Naman",
    msg:"Working on Server",
    created_at: new Date(),
    },
    {
        from:"Aman",
    to:"Dakshata",
    msg:"Learn Hardware",
    created_at: new Date(),
    }]
chat.insertMany(Allchats);
