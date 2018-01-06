const person = {

    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ["music", 'sports'],
    adresss: {
        city: 'Miami',
        state: 'FL' 
    },
    getBirthYear: function (){
        return 2017 - this.age;
    }

}

let val;

val = person;

//Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.adresss.state;
val = person.getBirthYear();

const people = [

    {name: 'John', age:30},
    {name: 'Mike', AGE:23}

];

for( let i = 0; i <people.length; i++){
    console.log(people[i].name);
}


console.log(val);
