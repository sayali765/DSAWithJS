
//basic Question using console
// // Q log youre name an hobby

// console.log("sayali","software developer ")

// console.log(45*2-10)
// //use console.log to print current year 
//  const newdate=new Date();
//  console.log(newdate.getFullYear());

//  var first="sayali ";
//  var last ="pathak ";
//  console.log(first + "" +last)

// //Track the variable by logging it before and after updaing 

// var a=23;
// console.log(a);
// a=25;
// console.log(a)
// //use consloe.error () to simulate an error message 

// console.error("something went wron here ");


// //create the a square of 12
// console.log(12*12);


// //Print the value of variable holding the value true
//  var a =true;
//   console.log(typeof(a));
//   console.log(typeof a);

  //create a varible holding the age and log whenever it is greater than 18

// var age=13;
// if (age>18)
// {
// console.log(age);
// }
// else {
//     console.log("youre not eliagble for vote")
// // }
// var a=100/0;
// console.log(a);
//console.log(100/0);



// Question based upon the datatypes & variable
// Declare the let variable and log the output 
// let a=10;
// console.log(a);

//print the log PI value 
// const pi=Math.PI;
// console.log(pi);

//Reassign the value and  declared with let and result 

// let a=20;
// a=98;
// console.log(a);

//log the typeof null
//console.log(typeof null);

//create a  variable with number as a string eg("25") and log its type 

// let a=10;
// var str=String("a");
// console.log(typeof str);


// let a="sa",b=10,c=true;
// console.log(typeof a , typeof b, typeof c);

// //declared the variable without assigning a value log its type 
// let e;
// console.log(typeof e);

//use const to create array and observe the error
// const a=[10,23];
// a=[];
// console.log(a);

//pan aapn value he pop laru sjakto mahj eupdat ehau shakte array madhe 

// const aa=[1,23,45];
// aa.pop(); //last vali value gayap karto 
// console.log(aa); 



//loops in js questios
//create a while loop to print the number from 1 to 50.

// for(i=1;i<51;i+2){
//     console.log(i);
// }

//use a while loop to sum all the numbers from 1 to 10

// let a=1;
// let sum=0;
// while(a<=10){
//   sum=sum+a;
//   a++;
// }

// console.log(sum);
// console.log(a);

//create a for... of loop to log each character to string "javascript"

// let str="javascript";
// for (let chacha of str)
// {
// console.log(chacha);
// }
  

//write a for loop that skip evet number from 1 to 20 


// for(i=0;i<=20;i+1)
// {
//   if (i%2===0)
//   {

//   }
//  console.log(i);
// }



//   var aa=5;
//   do{
//     console.log(aa);
//     aa--
//   }
// while (aa>0) 
  


//create a for loop that calcuate the factorial of 5 


//print the factorial of 5 using the for loop
// let fact=1;
// for(i=5;i>0;i--)
// {
//   fact=fac*i;
// }
// console.log(fact);

// write a neasted loop that calculate the grid 3*3
//Use  a for loop to reverse a array 

//use a while loop  that logs numbers from 1 to 100 divisiable by 5

// i=1;
// while(i<=100){
//   if(i%5===0){
//     console.log(i);
//   i++;
//   }
  
// }


//Use a for loop in to iterate over n objec and log its keys.
// var obj={
//   name:"a",
//   email:"a@example.com",
//   age:26
// }
// for(let key in obj){
//   console.log(key);
// }



//create an array of youre top 5 fav movie 


// var movie=['chi v chi sai ka ', 'bai pan bhari deve','faster fane ','ti sadya ky karte']
// movie.forEach(function(value)
// {
// console.log(value);
// })



// find and log 2nd element of an array 
// var arr=[1,2,3,4];
// console.log(arr[1]);//index starts form zero 


// //add two new element in array at start using unshift().
// var arr =[1,2,3,4,5,6];
// arr.unshift(0);
// arr.unshift(-2);

//remove the last element of an array and log updated array
// var arr=[1,2,3,34,56,677,8]
// arr.pop();
// console.log(arr);

//Use slice to extract the first three element of an array 
// var arr=['1','2','3','4','5','6','7','8','9','10']
// console.log(arr.slice(0,4));

//find the index of specific element using indexof 

// let arr=['a','e','i','o','u']
//  console.log(arr.indexOf('u'));

//check if a value exist in an array using .includes().
//It rovides ouput as a true and false values menas bascally boolean values 

// var arr=[1,2,3,4,5];
// console.log(arr.includes(23));
// console.log(arr.includes(5));


// combine 2 arryas using concat 
// var arr1=[1,2,34,4,4,6,7];
// var arr=[5,6,7,89,0];
// console.log(arr1.concat(arr));

//sort an array using the asceding order [5,2,9,1]
 let a=[5,2,9,1]







// write a  program that crtaeas a copy of an array without mutating the original 


// var arr=[11,23,45,7];
// var arr2=[...arr];
// console.log(arr2);

//create a function that retun the value even or odd 

// function evod(value){
//   if(value%2===0) return "even";
//   else return "odd";
// }
// console.log((evod(13)));


//create a function that accepts an array and return sum of its elements

// function area(r){
//   return Math.round (Math.PI*r*r*r);
// }
// console.log((12));


//create a function that accepts an array and return the sum of its elements.

// function sumofarr(){
//   var sum=0;
//   arr.forEach(function(v){
//     sum=sum+v;

//   })
//   return sum;
// }
// console.log(sumofarr[1,2,3,4,5,6,7,8,9,10]);

//check that string start with the specific character

// function checker(str,char){
//   return str.toLowerCase().startsWith(char.toLowerCase)
// }
// console.log(checker("Sayali",'s'));

//write a fuction to find maximum of two numbers
// function max(a,b){
//   if(a>b)return a;
//   else if (a<b) return b;
//   else return "equals";
// }
//  console.log(max(1,2));


//craete a function that takes the input nad retun its factoial

// function getfact(num){
//   let fct=1;
//   for(var i=1;i<=num;i++)
//   {
//     fct=fct*i;
//   }
//   return fct;
// }
// console.log(getfact(5));


// write a function to take a string and retun its reverse

// function abcd(value){
//   return value.split('').reverse().join('');
// }
// console.log(abcd('sayali'));


//kabab case

// function kebab(str){
//   str.split('').join('_');
//   return str;
// }
// console.log(kebab("hey kaise ho "));


// function kabab(str){
//   return str.replaceAll("","-");
// }
// console.log("hey kaise ho ");

//function log 

// function abcd(){
//   console.log("hello world");
// }
// abcd();


















//check if a value exist in an array using . includes()
