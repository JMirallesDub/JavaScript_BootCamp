const todos = [
    {text:'Todo 1',
    completed: false}, 
    {text: 'Todo 2', 
    completed: true}, 
    {text: 'Todo 3',
    completed: false}, 
    {text: 'Todo 4', 
    completed: true}, 
    {text: 'Todo 5', 
    completed: false}];

/* console.log(todo.splice(2, 1));
console.log(todo.push('Este es un nuevo todo'));
console.log(todo.shift());

console.log(`You have ${todo.length} todos`);

console.log(todo);

todo.forEach(function(r, i){
    console.log(`${i + 1}. ${r}`);
})

for (let index = 0; index < todo.length; index++) {
    console.log(`${index + 1}. ${todo[index]}`);
    
} */

const sortTodos = function(todos){
    todos.sort(function(a){
        if (a.completed === false) {
            return -1;
        }
        else{
            return 1;
        }
    });
};

sortTodos(todos);
console.log(todos);