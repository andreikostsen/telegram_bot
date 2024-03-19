const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const present = `
<a href="https://youtu.be/VJz4NZgc3Fo?si=Io1PylmOGYUDi1ox">Видео практика “Шея и декольте“</a>
`
let trigger = false


console.log(trigger)

bot.start(  async (ctx) => {
    await ctx.replyWithPhoto({ source: './img/Katya_invitation1.png'})

    await ctx.replyWithHTML(`Привет, Это <b>Екатерина Гарницкая</b> и я очень рада нашей встрече. ` +
        `Я подготовила для тебя подарок – Видеоурок <b>«Самомассаж шеи и декольте скребком гуаша»</b>❤️❤️`)

    await ctx.replyWithPhoto({ source: './img/Katya_invitation2.jpg'})

    await ctx.replyWithHTML(`Я – Екатерина Гарницкая, создатель большого проекта Human Woman о ` +
     `женской красоте и здоровье и автор нескольких марафонов: “PRO Грудь”, “Ретрита Гуаша”\n\n` +
     `· сертифицированный специалист по неинвазивным методам омоложения (Гуаша, осетоэстетика, трансбуккалый, миофасциальный и лимфодренажный массажи, асахи, faceyoga, тэйпирование)\n` +
     `· практикующий остеопат\n` +
     `· специалист по послеродовому восстановлению и телесно-эмоциональному освобождению\n` + 
     `· эмбодимент практик\n`
    )

    await ctx.replyWithHTML('<b>Нажми на кнопку чтобы получить подарок</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Получить подарок!', 'present')],
        ]
      ))


 // Set a timer for 5 seconds
if (trigger) {

    console.log(trigger)

 setTimeout(async () => {
    await ctx.replyWithHTML(`<b>Как тебе практика?</b>\n\n` +
        `Хочешь научиться большему и владеть волшебным инструментом Гуаша, делать самомассаж на уровне профессионала?\n\n` +
        `Тогда нажимай кнопку ниже, познакомиться с курсом, который я для тебя подготовила`)
        
      await ctx.replyWithHTML('<b>Меню:</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Тарифы и стоимость', 'btn_1')],
          [Markup.button.callback('Программа курса и отзывы', 'btn_2')],
          [Markup.button.callback('Записаться на курс', 'btn_3')],
        ]
      ))

}, 5000);


}


    
       
    


})


/**
 * Функция для отправки сообщения ботом
 * @param {String} id_btn Идентификатор кнопки для обработки
 * @param {String} src_img Путь к изображению, или false чтобы отправить только текст
 * @param {String} text Текстовое сообщение для отправки
 * @param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
 */
function addActionBot(id_btn, src_img, text, preview) {

    bot.action(id_btn, async (ctx) => {
    
      try {  
          trigger = true;
    
        await ctx.answerCbQuery()
        if (src_img !== false) {

            trigger = true;
          await ctx.replyWithPhoto({
            source: src_img
          })
        }
        await ctx.replyWithHTML(text, {
          disable_web_page_preview: preview
        })
      } catch (e) {
        console.error(e)
      }
    })
  }
  // Обработчик кнопок с помощью функции
   addActionBot('present', false, present, false)
   addActionBot('btn_2', false, "tyjtyj", true)
  addActionBot('btn_3', false, 'gghet', false)







// ctx.reply(`Привет ${ctx.message.from.first_name}`))



// bot.hears('Привет', (ctx) => ctx.reply(`Привет ${ctx.message.from.first_name}`))


// bot.hears('Фото', (ctx) => 

// ctx.replyWithPhoto({ source: './img/Katya_invitation2.jpg'}),





bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('Приветы', (ctx) => ctx.reply('Привет чувак!'))
 


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))