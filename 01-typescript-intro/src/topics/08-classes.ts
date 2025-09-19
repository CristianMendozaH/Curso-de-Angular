

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'New York, USA'
    ) { }
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        name: string,
        address: string
    ) {
        super(name, address);
    }



const ironman = new Person('Ironman', 'Malibu, California');

console.log(ironman);














