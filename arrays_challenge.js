x = 0

function up(){
  while (x < 10){
    x++
    console.log(x)
  }
}


var things= ["thing1","thing2"]
things.push("thing3")

function upFor(){
  for (var y = 0; y < things.length; y++) {
    console.log(things);
  }
}


//Create a function that finds the highest number.
var numDec= [5.4, 6.3, 0.3, 8.8, 4.5, -9, -0.1];
  function highNum(){
    var order = numDec.sort(function(a,b){
      return b-a;
    })
    console.log(order[0]);
  }
//solution above is the same output as below, but below uses .forEach
var numDec= [5.4, 6.3, 0.3, 8.8, 4.5, -9, -0.1];
var max = 0;
 numDec.forEach(function(e){
   if (e > max){
     max = e;
   }
 });
 console.log(max);
//e is each item in the array
//varable.forEach execute functions for each item

//Create a function that finds the lowest number
var numDec= [5.4, 6.3, 0.3, 8.8, 4.5, -9, -0.1];
var min = 0;
 numDec.forEach(function(e){
   if (e < min){
     min = e;
   }
 })
 console.log(min);

 //Create a function that finds the smallest number(the closest to zero)
var numDec= [5.4, 6.3, 0.3, 8.8, 4.5, -9, -0.1];
 function closeToZero(){
   var smallest = 1;
   numDec.forEach(function(e){
     if (e < 0){        //This if statement converts negative numbers so that line 60 works correctly
      var n = e * -1;
     }
     else{        //This line assigns e to n whether it's positive or negative
       n = e;
     }
     if (n < smallest){    //this is line 60
       smallest = n;
     }
     console.log(smallest);
   })
 }

//Create a function that calculates the sum of an array

function sum(){
  var add = [34, 16, 57, 90];
  var sumOfNums = 0;
  add.forEach(function(e){
    sumOfNums += e;
  })
  console.log(sumOfNums);
}

//Create a function that calculates the mean
function mean(){
  var average = [89, 44, 29, 1, 2];
  var sum = 0;
  average.forEach(function(e){
    sum += e;
    })
    var mean=(sum / average.length);
    console.log(mean);
}

//Create function that finds the index of the highest number
var numDec= [5.4, 6.3, 0.3, 8.8, 4.5, -9, -0.1];
var max = 0;
 numDec.forEach(function(e){
   if (e > max){
     max = e;
   }
 });
 console.log(numDec.lastIndexOf(max));
 //in colsole, the number that will output/display is 3

 var sibling= ["Daniel", "Mark", "Kayla"];
 var parent= ["Bruce", "Roxanne"];
 var family= parent.concat(sibling);

 function sibSort(){
   var sibOrder = sibling.sort(function(a, b){
     return a>b});
   console.log(sibOrder);
 }
  function parSort(){
    var parOrder = parent.sort(function(a, b){
      return a<b});
      console.log(parOrder);
  }
  //for strings, you need b>a because you cant minus strings from eachother ex. "Bruce"-"Roxanne"

//combine function in a single array
function sortAll(){
  var famSort= family.sort(function(a,b){
    return a>b});
  console.log(famSort);
}
//sortAll()
// VM1104:4 ["Bruce", "Daniel", "Kayla", "Mark", "Roxanne"]
// output for sortAll


//Sort all names in reverse order

function sortReverse(){
  var rFamSort= family.sort(function(a,b){
    return a<b});
  console.log(rFamSort);
}

//Function that determines if a name is in the array

function searchForName(){
  var search = prompt("Enter a Name")
  if (family.lastIndexOf(search) > -1){
  alert("Yes, and they are number " + family.lastIndexOf(search) + " in the index.");
  }else{alert("No, that name is not contained in the Index")}
}


//Function that returns only even numbers from an array

var numbers = [1, 2, 3, 4, 5]

function pullEvens(){
  numbers.forEach(function(e){
    if (e % 2 === 0){
      console.log(e);
    }
  });
}
//output: pullEvens();2, 4
//use "===" vs "=", because single = will assign the value, not check true or false
//if there's no even's in the array, then it would return undefined in the console

//Create a function that only pulls odd elements from the array

var numbers = [1, 2, 3, 4, 5]

function pullOdds(){
  numbers.forEach(function(e){
    if (e % 2 === 1){
      console.log(e);
    }
  });
}
//Create a function that takes an array and a function, and returns a new array with return value of the function on each of the elements of the array

var numbers = [1, 2, 3, 4, 5, 6]
function multiply(){
  var mapArray=[];
  numbers.forEach(function(e){
    mapArray.push(e*2);
  })
  console.log(mapArray);
}
// output->multiply();
// [2, 4, 6, 8, 10, 12]

//Create a function that takes an array and a function, and returns a new array with only the elements for which the function reutrns true

var numbers = [1, 2, 3, 4, 5, 6, 7]
var evenArray = [];
function pullEvens(){
  numbers.forEach(function(e){
    if (e % 2 === 0){
      evenArray.push(e);
    }
  });
  console.log(evenArray);
}
//output-> pullEvens();
//-> [2, 4, 6]


//Re-write the following as a while loop:
//for (var i=0; i<10; i++) { console.log(i); }
//What is the value of i after the loop? Is it the same in both cases?

//helpful content on For loop: Statement 1 is executed before the loop (the code block) starts. Statement 2 defines the condition for running the loop (the code block). Statement 3 is executed each time after the loop (the code block) has been executed.
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var i = 0;
while (i<10){
  i++;
  console.log(i);
};

// //re-write as a for loop
var a = 10;
  while (a > 0) {
    console.log(a);
    a = a - 1;
  };

for(var a=10; a>0; a--){
  console.log(a);
};
//the console value of both for and while are the same, but while allows you to decide the order of arguments/statements

//Create a function that merges two arrays while deleting all duplicate elements.

var merge1=[2, 7, 9, 14, 18];
var merge2=[1, 7, 9, 12, 15];
function mergeArray(){
  merge1.forEach(function(e){
    if (merge2.lastIndexOf(e) === -1){  //checks to see if merge2 already contains the element valled in forEach
      merge2.push(e); //pushes the element, assuming if passes
    }
  })
}


//Create a function called fillArray to create a specified number of elements with pre-filled numeric values in an array.
//Example: (2, 3) --> [3, 3]
//         (4, 9) --> [9, 9, 9, 9]


function fillArray(x, y){
  var array = [];
  while (x > array.length){
    array.push(y);
  }
  console.log(array);
}












 //space
