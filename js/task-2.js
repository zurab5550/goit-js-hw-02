
const calculateEngravingPrice = function(message, pricePerWord){
console.log("message: ", message);
console.log("pricePerWord: ", pricePerWord);

  const stringPrice = message.split(' ').length;
  const result = pricePerWord * stringPrice;
  return result;
}

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120