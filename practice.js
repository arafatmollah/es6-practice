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


//
const divisible = (num) => num / 5;
const result = divisible(10);
console.log(result);
//
const two = (num1, num2) => {
    const first = num1 + 2;
    const sec = num2 + 2;
    const r1 = (first + sec) * 2;
    return r1;
}
const final = two(5, 10);
console.log(final)

//
const third = (num1, num2, num3) => num1 * num2 * num3;
const r2 = third(2, 4, 6);
console.log(r2);

//map parctice
const arr1 = [23, 45, 56, 20];
const newArr = arr1.map(array => array * 2);
console.log(newArr);

const practicearray = [5, 10, 15, 20];
const newPracticeArray = practicearray.map(array => array * 5);
console.log(newPracticeArray);