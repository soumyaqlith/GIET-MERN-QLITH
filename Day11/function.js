console.log("Today we are going to learn Function ");

function fun(v) {
    console.log("this is function")
    console.log(v)
}
fun(20);
fun(30);


// function (){

// }

function namedFun() {
    console.log("this is the named function")
}
namedFun()

let exeFun = function () {
    console.log("this is the expressional function")
}
exeFun()

// console.log(exeFun)

let arrowFun = () => {
    console.log("This is the arrow function");
    let a = 20
    return a;
}
let a = arrowFun()

console.log(a)


// let hof=function(func){
//     console.log("this is the higherorder function")
//     func()
// }


// hof(function(){
//     console.log("this is the argument funtion")
// })



let hof = function () {
    return function () {
        console.log("return fun")
    }
}


let catchedFun = hof()
catchedFun()

// (function(){
//     console.log("this is the IIF function")
// })()

// string

let str = "this is the string";
// console.log(str[1])

str = "This is the sTring";
console.log(str)

let str1 = `this is the string by using single quote`;
console.log(str1)

let str2=new String("this is the string object");
console.log(str2.valueOf());

let testStr="this is the test string";
console.log(testStr.length)
console.log(testStr.toUpperCase());
console.log(testStr.toLowerCase());

console.log(testStr.concat(" 1"));
console.log(testStr.length)

console.log(testStr.trim().length)
// console.log(testStr.trimStart())
// console.log(testStr.trimEnd())

// console.log(testStr.replace("t","T"))
console.log(testStr.replaceAll("t","T"))
console.log(testStr.slice(0,4));
console.log(testStr.slice(5,6))
console.log("------------------------")
let originalStr="this is the original";
let reverseStr=""
for(let idx=originalStr.length-1;idx>=0;idx--){
    reverseStr=reverseStr+originalStr[idx]
}
console.log(reverseStr)