function checkAge() {

    //Get the value of the input using the ID which is the ageInput and the resul.

    let age = document.getElementById('ageInput').value;
    let result = document.getElementById('result');

    //Convert the value of the input to a number.
    age = Number(age);

    //Checking the value if valid or not
    let category;

    //I searched about this term "isNaN" and I found out that it is a function that determines whether a value is an illegal number (Not-a-Number).
    //If the value is an illegal number, it will return true, otherwise it will return false.

    if (isNaN(age) || age < 0) {
        category = "Invalid age. Please enter a valid number.";
       result.className = "error";

    } else if (age >= 0 && age <= 12) {
        category = "Child";
        result.className = "";

    } else if (age >= 13 && age <= 19) {
        category = "Teenager";
        result.className = "";

    } else if (age >= 20 ) {
        category = "Adult";
        result.className = "";

    }

    //Set the textContent of the result element with the category.
    result.textContent = category;
}