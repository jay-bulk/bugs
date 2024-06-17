// Because the original function was not invoked with "new"
// the object "leo" was undefined
// There's a few ways to avoid this:
// 1. add in a console warning
function Animal (name, species) {
  if (this instanceof Animal === false) {
    console.warn('Forgot to call Animal with the new keyword')
  }

  this.name = name
  this.species = species
}

// 2. For the return of a new object
function Animal (name, species) {
  if (this instanceof Animal === false) {
    return new Animal(name, species)
  }

  this.name = name
  this.species = species
}

// Here's what's going on under the hood
function Animal (name, species) {
  // const this = Object.create(Animal.prototype)
  
  this.name = name
  this.species = species

  return this
}

const whiskers = new Animal('Whisker', 'cat')
const snoop = new  Animal('Lyle', 'crocodile')
