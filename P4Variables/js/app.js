let NumberOfBottles = 10;
const line1= " green bottles hanging on the wall ";
const line2 = " and if one green bottle, should accidentally fall, there will be ";

console.log(NumberOfBottles);
console.log(line1);
console.log(NumberOfBottles);
console.log(line1);
console.log(line2);
console.log(--NumberOfBottles);
console.log(line1);

//refactor code:
console.log(NumberOfBottles + line1 + NumberOfBottles + line1);
console.log(line2 + --NumberOfBottles + line1);


