const dog = {
    bark() {
        return 'woof';
    }
}

const human = Object.create(dog, {name: {value: 'Jack'}});

console.log(human)

human.bark();