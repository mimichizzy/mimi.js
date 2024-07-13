// window.alert('hello world')
// let age = 25;
// let year = 2000;

// console.log(age,year);
// age = 30
// console.log(age);
// year = 2020;
// console.log(year);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);

// String

// console.log('hello, world');

// let email = 'mirabel@gmail.com';
// console.log(email);

// string concatenation

// let firstname = 'Mirabel';
// let lastname = 'Michael';

// let fullname = firstname + ' ' + lastname;
// console.log(fullname);

// getting characters

// console.log(fullname[0]);

// string length

// console.log(fullname.length);

// string methods

// console.log(fullname.toUpperCase());
// let result = fullname.toUpperCase();
// console.log(result, fullname);

// let index = email.indexOf('@');
// console.log(index);

// common strings methods

// let emails = 'mirabel@gmail.com';
// let results = email.lastIndexOf('l');

// let results = email.slice(0, 4);

// let results = email.substring(0, 11);

// let results = email.replace('m','w');

// console.log(results);

// Number

// let radius = 10;
// const pi = 3.14;
// console.log(radius, pi);

//maths operators +, -, *, /, **, %

// console.log(10/2);
// let results = radius % 3;
// let results = pi * radius**2;

// order of operation - B I D M A S

// let results = 5*(10-3)**2;

// console.log(results);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -=8;
// likes /=2;

// console.log(likes);

//NAN - not a number

// console.log(5/'hello');
// console.log(5*'hello');

//number cancatenation

// let results = 'the blog has ' + likes +  ' likes';
// console.log(results);

//template strings
// const title = 'Best reads of 2019';
// const author = 'mirabel';
// const likess = '30';

//concatenation way
//let results = 'the blog called ' + title + ' by ' + author + ' has ' + likess + ' likes';
// console.log(results);

//template strings way
// let results = `the blog called ${title} by ${author} has ${likess} likes`;
// console.log(results);

//creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likess} likes</span
// `;
// console.log(html);

// Arrays
// let ninjas = ['ella', 'kesla', 'mimi' ];

// ninjas[1] = 'naeto';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['ella', 'kesla', 30, 20];
// console.log(random);

//1 of the properties of array

// console.log(ninjas.length);

//array methods

// let results = ninjas.join(',');
// let results = ninjas.indexOf('mimi');
// let results = ninjas.concat(['kings', 'mike']);
// let results = ninjas.push('chizzy');
// results = ninjas.pop();
// console.log(ninjas);

//null and undefined
// let ages = null;
// console.log(ages, ages + 3, `the age is ${ages}` );

//booleans & comparisons
// console.log(true, false, 'true', 'false');

//methods can return booleans
// let emails = 'mirabel@gmail.com';
// let names = ['ella', 'mimi', 'naeto'];

// let results = names.includes('kesla')
// let results = emails.includes('!');
// console.log(results);

//comparison operators
//let ages = 25;

// console.log(ages == 25);
// console.log(ages != 25);
// console.log(ages < 25 );
// console.log(ages <= 25);
// console.log(ages >= 25);

// let namess = 'mirabel';

// console.log(namess == 'mirabel');
// console.log(namess < 'Mirabel')
// console.log(namess > 'Ella');

//loose comparison (different types can still be equal)
// console.log(ages == 25);
// console.log(ages == '25');
// console.log(ages != 25);
// console.log(ages != '25');

//strict comparion (different types canot be equal)

// console.log(ages === 25);
// console.log(ages === '25');
// console.log(ages !== 25);
// console.log(ages !== '25');

//type conversion
//let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score)

//control flow types

//a for loops type

// for(let i = 0; i < 5; i++){
// console.log('in loop:', i);
// }

// console.log('loop finished');

// const namess = ['mimi', 'ella', 'kesla'];
// for(let i = 0; i < namess.length; i++){
// console.log(i); 
// console.log(namess[i]);  
// let html = `<div>${namess[i]}</div>`;
// console.log(html);
// }

//a while loop type

// let i = 0
// while(i < 5){
// console.log('inloop:', i);
// i++
// }

// const namess = ['mimi', 'ella', 'kesla'];
// let i = 0
// while(i < namess.length){
// console.log(namess[i]);
// i++    
// }

//do while loops

// let i = 3;
// do{
//     console.log('val of i is: ', i);
//     i++   
//    } while(i < 5);

//if statements(conditional statement)
// const agess = 25

