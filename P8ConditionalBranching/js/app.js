const birthYear = 2050;
const currentYear = 2024;


let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);
// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;
let notBorn= (ageOfPerson <= 0);

if (isChild) {
  console.log("You are a child");
}
else if (isTeenager) {
  console.log("You are a teenager");
}
else if (isAdult) {
  console.log("You are an adult");
}
else if (notBorn) {
  console.log("You are not born");
}

const favouriteNumber= 15;
console.log(favouriteNumber);

if (favouriteNumber > ageOfPerson) {
  console.log("Favourite number is Greater");
}

else if (favouriteNumber === ageOfPerson) {
  console.log("They are the same!");
}
else { console.log("Age is Greater");
}

if (favouriteNumber % 2 === 0) {
  console.log("Favourite number is even");
}

else {
  console.log("Favourite number is odd");
}

favouriteNumber % 2 === 0 ? console.log("Favourite number is even") : console.log("Favourite number is odd");


function makeLasagna() {
  console.log("Fry meat");
  console.log("Cut onions");
  console.log("Fry onions");
  console.log("Add tomato sauce");
  console.log("Add spices");
  console.log("Boil");
}
makeLasagna();
