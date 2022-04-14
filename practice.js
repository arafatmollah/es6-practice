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

//filter
const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30];
const newArray = filterArray.filter(array => array % 2 == 0);
console.log(newArray);

//find
const findArray = [{
    name: 'Daraz',
    product: 'galaxy',
    price: 5000,
    des:'phone'
},
{
    name: 'Daraz',
    product: 'galaxy',
    price: 5000,
    des:'phone'
},
{ name: 'monarch-mart', product: 'i-phone', price: 4500, des: 'phone' },
{ name: 'monarch-mart', product: 'i-phone', price: 5000, des: 'phone' },
    { name: 'monarch-mart', product: 'i-phone', price: 3500, des: 'phone' },
    { name: 'monarch-mart', product: 'i-phone', price: 500, des: 'phone' },
    {name:'monarch-mart',product:'i-phone',price:5000,des:'phone'}
]
const newfindarray = findArray.find(array => array.price === 5000);
console.log(newfindarray);

//destrure
const favourite = {
    name: 'leo-messi',
    sports: 'football',
    age: 34,
    foot: 'left-foot',
    nickname : 'goat'
}
const { name, sports, age, foot, nickname } = favourite;
console.log(name, sports, age);

//destructure array'
let on1, two1, three1 ;
[ on1, two1, three1 ] = ['arafat', 30, 'favourite', 90];

console.log(three1);
const [n1, n2, three] = ['english', 'bangla', 'physics'];
console.log(three);

//
const threeparam = (num1, num2, num3 = 7) => num1 + num2 + num3;
const r3 = threeparam(3, 4);
console.log(r3);

//nested obj
const newobj = {
    name: 'javascript',
    year: 1993,
    use: 'master of all',
    main:'web-development',
    more: {
        name1: 'c#',
        year: 1970,
        ude: 'game development',
        main1: 'architecture'
    } 
}
console.log(newobj?.more?.ude);
