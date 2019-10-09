const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
};

console.log(square(5));


const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'Vikram',
    age: 32
},{
    name: 'Jess',
    age: 22
}];

const under30 = people.filter(function (person){
    return person.age < 30;
});

const under302 = people.filter((person) => person.age <30)
console.log(under30);

const equal22 = people.find((person) => person.age === 22);

console.log(equal22.name);