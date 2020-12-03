let input;
const numbers = [];
let total = 0;

for(;;){
    input = prompt("Введите чило");
    let number = Number(input);
    
if(input === null){
    for(let i = 0; i < numbers.length; i +=1){
        total += numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}`);
    console.log(numbers);
    break;
}else{
    numbers.push(number);
}
}
// if(Number.isNaN(number) === false){
//     numbers.push(number);

// }else{

//     alert("Было введено не число, попробуйте еще раз");
// }



// }






