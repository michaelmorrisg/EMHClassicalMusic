const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config()

const app = express()

app.use(bodyParser.json())

app.listen(3020, ()=>{
    console.log('listening on port 3020')
})


//Endpoints//
app.post('/api/sendEmail',(req,res)=>{

    const nodemailer = require('nodemailer')
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        
        var mailOptions = {
            from: req.body.email,
            to: 'michaelmorrisg@gmail.com',
            subject: `Message from ${req.body.name}`,
            text: req.body.text
        }
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
})

