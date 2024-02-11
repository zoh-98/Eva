module.exports.config = {
    name: "حزوره",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DRIDI-RAYEN",
    description: "لعبة احزر ",
    usages: "ا",
    commandCategory: "〘 الالعاب 〙",
    cooldowns: 0
};

const questions = [

{ question: "⦿متى نزل جبريل للارض اول مرة؟", answer: "ليلة القدر" },
  { question: "⦿اين يقع اول جامع اسلامي تم بناءه؟", answer: "العراق" },
  { question: "⦿من هو الصحابي اللذي سال الملكين من ربكما بعد موته؟", answer: "عمر بن الخطاب" },
  { question: "⦿ماهي اول قبلة للمسلمين قبل مكة؟", answer: "بيت المقدس" },
  { question: "⦿من هو النبي اللذي قام اخوته برميه في البئر؟", answer: "النبي يوسف" },
  { question: "ما هو الشيء الذي يرافقك في كل مكان تذهب إليه ولا يمكن أن تتخلص منه؟",answer: "الظل" },
  { question: "⦿كم عدد الدول اللتي يضمها حلف النيتو؟", answer: "30" },
  { question: "⦿من هي اكثر دولة عربية تحتوي على حضارات؟", answer: "اليمن" },
  { question: "⦿من هو الرئيس اللذي أطلق 39 صاروخا على اسرائيل اثناء حكمه؟", answer: "صدام حسين" },
  { question: "⦿كم عدد الدول الاسلامية؟", answer: "57" },
  { question: "ماهو اغلى معدن في العالم⦿؟", answer: "الروديوم" },
  { question: "⦿ماهو الشيء الذي يمكن أن تمسك به ولكن لا يمكنك أن تراه؟", answer: "الزمن" },
  { question: "ما هو الشيء الذي يأتي مرة في الدقيقة ومرتين في اللحظة وليس مرة واحدة في الزمن؟", answer: "الحرف 'م'" },
  { question: "ما هو الشيء الذي يكون مضاءً في الليل ومطفأً في النهار؟", answer: "القمر" },
  { question: "ما هو الشيء الذي يمشي على أربعة قدمين في الصباح وعلى قدمين في المساء؟", answer: "الإنسان" },
  { question: "ما هو الشيء الذي يكون متسخًا ولكنه لا يمكن تنظيفه؟", answer: "البصيرة" },
  { question: "ما هو الشيء الذي يمكن أن يكون كبيرًا كجبل وصغيرًا كذرة؟", answer: "العقل" },
  { question: "ما هو الشيء الذي ينمو دائمًا ولا يمكن أن يموت؟", answer: "الشعر" },
  { question: "ما هو الشيء الذي يمكن أن يكون أبيض أو أسود وأحيانًا أحمر؟", answer: "الفحم" },
  { question: "ما هو الشيء الذي يمكن أن يكون مكسوًا بالجلد ولكنه ليس حيوانًا؟", answer: "الكتاب" },
  { question: "ما هو الشيء الذي يمكن أن تأخذ منه دون أن تعطي؟", answer: "الصورة" },
  { question: "ما هو الشيء الذي يمكن أن تراه بالعيون ولكن لا يمكن أن تلمسه باليدين؟", answer: "الحلم" },
  { question: "ما هو الشيء الذي يمكن أن ينقلب رأسًا على عقب دون أن يتغير؟", answer: "العدسة" },
  { question: "ما هو الشيء الذي يمكن أن يكون جافًا أو مبللًا ولكنه ليس مائيًا؟", answer: "المنشفة" },
  { question: "ما هو الشيء الذي يمكن أن ينكسر بسهولة إذا سقط ولكنه لا يمكن أن ينكسر بالقوة؟", answer: "الوعاء" },
  { question: "ما هو الشيء الذي يمكن أن يكون ملكًا لك ولكن الآخرون يستخدمونه أكثر منك؟", answer: "الاسم" },
  { question: "ما هو الشيء الذي يمكن أن تنفق عليه ولا يمكن أن تشتريه؟", answer: "الوقت" },
  { question: "ما هو الشيء الذي يمكن أن يكون في الجيب ولكنه لا يمكن أن يرى؟", answer: "الجزء الخاص" },
  { question: "ما هو الشيء الذي يمكن أن تأخذه ولكنه لا يمكن أن يعاد؟", answer: "الكلمة" },
  { question: "ما هو الشيء الذي يمكن أن يكون مليئًا بالحروف والكلمات ولكنه لا يمكن أن يحمل؟", answer: "المكتبة" },
  { question: "ما هو الشيء الذي يمكن أن يكون ناعمًا أو خشنًا ولكنه ليس حيوانًا؟", answer: "الصوت" },
  { question: "ما هو الشيء الذي يمكن أن يكون في الأماكن المظلمة والمشرقة في نفس الوقت؟", answer: "الظلام" },
  { question: "ما هو الشيء الذي يمكن أن تأخذه بسرعة ولكنه يحتاج وقتًا طويلًا لتخليصك منه؟", answer: "الديون" },
  { question: "ما هو الشيء الذي يمكن أن تجده في السماء ولكنه ليس نجمة؟", answer: "القمر" },
  { question: "ما هو الشيء الذي يمكن أن يكون في الماء والنار في نفس الوقت؟", answer: "الرماد" },
  { question: "ما هو الشيء الذي يمكن أن يكون عالقًا بين الأسنان ولكنه ليس طعامًا؟", answer: "اللسان" },
  { question: "ما هو الشيء الذي يمكن أن يكون قويًا كالأسد وضعيفًا كالفأر في نفس الوقت؟", answer: "الماء" },
  { question: "ما هو الشيء الذي يمكن أن تحمله بيدك ولكنه لا يمكن أن يمسك بيدك؟", answer: "الثقب" },
  { question: "ما هو الشيء الذي يمكن أن يجعل الناس يبكون دون أن يسبب لهم ألمًا؟", answer: "البكاء" },
  { question: "ما هو الشيء الذي يمكن أن يكون سريعًا أو بطيئًا ولكنه لا يمكن أن يتوقف؟", answer: "الزمن" },
  { question: "ما هو الشيء الذي يمكن أن تأخذه بسهولة ولكنه يمكن أن يكون ثقيلًا جدًا؟", answer: "النصائح" },
  { question: "ما هو الشيء الذي يمكن أن يظهر بلا صوت ويختفي بلا صوت؟", answer: "الفكرة" },
  { question: "ما هو الشيء الذي يمكن أن يكون أمامك وفي نفس الوقت خلفك؟", answer: "المستقبل" },
  { question: "ما هو الشيء الذي يمكن أن يجعل الناس يتكلمون دون أن يتحدث؟", answer: "الإشاعة" },
  { question: "ما هو الشيء الذي يمكن أن يكون باردًا كالجليد وحارًا كالنار في نفس الوقت؟", answer: "الماء" },
  { question: "ما هو الشيء الذي يمكن أن يبدو صعبًا ولكنه ليس بالضرورة صحيحًا؟", answer: "الاعتقاد" },
  { question: "ما هو الشيء الذي يمكن أن تجده في البيت ولكن لا يمكن أن تجده في الأرض؟", answer: "الحروف" },
  { question: "ما هو الشيء الذي يمكن أن يكون صغيرًا كجزيء وكبيرًا كالكون؟", answer: "الفضاء" }


];

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 5);
        api.sendMessage(`تهانينا ${userName} جوابك صح لقد حصلت على 5  نجوم ⭐`, event.threadID);
        api.unsendMessage(handleReply.messageID); 
    } else {
        api.sendMessage(`خطأ حاول مره اخرا`, event.threadID);
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