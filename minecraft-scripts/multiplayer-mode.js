const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'mc.example.com', // Replace with the server address
  username: 'BotName' // Replace with the bot's username
});

bot.once('spawn', () => {
  bot.chat('Hello, world!'); // Send a chat message
});
