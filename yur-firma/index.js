const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
        <h2>Заявка</h2>
        <ul>
          <li>Имя клиента: ${req.body.name}</li>
          <li>Телефон: ${req.body.phone}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Сообщение</h3>
        <p>${req.body.message}</p>
      `

      let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
            user: 'ab2p6337gjk33ed7@ethereal.email',
            pass: 'uknT2wvGBnFZQ6rjGx'
          }

        })

          let mailOptions = {
            from: 'test@testaccount.com',
            to: 'ab2p6337gjk33ed7@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
          }

          transporter.sendMail(mailOptions, (err, info) => {
              if (err) {
                  return console.log(err)
              }
              console.log('Message sent: %s', info.message)
              console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
          })
      })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
