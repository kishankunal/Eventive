require('dotenv').config();
var   express        = require("express"),
      app            = express(),
      bodyParser     = require("body-parser"),
      mongoose       = require("mongoose"),
      helmet         = require("helmet"),
      flash          = require("connect-flash"),
      session        = require("express-session"),
      moment         = require("moment"),
      LocalStrategy  = require("passport-local"),
      passport       = require("passport");

//======================
//   Database
//======================
mongoose.connect("mongodb://localhost/eventive", { useNewUrlParser: true }, function(err,res){
    if(err){
        console.log("Database Connection Failed");
    }
    else{
        console.log("Successfully connected to Databse");
    }
});


// setting ejs as default extension
app.set("view engine", "ejs");
app.use(flash());

//=================
//stylesheet
//================

app.use(express.static(__dirname+"/public"));

//==================
//    ROUTES
//==================

app.get('/', (req, res) => res.render('landing'));

app.get('/home', (req, res) => res.render('home',{page:"home" }));

//===================================
//assigning port to server
//===================================

app.listen(process.env.PORT,process.env.HOST, function(err, res){
    if(err){
        console.log("server is not connected")
    }
    else{
        console.log("server connected");
    }
});