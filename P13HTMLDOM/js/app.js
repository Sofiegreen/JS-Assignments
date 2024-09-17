// Reference "text0" and assign it to the variable called "textField0"

const textField0= document.getElementById('text0');
textField0.innerHTML= "Sofie";

const headerText5=document.getElementById('header5');
headerText5.innerHTML= "THIS IS MY WEBSITE!!!"

const randomNumber0= document.getElementById("randomNumber0");
randomNumber0.innerHTML = chooseANumber(3).toString();

headerText5.style.color= "pink";
textField0.style.color= "blue";

// const button0= document.getElementById('button0');
// button0.addEventListener('click', () => {yourFunctionHere();
// })
//
// button0.style.backgroundColor= "red";
// button0.style.fontSize="100px";

textField0.innerHTML= multiplyNySelf(9)

function multiplyNySelf(number)  {
  return number * number;
}

function chooseANumber(max) {
  return Math.floor(Math.random() * max);
}



