//function receivesAFunction
function receivesAFunction(callback) {
  callback();
}

//function returnsANamedFunction
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("this is a named function");
  };
}

//function returnsAnAnnonymousFunction
function returnsAnAnonymousFunction() {
  return () => console.log("this is an anonymous function");
}
