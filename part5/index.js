function example1() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20
}

example1()

function example2() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10
}
example2()

function example() {
  const x = 10;
  if (true) {
    const x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10
}
example3()
