const btn = document.querySelector("button");
const main = document.querySelector("main");
const input = document.querySelector("input");
const para = document.createElement("p");

function palindrome(str) {
  let myRegex = /[a-z0-9]/gi;
  str = str.match(myRegex).join("").toLowerCase()
  let reverseStr = str.match(myRegex).reverse().join("").toLowerCase()
  if (str === reverseStr) { return true; }
  else {return false; }
}

function checkWord () {
  if (palindrome(input.value) === true) {
  para.innerText = `Yes! :)`;
  }
  else {para.innerText = `No :(`}
  main.appendChild(para);
}


console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("red"));
