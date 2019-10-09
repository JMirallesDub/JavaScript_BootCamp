const createCounter = () => {
    let count = 0;

    return {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        get(){
            return count;
        }
    };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.get());

//Adder
const createAdder = (a) => {
    return (b) => {
        return a + b;
    }
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(-90));

//Tiper
const createTipper = (tip) => {
    return (amount) => {
        return amount * tip;
    }
};

const tip10 = createTipper(.10);
console.log(tip10(90));