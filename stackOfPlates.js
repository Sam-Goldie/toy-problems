// we need to set up a stack of stacks

/* needed methods:
push
pop
need to choose the maximum stack size upon initialization of the stack stack (take it as an argument)

we have an object with a push and pop method, and a stackMax prop that is set on initialization according to provided argument

[[5, 3, 4], [10, 3, 2, 3], [4, 2, 0, 5]]

if you call pop method:
shift on the first item in the master array
then, if the first item's length is 0
shift it off the master array
if the length of that first item is 0, you shift that first item off the master array and then do the same for the next item

if you call push method
unshift the provided value onto the first array element
then, if the first array element is equal to stackMax
unshift on an empty array to the master array

popAt method would take the index of the targetted stack
it would look at that index in the master array, shifting the first element in it
if the array is empty, splice it out of the master array

*/

const SetOfStacks = (stackMax) => {
  this.stackMax = stackMax;
  this.superStack = [[]];
}

SetOfStacks.prototype.push = (value) => {
  this.superStack[0].unshift(value);
  if (this.superStack[0].length >= this.stackMax) {
    this.superStack.unshift([]);
  }
};

SetOfStacks.prototype.pop = () => {
  this.superStack[0].shift();
  if (this.superStack[0].length === 0) {
    this.superStack.shift();
  }
};

SetOfStacks.prototype.popAt = (index) => {
  this.superStack[index].shift();
  if (this.superStack[index].length === 0) {
    this.superStack.splice(index, 1);
  }
};

const plates = new SetOfStacks(8);