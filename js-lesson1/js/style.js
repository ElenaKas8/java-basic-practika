console.log("Hallo Word");

let variableName = "First variable";
console.log(variableName);
if (true) {
  let num1 = 5;
}

// Базовые математические действия

console.log(5 + 3); //8
console.log(5 - 3); //2
console.log(6 / 2); //3
console.log(3 / 2); //1.5
console.log(5 * 2); //10
console.log(4 ** 2); //16 возведение в степень
console.log(11 % 2); //1 остаток от деления

// let num1 = 5;
// let num2 = 3;
// let sum = num1 + num2; //8

//Infinity бесконечность
//-Infinity -бесконечность
//NaN  -не число

// специальные числовые значения

// Infinity
// -Infinity
// NaN - not a number

console.log(3 / 0); //Infinity
console.log(-14 / 0); //-Infinity
console.log("not number" / 2); //NaN
console.log(NaN + 1); //NaN
console.log(NaN * 1); //NaN
console.log(NaN ** 0); //1  возведение в степень-единственное когда NaN не прилипает и дает 1-возведение в степень

// string

let first_name = "John";
let last_name = "Smith";

// John Smith

// console.log(first_name);
// console.log(last_name);

// // Конкатенация
// //Склеивание строк

// console.log(first_name + " " + last_name);
// let full_name = first_name + " " + last_name;
// console.log(full_name);

// console.log("John" + " " + "Smith");
// // ----Hello.Im first_
// console.log("Hello. I'm " + first_name + " " + last_name + ".");
// --------------------------
// let first_name = "John";
// let last_name = "Smith";
let age = 15;

console.log(
  "Hi. My name is " + first_name + " " + last_name + ". I'm " + age + "."
);

//интерполяция//
//Hi.My name is Firstname Lastname.Im age

console.log(`Hi.My name is ${first_name} ${last_name}.I'm ${age}.`);

// Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку
//“rgb(12, 34, 14)” используя конкатенацию и интерполяцию.

// конкатенация
let r = 12;
let g = 34;
let b = 14;
console.log("rgb(" + r + ", " + g + ", " + b + ")");

//интерполяция

console.log(`rgb(${r}, ${g}, ${b})`);

// boolean

true;
false;

let result = true;
// let result = true; //boolean
// let result1 = 'true'; //string
