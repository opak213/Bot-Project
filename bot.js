const TelegramBot = require('node-telegram-bot-api');
const token = '7043736642:AAFVwF3222ccRDvtvUSfUAXDoOvUjm7UGpU';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

  var Admin = "Admin";
if (msg.text.toString().toLowerCase().indexOf(Admin) === 0) {
bot.sendMessage(msg.chat.id,"Sung aja japri");
}


});