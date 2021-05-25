function* generateId() {
  yield 1;
  console.log('Continue to run');
  return 2;
}
const newId = generateId();
console.log(newId.next());
console.log(newId.next());

console.log(newId.next());
