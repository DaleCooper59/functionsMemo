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

//retourner seul élément pair ou impair d'un tableau
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
        //ou
        function findOutlier(int){
          var evens=[],odds=[];
          int.forEach(function(num){num% 2 !=0? odds.push(num):evens.push(num) });
          return odds.length>1? evens[0]: odds[0];
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

//check si une de ces lettres dans string
function printerError(s) {
  return s.match(/[^a-m]/g).length + "/" + s.length;
}
        //ou
        function printerError(s) {
          let count = 0;
          for (i = 0; i < s.length; i++) {
              if (s[i] > "m") {
                  count++;
              }
          }
          return `${count}/${s.length}`;
      }



//récupéer milieu d'un string
function getMiddle(s)
{
  
  let strAr = s.split('');
  let halfLen = Math.floor(strAr.length/2);
  return Math.floor(strAr.length/2), strAr.length % 2 === 0 ? s[halfLen - 1] + s[halfLen] : s[halfLen];
  
}


//transforme lettre en sa valuer dans l'alphabet
function alphabetPosition(text) {
 
return text
  .toUpperCase()
  .match(/[a-z]/gi)
  .map( (c) => c.charCodeAt() - 64)
  .join(' ');
}


//inverser nomber en gardant signe -
function reverseNumber(n) {
  let str = n.toString().split("").reverse().join('');
   if (str.charAt(str.length-1) === ('-')){
     
    return - + parseInt(str)
  }else{
    return parseInt(str)
  }
  
}


//memo class
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

const ball1 = new Ball('awesome');


//retirer impair, trier et replacer au meme endroit dans array
function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort((a,b)=> a-b);
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
 return array;
}


//switch check boolean
function logicalCalc(array, op) {
  switch (op) {
    case "AND": return array.reduce(and);
    case "OR" : return array.reduce(or);
    case "XOR": return array.reduce(xor);
  }
}

function and(bool1, bool2) {
  return bool1 && bool2;
}

function or(bool1, bool2) {
  return bool1 || bool2;
}

function xor(bool1, bool2) {
  return bool1 != bool2;
}


//function récursive pour accumuler number
function digital_root(n) {
  if(n<10)return n;
  
  return digital_root(n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0));
}
