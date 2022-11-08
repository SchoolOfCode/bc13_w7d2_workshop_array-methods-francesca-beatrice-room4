let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const multipleByThree = someNumbers.some((number) => {
  return number % 3 === 0;
});

const multimpleByFive = someNumbers.some((number) => {
  return number % 5 === 0;
});

const multimpleBySixty = someNumbers.some((number) => {
  return number % 60 === 0;
});

const multimpleByNinety = someNumbers.some((number) => {
  return number % 90 === 0;
});
