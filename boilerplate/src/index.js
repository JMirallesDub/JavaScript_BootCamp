
const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players.join(', ')}`);
};

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players);

let cities = ['Barcelona', 'Cape Town', 'Bordeaux'];

cities = [...cities, 'Santiago'];

const todo = {
    id: 'adfafdasfdsa',
    text: 'Pay the bills',
    completed: false
};

//const text = todo.text;
//const completed = todo.completed;

const { text:todoText, completed, details = 'No details provide', ...others } = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [65, 0, 13, 21];
const [firstAge, , secondAge] = age;

console.log(firstAge);
console.log(secondAge);