function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

const random = Math.floor(Math.random() * 100) + 1;

const num3 = 16;
const num4 = 6;
const mod = num3 % num4;

const max = Math.max(1, 5, 10, 20);

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  });
}

// Export functions for testing (if using Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { 
    scuberGreetingForFeet, 
    ternaryCheckCity, 
    switchOnCharmFromTip, 
    multiply, 
    random, 
    mod, 
    max,
    findMatching,
    fuzzyMatch,
    matchName,
    titleCased
  };
}



