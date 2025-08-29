
// const decreaseBtn = document.getElementById('decreaseBtn');
// const increaseBtn = document.getElementById('increaseBtn');
// const resetBtn = document.getElementById('resetBtn');
// const countLabel = document.getElementById('countLabel');
// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }




// const rollBtn = document.getElementById('rollBtn');
// const label1 = document.getElementById('label1');
// const label2 = document.getElementById('label2');
// const label3 = document.getElementById('label3');
// const min = 1;
// const max = 6;
// let rand1;
// let rand2;
// let rand3;

// rollBtn.onclick = function() {
//      rand1 = Math.floor(Math.random() * max) + min;
//      rand2 = Math.floor(Math.random() * max) + min;
//      rand3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = rand1;
//     label2.textContent = rand2;
//     label3.textContent = rand3;
// }



// const ageResult = document.getElementById('ageResult');
// const ageInput = document.getElementById('ageInput');
// const checkBtn = document.getElementById('checkBtn');
// let age;
// checkBtn.onclick = function() {
//     age = ageInput.value;
//     age = Number(age);

//     if (age < 0) {
//         ageResult.textContent = "You are not born yet";
//     }
//     else if (age >= 1 && age <= 12) {
//         ageResult.textContent = "You are a child";
//     }
//     else if (age >= 13 && age <= 19) {
//         ageResult.textContent = "You are a teenager";
//     }
//     else if (age >= 20 && age <= 59) {
//         ageResult.textContent = "You are an adult";
//     }
//     else if (age >= 60) {
//         ageResult.textContent = "You are a senior citizen";
//     }
//     else {
//         ageResult.textContent = "Please enter a valid age";
//     }
// }