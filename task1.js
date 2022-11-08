const cats = ["tony", "daisy", "socks", "rockie" ];
const capitalisedCats = cats.map ( (cat) => {
    console.log(cat.toUpperCase());
})

const animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basilisk",
  ];
  const animalsB = animals.filter( (animal) => {
    return animal.charAt(0)=='b'
  })