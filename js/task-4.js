
//concat and slice
      //cut string up to 40 symbols
      //add ... to string
      // bring back old or new version


const formatString = function(string){
    // console.log("string: ", string);

    if(string.length > 40){

      

      const newString = string.slice(0,40) .concat('...');
      return newString;
    }else {
      return string;
    }
  };

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);