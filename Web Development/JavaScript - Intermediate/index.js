let firstName = prompt("First Name: ");
let secondName = prompt("Second Name: ");

let love = Math.floor(Math.random() * 100);

if (love > 70) {
  console.log(
    `Chances of love between ${firstName} and ${secondName} is ${love}%! You love each other like Kanye loves Kanye!`
  );
} else if (love > 30 && love <= 70) {
  console.log(
    `Chances of love between ${firstName} and ${secondName} is ${love}%!`
  );
} else {
  console.log(
    `Chances of love between ${firstName} and ${secondName} is ${love}%! You love each other like oil and water!`
  );
}

function bmiCalculator(weight, height) {
  let interpretation = "";
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    interpretation = "Your BMI is " + BMI + ", so you are underweight";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    interpretation = "Your BMI is " + BMI + ", so you are normal weight";
  } else {
    interpretation = "Your BMI is " + BMI + ", so you are overweight";
  }
  return interpretation;
}

console.log(bmiCalculator(220, 6));

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 == 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

console.log(isLeapYear(1989));
console.log(isLeapYear(2100));
console.log(isLeapYear(2000));

const output = [];
let count = 1;

function fizzBuzz() {
  for (let i = 0; i < 50; i++) {
    if (count % 3 == 0 && count % 5 == 0) {
      output.push("FizzBuzz");
    } else if (count % 3 == 0) {
      output.push("Fizz");
    } else if (count % 5 == 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
    console.log(output);
  }
}

fizzBuzz();

function beer() {
  let bottles = 99;
  while (bottles > 0) {
    console.log(
      `${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${
        bottles - 1
      } bottles of beer on the wall.`
    );
    bottles--;
  }
}

beer();

function fib(n) {
  let output = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) output.push(i);
    else if (i == 2) output.push(1);
    else output.push(output[i - 1] + output[i - 2]);
  }

  return output;
}

console.log(fib(10));
