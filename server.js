const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const users = []

app.set('view-engine', 'ejs')
app.use(express.static('assets')); //css, js, img 연결
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.post('/', (req, res) => {

})
app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.post('/register', async(req,res) => {
    try{    //req.body.name명
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/')
    }catch{
        res.redirect('/register')
    }
    console.log(users)
})

app.listen(3000)