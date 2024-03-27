let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");
let snoopy = document.querySelector(".snoopy");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2023 - birthYear; // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.
    let city = document.querySelector(".city").value;
    // 2. Below write your sentences! 
    // use results.innerhtml

    results.innerHTML = "My name is " + myName + ". I am feeling " + mood + " today. My favorite food is " + food + ". I was born one the year of " + birthYear + ". I live in " + city + ".";

    let snoopy = document.querySelector(".snoopy");
    snoopy.style.display = "block";
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.
    

});