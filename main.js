let letters = "abcdefghigklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersCont = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersCont.appendChild(span);
});

let words = {
  programming: [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Git",
    "HTML",
    "CSS",
    "Docker",
    "TypeScript",
    "MongoDB",
  ],
  movies: [
    "Inception",
    "The Matrix",
    "Interstellar",
    "Parasite",
    "The Godfather",
    "Titanic",
    "Pulp Fiction",
    "Avatar",
    "The Dark Knight",
    "Forrest Gump",
  ],
  people: [
    "Albert Einstein",
    "Ada Lovelace",
    "Elon Musk",
    "Marie Curie",
    "Barack Obama",
    "Nelson Mandela",
    "Leonardo da Vinci",
    "Oprah Winfrey",
    "Isaac Newton",
    "Taylor Swift",
  ],
  countries: [
    "Japan",
    "Brazil",
    "Canada",
    "Germany",
    "Egypt",
    "Australia",
    "South Korea",
    "Norway",
    "India",
    "Mexico",
  ],
};

let allKeys = Object.keys(words);
let randomPropNum = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNum];
let randomPropValue = words[randomPropName];

let randomVaNum = Math.floor(Math.random() * randomPropValue.length);

let randomValueValue = randomPropValue[randomVaNum];

document.querySelector(".cate span").innerHTML = randomPropName;

let letterGeCon = document.querySelector(".guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach((letter) => {
  let emptSpan = document.createElement("span");

  if (letter === " ") {
    emptSpan.className = "with-space";
  }

  letterGeCon.appendChild(emptSpan);
});

let guessSpans = document.querySelectorAll(".guess span");

let wrongAtt = 0;
let theDraw = document.querySelector(".draw");

document.addEventListener("click", (e) => {
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, wordIndex) => {
      if (theClickedLetter == wordLetter) {
        theStatus = true;
        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
            span.style.background = "green";
            span.style.borderBottom = "none";
          }
        });
      }
    });

    if (theStatus !== true) {
      wrongAtt++;
      theDraw.classList.add(`wong-${wrongAtt}`);
      document.getElementById("fail").play();

      if (wrongAtt === 10) {
        endGame();

        lettersCont.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over, The word is ${randomValueValue}`
  );
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}
