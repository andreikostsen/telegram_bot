const {Telegraf, Markup} = require('telegraf')
const {message} = require('telegraf/filters')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const gift = `
<a href="https://youtu.be/VJz4NZgc3Fo?si=Io1PylmOGYUDi1ox">Видео практика “Шея и декольте“</a>
`

bot.start(async (ctx) => {
    await ctx.replyWithPhoto({source: './img/Katya_invitation1.png'})

    await ctx.replyWithHTML(`Привет, Это <b>Екатерина Гарницкая</b> и я очень рада нашей встрече. ` +
        `Я подготовила для тебя подарок – Видеоурок <b>«Самомассаж шеи и декольте скребком гуаша»</b>❤️❤️`)

    await ctx.replyWithPhoto({source: './img/Katya_invitation2.jpg'})

    await ctx.replyWithHTML(`Я – Екатерина Гарницкая, создатель большого проекта Human Woman о ` +
        `женской красоте и здоровье и автор нескольких марафонов: “PRO Грудь”, “Ретрита Гуаша”\n\n` +
        `· сертифицированный специалист по неинвазивным методам омоложения (Гуаша, осетоэстетика, трансбуккалый, миофасциальный и лимфодренажный массажи, асахи, faceyoga, тэйпирование)\n` +
        `· практикующий остеопат\n` +
        `· специалист по послеродовому восстановлению и телесно-эмоциональному освобождению\n` +
        `· эмбодимент практик\n`
    )

    await ctx.replyWithHTML('<b>Нажми на кнопку чтобы получить подарок</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Получить подарок!', 'gift')],
        ]
    ))

})

bot.action(['yes', 'no'], ctx => {
    if (ctx.callbackQuery.data === 'yes') {
        ctx.editMessageText('Ваша задача успешно добавлена')
    } else {
        ctx.deleteMessage()
    }
})


bot.action(['feedback', 'access', 'prices', 'getCourse'], async ctx => {

//ПРОГРАММА КУРСА И ОТЗЫВЫ

    if (ctx.callbackQuery.data === 'feedback') {

        await ctx.replyWithPhoto({source: './img/feedback/feedback1.jpg'})
        await ctx.replyWithPhoto({source: './img/feedback/feedback2.jpg'})
        await ctx.replyWithPhoto({source: './img/feedback/feedback3.jpg'})
        await ctx.replyWithPhoto({source: './img/feedback/feedback4.jpg'})
        await ctx.replyWithPhoto({source: './img/feedback/feedback5.jpg'})
        await ctx.replyWithPhoto({source: './img/feedback/feedback6.jpg'})

        await ctx.replyWithHTML(`<b>ПРОГРАММА КУРСА:</b> \n` +
            `➝ Вводная лекция по анатомии лица\n` +
            `➝ 7 видео-практик со скребком Гуаша\n` +
            `➝ Общий комплекс на каждый день с объединением всех техник для эффективного результата\n` +
            `➝ Лимфодренажный блок\n` +
            `➝ Техника SMAS лифтинга при помощи Гуаша\n` +
            `➝ Энергетическое расслабление лица\n` +
            `➝ Бьюти-медитация\n` +
            `➝ Работа с дыханием и диафрагмой\n` +
            `➝ Остеопатическая практика: работа с овалом лица\n`)


        setTimeout(async () => {
            await ctx.replyWithHTML(`<b>Как тебе?</b> \n` +
                `Если ты еще не сделала практику <b>«Декольте-шея-ключицы»</b>, то можешь приступить к ней прямо сейчас🔥🔥🔥\n` +
                `Переходи по <a href='https://youtu.be/VJz4NZgc3Fo'>ссылке</a>`
            )
        }, 5000)
    }

    //ФОРМАТ И ДОСТУП

    if (ctx.callbackQuery.data === 'access') {

        await ctx.replyWithPhoto({source: './img/access.jpg'},
            {caption: "Курс в записи, будет доступен сразу после оплаты. Все материалы структурно размещены в закрытом Telegram-канале.\n\nДоступ к курсу - 6 месяцев"})

    }


      //ТАРИФЫ И СТОИМОСТЬ

    if (ctx.callbackQuery.data === 'prices') {

        await ctx.replyWithHTML(`<b>◆ ТАРИФ СТАНДАРТНЫЙ</b>\n` +
            `30€ (при оплате до 31.03.2024) <s>50€</s>\n` +
            `▫️доступ к закрытому Telegram-каналу со всеми видео-практиками и бонусами\n\n` +
            `<b>◆ ТАРИФ VIP</b>\n` +
            `80€ (при оплате до 31.03.2024) <s>120€</s>\n` +
            `включает дополнительно двухчасовую индивидуальную консультацию с диагностикой и практикой:\n` +
            `▫️упражнения,\n` +
            `▫️глубокотканный массаж,\n` +
            `▫️техники остеокоррекции,\n` +
            `▫️буккальный самомассаж.\n\n` +
            `Записывайся на Ретрит и проходи его в любое удобное для тебя время! 🔥❤️`,
        getSubMenu1()
    )

    }

    //ЗАПИСАТЬСЯ НА КУРС

    if (ctx.callbackQuery.data === 'getCourse') {

        await ctx.replyWithPhoto({source: './img/getcourse.jpg'})

        await ctx.replyWithHTML(
            `Для того, чтобы попасть на курс, напиши мне в личные сообщения Telegram <a href='https://t.me/MetaOsteobeauty'> @MetaOsteobeauty: </a> \n ` +
            `1.Выбранный Тариф (стандартный/VIP)\n` +
            `2. Валюту платежа (BYN/Euro/PLN)\n\n` +
            `Спасибо тебе за твой выбор!`,
            {
                disable_web_page_preview: true
            }
        )

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

          if (id_btn == 'gift') {

              // Set a timer for 5 seconds
              setTimeout(async () => {
                  await ctx.replyWithHTML(` <b> Как тебе практика ? </b>\n\n` +
                      `Хочешь научиться большему и владеть волшебным инструментом Гуаша, делать самомассаж на уровне профессионала ?\n\n` +
                      `Тогда нажимай кнопку ниже, познакомиться с курсом, который я для тебя подготовила`,
                      getMainMenu()
                      )

              }, 5000);


          }
    
        await ctx.answerCbQuery()
        if (src_img !== false) {

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
addActionBot('gift', false, gift, false)
addActionBot('feedback', './img/feedback/feedback1.jpg', '', true)
addActionBot('btn_3', false, 'gghet', false)


//keyboards
function getMainMenu() {
    return Markup.inlineKeyboard(
        [
            [Markup.button.callback('Программа курса и отзывы', 'feedback')],
            [Markup.button.callback('Формат и доступ', 'access')],
            [Markup.button.callback('Тарифы и стоимость', 'prices')],
        ]
    )
}

function getSubMenu1() {
    return Markup.inlineKeyboard(
        [
            [Markup.button.callback('Записаться на курс', 'getCourse')],
            [Markup.button.url('Задать вопрос', 'https://t.me/MetaOsteobeauty')],
        ]
    )
}






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