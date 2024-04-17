//                                                                                           function myFunction () {
//                                                                                               console.log("Welcome to Apna College")
//                                                                                               console.log("We are learning JS")
//                                                                                               console.log("Welcome to apna College")
//                                                                                               console.log("We are learning Js")
//                                                                                           }
//                                                                                          
//                                                                                           myFunction();
//                                                                                           myFunction();
//
//                                                                                          
//
//
//  SUM OF TWO NUMBERS
//
// function Sum(a,b) {
//     const X = a + b

//     return X;
// }

//                                                                                              function sum(x, y) {
//                                                                                                  s = x + y;
//                                                                                                  console.log(x);
//                                                                                                  return s;
//                                                                                              }
//                                                                                                
//                                                                                              let val = sum(3, 4);
//                                                                                              console.log("x");
//                                                                                              console.log(val);


// //sum functiuon via arrow function
// const arrowSum = (a, b) => {
//     return a+b;
// }

// arrowSum();

// //multiplication via arrow function
// const arrowMultiply = (a, b) => {
//     return a * b
// };

// arrowMultiply();

//COUNT VOWELS IN THE GIVEN STRING
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if ( char ==='a' || char ==='e'|| char ==='i'|| char ==='o'|| char ==='u') {
//             count++;
//         }
//     }
//     return count;
// }
// ARROW FUNCTION
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if ( char ==='a' || char ==='e'|| char ==='i'|| char ==='o'|| char ==='u') {
            count++;
        }
    }
    return count;
}
