function celsToFahr(celsTemp) {
  fahrenheit = celsTemp * (9/5) + 32;
  console.log(celsTemp + " converts to " + fahrenheit + " fahrenheit.");
  return fahrenheit;
}

// evaluate to 32
celsToFahr(0);
// evaluate to 77
celsToFahr(25);

function fahrToCels(fahrTemp) {
  celsius = (fahrTemp - 32) * (5/9);
  console.log(fahrTemp + " converts to " + celsius + " celsius.");
  return celsius;
}

// evaluates to 0
fahrToCels(32);
// evaluate to 100
fahrToCels(212);

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  }
  else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  var cel2FahrInput = 100;
  var cel2FahrExpect = 212;
  var fahr2CelInput = 32;
  var fahr2CelExpect = 0;
  
  if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
     testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
    console.log('SUCCESS: All tests passing');
  }
  else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();