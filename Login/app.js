const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(session({secret:'Key',cookie:{maxAge:1000 * 60 * 60 * 24}}))
app.use(cookieParser())

app.use(express.static('public'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

app.get('/',(req,res) => {
    if(req.session.loggedIn==true)
    {
        res.redirect('/home')
    }
    else{
        res.render('index')
    }
   
})
let username2
app.get('/home',(req,res) => {
   
    res.render('home',{username2})
    
})
app.post('/',(req,res) => {
    const person = require('./server')
    console.log(req.body);
    
    const {username,password} = req.body
    const {username1,password1} = person
    username2 = username
    
    if (password == password1 && username == username1) {
        req.session.loggedIn=true
        res.redirect('/home')
    }else{
        req.session.loggedIn=false
        res.redirect('/')
    }
})


app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/')
})


const port = 2000
app.listen(port,() => console.log('Server started at port '+port+'...'))