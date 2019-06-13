// var first = 3
// var second = 16
// var simple = []
// function getSimple (first, second) {  
//     // var simple = [];
//     for (var i = 2; i < second; i++) {
//         simple[i] = true;
//     }
//     var a = 2;
//     do {
//     for (i = a * 2; i < second; i += a) {
//         simple[i] = false;
//     }
       
//     for (i = a + 1; i < second; i++) {
//         if (simple[i]) break;
//      }

//      a = i;
//      }  while (a * a < second);
//     return simple;
// }
// console.log(getSimple(4, 34));

// function number (arr) {
//     result = []
//     for (var key in arr) {
//         for (i = key; i < arr.length; i++) {
//           if (arr[key] % 2 == 0 ) {
//           console.log(i);
//     }
// }
    
// }
// }
// console.log(number(simple));
// var newList = [];
// var array = [];
// function simple (b) {
// for(var i = 0; i < b; i++) {
     
//      var number = 2;
//         for(var a = 0; a <= i / 2; a++){
            
//             if(i !== 1 && i !== 0 && i !== a){
                
//                 if(i%a === 0){
//                    number++;
//                  }
//             }
//         }
//     if(number === 3){
//       console.log(i);
      
//     } 
// }
// return
// }
// console.log(simple(100));
var first = prompt('Enter the number to start counting');
console.log(first);
var second = prompt('enter the number ot finish counting');
console.log(second);
getNumber(first, second);
function getNumber(start, finish) {
     
    var result = [],
    simple = false,
    number = start;     
    for ( number; number < finish; number++) {
    
    for (i = 2; i <= number; i++) {
    
    if (number % i == 0 && number != i) {
        simple = false;
        break;
    } else {
     simple = true;
    }
    }
    if (simple) {
    result.push(number);
    }
    }
    console.log(result);
    }
    // getNumber(first, second);
  