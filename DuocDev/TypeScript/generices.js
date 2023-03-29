// https://www.youtube.com/watch?v=zY0OpcVv4KI
var numberList = [1, 2, 3];
// quy định kiểu
var handleClick = function (value) { return value; };
var value = 100;
handleClick('100');
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
console.log('l1', l1);
// gán generics cho 1 function
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
console.log('🚀 ~ file: generices.ts:28 ~ l3:', l3);
var l4 = lastT(['a', 'b']);
console.log('🚀 ~ file: generices.ts:28 ~ l4:', l4);
var l5 = lastT(['d', 'e']);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
console.log('m:', m);
// const m2 = makeArr('a');
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT('a');
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY('a', 'b');
var m6 = makeArrXY('a', 3);
var makeTuole = function (x, y) { return [x, y]; };
var m7 = makeTuole('x', 5);
var m8 = makeTuole('a', 'b');
var m9 = makeTuole('g', 23);
var m10 = makeTuole(null, 3);
var makeTypeWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTypeWithDefault('a', 3);
console.log('m11', m11);
