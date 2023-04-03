const score = 10
// score++;
console.log(score + 1);

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber);



// ------Stack a& Heap-----

let myName = "Preyas"
let anotherName = myName
anotherName = "Savani"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "preyas@gmail.com",
    upi: "preyas@hdfc"
}
let userTwo = userOne
userTwo.email = "savani@gmail.com"
userTwo.upi = "savani@idfc"

console.log(userOne);
console.log(userTwo);
