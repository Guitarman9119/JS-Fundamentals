const name = 'John';
const age = 30;
const job = 'Web developer';
const city = 'Miami';

let html;

// Without template strings (ES5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: '+ city + ' </li></ul>';

//Functions
function hello(){
    return 'Hello';
}

//With template strings (es6)

html = `
<ul>
<li>Name: ${name} </li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li></li>

</ul>

`;


document.body.innerHTML = html;