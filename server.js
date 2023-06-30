const express = require('express');
const bodyParser = require('body-parser');
const {sendMessage} = require('./respondio');
const {getChatGptMessages} = require('./index')
const path = require('path');

const SIGNING_KEY = '3yN5Dy/AtipUshBjHTBigCHkwDJgm8pKRqcpWHfaZSw=';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
  res.sendFile(path.resolve('./index.html'));
})

app.post('/', async (req, res) => {
  // console.log(new Date().getHours, ':', new Date().getMinutes, ':', new Date().getSeconds(), req.body);
  const {id: contactId} = req.body.contact;
  const {message: {text: msg}, channelId} = req.body.message;
  console.log(contactId);
  console.log(msg);
  // const signature = req.get('X-Webhook-Signature');
  // console.log(signature);
  res.json({
    message: 'ok'
  });

  console.log('Before message');
  const chatGPTMes = await getChatGptMessages(msg);
  console.log('!!!!chatGPTMes:', chatGPTMes);
  // console.log('MESSAGE:', chatGPTMes.choices[0].message.content);

  await sendMessage(channelId, contactId, chatGPTMes.choices[0].message.content);
});

app.get('/hey', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({message: 'Am here'})
})

app.listen(80, () => {console.log('Started on port 80')}); // Local: 3256 External: 1236