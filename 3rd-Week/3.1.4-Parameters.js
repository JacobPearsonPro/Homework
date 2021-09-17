// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWIthTwoParams(x = 0, y = 1, ...z) {
    console.log(x);
    console.log(y);
    console.log("this is the rest operator", z);
    return x + y;
  
  };
  
  // invoke the function and pass in two numbers
  functionWIthTwoParams(5, 8);
  
  
  // invoke the function and pass in more than two numbers
  functionWIthTwoParams(1, 2, 3, 4, 5, 6,7);
  
  
  // invoke the function and pass in only one number
  functionWIthTwoParams(9);