function rot13(str) { // LBH QVQ VG!
  let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let result = "";
  let regex = /[A-Z]/;
  for(let i=0; i<str.length; i++){
      if (regex.test(str[i])){
          let n = alfabeto.indexOf(str[i]);
          if (n <13){
              result += alfabeto[n+13];
          } else {
              result += alfabeto[n-13];
          }
      } else {
          result += str[i];
      }
  }
  console.log(result);
  return result;
}
