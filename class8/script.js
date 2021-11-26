//************************************************************ */
//* QUESTION 01

//? Write a JavaScript program to display the current day and time in the following format.
//? Sample Output : Today is : Tuesday.
//? Current time is : 10 PM : 30 : 38

const today = new Date();
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const day = today.getDay();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

document.getElementById('task01').innerHTML = `<h3> Today is: ${
  days[day]
} <br> Current Time is : ${hours >= 12 ? hours - 12 : hours} ${
  hours < 12 ? 'PM' : 'AM'
} : ${minutes} : ${seconds} </h3>`;

//************************************************************ */
//* QUESTION 02

//? Write a JavaScript program to get the current date.
//? Expected Output :
//? mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

document.getElementById('task02').innerHTML = `<h3>Current Date is: ${
  month < 9 ? '0' + (month + 1) : month + 1
}-${date <= 9 ? '0' + date : date}-${year}, ${
  month < 9 ? '0' + (month + 1) : month + 1
}/${date <= 9 ? '0' + date : date}/${year} </h3>`;

//************************************************************ */
//* QUESTION 03

//? Write a JavaScript program to find the area of a triangle where lengths of the
//? three of its sides are 5, 6, 7

document.querySelector('#task03 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input1 = document.querySelector('#task03 .input1').value;
  const input2 = document.querySelector('#task03 .input2').value;
  const input3 = document.querySelector('#task03 .input3').value;
  const a = input1 ? parseInt(input1) : 5;
  const b = input2 ? parseInt(input2) : 6;
  const c = input3 ? parseInt(input3) : 7;
  const s = a + b + c / 2;

  document.querySelector(
    '#task03 #result'
  ).innerHTML = `<h3>The Area of Given Triangle With Sides ${a}, ${b} and ${c} is ${Math.sqrt(
    s * (s - a) * (s - b) * (s - c)
  ).toFixed(3)} </h3>`;
});

//************************************************************ */
//* QUESTION 04

//? Write a JavaScript program to rotate the string 'Saylani' in
//? right direction by periodically removing one letter from the end of the string and attaching it to the front.

document.querySelector('#task04 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task04 input').value;

  document.querySelector('#task04 #result').innerHTML = `<h3> ${(input
    ? input
    : 'Saylani'
  )
    .split('')
    .map((_, i, a) => a[a.length - i - 1])
    .join('')} </h3>`;
});

//************************************************************ */
//* QUESTION 05

//? Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

document.querySelector('#task05 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task05 input').value;

  document.querySelector('#task05 #result').innerHTML = `<h3> The ${
    input ? 'Entered' : 'Current'
  } Year is ${
    (input ? parseInt(input) : year) % 4 === 0 ? '' : 'Not'
  } a Leap Year. </h3>`;
});

//************************************************************ */
//* QUESTION 06

//? Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

document.querySelector('#task06 form').addEventListener('submit', (e) => {
  e.preventDefault();

  let input1 = document.querySelector('#task06 .input1').value;
  let input2 = document.querySelector('#task06 .input2').value;
  let input3 = document.querySelector('#task06 .input3').value;
  let input4 = document.querySelector('#task06 .input4').value;
  let input5 = document.querySelector('#task06 .input5').value;
  input1 = input1 ? parseInt(input1) : 2014;
  input2 = input2 ? parseInt(input2) : 2050;
  input3 = input3 ? parseInt(input3) : 1;
  input4 = input4 ? parseInt(input4) : 1;
  input5 = input5 ? input5 : 'sunday';

  document.querySelector('#task06 #result').innerHTML = `${new Array(
    input2 - input1
  )
    .fill()
    .reduce((prev, _, i) => {
      const givenDate = new Date(`${input1 + i}-${input3}-${input4}`);

      return givenDate.getDay() ===
        days.indexOf(input5[0].toUpperCase() + input5.slice(1).toLowerCase())
        ? (prev += `<h3>${givenDate.toString().slice(0, 15)}</h3>`)
        : prev;
    }, '')}`;
});

//************************************************************ */
//* QUESTION 07

//? Write a JavaScript program where the program takes a random Number between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

