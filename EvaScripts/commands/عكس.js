module.exports.config = {
    name: "عكس",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DRIDI-RAYEN",
    description: "لعبة عكس الكلمه ",
    usages: ["لعبة"],
    commandCategory: "〘 الالعاب 〙",
    cooldowns: 0
};

const questions = [



   { question: "ما هو عكس النور؟", answer: "الظلام" },
  { question: "ما هو عكس الحزن؟", answer: "السعادة" },
  { question: "ما هو عكس الفقر؟", answer: "الثروة" },
  { question: "ما هو عكس البرد؟", answer: "الحرارة" },
  { question: "ما هو عكس الجفاف؟", answer: "الرطوبة" },
  { question: "ما هو عكس الصمت؟", answer: "الضوضاء" },
  { question: "ما هو عكس الحياة؟", answer: "الموت" },
  { question: "ما هو عكس البداية؟", answer: "النهاية" },
  { question: "ما هو عكس الأعلى؟", answer: "الأدنى" },
  { question: "ما هو عكس الداخل؟", answer: "الخارج" },
  { question: "ما هو عكس الأمام؟", answer: "الخلف" },
  { question: "ما هو عكس اليمين؟", answer: "اليسار" },
  { question: "ما هو عكس القريب؟", answer: "البعيد" },
  { question: "ما هو عكس السهل؟", answer: "الصعب" },
  { question: "ما هو عكس اللين؟", answer: "القاسي" },
  { question: "ما هو عكس الفرح؟", answer: "الحزن" },
  { question: "ما هو عكس الحب؟", answer: "الكراهية" },
  { question: "ما هو عكس الصبر؟", answer: "العصبية" },
  { question: "ما هو عكس الحلم؟", answer: "الحقيقة" },
  { question: "ما هو عكس الحاضر؟", answer: "الماضي" },
  { question: "ما هو عكس المستقبل؟", answer: "الحاضر" },
  { question: "ما هو عكس الحقيقي؟", answer: "المزيف" },
  { question: "ما هو عكس الصحيح؟", answer: "الخطأ" },
  { question: "ما هو عكس الجيد؟", answer: "السيئ" },
  { question: "ما هو عكس الجميل؟", answer: "القبيح" },
  { question: "ما هو عكس الغني؟", answer: "الفقير" },
  { question: "ما هو عكس القوى؟", answer: "الضعيف" },
  { question: "ما هو عكس البطل؟", answer: "الخائن" },
  { question: "ما هو عكس النهار؟", answer: "الليل" },
  { question: "ما هو عكس الذكر؟", answer: "الأنثى" },
  { question: "ما هو عكس الذكور؟", answer: "الإناث" },
  { question: "ما هو عكس المفرد؟", answer: "الجمع" },
  { question: "ما هو عكس المذكر؟", answer: "المؤنث" },
  { question: "ما هو عكس النشط؟", answer: "السلبي" },
  { question: "ما هو عكس الفتح؟", answer: "الغلَق" },
  { question: "ما هو عكس الارتفاع؟", answer: "الانخفاض" },
  { question: "ما هو عكس الزيادة؟", answer: "النقصان" },
  { question: "ما هو عكس القرب؟", answer: "البُعد" },
  { question: "ما هو عكس الصغر؟", answer: "الكبر" },
  { question: "ما هو عكس الصغرى؟", answer: "الكبرى" },
  { question: "ما هو عكس القلة؟", answer: "الكثرة" },
  { question: "ما هو عكس السهولة؟", answer: "الصعوبة" },
  { question: "ما هو عكس اللطف؟", answer: "القسوة" },
  { question: "ما هو عكس الرضا؟", answer: "السخط" },
  { question: "ما هو عكس الإيمان؟", answer: "الكفر" },
  { question: "ما هو عكس الأمل؟", answer: "اليأس" },
  { question: "ما هو عكس الحياة؟", answer: "الموت" },
  { question: "ما هو عكس الوعي؟", answer: "الغيبوبة" },
  { question: "ما هو عكس اليقظة؟", answer: "النوم" },
  { question: "ما هو عكس الصدق؟", answer: "الكذب" },
  { question: "ما هو عكس العدل؟", answer: "الظلم" },
  { question: "ما هو عكس الخير؟", answer: "الشر" },
  { question: "ما هو عكس الجمال؟", answer: "القبح" },
  { question: "ما هو عكس الكمال؟", answer: "النقص" },
  { question: "ما هو عكس السعادة؟", answer: "الحزن" },




];

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 20);
        api.sendMessage(`✅|  قــام ${userName} بالإجــــابة أولا وحصـــــل على 20 نجمة🌟`, event.threadID);
        api.unsendMessage(handleReply.messageID); 
    } else {
        api.sendMessage(`❎| إجـــابتك خاطئة حـــاول مــرة أخـرى`, event.threadID);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;
    const question = randomQuestion.question;

    const message = `${question}`;

    api.sendMessage({ body: message }, event.threadID, (error, info) => {
        if (!error) {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                correctAnswer: correctAnswer
            });
        }
    });
};
