const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const config = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const getChatGptMessages = async(customerMessage) => {
  try {
    const completion = {
      model: 'gpt-3.5-turbo',
      messages: [
          { role: 'system', content: 'You are a helpful assistant at the parfume shop. Also you have to know, that prices for all perfumes are $100 for one bottle.' },
          { role: 'user', content: customerMessage}
      ],
  };
  
    console.log('Am inside message generating');
    const { data: result } = await openai.createChatCompletion(completion);
    console.log('Am after generated message');
    return result;
  } catch(e) {
    console.log('error happens\n', e);
  }

}

// (async () => {
//     // const { data: response } = await openai.listModels();
//     // console.log(response.data.map((el) => el.id));

//     const completion = {
//         model: 'gpt-4',
//         messages: [
//             { role: 'system', content: 'You are a helpful assistant at the parfume shop.' },
//             { role: 'user', content: 'I wanna buy an electric guitar'}
//         ],
//     };

//     const {data: result} = await openai.createChatCompletion(completion);
//     console.log(result.choices);
// })();


module.exports = {getChatGptMessages}