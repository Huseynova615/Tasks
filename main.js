///// Task 1//////
// function textSpace () {
// let text=prompt("enter text")
// count=0;
// for(let i = 0; i <= text.length; i++){
//     if(text[i] == " "){
//         count +=1;
//     }
// }
// console.log(count);
// }
// textSpace()





/////// Task 2 /////

// function mediumNumber(arr){
//     var sum = 0;
//     arr=[10,11,12,13,14];
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//         mednum = sum / arr.length;
//     }
//     console.log(mednum);
// };
// mediumNumber()




/////// Task 3 //////
// function evenNumber (arr){
//     arr = [23,45,34,67,56,87,97];
//     evenarr = [];
//     for(let i = 0; i <= arr.length; i++){
//         if( arr[i] % 2 == 0){
//             evenarr.push(arr[i]);
//         }
//         else 
//         continue;
//     }
//     console.log(evenarr)
// }
// evenNumber()





////// Task 4  ///////
// function mediumNumber(arr){
//     let sum = 0;
//     arr=[5,6,7,8,9];
//     let bignum = [];
//     let mednum;

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//         if( i + 1 == arr.length){
//         mednum = sum / arr.length;
//         }
//     }
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > mednum){
//                 bignum.push(arr[j]);
//             }
//         }
//         console.log(bignum);
//     }
// mediumNumber()





/////// Task 5 //////

// function oneSentence(text){
//     text = ["bir", "iki", "uc", "dord", "bes"]
//     let words = text.join();
//     console.log(words)
// }
// oneSentence()




//////// Task 6 //////

// function reverseArray(text){
//     text = ["bir", "iki", "uc", "dord", "bes"]
//     inversetext = [];
//     for(let i = text.length-1; i >= 0; i--){
//         inversetext.push(text[i])
//     } 
//     console.log(inversetext);
// }
// reverseArray()






//////// Task 7  ////////

// function commonWords(arr1){
//     commonarr = []
//     arr1 = ["bir", "iki", "bes", "yeddi", "dord"]
//     arr2 = ["iki", "uc", "bes", "alti", "yeddi", "sekkiz", "dord"]
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//               commonarr.push(arr1[i]);
//             }
//             else{
//             continue;
//         }
//     }
// }
// console.log(commonarr)
// }
// commonWords()





////// Task 8 /////
// let arr = ["kitab", "defter", "ders", "otaq"];
// let a = "d";
// let newarr = [];
// for(let i = 0; i < arr.length; i++){
//     if (arr[i].charAt(0) == a){
//         newarr.push(arr[i]);

// }
// }
// console.log(newarr);





////// Task 9 //////
// let arr ="sssoz"
// for( let i = 0; i < arr.length; i++){
//     let count = 0;
//   for( let j = 0; j < arr.length; j++){
//       if(arr[i] == arr[j] && i > j){
//           break;
//       }
//     if (arr[i] == arr[j]){
//     count++;
//     } 
//     }
//     if (count > 0){
//     console.log(arr[i],count);
// }
// }