// if(agess > 20){
// console.log('you are over 20 years old');    
// }

// const ninjass = ['mimi', 'ella', 'naeto', 'presh'];
// if(ninjass.length > 3){
//     console.log("that's a lot of ninjass");
// }

// const password = 'pass';

// if(password.length >= 8){
//     console.log('that password is long enough');
// }

//else if statement
// const password = 'pass1234closed';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough');
// } else {
//     console.log('password is not long enough');
// }

//logical operators - OR || and AND &&
// const password = 'p@ssword';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('that password is strong enough');
// } else {
//     console.log('password is not strong enough');
// }

//logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }
// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
   
// if(scores[i] === 0){
//     continue;
// }

//     console.log('your score:', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

//switch statement
// const grade = '50'

// switch(grade){
// case 'A':
//     console.log('you got an A');
//     break;
// case 'B':
//     console.log('you got an B');
//     break;
// case '50':
//     console.log('you got an C');
//     break;
//  case 'D':
//     console.log('you got an D');
//     break;
//  case 'E':
//     console.log('you got an E');
//     break;
//  default:
//     console.log('not a valid grade');
// }
//variabels & block scope
//const agess = 30; //global scope

// if(true){
//     const agess = 40;
//     let names = 'mimi';
//     console.log('inside 1st code block:', agess, names);

//     if(true){
//         const agess = 50
//         console.log('inside 2nd code block:', agess);
//     }
// }
// console.log('outside code block:', agess, );

//FUNCTIONS

//function declaration
// function greet(){
    // console.log('hello there');
// }

//function expression

// const speak = function(){
    // console.log('good day!');
// };
// greet();
// speak();

//arguments & parameters

// const speak = function(time, name){
//     console.log(`good ${time} ${name}`);
// };

// speak('morning', 'mimi');

// returning values (regular function)

// const calcarea = function(radius){
//     return 3.14 * radius**2;
// };

// arrow function
// const calcarea = (radius) => {
//     return 3.14 * radius**2;
// };
// const area = calcarea(5);
// console.log('area is:', area);

// // const greet = function(){
//     return 'hello, world';
// }
// const greet = () => 'hello, world';
// const resultss = greet();
// console.log(resultss);

// methods 
// const namess= 'mimi';
// let resultone = namess.toUpperCase();
// console.log(resultone);

//callback & foreach

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value => {
//     console.log(value);
// })

// //foreach

// let people = ['mimi', 'chizzy', 'ella', 'kesla', 'organiser', 'michael'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }
// people.forEach(logPerson);
// people.forEach((person, index) =>{
//     console.log(`${index} - hello ${person}`);
//     // console.log(index, person);
// });

//object literals

// const blogs = [
//     { title: 'everything you need to know about nigeria', likes: 30},
//     { title: '10 different recipes from mimi', liked: 50},
// ];
// console.log(blogs);

let user = {
    name: 'mimi',
    age: 30,
    email: 'mirabel@gmail.com',
    location: 'nigeria',
    blogs: [
        { title: 'everything you need to know about nigeria', likes: 30},
        { title: '10 different recipes from mimi', likes: 50},
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out')
        
    },
    logBlogs: function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);
console.log(user.name);
user.login();
user.logout();
// console.log(user.blogs);

user.logBlogs();

//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7

console.log(Math.round(area)); //approximate
console.log(Math.floor(area)); //floors it below what the initial number
console.log(Math.ceil(area)); //rounds it up regardless of what the decimal digit is
console.log(Math.trunc(area)); //takes way the decimal and leave the integer

//random
const random = Math.random();
console.log(random); //random number is always decimal number between 0 & 1
console.log(Math.round(random * 100)); //random number btw 1 & 100

//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 40;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

const userOne = {name: 'mimi', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

//document object model(DOM)

// const para = document.querySelector('body > h1:nth-child(2)');
// console.log(para);

// const paras = document.querySelector('p');
// paras.innerText +=' ' +  "mimi's world"

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new me';
// })

// console.log(paras[0]);

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// const people = ['mimi', 'organiser', 'kelsa'];
// people.forEach(person => {  
//     content.innerHTML += `<p>${person}</p>`
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// console.log(link.setAttribute('href', 'https://www.theeverythingmimi.com'));
// link.setAttribute('style', 'color: orange;');
// link.style.margin = '50px';
// link.style.margin = '';
// link.style.fontSize = '30px';

const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');






















