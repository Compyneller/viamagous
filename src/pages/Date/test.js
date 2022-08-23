function myFunction(a, b) {
  const diffTime = Math.abs(a - b);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);
}
myFunction(new Date("2020-06-11"), new Date("2020-06-01"));
