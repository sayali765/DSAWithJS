//Date 22March 2025]
// let  name="Sayali";
// console.log();
// //String it is beahve like  a string of charchter array 

// let arr=[10,20,30,349,44];
// arr.push(50);
// console.log(arr);


// let s= "Radhe Radhe"; //String is immutable aahe majhe apn change nahi karu shakt 
// console.log(s[3]);
// s.push('y');
// console.log(s);  this give error to he clear ki hai array sarkh behave kate but hai collection of array nahiye 

//methods of strings 

//Question Print element in new line  
// let s ="sheryians";
// for(let  i=0;i<s.length;i++){
//     console.log(s[i]);

// }

// let s ="Sayali";
// for(let i =s.length-1;i>=0;i--){
//     console.log(s.charAt(i));
// }




//reverse the string 


// let a="Sayali";
// let rev="";
 
// for(i=a.length-1;i>0;i--){
// rev = rev+ a.charAt(i);
// }
// console.log(rev);

//2nd pointer method to check the string is palindrom or not 


// let s=prompt("Entre  a string");
// let ispallindrome=true;


// let i=0, j=s.length-1;

// while (i<j) {
// if (s.charAt(i)!=s.charAt(j)){
//     ispallindrome =false;
//     break
// }
// i++;
// j--;

// }
// if (ispallindrome) console.log("palindrom");
// else console.log("no palindrom");

//unicode character 
//

// toogle each character

//"AbCDeF" capital la samll and samll la capital karne 


// let s=prompt("Entre a string ")
// console.log(s);
// let toogle="";

// for(leti=0;i<s.length-1;i++)
// {
//     let ch =s.charCodeAt(i);

//     if (ch>=66 && ch<=90){
//         toogle=toogle+String.fromCharCode(ch+32)
//     }

//     else if (ch>=97 && ch <=122){
//         toogle=toogle+String.fromCharCode(ch-32)
//     }
// }
// console.log(toogle);




//Frequency of each  code 

//hello

//h-1
//e-1
//l-2
//0-1

let s=prompt("Entre a number ");
let arr=new Array(128).fill(0);

for(let i=0;i<s.length;i++){
    let index=s.charCodeAt(i);
    arr[index] =arr[index]+1;

}

for(let i=0;i<arr.length;i++){
    if (arr[i]>0)
    {
        console.log(String.fromCharCode(i)+  "    appers at " +  arr[i]+  " times  ");
    }
}




