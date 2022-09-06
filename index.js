
function receivesAFunction(callback) {
   callback();
  return;
}
receivesAFunction(callback);

function returnsANamedFunction() {
  return function namedFn() {
    console.log(`a named function`);
  };
}
returnsANamedFunction();



function returnsAnAnonymousFunction() {
  return () => console.log(`anonymous function`);
}
returnsAnAnonymousFunction()




 