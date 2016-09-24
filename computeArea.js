function computeArea(width, height) {
  console.log(width * height);
  return width * height;
}

computeArea(3,4);

// tests

function testComputeArea() {
  var width = 3;
  var height = 4;
  var expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  }
  else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();