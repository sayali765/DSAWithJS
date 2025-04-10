// let  ans = Number( prompt ("What is youre age "));
// console.log(ans); 
//Promot madhe aapn je pn kahi gheto na tr te black madhe yet majjeh ti 
//String ahe baroabr mg tyaa aaplya number madhe convert arayc aasel tr na 
//aapn na number lavto mg ti blue hote console madhe he aahe 
//Explanation about it 


// if(ans>=18){
//     console.log("You can vote ");
// }
// else{
//     console.log("You cannot vote ");
// }

// let ans= Number(prompt("Entre a number "));

//  if (isNaN(ans))
//  {
//     console.log("Invalid input ");
//  }
// else if  (ans>=18){
//     console.log("you can vote ");
// }
// else{
//     console.log("You cannot Vote ");
// }

//Shop discount

// let amount=  Number (prompt("What is final Amount "));
// if (amount>0 && amount<=5000)
// {
//      console.log(amount);
// }
// else if (amount>5000 && amount<=7000){
//     console.log(amount-Math.floor((5*amount)/100));
// }
// else if (amount>7001 && amount<=9000){
//     console.log(amount-Math.floor((10*amount)/100));
// }
// else if (amount>=9000){
//     console.log(amount-Math.floor((5*amount)/100));
// }
// else{
//     console.log("Invalid Input ");
// }
//above is not a good ptogramer do 

// let amount = Number(prompt("Entre a Amount  "));
// dis=0;

// if (amount>0 && amount<=5000){
//     dis=0;
// }
// else if (amount>7001 && amount<=9000){
//     dis=5;
// }
// else if (amount>9000){
//     dis=10;
// }
// console.log(amount-Math.floor(dis*amount)/100);



//Billing SYStem


// let unit=Number( prompt("Entre a Unit "));
//  amount=0;
// if(unit>400){
//    amount= (unit-400)*13;
//    unit =400
// }

// if (unit>=201 && unit<=400)
// {
//     amount +=(unit-200)*8;
//     unit=200
// }


// if(unit>100 && unit<=200)
// {
//     amount +=(unit-100)*6;
//     unit =100;
// }
// amount+= unit*4;

// console.log(amount);

//120 



// let amount=Number(prompt("Entre a Number "));

// if(amount>=500){

//     console.log("500 Notes : "  +Math.floor(amount/500));
//     amount = amount%500;
// }


// if (amount>=200)
// {
       
//    console.log("200 Notes " +Math.floor(amount/200));
//    amount = amount%200;

// }

// if (amount>=100)
// {
       
//    console.log("100 Notes " +Math.floor(amount/100));
//    amount = amount%100;

// }

// if (amount>=50)
// {
       
//    console.log("50 Notes " +Math.floor(amount/50));
//    amount = amount%50;

// }

// if (amount>=20)
// {
       
//    console.log("20 Notes " +Math.floor(amount/20));
//    amount = amount%20;

// }
// if (amount>=10)
// {
       
//    console.log("10 Notes " +Math.floor(amount/10));
//    amount = amount%10;
// }


// if (amount>=5)

// {
//     console.log("5 Notes " +Math.floor(amount/5));
//     amount = amount%5;
// }

// if (amount>=2)

// {
//     console.log("2 Notes " +Math.floor(amount/5));
//     amount = amount%2;
// }

// if (amount===1){
//     console.log(" 1 notes : " +amount);
// }


//ternary Operator 

// console.log(122>13?"hello": "hey");


//Switch case Handiling multiple codirions 

// let day =2;

// switch(day){
//     case 1: console.log("Monday ");
//     break;

//     case 2: console.log(" Tuesday ");
//     break;

//     case 3: console.log(" Tuesday ");
//     break;

//     case 4: console.log(" Tuesday ");
//     break;

//     case 5: console.log(" Tuesday ");
//     break;
// //False throw

//     default:console.log(" Invalid ");


//exact match karynasathi  switch 
//Multiply conditions var same execution kr sakte hai 



// let day =2;

// switch(day)
//     {
//       case 1:
//       case 2:
//       case 3:
        
//           console.log("tuesday");
//           break

//           case 4:
//             case 5:
//             case 6:
              
//                 console.log("Monday");
//                 break


//           default :console.log(" Invalid ");

//     }


// switch(true)
// {
//       case 1 : 19>10
//      console.log("true");
//      break

//      case 2 : 91<10
//      console.log("False");

// } this is an another way of SWitch case in  JS 

// let num=0.1+ 0.2

// switch (num) {
//     case 0.1: console.log("hey ");
        
//         break;

//         case 0.2: console.log("2nd  ");
        
//         break;


//         case 0.3: console.log("hello ");
        
//         break;


//     default:
//         break;
// } Precious code 



