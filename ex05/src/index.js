class Microsoft {
    constructor(name){
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
    occupation(){
        return `${this.name} is a philantropist!`;
    }

}

class Facebook extends Microsoft {
    constructor(name, age){
         super();
         this.name = name;
         this.age = age;
       
    }
    studentAge() {
        return `${this.name} is ${this.age}`;
    }

}

let henry = new Facebook("William Henry Gates III")
console.log(henry.occupation())
let elliot = new Facebook('Mark Elliot Zuckerberg', 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());

module.exports = {
    Microsoft,
    Facebook
}