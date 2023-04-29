// var i,j,k;
//  let str="";
// for(i=1;i<=9;i++){
//     if(i<=5){
//     for(k=1;k<=5-i;k++){
//         str+=" "
//     } 
// for(j=1;j<=2*i-1;j++){
//     str+="*"
    
// }
// str+="\n"
// }
// else{

//     for(k=1;k<=i-5;k++){
//         str+=" "
//     } 
//     for(j=1;j<=19-2*i;j++){
//         str+="*"
        
//     }
//     str+="\n"
// }


// }

// console.log(str);

// // const arr=[7,6,8,85,9]
// // const func=function(a, b){return a-b}
// // console.log(arr.sort(func));
// let str = "HeLLo WORlD";
// let sortedStr = str.split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('');
// console.log(sortedStr); 

// Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}
// const a={ ...['a', 'b', 'c'] }//spread
// ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {}) 
// // { a: "a", b: "b", c: "c" }




// var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result = Object.entries(obj);

//  var result = Object.values(obj);

// console.log(result);
  
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(fruits);
 
function xyz (arr){

    for(let j=1;j<=arr.length+1;j++){
        let flag=0;
        for( let i=0;i<arr.length;i++){
            if(arr[i]===j){ 
                flag=1;
                break; 
            }
            
        }
        
        if(flag===0){console.log(j)}
    }
}

xyz([5,2,3,1]);