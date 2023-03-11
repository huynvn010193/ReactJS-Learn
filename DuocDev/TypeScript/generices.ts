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
