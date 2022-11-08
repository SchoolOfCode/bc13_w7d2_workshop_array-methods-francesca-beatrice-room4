let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

const multipleOfSeven = sevenTimesTable.every((number) => {
  return number % 7 === 0;
});

const multipleOfSeventySeven = seventySevenTimesTable.every((number) => {
  return number % 77 === 0;
});

const findNumber = seventySevenTimesTable.find((number) => {
  return;
});
