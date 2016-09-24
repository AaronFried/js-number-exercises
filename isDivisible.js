function isDivisible(divisee, divisor) {
   if (divisee % divisor == 0) {
     console.log("It's divisible!");
     return true;
   }
   else {
     console.log("It's not divisible!");
     return false;
   }          
}

// evaluates true
isDivisible(10, 2);
// evaluates false
isDivisible(11, 2);

// tests

function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  }
  else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();