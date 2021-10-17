import logo from './logo.svg';
import './App.css';

const numbers = [1,2,3,4,5,6,7,8,9,10];

// For each:
numbers.forEach((item, index, arr) => {
  // Do something
  // Index = some index in the array
  // Item = item corresponding to that index
  // Arr = the array ([1,2,3...])
  console.log("Index " + index + ": item " + item);
})

// Example: adding sum
let sum = 0;
numbers.forEach((item) => {
  sum += item;
})
console.log(sum);


// Example: counting items
const items = ['bag', 'bag', 'shoe', 'mouse', 'bag', 'shoe'];
let count = {}

// For each item in item array
// If the item exists in the count array (count[item])
// Them increase count
// Else initialise it
items.forEach(item => {
  if(count[item]){
    count[item]++;
  }else{
    count[item] = 1;
  }
})

// Map
// This function creates new array with the results of calling
// a function for every array element
const products = [
  {
    name:"laptop",
    price: 1000,
    count: 5
  },
  {
    name:"desktop",
    price: 1500,
    count: 2
  },
  {
    name:"phone",
    price: 500,
    count: 10
  }
];

// In this map example: we create a new array by looping 
// through the old one. We initialise each array item with
// - The name of the item
// - The sum of the price and count
const total = products.map(item => ({
  name: item.name,
  total: item.price * item.count
}));
console.log(total);

// Array filter
// Creates a new array with the items of the old array
// which satisfies a callback function. If false value = removed.
const filterNums = [1,2,3,4,5,6]

// Example 1: get all the numbers that are even...
// We are calling the isEven function on every element 
const even = filterNums.filter(isEven);

console.log(even);

// Basic function for is even
function isEven(value){
  return value % 2 === 0;
}

// Example 2: remove all young users
const people = [
  {
    name: 'Kevin',
    age: 19
  },
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Joe',
    age: 16
  },
  {
    name: 'Smith',
    age: 50
  },
  {
    name: 'Gordon',
    age: 12
  }
]

// We can use an arrow function to filter
// For every person (item) in the people array
// We check if the age of the item is over/equal to 18
// If false condition = remove from array
const oldPeople = people.filter(person => person.age >= 18);
console.log(oldPeople);

// Example 3: remove duplicates
const dupeNums = [1,2,6,3,5,2,4,2,5,3,64,1,2,5]

// How it works:
// indexOf function returns first instance in the array with
// that specific value
// If we find a dupe value down the line this means that
// the index of the dupe value is NOT the first instance, thus
// it is a dupe
const nonDupe = dupeNums.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
})

console.log(nonDupe);

// Array reduce
// Executes function of all elements in the array and returns one
// single value.
const reduceNums = [1,2,3,4,5]

// Example 1: getting total value
// This function takes in a callback funciton and total
// numbers.reduce(callnack, initial)
// If you dont provide initial number then the initial will be index 0 of arr
const totalNums = reduceNums.reduce(sumReduce, 0);

// Initially accumulator will be 0 and we keep adding numbers
function sumReduce(accumulator, value){
  return accumulator + value;
}

console.log(totalNums);

// Example 2: getting max value
const max = reduceNums.reduce(getMax);

// For every item in the array
// We compare the current item value to the accumulator
// Since no initial stated, the accumulator is item at index 0
// If compared number is higher than accumulator then we need 
// to compare that to the next numbers...
function getMax(accumulator, value){
  if(accumulator > value){
    return accumulator;
  }else{
    return value;
  }
}
console.log(max);

// Example 3: 
const products2 = [
  {
    name:"book1",
    value: 1000,
    count: 3
  },
  {
    name:"book2",
    value:1500,
    count:10
  },
  {
    name:"book3",
    value:500,
    count:25
  }
];

// For every item in the product list
// Initial acc (sum) is 0
// We add the item value times item count to the acc
// In the end we get the sum of all value and count of each item
const totalBookVal = products2.reduce((acc, item) => acc + (item.value)
* item.count, 0);

console.log(totalBookVal);

// Array slice
// Shallow copy of portion of array
// WILL NOT MODIFY ORIGINAL ARRAY
const sliceNums = [1,2,3,4,5,6,7];

// We get a sub array of sliceNums from starting
// from index 1 and ending at index 4
// Index provided at end is NOT included
// AKA: 2, 3, 4
const newNums = sliceNums.slice(1, 4);

// We can also call negative index
// Example this will get the LAST 3 numbers
const newNums2 = sliceNums.slice(-3);

// This will get all numbers STARTING from index 1
const newNums3 = sliceNums.slice(1);

console.log(newNums);
console.log(newNums2);
console.log(newNums3);

// Array Splice
// Changes an array by removing or replace elements
// Needs starting index, how many items we want to remove, new items
const spliceNums = [1,2,3,4,5,6,7,8,9,10]

