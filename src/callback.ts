function map<T, U>(array: U[], callback: (x: U) => T): T[] {
  const result: T[] = [];
  for (const i of array) {
    result.push(callback(i));
  }
  return result;
}

const data = [1, 1, 2, 3, 5, 8, 13];
const result = map<number, number>(data, (x) => x * 10);
console.log(result);

const booleanData = [1, -3, -2, 8, 0, -1];
const booleanResult: boolean[] = map<boolean, number>(
  booleanData,
  (x) => x >= 0,
);
console.log(booleanResult);
