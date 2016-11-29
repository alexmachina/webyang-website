let express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8080,
    contatoController = require('./controllers/contatoController')

app.use(express.static('resources'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('pages/index')
})
app.get('/portfolio', (req, res) => {
  res.render('pages/portfolio')
})

app.get('/contato', (req, res) => {
  res.render('pages/contato')
})

app.post('/contato', contatoController.sendMail)

  


app.listen(8080, (err) => {
  if (err) console.log(err)
  else console.log(`Server up! ${port}`)
})
