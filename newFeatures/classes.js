class Human {

    constructor(){
        this.gender = 'male2'
    }

    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human {

    constructor() {
        super();
        this.name = 'Max'
        this.gender = 'feMale'    
    }

    printMyName() {
        console.log(this.name)
    }
}

const person = new Person();

person.printMyName();
person.printGender();