let express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost',
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

app.listen(port, ip, (err) => {
  if (err) console.log(err)
  else console.log(`Server up! ${port}`)
})
