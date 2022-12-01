const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.listen(3020, () => {
    console.log('listening on port 3020 yooo');
});

app.use(express.static(`${__dirname}/../build`));

//Endpoints//

app.get('/api/firstsong', (req, res) => {
    res.sendFile(__dirname + '/threeKings.mp3');
});
app.get('/api/secondsong', (req, res) => {
    res.sendFile(__dirname + '/moldau.mp3');
});
app.get('/api/thirdsong', (req, res) => {
    res.sendFile(__dirname + '/carmen.mp3');
});

app.post('/api/sendEmail', (req, res) => {
    const nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    var mailOptions = {
        from: req.body.email,
        to: 'ted.hinckley@gmail.com',
        subject: `Message from ${req.body.name} at ${req.body.email}`,
        text: req.body.text,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
