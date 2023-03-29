// https://www.youtube.com/watch?v=zY0OpcVv4KI

interface List<T> {
  length: number;
  [index: number]: T;
}

const numberList: List<number> = [1, 2, 3];

// quy định kiểu
const handleClick = <Type>(value: Type) => value;

let value = 100;

handleClick<String>('100');

// Henry dev
type strArray = Array<string>;
type numArray = Array<number>;

const last = (arr: Array<Number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
console.log('l1', l1);

// gán generics cho 1 function
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
console.log('🚀 ~ file: generices.ts:28 ~ l3:', l3);

const l4 = lastT(['a', 'b']);
console.log('🚀 ~ file: generices.ts:28 ~ l4:', l4);

const l5 = lastT<string>(['d', 'e']);
const makeArr = (x: number) => [x];

const m = makeArr(5);
console.log('m:', m);

// const m2 = makeArr('a');

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT('a');

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(5, 6);
const m5 = makeArrXY('a', 'b');
const m6 = makeArrXY('a', 3);

const makeTuole = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuole('x', 5);
const m8 = makeTuole('a', 'b');
const m9 = makeTuole<string, number>('g', 23);
const m10 = makeTuole<string | null, number>(null, 3);
const makeTypeWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTypeWithDefault<string | null>('a', 3); // Không cần chuyền giá trị thứ 2.
console.log('m11', m11);

// GENERICS EXTENDS
const makeFullName = (obj) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
