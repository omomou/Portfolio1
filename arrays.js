console.log("javascript")

const chicKatsu = [3, 7, 12, 5];

const add = function (num) {

    num += 1;
  console.log(num);

};

const checkNumber = function (pandaExpress, number) {

    if (number % 2 === 0) {
    pandaExpress(number);
  } else {

    console.log("the number is odd");
  }
};

for (const index in chicKatsu) {

  checkNumber(add, chicKatsu[index]);
  
}