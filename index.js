const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start(  (ctx) => ctx.replyWithPhoto({ source: './img/Katya_invitation2.jpg'} , { caption: `Привет, Это Екатерина Гарницкая и я очень рада нашей встрече. Я подготовила для тебя подарок – Видеоурок «Самомассаж шеи и декольте скребком гуаша»"` })


//await ctx.replyWithPhoto({ source: './img/Katya_invitation2.jpg'}),
// await ctx.replyWithHTML('sdfdfsf')




// ctx.reply(`Привет ${ctx.message.from.first_name}`))



// bot.hears('Привет', (ctx) => ctx.reply(`Привет ${ctx.message.from.first_name}`))


// bot.hears('Фото', (ctx) => 

// ctx.replyWithPhoto({ source: './img/Katya_invitation2.jpg'}),


)



bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('Приветы', (ctx) => ctx.reply('Привет чувак!'))
 


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))