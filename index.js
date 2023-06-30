const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const OPENAI_API_KEY = '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';
// const OPENAI_API_KEY = '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';
// const OPENAI_API_KEY = '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';


const config = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const getChatGptMessages = async(customerMessage) => {
  const completion = {
    model: 'gpt-4',
    messages: [
        { role: 'system', content: 'You are a helpful assistant at the parfume shop. Also you have to know, that prices for all perfumes are $100 for one bottle.' },
        { role: 'user', content: customerMessage}
    ],
};

  const {data: result} = await openai.createChatCompletion(completion);
  return result;
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