const {Telegraf, Markup} = require('telegraf')
require('dotenv').config()
const { CronJob } = require ('cron')

const bot = new Telegraf(process.env.BOT_TOKEN)

const gift = `
<a href="https://youtu.be/VJz4NZgc3Fo?si=Io1PylmOGYUDi1ox">Видео практика “Шея и декольте“</a>
`


bot.start(async (ctx) => {



    await ctx.replyWithPhoto({source: './img/Katya_invitation1.png'})

    await ctx.replyWithHTML(`<b>Привеет!!!</b>\n\n` +
        `Это бот-помощник <i>Екатерины Гарницкой и большого проекта о красоте и здоровье HumanWoman</i>.\n\n` +
        `И здесь тебя ждёт подарок 🎁- урок по <b>"Самомассажу шеи и декольте скребком Гуаша"</b> ! Но прежде чем его забрать, давай познакомимся:❤️`,
    )


    setTimeout(async () => {

            await ctx.replyWithPhoto({source: './img/Katya_invitation2.jpg'})

            await ctx.replyWithHTML(`Я – <b>Екатерина Гарницкая</b>, создатель большого проекта Human Woman о ` +
                `женской красоте и здоровье и автор нескольких марафонов:  “Ретрит Гуаша”, “Дыхание жизни“, “PRO Грудь”. \n\n` +
                `✔️ сертифицированный специалист по неинвазивным методам омоложения (Гуаша, осетоэстетика, трансбуккальный, миофасциальный и лимфодренажный массажи, асахи, faceyoga, тэйпирование)\n` +
                `✔️ практикующий остеопат\n` +
                `✔️ специалист по послеродовому восстановлению и телесно-эмоциональному освобождению\n` +
                `✔️ эмбодимент практик\n`
            )

            await ctx.replyWithHTML('Надеюсь, что мои знания и опыт, мои проекты, будут тебе в радость и помощь, а пока скорее забирай подарок ⬇️', Markup.inlineKeyboard(
                [
                    [Markup.button.callback('Получить подарок!', 'gift')],
                ]
            ))
        },
        8000
    )

})


