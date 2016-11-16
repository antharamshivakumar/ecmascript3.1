/* ● Create an array and pass in a function as rest parameter, then
● Find out length of array using getArrLength()
● Multiply by 2 to all element and display new array using multiplyByTwo()
● Sort rest arguments using sortRestArgs() */


let sum = function(...args) {

    console.log(args);
};

console.log(sum(2,3,4,5));

/* output
[2,3,4,5] */



let place = ['banglore', 'bidar', 'hubli'];
let car = ['lambo', 'merc', ...place, 'bmw'];
console.log(car);

/* output

Array[5]
0: "lambo"
1: "merc"
2: "banglore"
3: "bidar"
4: "hubli"
5: "bmw"
length:6 */



let multiply = (mul, ...numbers) => {

console.log(mul, numbers)
};

multiply(2,7,4,5);



/*output
2
[7,4,5] */




/* Create an object apiDetail which should contain:
● baseUrl
● Method
● Request api parameter (i.e. /user)
● Header
● Post data if method is post
Pass that object in function where make an API call.*/

