let word = prompt("Enter a word:");
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

if (word === reversed) {
  console.log("It is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}
