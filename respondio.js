const axios = require('axios');
// require('dotenv').config();

const token = process.env.RESPONDIO_TOKEN;

const sendMessage = async(channelId, userId, msg) => {
  try{
    console.log('Am inside Respondio');
    const {data: res} = await axios.post(`https://api.respond.io/v2/contact/id:${userId}/message`,{
      channelId: channelId,
      message: {
        type: 'text',
        text: msg,
        // messageTag: 'CONFIRMED_EVENT_UPDATE',
      }
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    });
  } catch(e){
    console.log('Error in RespondIO Module:');
  }
  
}

(async () => {
    // const identifier = 'kuzinvt@gmail.com';
    // const {data: res} = await axios.post(`https://api.respond.io/v2/contact/id:98302311/message`,{
    //   channelId: 148634,
    //   message: {
    //     type: 'text',
    //     text: 'Hello amigo! How could I help you?',
    //     // messageTag: 'CONFIRMED_EVENT_UPDATE',
    //   }
    // },
    // {
    //   headers: {
    //     Authorization: 'Bearer ' + token,
    //     'Content-Type': 'application/json'
    //   }
    // });
    // console.log(res);

    // const { data: res } = await axios.post(`https://api.respond.io/v2/contact/email:${identifier}`,
    //     {
    //         firstName: 'Vlad ',
    //         lastName: 'Test',
    //         phone: '+380961022369',
    //         email: 'test@example.com',
    //         language: null,
    //         profilePic: '',
    //         countryCode: null,
    //         custom_fields: null
    //     },
    //     {
    //         headers: {
    //             Authorization: 'Bearer ' + token,
    //             'Content-Type': 'application/json',
    //         },
    //     }
    // );


    // const sendTextMessage = async (contact: Contact, messageText: string, channel: Channel) => {
    //   const identifier = `id:${contact.id}`
    //   const url = `https://api.respond.io/v2/contact/${identifier}/message`;
  
    //   const response = await fetch(url, {
    //       method: 'POST',
    //       headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${RESPONDIO_ACCESS_TOKEN}`,
    //       },
    //       body: JSON.stringify({
    //           channelId: channel.id,
    //           message: {
    //               type: 'text',
    //               text: messageText,
    //               messageTag: 'CONFIRMED_EVENT_UPDATE'
    //           },
    //       }),
    //   });

})();


module.exports = {sendMessage}