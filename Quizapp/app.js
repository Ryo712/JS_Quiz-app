const quiz = [
  {
    question: '最も売れたゲーム機は？',
    answers: [
      'スーパーファミコン',
      'プレステ',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  }, {
    question: 'イチローの本名は？',
    answers: [
      '鈴木一朗',
      '佐藤一朗',
      '小林一朗',
      '吉一朗'
    ],
    correct:'鈴木一朗'
  },{
    question: '日本の最南端の場所はどこ？',
    answers: [
      '北海道',
      '大阪',
      '沖縄',
      '鹿児島'
    ],
    correct:'沖縄'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;

while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}


