let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326  
  };
  
  let otherBook = {
    title: '19842',
    author: 'George Orwell2',
    pageCount: 3262  
  };
  

  let getSummary = function(book){
      console.log(`${book.title} by ${book.author}`);
  };

  getSummary(myBook);
  getSummary(otherBook);
let convertValues ={
  celsius: 0,
  fahrenheit: 0,
  kelvin: 0
};

let getConvert = function(valor){
  return { celsius: (valor - 32) * (5/9),
  kelvin: (valor + 459.67) * (5/9),
  fahrenheit: valor
  }
}

let temps = getConvert(74);

console.log(`Fahrenheit = ${temps.fahrenheit}, Celsius = ${temps.celsius}, Kelvin = ${temps.kelvin}`);
