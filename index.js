function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function myFunction() {
    console.log("Function called");
  }
  
  // Call the receivesAFunction function with myFunction as the argument
  receivesAFunction(myFunction);

  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("Named function called");
    };
  }
  
  // Call the returnsANamedFunction function and assign the returned value to a variable
  const namedFunc = returnsANamedFunction();
  
  // Call the named function
  namedFunc();

  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Anonymous function called");
    };
  }
  
  // Call the returnsAnAnonymousFunction function and assign the returned value to a variable
  const anonymousFunc = returnsAnAnonymousFunction();
  
  // Call the anonymous function
  anonymousFunc();