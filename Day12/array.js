console.log("Today we are going to learn array");
let arr = [1, 2, true, "hii", {}, []];
console.log(arr[3]);

let arrObj = new Array(1, 2, 3, "hii", {});
console.log(arrObj);

console.log(Array(3))
console.log(Array.of(1, 2, 3, 5))

console.log(Array.from("abcdef"))

let num1 = [1, 2, 3];
num1.push(4, 6, 7);
console.log(num1)
num1.pop();
console.log(num1)
num1.pop()
console.log(num1)

num1.unshift(0);
console.log(num1);
num1.shift();
console.log(num1)

console.log("value", num1.at(2));
console.log("index", num1.indexOf(3))
console.log(num1.includes(8));

console.log(num1.reverse());
console.log(num1.join("-"));

console.log(num1)
num1.splice(2, 2, "hii");
console.log(num1)

// find the maximum element from a array
let arr12 = [12, 33, 41, 50];
let max = arr12[0];
for (let n of arr12) {
    if (max < n)
        max = n
}
console.log(max);

// count event and idd number from a array
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr12.length; i++) {
    if (arr12[i] % 2 == 0) {
        evenCount += 1;
    }
    else {
        oddCount++;
    }
}
console.log("even number", evenCount);
console.log(oddCount);

// sum of array element
let arr13 = [12, 33, 41, 50];
let sum = 0;
for (let value of arr13) {
    sum = value + sum;
}
console.log("sum of the array is" + sum)

// remove the duplicates
let dup = [1, 2, 2, 3, 4, 5, 6, 6, 7]
for (let i = 0; i < dup.length; i++) {
    for (let j = i + 1; j < dup.length; j++) {
        if (dup[i] == dup[j]) {
            dup.splice(j, 1);
        }
    }
}
console.log("dup", dup);


// change each element to double
let Arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= Arr.length - 1; i++) {
    Arr[i] *= 2;
}
console.log(Arr);


// print the words which lenght > 4
let str = ["ram", "hari", "gopal"]
for (let v of str) {
    if (v.length > 4) {
        console.log(v);
    }
}
// check the array is containing positive integer or not
let arr10 = [1, -2, -4, 89, 5]

let allPositive = true;

for (let v of arr10) {
    if (v < 0) {
        allPositive = false;
        break;
    }
}

console.log(allPositive ?"all Positive" :"not a positive array");