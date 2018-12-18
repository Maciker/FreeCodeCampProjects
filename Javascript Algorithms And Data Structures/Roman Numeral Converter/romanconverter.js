function convertToRoman(num) {
    //Transforma un numero decimal entre 1 y 3999 a números romanos.
    if (num >3999 || num<1){
      return console.log("El numero tecleado debe estar en un rango de 1 a 3999.")
    } else {
    let decimales = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanos = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    let result = '';
    for (var index = 0; index < decimales.length; index++) {
      while (decimales[index] <= num) {
        result += romanos[index];
        num -= decimales[index];
      }
    }
      console.log(result);
    return result;
    }
}
