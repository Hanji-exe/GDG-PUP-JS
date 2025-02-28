
  

  for (let j = 1; j <= 10; j++) {
    console.log(`Number: ${j}`);
  }

  let hobbies = ["Travelling", "Photography", "Gardening", "Cooking", "Painting", "Dancing", "Singing", "Swimming", "Cycling", "Running"];
  
  //I try this to check the type if "Object" kaya Nevernmind
  console.log(typeof hobbies);

  let index = 0;
  while (index < hobbies.length) {
    // Log each hobby and see if it works in the console

    console.log("Hobby " + (index + 1) + ": " + hobbies[index]);   // Increment the index for the next iteration
    index++;
  }