bot.action(['getMainMenu'], (ctx) => {

    console.log("Main menu requested")

    ctx.replyWithHTML(`<b>Меню:</b> \n`,
        mainMenu()
    )

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

        await ctx.replyWithHTML(`<b>ПРОГРАММА КУРСА <u>«Ретрит с Гуаша»:</u></b> \n` +
            `➝ Вводная лекция по анатомии лица\n` +
            `➝ 7 видео-практик со скребком Гуаша\n` +
            `➝ Общий комплекс на каждый день с объединением всех техник для эффективного результата\n` +
            `➝ Лимфодренажный блок\n` +
            `➝ Техника SMAS лифтинга при помощи Гуаша\n` +
            `➝ Энергетическое расслабление лица\n` +
            `➝ Бьюти-медитация\n` +
            `➝ Работа с дыханием и диафрагмой\n` +
            `➝ Остеопатическая практика: работа с овалом лица\n`,

        )


        setTimeout(async () => {
            await ctx.replyWithHTML(`<b>Как тебе?</b> \n` +
                `Если ты еще не сделала практику <b>«Декольте-шея-ключицы»</b>, то можешь приступить к ней прямо сейчас🔥🔥🔥\n` +
                `Переходи по <a href='https://youtu.be/VJz4NZgc3Fo'>ссылке</a>`,
                mainMenuLimited(),
                {disable_web_page_preview: true},
            )
        }, 5000)
    }

    //ФОРМАТ И ДОСТУП

    if (ctx.callbackQuery.data === 'access') {

        await ctx.replyWithPhoto({source: './img/access.jpg'})
            await ctx.replyWithHTML(
                `<u>Курс в записи</u>, будет доступен сразу после оплаты. Все материалы структурно размещены в <b>закрытом Telegram-канале.</b>\n\n` +
                `Доступ к курсу - <u>6 месяцев</u>`
            )
    }


    //ТАРИФЫ И СТОИМОСТЬ

    if (ctx.callbackQuery.data === 'prices') {

        await ctx.replyWithHTML(
            `<b>◆ ТАРИФ СТАНДАРТНЫЙ - 50€</b>\n` +
            `▫️доступ к закрытому Telegram-каналу со всеми видео-практиками и бонусами\n\n` +
            `<b>◆ ТАРИФ VIP - 80€</b>\n` +
            `включает дополнительно двухчасовую индивидуальную консультацию с диагностикой и практикой:\n` +
            `▫️упражнения,\n` +
            `▫️глубокотканный массаж,\n` +
            `▫️техники остеокоррекции,\n` +
            `▫️буккальный самомассаж.\n\n` +
            `Записывайся на Ретрит и проходи его в любое удобное для тебя время! 🔥❤️`,
            getSubMenu1(),

        )
        await ctx.replyWithHTML("Вернуться в главное меню:",
            getMainMenu()
        )



    }

    //ЗАПИСАТЬСЯ НА КУРС

    if (ctx.callbackQuery.data === 'getCourse') {

        await ctx.replyWithPhoto({source: './img/getcourse.jpg'})

        await ctx.replyWithHTML(
            `Для того, чтобы попасть на курс, напиши мне в личные сообщения Telegram <a href='https://t.me/MetaOsteobeauty'> @MetaOsteobeauty: </a> \n ` +
            `1.Выбранный Тариф (стандартный/VIP)\n` +
            `2. Валюту платежа (BYN/Euro/PLN)\n\n` +
            `Спасибо тебе за твой выбор!🙏`,
            {
                disable_web_page_preview: true
            },
        )

        await ctx.replyWithHTML("Вернуться в главное меню:",
            getMainMenu()
        )

    }



//cron reminders start

    const reminder30march = new CronJob(
        '03 18 30 3 *', // cronTime
        async function () {
            await ctx.replyWithHTML(
                `Привет, это Катя!\n\n` +
                `И мое бережное напоминание тебе, что до завтра можно записаться на курс по сниженной стоимости 💛🙏\n\n` +
                `Для приобретения напиши мне в личные сообщения, перейдя по ссылке<a href='https://t.me/MetaOsteobeauty'> @MetaOsteobeauty: </a> \n\n ` +
                `Для того, чтобы посмотреть подробности о курсе выбери пункт из меню:`,
                {
                    disable_web_page_preview: true
                },
            )
            await ctx.replyWithHTML("Меню:",
                mainMenu()
            )
        }, // onTick
        null, // onComplete
        true, // start
    );


    const reminder31march = new CronJob(
        '59 17 31 3 *', // cronTime
        async function () {
            await ctx.replyWithHTML(
                `Дорогая, я с заботой напоминаю тебе, что сегодня (31.03) заканчивается возможность приобрести доступ к онлайн-курсу <b>«Ретрит с Гуаша»</b> <u>по сниженной стоимости</u>.\n\n` +
                `Я буду счастлива видеть тебя среди участниц.\n` +
                `Возможно, именно сейчас настал тот момент, когда стоит проявить любовь к себе? ❤️ \n\n` +
                `Для того, чтобы посмотреть подробности о курсе выбери пункт из меню:`
            )
            await ctx.replyWithHTML("Меню:",
                mainMenu()
            )
        }, // onTick
        null, // onComplete
        true, // start
    );

//cron reminders end


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
                    await ctx.replyWithHTML(` <b> Понравилась практика ? </b>\n\n` +
                        `Ты хотела бы научиться большему? Овладеть "волшебным" инструментом Гуаша, чтобы делать самомассаж на уровне профи?\n\n` +
                        `Тогда познакомься с курсом ниже, я - его автор и ведущая, собрала совершенно уникальные, простые, глубокие и легкие практики, чтобы осуществить твою мечту заботы о себе\n` +
                        `и уже через 14 дней в зеркале утром ты увидишь новую себя:`,
                        mainMenu()
                    )

                }, 30000);


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
            [Markup.button.callback('Главное меню', 'getMainMenu')],
        ]
    )

}

function mainMenu() {
    return Markup.inlineKeyboard(
        [
            [Markup.button.callback('Программа курса и отзывы', 'feedback')],
            [Markup.button.callback('Формат и доступ', 'access')],
            [Markup.button.callback('Тарифы и стоимость', 'prices')],
        ]
    )
}

function mainMenuLimited() {
    return Markup.inlineKeyboard(
        [
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




bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))