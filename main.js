class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    constructor() {
        this.residents = [];
    }
    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }
    addFlat(flat) {
        if (this.flats.length > this.maxFlats) {
            console.log('House is full!');
        } else {
            this.flats.push(flat);
        }
    }
}

const person1 = new Person('John', 'male');
const person2 = new Person('Alice', 'female');

const flat1 = new Flat();
const flat2 = new Flat();
flat1.addResident(person1);
flat2.addResident(person2);

const house = new House(2);
house.addFlat(flat1);
house.addFlat(flat2);