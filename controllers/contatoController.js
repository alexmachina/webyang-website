let fs = require('fs'),
  nodemailer = require('nodemailer')

class ContatoController {
  constructor() {
    this.config = JSON.parse(fs.readFileSync('emailConfig.json'))

    this.smtpConfig = {
      host: this.config.smtp,
      port: 587,
      secure: false,
      auth: {
        user:this.config.user,
        pass:this.config.password
      }
    }

    this.sendMail = (req, res) => {
      let mailOptions = {
        'from' : this.config.user,
        'to' : 'alex.xmde@gmail.com',
        'subject' : req.body.assunto,
        'html' : `<b>${req.body.assunto}</b>
                <br>
                <p>${req.body.mensagem}</p>`
      }

      let transporter = nodemailer.createTransport(this.smtpConfig)
      transporter.sendMail(mailOptions, (err, info) => {
        if (err){ 

          console.log(err)
          res.json(err)
        }
        else res.status(200).send("OK")
      })

    }

  }
}

module.exports = new ContatoController()
