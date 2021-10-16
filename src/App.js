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

const total = products.map(item => ({
  name: item.name,
  total: item.price * item.count
}));
console.log(total);

function App() {

  return (
    <div className="App">
      <h1>Array functions</h1>
    </div>
  );
}

export default App;
