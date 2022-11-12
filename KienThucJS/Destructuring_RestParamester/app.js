/**
 * Destructuring
 */

const user = {
  name: 'duoc',
  age: 24,
  sex: 'male'
}

// const name = user.name;
// const age = user.age;
// const sex = user.sex;

const { name, age: userAge, sex } = user; 

console.log({ name, userAge, sex });

// Destructuring với array

const list = [
  1,
  function(a, b) {
    return a + b
  }
];

const [value, sum] = list;

console.log(sum(2,3));

// ======= Spread syntax

const userSpread = {
  name: 'duoc',
  age: 24,
  ability: ['coding']
}

const userTrue = userSpread // userTrue === userSpread => true: cùng tham chiếu 1 vùng nhớ

// shallow copy (copy nông)
const cloneUser = {...userSpread} //  userTrue === userSpread => false

// Rest paramester
const handle = (a, b, ...c) => {
  return c;
}

const value1 = handle(1,2,3,4,5,6);

console.log(value1); // c là [3, 4, 5, 6]

// Sử dũng Rest paramester vs 
const handle2 = ({ a, b, ...c }) => {
  return c
}

const value3 = handle2({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
})

console.log(value3);

