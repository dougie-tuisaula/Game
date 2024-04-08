let level = 0;
let newQuestionArray = [
  {
    title: "What is the Capital of New Zealand ?"1,
    answers: [{
        title: "Whangarei",
        isCorrect: false
    }, {
        title: "New Plymouth",
        isCorrect: false
    }, {
        title: "Dunedin",
        isCorrect: false
    }, {
        title: "Wellington",
        isCorrect: true
    }],
    
  },
  {
    title: "What team did Michael Jordan play for?"2,
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {
    title: "What is the chemical symbol for water?"3,
    answers: [{
      title: 'Li',
      isCorrect: false
    }, {
      title: 'Na',
      isCorrect: false
    }, {
      title: 'H2O',
      isCorrect: false
    }, {
      title: 'Ca',
      isCorrect: false
    }],
  },
  {
    title: "Who holds the record for the most Olympic gold medals in history?"4,
    answers: [{
      title: 'Michael Phelps(swimmer)',
      isCorrect: true
    }, {
      title: 'Usain Bolt(sprinter)',
      isCorrect: false
    }, {
      title: 'Michael Johnson(runner)',
      isCorrect: false
    }, {
      title: 'Carl Lewis',
      isCorrect: false
    }],
  },
  {
    title: "What is largest ocean on Earth?"5,
    answers: [{
      title: 'Arctic Ocean',
      isCorrect: false
    }, {
      title: 'Atlantic Ocean',
      isCorrect: false
    }, {
      title: 'Indian Ocean',
      isCorrect: false
    }, {
      title: 'Pacific Ocean',
      isCorrect: true
    }],
  },
  {
    title: "Who painted the Mona Lisa?"6,
    answers: [{
      title: 'Donatello',
      isCorrect: false
    }, {
      title: 'Leonardo Da Vinci',
      isCorrect: true
    }, {
      title: 'Raphael Sanzio',
      isCorrect: true
    }, {
      title: 'Giovanni Bellini',
      isCorrect: false
    }],
  },
  {
    title: "What is the longest river in the world?"7,
    answers: [{
      title: 'Amazon River',
      isCorrect: false
    }, {
      title: 'Nile River',
      isCorrect: true
    }, {
      title: 'Yangtze River',
      isCorrect: false
    }, {
      title: 'Yellow River(Huang He)',
      isCorrect: false
    }],
  },
  {
    title: "",
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {
    title: "What team did Michael Jordan play for?",
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {
    title: "What team did Michael Jordan play for?",
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {
    title: "What team did Michael Jordan play for?",
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {
    title: "What team did Michael Jordan play for?",
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {
    title: "What team did Michael Jordan play for?",
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {
    title: "What team did Michael Jordan play for?",
    answers: [{
      title: 'Utah Jazz',
      isCorrect: false
    }, {
      title: 'Minnesota Timberwolves',
      isCorrect: false
    }, {
      title: 'Chicago Bulls',
      isCorrect: true
    }, {
      title: 'LA Lakers',
      isCorrect: false
    }],
  },
  {

  },
];

let currentQuestion = newQuestionArray[level]
document.getElementById('question').innerHTML = currentQuestion.title

currentQuestion.answers.array.forEach(answer, index) => {
    document.querySelectorAll('.answer-btn'[index].innerHTML = answer.title)
}
