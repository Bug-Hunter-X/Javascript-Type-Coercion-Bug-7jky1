function foo(a,b){
  //Explicit type checking
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b; //Numerical addition
  } else {
    return String(a) + String(b); //String concatenation
  }
}
console.log(foo(1,2)); //Expected output: 3
console.log(foo(1,"2")); //Expected output: 12
console.log(foo("1",2)); //Expected output: 12
console.log(foo("1","2")); //Expected output: 12