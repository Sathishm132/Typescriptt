"use strict";
const num1element = document.getElementById("num1");
const num1e2ement = document.getElementById("num2");
const Buttonelemet = document.querySelector("button");
const numarray = [];
const stringarray = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + '' + num2;
    }
    return +num1 + +num2;
}
;
function object(objectval) {
    console.log(objectval.val);
}
Buttonelemet.addEventListener("click", () => {
    const num1 = num1element.value;
    const num2 = num1e2ement.value;
    const result = add(+num1, +num2);
    const stringresult = add(num1, num2);
    numarray.push(result);
    stringarray.push(stringresult);
    object({ val: result, timestamp: new Date() });
    console.log(numarray);
    console.log(stringarray);
});
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it's worked");
    }, 1000);
});
mypromise.then((result) => {
    console.log(result);
});