// Example 1
// This will remove 3 ITEMS starting at INDEX 2
// so this will delete index 2, 3, 4
// newSplice = 3,4,5
// spliceNums = 1,2,6,7,8,9
const newSplice = spliceNums.splice(2, 3);
console.log(spliceNums);
console.log(newSplice);

// Example 2
// NOW we remove 3 items starting from 2
// AND INSERT 99 and 100 STARTING AT INDEX 2
const newSplice2 = spliceNums.splice(2,3,99,100);
console.log(spliceNums);

// Example 3
// If we just want to insert we make the
// how many items we want to remove 0
// In this example we just add 101, 102 starting at index 2
const newSplice3 = spliceNums.splice(2,0, 101, 102);
console.log(spliceNums);

// SORT
// sorts an array by comparing values
// SORT WILL MODIFY ORIGINAL ARRAY
const names = ['Peter', 'John', 'Michael', 'Matthew'];
names.sort();
console.log(names);

// NOTE: sort will convert elements to strings
// If we sort to numbers we get "alphabetical order" of string
// e.g. 10, 105, 20, 23
// To fix: we can produce a comparison funciton
const sortNum = [12,50,25,36,90,55];

function compare(a,b){
  return a-b;
}
console.log(sortNum.sort(compare));

// SORT also works on array of objects
const sortProducts = [
  {
    name:"laptop",
    price: 999
  },
  {
    name:"lamp",
    price: 50
  },
  {
    name:"pepes",
    price: 99999
  }
]

// NOTE: defualt sort is in ascending order
// For descending order: b.price - a.price
console.log(sortProducts.sort((a,b) =>  a.price - b.price));

// ARRAY concat
// MERGES two arrays into one which will be returned
const a = [1,2,3]
const b = [4,5,6]
const c = a.concat(b);

// Will be [1,2,3,4,5,6]
// CONCAT wont change array used e.g. a and b
console.log(c);

// We can concat multiple 
// Result: [1,2,3,1,2,3,4,5,6]
const d = a.concat(a,b);
console.log(d);

// If we just call a.concat() with nothing
// We get shallow copy of a

// We can also concat single things
// Result: [1,2,3,7,8,9]
const e = a.concat(7,8,9);
console.log(e);

// ARRAY FILL
// changes all elements inside the array with the provided value
// MODIFIES THE ARRAY AND CAN RETURN IT
const fillNums = [1,2,3,4,5]

// will be [0,0,0,0,0]
console.log(fillNums.fill(0));

// we can specify starting index and ending index
// this will only fill numbers between 1 and UPTO (NOT INCLUDING 4)
console.log(fillNums.fill(1,1,4));

// Example filling array with array index
console.log(Array(5).fill(0).map((_, index) => index+1));


// ARRAY Includes
// Find if an element is included
const includeNames = ['Kevin', 'Ivan', 'Smith'];

// True
const includedName = names.includes('Ivan');
// False
const includeName_False = names.includes('Patrick');

// ARRAY Join
// creates new string from array by concating all elements
// uses , as separator but you can specify
const country = ['USA', 'NZ', 'AUS'];
const joined = country.join();
// WILL be USA,NZ,AUS
console.log(joined);

// we can specify separator
// WILL be USA - NZ - AUS
const joined2 = country.join(' - ');
console.log(joined2);

// ARRAY reverse
// reverse an array
// WILL MODIFY ORIGINAL ARRAY
const reverseNums = [1,2,3,4,5]

// [5,4,3,2,1]
console.log(reverseNums.reverse());

// IF we don't want to change the original array
// We can also do [...reverseNums].reverse()
const reverse2 = reverseNums.concat().reverse();
console.log(reverse2);

// ALso works on string
const stringTest = 'PEPE PEPE LOOOOOL';
const reverseStr = stringTest.split('').reverse().join('');
console.log(reverseStr);

// ARRAY push
// Add one or more elements at end of array and returns length
const pushNums = [1,2,3];
pushNums.push(4);

// Will be 1,2,3,4
console.log(pushNums);

// We can push multiple members
// 1,2,3,4,5,6,7
pushNums.push(5,6,7);
console.log(pushNums);

// push returns total length so we can assign it and see it here
const totalPush = pushNums.push(8);
console.log(totalPush);

// ARRAY pop
// removes items from an array
// pop() removes the last element and returns it 

const popNums = [1,2,3,4,5];
popNums.pop();

// 1,2,3,4
console.log(popNums);

// ARRAY unshift
// ADD nums at beginning of array and returns new length
const unshiftNum = [1,2,3,4];
unshiftNum.unshift(0);
// Will be 0,1,2,3,4
console.log(unshiftNum);
// We can have multiple paramters e.g. unshiftNum.unshift(0,1,2,3,4);

// ARRAY shift
// removes first element of array and returns it
const shiftNum = [0,1,2,3];
shiftNum.shift();
// becomes 1,2,3
console.log(shiftNum);

function App() {

  return (
    <div className="App">
      <h1>Array functions</h1>
    </div>
  );
}

export default App;