document.querySelector('#task07 form').addEventListener('submit', (e) => {
  e.preventDefault();
  const randomNo = Math.floor(Math.random() * 10);
  const input = document.querySelector('#task07 input').value;

  document.querySelector('#task07 #result').innerHTML = `<h3>${
    input >= 1 && input <= 10
      ? parseInt(input) === randomNo
        ? `The Guessed No ${input} Matched Random No ${randomNo} Good Work.`
        : `The Guessed No ${input} Did Not Match Random No ${randomNo}.`
      : 'Please Enter a Value Between 1 and 10'
  }</h3>`;
});

//************************************************************ */
//* QUESTION 08

//? Write a JavaScript program to calculate days left until next 14 August.

document.querySelector('#task08 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task08 input').value;
  evaluateInput = input ? input : `${year + 1}-8-14`;

  document.querySelector('#task08 #result').innerHTML = `<h3>${Math.floor(
    (new Date(evaluateInput) - today) / 1000 / 60 / 60 / 24
  )} Days Left Until ${evaluateInput
    .split('-')
    .reverse()
    .map((el, i) => (i === 1 ? months[parseInt(el) - 1] : el))
    .join(' ')}.</h3>`;
});

//************************************************************ */
//* QUESTION 09

//? Write a JavaScript program to calculate multiplication and division of two numbers.

document.querySelector('#task09 form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input1 = document.querySelector('#task09 .input1').value;
  const input2 = document.querySelector('#task09 .input2').value;
  const operator = document.querySelector('#task09 select').value;

  document.querySelector('#task09 #result').innerHTML = `<h3> ${eval(
    parseInt(input1) +
      (operator === 'add'
        ? '+'
        : operator === 'subtract'
        ? '-'
        : operator === 'multiply'
        ? '*'
        : '/') +
      input2
  )} </h3>`;
});

//************************************************************ */
//* QUESTION 10

//? Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

document.querySelector('#task10 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task10 input').value;
  const operation = document.querySelector('#task10 select').value;

  document.querySelector(
    '#task10 #result'
  ).innerHTML = `<h3>The Given Temprature ${input}${
    operation === 'celsius' ? '°C' : '°F'
  } is Equal to  ${
    operation === 'celsius'
      ? `${input * 1.8 + 32}°F`
      : `${(input - 32) * 0.55}°C`
  } </h3>`;
});

//************************************************************ */
//* QUESTION 11

//? Write a JavaScript program to compute the sum of the two given Numbers. If the two values are same, then returns triple their sum.

document.querySelector('#task11 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input1 = document.querySelector('#task11 .input1').value;
  const input2 = document.querySelector('#task11 .input2').value;
  const operation = document.querySelector('#task11 select').value;
  const operator =
    operation === 'add'
      ? '+'
      : operation === 'subtract'
      ? '-'
      : operation === 'multiply'
      ? '*'
      : '/';

  document.querySelector('#task11 #result').innerHTML = `<h3> ${eval(
    input1 === input2
      ? parseInt(input1) +
          operator +
          parseInt(input2) +
          operator +
          parseInt(input2)
      : parseInt(input1) + operator + parseInt(input2)
  )} </h3>`;
});

//************************************************************ */
//* QUESTION 12

//? Write a JavaScript program to check whether a given Number is within 20 of 100 or 400.

document.querySelector('#task12 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task12 input').value;
  document.querySelector(
    '#task12 #result'
  ).innerHTML = `<h3>The Entered No ${input} is ${
    400 - Math.abs(parseInt(input)) <= 20 ||
    100 - Math.abs(parseInt(input)) <= 20
      ? ''
      : 'Not'
  } Within The 20 of ${
    400 - Math.abs(parseInt(input)) <= 20
      ? '400'
      : 100 - Math.abs(parseInt(input)) <= 20
      ? '100'
      : '100 or 400'
  } </h3>`;
});

//************************************************************ */
//* QUESTION 13

//? Write a JavaScript program to find the largest of three given Numbers.

