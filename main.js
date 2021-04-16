const name = "Adam";
const age = "32";

console.log(`Cześć nazywam się ${name} i mam ${age} lata`);
console.log("HEJ");

const emptyParagraph = document.querySelector(".article__paragraph--js");

emptyParagraph.innerHTML = "Cześć dodałem to js ";

const emptyParagraph2 = document.querySelector(".article__paragraph2--js");

emptyParagraph2.innerHTML = "Teraz robie test TEST";

const emptyParagraph3 = document.querySelector(".article__paragraph2--js");
emptyParagraph3.innerHTML = "Hej kup se klej";

function caltulate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  myNumber = myNumber * 7;
  return myNumber;
}

const myResult = caltulate(age);

console.log(myResult);
console.log(age);

function kalkulator(mojNUmer) {
  mojNUmer = mojNUmer * 15;
  return mojNUmer;
}

function greet(age, name) {
  console.log(`Witaj ${age} i jesteś ${name}`);
}

greet(age, name);

function createContent(querySelectorContendt, content) {
  const element = document.querySelector(querySelectorContendt);
  element.innerHTML = content;
}

createContent(".article__paragraph2--js", "Hej kup klej");
