const express = require('express')
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post')

app.get("/create", async (req,res)=>{
 let user = await userModel.create({
    name : "Awais",
    age : 18,
  })
  res.send(user)
})
app.get("/create/post",async (req,res)=>{
  let post = await postModel.create({
    postdata : "Hello Kaisy ho",
    user : "6652c405a454343416bc0751"
  })
  let user = await userModel.findOne({_id : "6652c405a454343416bc0751"}) ;
  user.posts.push(post._id);
  await user.save();
  res.send({post,user});
})

app.listen(3000)