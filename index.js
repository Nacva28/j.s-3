const favoriteColor = prompt("what is your favorite color?");
console.log("your favorite color is " + favoriteColor);

const termsandconditons = confirm("Do you agree Website Terms and Conditions?");
console.log("termsandconditions");

if (termsandconditons) {
  console.log("You can visit the site.");
} else {
  alert("Without confirmation, you can't use the website.");
}

const userAgeString = prompt("How old are you ?");
const userAge = parseInt(userAgeString);
if (!isNaN(userAge)) {
  console.log("User age is ", userAge);
} else {
  console.log("Invalid input. Please enter a valid age as a number.");
}
const currentYear = 2023;
console.log((birthYear = currentYear - userAge));
