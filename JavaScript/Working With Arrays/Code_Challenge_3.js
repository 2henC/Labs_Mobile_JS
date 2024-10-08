// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

data1 = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = ages => {
  return ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((sum, age, arr) => sum + age / arr.length, 0); // sum là acc, age là cur
}

console.log(calcAverageHumanAge(data1));