// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10 % above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
//   1.10).Basically, the current portion should be between 90 % and 110 % of the
// recommended portion.

// Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
dogs.forEach(dog => {
  // Có thể sử dụng cả 2 cách
  dog['recommendedFood'] = dog.weight ** 0.75 * 28;
  // dog.recommendedFood = dog.weight ** 0.75 * 28;
})

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    console.log(`Sarah's dog is eating too ${dog.curFood > dog.recommendedFood ? 'much' : 'little'}`);
  }
})

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .reduce((acc, dog) => acc.concat(dog.owners), []);  // Hoặc .flatMap(dog => dog.owners); 

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners)
// .flatMap() sau đó sẽ tạo ra một mảng mới chứa tất cả các phần tử từ các mảng con (ở đây là dog.owners) (mảng các chủ sở hữu)
// mà không cần phải lồng vào nhau.


// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);


// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
console.log('Any dog eating exactly the amount of food that is recommended?');
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// Being within a range 10 % above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended * 1.10)

// return true/false;
const checkEatingOkay = (dog) => {
  if (dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10) {
    return true;
  }
  return false;
}

console.log(dogs.some(checkEatingOkay)); // Hoặc console.log(dogs.some(dog => checkEatingOkay(dog)));

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log('the dogs that are eating an okay amount of food');
console.log(dogsEatingOkay);


// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)
console.log('sort it by recommended food portion in an ascending order');

// Khi sắp xếp số, nếu không cung cấp hàm so sánh, 
// sort() sẽ sắp xếp các phần tử dưới dạng chuỗi. Điều này có thể dẫn đến kết quả không mong muốn, 
// chẳng hạn như 10 đứng trước 2 vì '10' nhỏ hơn '2' theo thứ tự từ điển.
const dogsCopy = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
