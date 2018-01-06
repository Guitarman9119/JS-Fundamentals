// Create some arrays

const numbers = [44, 103,33,23,44,36,5];

const numbers2 = new Array(22,45,33,76,54);

const cars = ['apple', 'bmw', 'Ford'];

let val;

// Get array length

val = numbers.length;

//check if something is array
val = Array.isArray(numbers);

// Get single value 
val = numbers[0];

//Insert something in Array
numbers[2] = 100;

//Fnd index of value
val = numbers.indexOf(36);

// Mutating Arrays
//adding onto array at end
numbers.push(250);

//adding to front
numbers.unshift(120);
//Take off from end
numbers.pop();
//Take of from front
numbers.shift();
//Splice values
numbers.splice(1,3);
//Reverse 
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

//Sorting arrays
val = numbers.sort();

//Use the "compare" function

val = numbers.sort(function(x, y){
    return x -y;
});

// Reverse sort 

val = numbers.sort(function(x, y){
    return y -x;
});

// Find
function under50(num){
    return num <50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);