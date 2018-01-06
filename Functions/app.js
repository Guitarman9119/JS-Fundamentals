// Functions Declerations

function greet(firstName = 'John', lastName = 'Doe'){
/*if(typeof firstName === 'undefined'){firstName = 'John'}
if(typeof lastName === 'undefined'){firstName = 'dOE'}*/
    return 'hello ' + firstName + ' ' + lastName;

}

//console.log(greet());

//Function Expressions

const square = function(x){

    return x*x;
};

//console.log(square(8));

//Immediatley invokable functions expressions IIFEs

//(function(){
//console.log("IIFE RAN...");
//})();

//(function(name){
//console.log('Hello ' + name);
//})("Brad");


//Property Method

const todo = {

    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id} `)
    }
}

todo.delete = function(){
    console.log('Delete todo..');
}

todo.edit(22);
todo.delete();