document.querySelector('#task13 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input1 = document.querySelector('#task13 .input1').value;
  const input2 = document.querySelector('#task13 .input2').value;
  const input3 = document.querySelector('#task13 .input3').value;

  document.querySelector('#task13 #result').innerHTML = `<h3>${
    parseInt(input1) > parseInt(input2) && parseInt(input1) > parseInt(input3)
      ? 'input1 is'
      : parseInt(input2) > parseInt(input1) &&
        parseInt(input2) > parseInt(input3)
      ? 'input2 is'
      : parseInt(input3) > parseInt(input1) &&
        parseInt(input3) > parseInt(input2)
      ? 'input3 is'
      : 'None of The Values are '
  } Greater. </h3>`;
});

//************************************************************ */
//* QUESTION 14

//? Write a JavaScript program to capitalize the first letter of each word of a given string.

document.querySelector('#task14 form').addEventListener('submit', (e) => {
  e.preventDefault();

  let input = document.querySelector('#task14 input').value;

  document.querySelector('#task14 #result').innerHTML = `<h3> ${input
    .split(' ')
    .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(' ')} </h3>`;
});

//************************************************************ */
//* QUESTION 15

//? Write a JavaScript program to convert a given days to hours and minutes. i.e: 1 day equals 24hr

document.querySelector('#task15 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task15 input').value;

  document.querySelector('#task15 #result').innerHTML = `<h3>There are ${
    parseInt(input) * 24
  } Hours OR ${parseInt(input) * 1440} Minutes OR  ${
    parseInt(input) * 86400
  } Seconds OR  ${parseInt(input) * 86400000} MiliSeconds in a Day.</h3>`;
});

//************************************************************ */
//* QUESTION 16

//? Write a JavaScript program to reverse the elements of a given array, you can not use Array.reverse() do it with loop.

document.querySelector('#task16 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task16 input').value;

  document.querySelector(
    '#task16 #result'
  ).innerHTML = `<h3>The Reversed Array is: ${new Array(1)
    .fill()
    .map((_) =>
      input.split(',').reduce((p, c, i, a) => p + ' ' + a[a.length - i - 1], '')
    )[0]
    .trim()} </h3>`;
});

//************************************************************ */
//* QUESTION 17

//? Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

document.querySelector('#task17 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#task17 input').value.split(',');

  document.querySelector(
    '#task17 #result'
  ).innerHTML = `<h3>The Final Array is:  ${
    input[0] > input[input.length - 1]
      ? new Array(input.length).fill(input[0]).join(' ')
      : input[0] < input[input.length - 1]
      ? new Array(input.length).fill(input[input.length - 1]).join(' ')
      : 'Both Of The Elements Have Same Value'
  } </h3>`;
});

//************************************************************ */
//* QUESTION 18

//? Write a JavaScript program to find the kth greatest element of a given array of Numbers.

document.querySelector('#task18 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input1 = document
    .querySelector('#task18 .input1')
    .value.split(',')
    .sort((a, b) => b - a);
  const input2 = document.querySelector('#task18 .input2').value;

  document.querySelector('#task18 #result').innerHTML = `<h3> ${
    input1[parseInt(input2) - 1]
  } </h3>`;
});

//************************************************************ */
//* QUESTION 19

//? Write a JavaScript program to find the number which appears most in a given array of Numbers.

document.querySelector('#task19 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const memo = {};

  document
    .querySelector('#task19 input')
    .value.split(',')
    .forEach((el) => {
      memo[el] !== undefined ? memo[el]++ : (memo[el] = 1);
    });

  document.querySelector(
    '#task19 #result'
  ).innerHTML = `<h3>The Most Appearing No is: ${
    Object.keys(memo).sort((a, b) => memo[b] - memo[a])[0]
  } </h3>`;
});

//************************************************************ */
//* QUESTION 20

//? Write a JavaScript program to replace all the numbers with a specified number of a given array of Numbers.

document.querySelector('#task20 form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input1 = document.querySelector('#task20 .input1').value.split(',');
  const input2 = document.querySelector('#task20 .input2').value;
  const input3 = document.querySelector('#task20 .input3').value;

  document.querySelector(
    '#task20 #result'
  ).innerHTML = `<h3>Replaced all occurances of '${input2}' in [${input1}] with '${input3}' and the result is: ${input1
    .map((el) => (el === input2 ? input3 : el))
    .join(' ')} </h3>`;
});
