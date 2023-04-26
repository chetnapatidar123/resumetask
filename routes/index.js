var express = require('express');
var router = express.Router();
const User = require("../models/userSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET create resume page. */
router.get("/createresume", function(req, res, next){
  res.render("createresume")
});

/* post create resume page. */
router.post("/createresume", async function(req, res, next){
  // res.json(req.body)
  await User.create({
    name:req.body.name,
    email:req.body.email,
    contact:req.body.contact,
    profile:req.body.profile,
    skill:req.body.skill,
    education:req.body.education,
    exprience:req.body.exprience,
    hobbies:req.body.hobbies,
    language:req.body.language,
    dob:req.body.dob,
});
res.redirect("/readallresume")
});

/* GET read all resume page. */
router.get("/readallresume", async function(req, res, next){
  const data = await User.find({})
  res.render("readallresume", {data})
});

/* GET delete page. */
router.get("/delete/:id", async function(req, res, next){
  const data = await User.findByIdAndDelete(req.params.id, req.body)
  res.redirect("/readallresume");
});

/* GET detail page. */
router.get("/detail/:id", async function(req, res, next){
  const data = await User.findById(req.params.id)
  res.render("detail", {data});
});

/* GET update page. */
router.get("/update/:id", async function(req, res, next){
 await User.findById(req.params.id)
  res.render("update", {id:req.params.id});
});

/* post update page. */
router.post("/update/:id", async function(req, res, next){
  const data = await User.findByIdAndUpdate(req.params.id,{name:req.body.name,
    email:req.body.email,
    contact:req.body.contact,
    profile:req.body.profile,
    skill:req.body.skill,
    education:req.body.education,
    exprience:req.body.exprience,
    hobbies:req.body.hobbies,
    language:req.body.language,
    dob:req.body.dob})
    await data.save()
   res.redirect(`/detail/${data._id}`);
 });
 


module.exports = router;
