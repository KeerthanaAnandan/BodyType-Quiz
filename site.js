let questions = [
  {
    id: 1,
    question: "Which sentence best describes your body weight?",
    answer: "trust",
    options: ["I have a hard time gaining weight.", "I both gain and lose weight without too much effort." , "I gain weight easily."],
  },
  {
    id: 2,
    question:
      "Your body has a/an … shape",
    answer: "2",
    options: ["Mostly straight", "Hourglass" , "Pear (narrow shoulders, wide hips)"],
  },
  {
    id: 3,
    question: "Your shoulders are:",
    answer: "2",
    options: ["The same as your hips", "Wider than your hips" , "Narrower than your hips"],
  },
  {
    id: 4,
    question: "When you look in the mirror, what is prevalent in your body?",
    answer: "2",
    options: ["Bones", "Muscles" , "Body fat"],
  },
  {
    id: 5,
    question: "If you encircle your wrist with your other hand’s middle finger and thumb, they:",
    answer: "2",
    options: ["Overlap", "Touch" , "Don't Touch"],
  },
  {
    id: 6,
    question:
      "How do you feel after eating heavy carbs-rich-food?",
    answer: "2",
    options: ["Normal, Light", "Feel full and satisfied" , "Tired, bloated, lethargic"],
  },
  {
    id: 7,
    question: "How good are you with leg exercises?",
    answer: "2",
    options: ["Leg workouts are not my favorites.", "I am good with all type of workouts." , "I am really good with leg exercises comparing to other workouts."],
  },
  {
    id: 8,
    question: "Your body tends to carry weight/fat in",
    answer: "2",
    options: ["No fat", "Upper body/equally stored in all body parts" , "Belly, hips, and thighs"],
  },
 
];

let question_count = 0;
//let points = 0;
Max_Questions = 8;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;


window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  /*if (user_answer == questions[question_count].answer) {
   points += 10;
   
  }
  console.log(points);*/
  //trust(0)
  if (user_answer === "I have a hard time gaining weight." || user_answer === "Mostly straight" || user_answer === "The same as your hips" || user_answer === "Bones" || user_answer === "Overlap" || user_answer === "Normal, Light" || user_answer === "Leg workouts are not my favorites." || user_answer === "No fat") {
    firstPoints += 1;
  }
  //neglect(1)
  else if (user_answer === "I both gain and lose weight without too much effort." || user_answer === "Hourglass" || user_answer === "Wider than your hips" || user_answer === "Muscles" || user_answer === "Touch" || user_answer==="Feel full and satisfied" || user_answer==="I am good with all type of workouts." || user_answer === "Upper body/equally stored in all body parts") {
    secondPoints += 1;
  }
  //guilt(2)
  else if (user_answer === "I gain weight easily." || user_answer === "Pear (narrow shoulders, wide hips)" || user_answer === "Narrower than your hips" || user_answer=== "Body fat" || user_answer === "Don't Touch" || user_answer === "Tired, bloated, lethargic" || user_answer === "I am really good with leg exercises comparing to other workouts." || user_answer === "Belly, hips, and thighs") {
    thirdPoints += 1;
  }
 

  sessionStorage.setItem("first", firstPoints);
  sessionStorage.setItem("second", secondPoints);
  sessionStorage.setItem("third", thirdPoints);
 
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");
 

  progressBarFull.style.width = ` ${((question_count / Max_Questions) * 100 + 50 )}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second , third] = questions[count].options;
  ///////no of questions

  question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
 
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
