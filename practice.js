let arafat = 'this is my full name. are you sure';
arafat = 'in the previous i say that, this is my full name. are you sure';
console.log('let can re-assign', arafat);

const nature = 'green is the main value of the green';
console.log('const can not be changed', nature);

const address = {
    name: 'Arafat',
    hobby: 'web development',
    expected: 40000,
    goal: 6,
    role: 'software company'
}
//console.log(address)

const fulltemplate = `Hello from arafat. It is the main thing's that arafat can do
${nature}. Agin said that ${arafat}. Okay I Think I finished no :${address.name}, ${address.expected}`;
console.log(fulltemplate);