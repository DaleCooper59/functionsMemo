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

//retourner seul élément par ou impair d'un tableau
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}



//alterner maj/min
String.prototype.toAlternatingCase = function () {
  return this.split('').map(letter => change(letter)).join('');
}

function change(x){
   return x.toUpperCase() === x ? x.toLowerCase() : x.toUpperCase();
}
        //ou 
        String.prototype.toAlternatingCase = function () {
         return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
        }



//check si un array contient l'élément
//ex: isInside([55,88,'vache',null],'vache') => true
function isInside(a,b){
  return a.includes(b);
}



