const formatString = function(string){
    console.log("string: ", string);

    const longString = string.split(" ");
    let longestString = longString [0];
    
    

    for( let i = 1; i <= 40; i += 1){

        if(longestString.length <= longString[i].length){
            longestString = longString [i];

        }
        else if (longestString.length > longString[i].length) {
            
            longString.push('...');
        }

        return longString;
    }
        
}

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