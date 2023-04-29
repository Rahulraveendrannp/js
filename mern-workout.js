function maxElement(arr){
let largest=arr[0]
for(i=1;i<arr.length;i++){
if(largest<arr[i]){
    largest=arr[i]
}
}
 console.log(largest);
}
// maxElement([5,10,20,56,89])
function reverseString(str){
    let revstring='';
    for(i=str.length-1;i>=0;i--){
revstring+=str[i]
    }
    console.log(revstring);
}
// reverseString("newowrld")
 function sortArray(arr){
  let sortedarr = arr.sort((a,b)=> a-b)
    console.log(sortedarr);
 }
//  sortArray([25,35,6,2,9])

function sumOfEven(arr){
let evenSum=0
for(i=0;i<arr.length;i++){

    if(arr[i]%2===0){
        evenSum+=arr[i];
    }
}
console.log(evenSum);
}
// sumOfEven([5,8,9,15,25,56])

function checkPrime(num){
 let flag=0
    for(i=2;i<=num/2;i++){
        if(num%i===0){
            flag=1
            break;
        }
    }
    if(flag===1){
        console.log(`${num} is not a prime number`)
    }
    else {console.log(`${num} is a prime number`)}
}

// checkPrime(12);

function secLargest(arr){
    let first=arr[0];
    let second=arr[1];
    if(first<second){
        temp=first;
        first=second;
        second=temp;}
for(i=2;i<arr.length;i++){
if(first<arr[i]){
    second=first;
        first=arr[i];
        ;}}
for(i=2;i<arr.length;i++){
    if(second<arr[i] && first!==arr[i]){
        second=arr[i]}}
    console.log(`second largest elemnt is ${second} `);}

// secLargest([25,58,8,23,65,96,33,252])

function dltDuplicate(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
          arr.splice(i, 1);
          i--; }     }
           console.log(arr)
}
// dltDuplicate([25,56,86,8,25,8,95])
function totalSum(arr){
    let sum=arr.reduce((accumulator, currentValue)=>
       accumulator + currentValue , 0);
    // for(i=0;i<arr.length;i++){
    //         sum+=arr[i];
    // }
    console.log(sum);
    }
    // totalSum([5,8,9,15,25,56])

function getPrimes(num){
    let arr=[2]; 
    for(let j=3;j<=num;j++){
        let flag=0;
        for( let i=2;i<=j/2;i++){
            if(j%i===0){
                flag=1;
               break; 
            }    }
        if(flag===0){
            arr.push(j);
         }  }
    console.log(arr)
    return arr;
}
// getPrimes(20)

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];    }
      if (arr[i] > max) {
        max = arr[i];
      } } 
    console.log(`smallest element ${min} and largest element ${max}`);
  }
//   findMinMax([45,25,85,26,5,23,56,89])

function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
}
function findfact(n){
    const fact =  factorial(n);
    console.log(fact)
}
// findfact(4);

function palindrome(str){
    str = str.toLowerCase().replace(/[0-9]/g, "");
   let revstr=str.split('').reverse().join('') ;
   if(revstr===str){
    console.log("enterd string a palindrome");
    return
   }
console.log('enterd string not a palindrome');
}
// palindrome("malayalam")
function isArmstrongNumber(num){
    let str=num.toString()
  let len=str.length
  let sum=0
for(i=0;i<len;i++){
let digit=parseInt(str[i])
    sum+=digit**len
}
if(sum===num){
    console.log("given no is a Armstrong number");
    return;
}
console.log("given no is not a Armstrong number");
}
// isArmstrongNumber(152);

function fibonacci(n){
    let a = 0, b = 1;
for (let i = 0; i < n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}}
// fibonacci(5)

// console.log(getPrimes(20).reduce((total,item)=>total+item,0));

function multiples(n){
let arr=[];
    for(let i=3;i<n;i++){
        if(i%3===0){
           arr.push(i)
        }
        if(i%5===0){
            arr.push(i)
         }}
console.log(arr.reduce((total,item)=>total+item,0))
}
// multiples(6)
 function sumEvenAndOdd(n){
    let odd=[];
    let even=[];
    for(i=1;i<n;i++){
        if(i%2===0){
            even.push(i);
        }
      else  odd.push(i)
    }
    console.log("sum of odd numers is ",odd.reduce((t,i)=>t+i,0));
    console.log("sum of even numers is ",even.reduce((t,i)=>t+i,0));
 }
//  sumEvenAndOdd(10)

let union=(arr1,arr2)=>{
    let arr=[];
    let n1=arr1.length;
    let n2=arr2.length;
    for(i=0;i<n1;i++){
        arr[i]=arr1[i]
    }
    for(j=0;j<n2;j++){
        arr[n1+j]=arr2[j]
    }
    console.log(arr);
    }

    // union([2,5,6,1],[6,8,9,10])
    let unionArray=(arr1,arr2)=>{
        let arr=arr1.concat(arr2)
        console.log(arr);
    } 
    // unionArray([2,5,6,1],[6,8,9,10])
 function sumOfDigits(num){
    let str=num.toString();
     let len = str.length;
     let sum=0;
     for(i=0;i<len;i++){
        sum+=parseInt(str[i]);
     }
     console.log("sum of digits of given no is  "+sum);
 }
//  sumOfDigits(125)

 let vowelsCount=(str)=>{
    let arr=str.split("");
    let vowelArray=['a','e','i','o','u'];
    console.log(arr);
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<5;j++){
           if(arr[i]===vowelArray[j])
           count++;   
        }}
console.log(count);
 }
//  vowelsCount("hello world")
