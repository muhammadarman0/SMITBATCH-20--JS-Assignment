// Section 7 – call(), apply(), bind() (27–29)

// Q27.
// call(), apply(), aur bind() me difference explain karein.

// call() ma ap direct argument pass kar sakthe hai
// apply() ma ap ko argument array ma pass karna hota hai
// bind() ma apko function return karna hot ya console.log ma print karna hota hai


// Q28.
// Output predict karein.



// const user = {

// name:"Hasan"

// };



// function greet(city){

// console.log(this.name, city);

// }



// greet.call(user,"Karachi");



// Q29.
// Output batayein.



// const user = {

// name:"Ali"

// };



// function sayHello(country){

// console.log(this.name, country);

// }



// const result = sayHello.bind(user);



// result("Pakistan");