let bdy = document.getElementById("body");
bdy.style.background = "pink ";
const person = [
  {
    name: "ali",
    img: "https://randomuser.me/api/portraits/men/15.jpg?fbclid=IwAR1aSwQzm4p_CsmKzB1O6wf3vuy3rQc8niLsNC3jwl0P1NEPPNN3jPXAhsA",
    age: 23,
    dop: "13 Feb 1998",
  },
  {
    name: "sahar",
    img: "https://randomuser.me/api/portraits/men/15.jpg?fbclid=IwAR1aSwQzm4p_CsmKzB1O6wf3vuy3rQc8niLsNC3jwl0P1NEPPNN3jPXAhsA",
    age: 29,
    dop: "13 Jon 1992",
  },
  {
    name: "reem",
    img: "https://randomuser.me/api/portraits/men/14.jpg?fbclid=IwAR1aSwQzm4p_CsmKzB1O6wf3vuy3rQc8niLsNC3jwl0P1NEPPNN3jPXAhsA",
    age: 27,
    dop: "15 Feb 1994",
  },
  {
    name: "Dania",
    img: "https://randomuser.me/api/portraits/men/11.jpg?fbclid=IwAR1aSwQzm4p_CsmKzB1O6wf3vuy3rQc8niLsNC3jwl0P1NEPPNN3jPXAhsA",
    age: 25,
    dop: "29 Feb 1997",
  },
  {
    name: "Ghoson",
    img: "https://randomuser.me/api/portraits/women/16.jpg?fbclid=IwAR1aSwQzm4p_CsmKzB1O6wf3vuy3rQc8niLsNC3jwl0P1NEPPNN3jPXAhsA",
    age: 23,
    dop: "14 Oct 1998",
  },
  {
    name: "Hazem",
    img: "https://randomuser.me/api/portraits/men/10.jpg?fbclid=IwAR1aSwQzm4p_CsmKzB1O6wf3vuy3rQc8niLsNC3jwl0P1NEPPNN3jPXAhsA",
    age: 33,
    dop: "14 Oct 1998",
  },
  {
    name: "nermeen",
    img: "https://randomuser.me/api/portraits/women/22.jpg?fbclid=IwAR1aSwQzm4p_CsmKzB1O6wf3vuy3rQc8niLsNC3jwl0P1NEPPNN3jPXAhsA",
    age: 22,
    dop: "14 Oct 1998",
  },
];
let myDiv = document.getElementById("cont");

const today = new Date();
var date = `${today.getDate()} ${today.toLocaleString("en-US", {
  month: "short",
})} `;

let cuont = 0;
for (let index = 0; index < person.length; index++) {
  //   person[index].dop.includes(date);
  if (person[index].dop.includes(date)) {
    let divElement = document.createElement("div");
    divElement.setAttribute("id", `div1`);
    myDiv.appendChild(divElement);
    let image = document.createElement("img");
    divElement.appendChild(image);
    let textDiv = document.createElement("div");
    divElement.appendChild(textDiv);
    image.src = person[index].img;
    let para = document.createElement("p");
    textDiv.appendChild(para);
    para.innerHTML = person[index].name + "<br>" + person[index].age;
    cuont++;
  }
}
let h = document.querySelector("h2");
h.textContent = `${cuont} Birthdays Today`;

let button = document.getElementById("btn");
button.onclick = function () {
  myDiv.style.display = "none";
  h.textContent = `0 Birthdays Today`;
};

let btnBlack = document.getElementById("black");
btnBlack.onclick = function () {
  bdy.style.background = "black";
  button.style.background = "black";
  button.style.color = "white";
};
let btnBlue = document.getElementById("blue");
btnBlue.onclick = function () {
  bdy.style.background = "blue";
  button.style.background = "blue";
  button.style.color = "white";
};
let btnColor = document.getElementById("color");
btnColor.onclick = function () {
  bdy.style.background = "rgb(218, 109, 109)";
  button.style.background = "rgb(218, 109, 109)";
  button.style.color = "white";
};
let btnReset = document.getElementById("reset");
btnReset.onclick = function () {
  bdy.style.background = "pink";
  button.style.background = "violet";
  button.style.color = "white";
};
