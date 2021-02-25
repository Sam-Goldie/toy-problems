/* animalShelterQueue
needed methods: enqueue, dequeueAny, dequeueDog, dequeueCat
lets imagine that queue items take the form of: {id: id, species: "dog"/"cat"}

CATLIST: [1, 2, 3, 5]
DOGLIST: [4, 6, 7, 8]

CATLIST: [4]
DOGLIST: []

[1 (dog), 2 (dog), 3(cat), 4(dog)]

data looks like this: {name: name, species: species}

animallist [doug(cat), bert(dog), joe(dog), tony(cat)]

*/

const shelterQueue = function() {
  this.head = null;
  this.next = null;

  this.enqueue = function(animal) {
    let currentHead = this.head;
    while (currentHead.next !== null) {
      currentHead = currentHead.next;
    }
    currentHead.next = animal;
  }

  this.dequeueAny = function() {
    const dequeuedAnimal = this.head;
    this.head = this.head.next;
    return dequeuedAnimal;
  }

  this.dequeueDog = function() {
    let currentNode = this.head;
    while (currentNode.next.species !== 'dog') {
      if (currentNode === null) {
        return -1;
      }
      currentNode = currentNode.next;
    }
    const dequeuedAnimal = currentNode.next;
    currentNode.next = currentNode.next.next;
    return dequeuedAnimal;
  }

  this.dequeueCat = function() {
    let currentNode = this.head;
    while (currentNode.next.species !== 'cat') {
      if (currentNode === null) {
        return -1;
      }
      currentNode = currentNode.next;
    }
    const dequeuedAnimal = currentNode.next;
    currentNode.next = currentNode.next.next;
    return dequeuedAnimal;
  }
};