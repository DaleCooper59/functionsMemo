//inverser string dans phrase si >= 4 lettres

function spinWords(words){
    return words.split(' ').map(word => (word.length >= 4) ? reverseStr(word):word).join(' ');
  }
  
  function reverseStr(str){
    return str.split('').reverse().join('');
  }
  
//Trier nombres +ptit au +grand

sort((a, b) => a - b);

//rechercher si toutes les lettres de L'alphabet dans une phrase
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}