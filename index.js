//Use the let keyword in an example function
const example1=()=>{
    let a=2;
    for(let a=0;a<5;a++){
        console.log("hi");
    }
    console.log(a);
}

//Use the const keyword in an example function
const example2=()=>{
    const pi=Math.PI;
    pi=22/7; //throw error
    console.log(pi);
}

//Create an arrow function that finds the square of a number
const square=(num)=>{
    return num**2;
}

//Create an arrow function that finds the square of a number
const add=(num1,num2)=>{
    return num1+num2;
}

//Create a multi-line string and then split the string into the corresponding lines and print the lines
const multiLinePrint=()=>{
    const multiLine=`My name is Varnit.\nI'm from Kanpur (U.P.).\nI'm 23 years old.`;
    const multiLineSplit=multiLine.split('\n');
    multiLineSplit.forEach((line)=>{
        console.log(line);
    })
}

//Create a function that calculates the area of a circle. If the radius of the circle is not provided assume that the default radius is 5. Use the JavaScript default parameter feature to implement the function
const areaOfCircle=(radius=5)=>{
    const squareOfRadius=square(radius);
    return Math.PI*squareOfRadius;
}
	
// let person = {
//     name: 'Harry Potter',
//     location: 'London'
// }

// Create a string that prints the name and location of the person in below format:
// "Harry Potter is located in London."

const templateLiteral=(person)=>{
    let str=`${person.name} is located in ${person.location}`
    console.log(str);
}



// Show an example where an array is destructured using destructuring assignment
const arrayDestructured=()=>{
    let arr=[1,2];

    const [a,b]=arr;

    console.log(a,b);
}


// Show an example where an object is destructured using destructuring assignment in the function body
const objectDestructured=()=>{
    let person={
        name:"Varnit Agrawal",
        age:23,
        location:"Kanpur"
    }

    const {name,age,location}=person

    console.log(name,age,location);
}

// Show an example where a function argument which is an object is destructured inside the parantheses of the function
const sumUsingDestructured=({a,b})=>{
    console.log(a+b);
}

// Show an example where enhanced object literals is used.
const createPersonDetail=([name,age])=>{
    const person={
        name,
        age,
        hi(friendName){
            console.log(`${this.name} say hi to ${friendName}`);
        }
    }
    return person;
}

// Create a function sum that takes any number of numbers as arguments and calculates the sum of the input numbers using the rest parameter syntax
const sum=(num1,num2,...otherNumber)=>{
    let sumOfNumbers=num1+num2;
    otherNumber.forEach((item)=>{
        sumOfNumbers+=item;
    })
    console.log(sumOfNumbers);
}

// Use the spread syntax to expand an array of numbers and pass the elements of the array as arguments to the sum function created in the previous example
const sumOfArraySpread=()=>{
    let arr=[1,2,3,4,5]
    sum(...arr);
}

// Use the for..of loop to iterate through all values in an array
const itrateArray=(arr)=>{
    for(let item of arr){
        console.log(item);
    }
}

// Iterate through all keys of an object using Object.keys
const ObjectKey=(obj)=>{
    const keys=Object.keys(obj);
    for(let key of keys){
        console.log(key);
    }
}

// Iterate through all values of an object using Object.values
const ObjectValue=(obj)=>{
    const values=Object.values(obj);
    for(let value of values){
        console.log(value);
    }
}

// Iterate through all the key / value pairs of an object using Object.entries
const ObjectEntries=(obj)=>{
    const entries=Object.entries(obj);
    for(let entry of entries){
        console.log(`${entry[0]}==>${entry[1]}`);
    }
}


/*--------------------CALLING ABOVE FUNCTIONS---------------------*/

example1()

// example2() //--->throw error

const result1=square(3);
console.log(result1);

const result2=add(2,3);
console.log(result2);

multiLinePrint();

const result3=areaOfCircle(10);
console.log(result3);
const result4=areaOfCircle();
console.log(result4);


let person = {
    name: 'Harry Potter',
    location: 'London'
}
templateLiteral(person);

arrayDestructured();

objectDestructured();

sumUsingDestructured({a:1,b:2,c:3});

const detail=createPersonDetail(["varnit",23]);
detail.hi("aman");

sum(1,2,3,4,5);

sumOfArraySpread();

itrateArray([1,2,3,4,5])

ObjectKey(person);

ObjectValue(person);

ObjectEntries(person);