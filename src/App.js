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

const nonDupe = dupeNums.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
})

console.log(nonDupe);




function App() {

  return (
    <div className="App">
      <h1>Array functions</h1>
    </div>
  );
}

export default App;
