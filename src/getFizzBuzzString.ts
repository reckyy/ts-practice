type G = (i: number) => string | number;

const getFizzBuzzString: G = (i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return i;
  }
};

type S = (start: number, end: number) => number[];

const sequence: S = (start, end) => {
  return [...Array(end)].map((_: undefined, idx: number) => idx + 1);
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
