const myAge = 27;
let message;

message = myAge >= 18 ? 'You can vote' : 'You cannot vote';

console.log(message);

const team = ['Tyler', 'Porter'];

const messages = team.length <= 4 ? `Team size: ${team.length} ` : "Too many people on your team.";

console.log(messages);