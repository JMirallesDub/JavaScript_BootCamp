let name = 'Jose Miralles';

console.log(name.length);

console.log(name.toUpperCase());

let isValid = function(password){
    return password.length >8 && !password.includes('password');
}

console.log(isValid('asdfp'));
console.log(isValid('adklafjlajfdalsfdoiewr'));
console.log(isValid('adlodlsfspassword'));