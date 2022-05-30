class Animal {
    name;
    weigth;

    constructor(name, weight) {
        this.name = name;
        this.weigth = weight;
    }

    setName() {
        this.name = name;
    }
    setWeight() {
        this.weigth = weigth;
    }
    getName(name) {
        return this.name;
    }
    getWeight(weight) {
        return this.weigth;
    }
    toString() {
         console.log(`${this.name},${this.weigth}`)
    }
};



let objAnimal1 = new Animal('Elephant', 45.6);
objAnimal1.toString();

let objAnimal2 = new Animal('objAnimal2', 50);
objAnimal2.setName('Mouse');
