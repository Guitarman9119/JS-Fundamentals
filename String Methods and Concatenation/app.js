const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf() gives you where charachter is at front and back
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt() To see what the character is at index
val = firstName.charAt('2');

// Get last char method to get last character
//equals to negative one if not found
val = firstName.charAt(firstName.length - 1);

// substring()
// This will pluck out Will
val = firstName.substring(0, 4);

// slice()
//Mostly used in arrays : Will
val = firstName.slice(0,4);
//This will give last threeL iam
val = firstName.slice(-3);

// split()
//split string into an array
// into an array at the spaces 
//Uselfull when using tags in a site.
val = str.split(' ');
// For a form
val = tags.split(',');


// replace()
//replace something in the string
val = str.replace('Brad', 'Jack');

// includes()
// see if it is included into the string
val = str.includes('foo');

console.log(val);