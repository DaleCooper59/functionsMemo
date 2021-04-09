//inverser string dans phrase si >= 4 lettres
function spinWords(words){
    return words.split(' ').map(word => (word.length >= 4) ? reverseStr(word):word).join(' ');
  }
  function reverseStr(str){
    return str.split('').reverse().join('');
  }
        //ou
        function spinWords(words){
          let rev = words.split(' ').map(e=> e.length >= 5 ? [...e].reverse() : e)
          return rev.join(' ').replace(/,/g , '')
        }
          //ou replace avec fonction en 2é argument
          function spinWords(string){
            return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
          }




//regexp au moins 6, seulement alpha + au moins 1 lower / 1 upper / 1 digit
function validate(password) {
  console.log(password)
  return/^(?=.{6,})(?=.*\d)(?!.*\s)(?!.*\.)(?=.*[a-z])(?=.*[A-Z])/.test(password);
}
        //ou
        function validate(password) {
          /**
          * positive lookahead is used here to ensure that at least one of each character set is available
          * you need to allow every character (.*) before your lookahead character set, 
          * except you want to ensure the expression starts with i.e. a lowercase character.
          * Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
          * The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
          * characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.
          **/
          return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);
        }



//Trier nombres +ptit au +grand
let a=[0,5,5,4,894,84,0,48,498,];
a.sort((a, b) => a - b);




//descending number
function descendingOrder(n){
  let len = String(n).length;
  if (len > 1) {
    let sorted = n.toString().split('').sort((a,b)=>b-a).join('');
    return +sorted
  }                     
  return n
}




//lettres remplacée par alphabet position
function alphabetPosition(text) {
  let t = text.replace(/[^a-zA-Z]/g, '');
  return [...t].map(e => e!=='' ? e.toUpperCase().charCodeAt()-64 : '').join(' ')
}






//rechercher si toutes les lettres de L'alphabet dans une phrase
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}




//fonction every compare deux array pour savoir si exactement les memes nombres
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
        //recherche si lettre de str2 sont toutes ds str1, every retournera false si au moins une n'y est pas
        function scramble(str1, str2) {
          let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
          return str2.split("").every((character) => --occurences[character] >= 0);
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




//check si voyelle dans str
function getCount(str) {
  var vowelsCount = 0;
  str.split('').forEach(e=>e.match(/[aeiou]/) ? vowelsCount++ : 0)
  return vowelsCount;
}
        //ou boucle récursive
        function getCount(str) {
          var vowelsCount = 0;
          var vowels = ["a","e","i","o","u"];
          for(var i = 0;i < str.length;i++){
            for(var j=0;j<vowels.length;j++){
              if(str[i] === vowels[j]){
                vowelsCount++;
              }
            }
          }
          
          return vowelsCount;
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




//multiple de 3 ou 5
function solution(number){
  let arr = 0
  if (number < 0) {return 0};
  
  for (var i = 1 ; i < number;i++){
    if (i % 3 ===0 || i % 5 ===0 ){
      arr+=i
      
    }
  }return arr
}




//autre fonction
function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}




//compteur d'element 
var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }




//uppercase chaque lettre paire + premiere lettre
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}




//loop argent gagnés chaque tour avec somme totale gagnée à la fin
function magicalWell(a, b, n) {
  if(n!==0){
    let sumTotal =[];
     for (var i = 0;i < n; ++i){
   
         var sum = a*b;
         sumTotal.push(sum);
         a++;
         b++;
     }
  
    return sumTotal.reduce((a,b)=>a+b);
  }
  return 0;
}




//reverse letter et enlever char spe + number
function reverseLetter(str) {
  let newStr = str.replace(/\W|_|[0-9]/g , '')
  return Array.from(newStr).reverse().join('')
}
        //ou
        function reverseLetter(str) {
          return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
        }




//retrouver si el est dans array
const find = (array, el) => array.indexOf(el) < 0 ? "Not found" : array.indexOf(el);
        //ou filtrer el pas inclus dans l'autre
        function array_diff(a, b) {
          return a.filter(e => !b.includes(e));
        }
          //ou avec map et Set
          function array_diff(a, b) {
            let set = new Set(b);
            return a.map(x => !set.has(x) ? x : null).filter(x => x);
          }
          //ou
          function arrayDiff(a, b) {
            if(b.length==0 || a.length==0) return a;
            for(let i =0;i<a.length;i++){
              for(let j=0;j<b.length;j++){
                if(a[i]==b[j]){
                  a.splice(i,1);
                  i--;
                }
              }
            }
            return a;
          }




//prix selon discount
function apples(kilos, price) {
  finalPrice = price * kilos
  switch (true) {
    case (kilos >= 11):
      finalPrice *= .7
      break
    case (kilos >= 9):
      finalPrice *= .75
      break
    case (kilos >= 7):
      finalPrice *= .8
      break
    case (kilos >= 5):
      finalPrice *= .85
      break
    case (kilos >= 3):
      finalPrice *= .9
      break
    case (kilos >= 1):
      finalPrice *= .95
      break
  }
  return finalPrice
}




//reverse array de n nombre entré en paramètre
const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };
        //ou
        const reverse = n => {
          return Array(n).fill(0).map((e, i) => n - i );
        };




//convert seconds to H - M - S
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay; 
} 




//filtrer STRING et garder avec regex integer
function myParseInt(str) {
  return /^[\d\s]+$/.test(str) ? +str : NaN;
}




//replace with regex
function gordon(a){
  let b = a.split(' ').map(el => el + '!!!!').join(' ');
  return b.toUpperCase().replace(/[aA]/gi,"@" ).replace(/[eiou]/gi,"*" )
}
        //ou
        function gordon(ramsay) {
          return ramsay
            .toUpperCase()
            .replace(/\w+/g, '$&!!!!')
            .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
        }




//count letter in str
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}




//compter lettres dupliquées
function duplicateCount(text){
  let arr = []
  let arr2 = []
  
  var uniq = text.toLowerCase().split('').reduce(function(a,b){
    arr.indexOf(b) < 0 ? arr.push(b) : arr2.push(b);
  },[])
  
  return arr2.sort().filter(function(item, i, ary) {
        return !i || item != ary[i - 1];
    }).length
}
        //ou avec regex
        function duplicateCount(text){
          return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
        }
          //ou avec objet 
          function duplicateCount(text){
              var input = text.toLowerCase().split('');
              var obj = {};
            
            for( var i in input) {
                if(!obj[ input[i] ]){
                  obj[ input[i] ] = 1;
                } else{
                obj[ input[i] ] += 1;
              } 
            }
            
            var result = 0;
            for( var prop in obj) {
              if(obj[prop] > 1){
               result++;
              }
            }
            
            return result;
          }
 




//check if contains substring + dédoublons + sort
function inArray(array1,array2){
  const res =[]
  
  array2.forEach(w =>{
      array1.forEach(end =>{
         if(w.includes(end)){
            res.push(end)}
               }) 
                 })
  return [...new Set(res)].sort();
}
        //ou avec filter(), find() et match()
        function inArray(array1,array2){
          return array1
            .filter(a1 => array2.find(a2 => a2.match(a1)))
            .sort()
        }




//split string par paire and add avec match() char pour return even array(si length impair)
function solution(str){
  let len = str.length;
  let even = len%2;
     if(str === ''){
        return [];
      }else if(even ===0){
    
       return str.match(/.{2}/g);
     }else{
       let und = ["_"];
       let newStr = str.concat(und);
      
       return newStr.match(/.{2}/g);
     }
 
}
        //ou avec while
        function solution(str){
          var i = 0;
          var result = new Array();
          if (str.length % 2 !== 0) {
            str = str + '_';
          }
          while (i < str.length) {
              result.push(str[i] + str[i+1]);
              i += 2;
            }
          return result;
        }




//détail fonction floor, ceil et round de math
Math.round = function(number) {
  let int = parseInt(number);
  var diff = number - int;
  return diff >= .5 ? int + 1 : int;
 
};

Math.ceil = function(number) {
   let int = parseInt(number);
  var diff = number - int;
  return diff > 0 ? int + 1 : int;
 
};

Math.floor = function(number) {
  return parseInt(number);
 
};




//convert int to color(2012)
function toColor(num) {
  num >>>= 0;
  var b = num & 0xFF,
      g = (num & 0xFF00) >>> 8,
      r = (num & 0xFF0000) >>> 16,
      a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
  return "rgba(" + [r, g, b, a].join(",") + ")";
}
var a = toColor(-5952982);

var b = toColor(-12525360);

$("div").eq(0).css("background-color", a );
$("div").eq(1).css("background-color", b );




//replace single occurence by one otherwise another
const duplicateEncode = w => w.replace(/./g, c => (new RegExp(`([${c}]).*\\1`, 'gi')).test(w) ? ')' : '(');
        //ou
        function duplicateEncode(word){
          return word
            .toLowerCase()
            .split('')
            .map( function (a, i, w) {
              return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
            })
            .join('');
        }
                //ou
                function duplicateEncode(word) {
                  var letters = word.toLowerCase().split('')
                  return letters.map(function(c, i) {
                    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
                  }).join('')
                }




//repeat string n times
function repeater(string, n){
  let arr = new Array(n)
   return arr.fill(string).join('')
  }
        //ou
        const repeater = (string, n) => {
          return string.repeat(n);
        }




//retourne somme score lettres en fonction position alphabet avec charcodeat
function high(x){
  return x.split(' ').reduce((accum, current)=>{
      return score(current) > score(accum)? current:accum;  
  })
}

function score(word){
  return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}
        //ou boucle sur mot dans une boucle sur phrase, var garde temporairement plus grande valeur
        function high(x){
          var arr = x.toLowerCase().split(" ");
          var sum = 0;
          var holder = 0;
          var holder2 = 0;
          for(var i = 0; i < arr.length; i++) {
            for(var j = 0; j < arr[i].length; j++) {
              sum += arr[i].charCodeAt(j) - 96;    
            }
            if (sum > holder) { 
               holder = sum;
               holder2 = i;
             }
            sum = 0;
            
          }
        return arr[holder2];
        }




//nombre diviseurs
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  
  return d;
}




//getDate
function timeForMilkAndCookies(date){
  return date.getDate() == 24 && date.getMonth() == 11;
}




//utilisation splice pour retirer une personne d'un tableau
function getAttendees(peopleInvited, responses){
  responses.forEach(function(val){
    if (val.response === 'declined') peopleInvited.splice( peopleInvited.indexOf(val.name), 1); 
  });
  return peopleInvited;
}
        //ou FILTER ET MAP sur objet responses
        function getAttendees(peopleInvited, responses){
          var declined = responses.filter(res=> res.response === 'declined').map(res => res.name);
          
        return peopleInvited.filter(oui=> declined.indexOf(oui) === -1)
        }




//return true if égality
function validParentheses(parens){
  let sum = 0;
  for ( var i = 0 ; i < parens.length; i++){
    if(parens[i] === '('){
      sum +=1;
    }else{
      sum-=1;
    }
    if(sum<0){return false}
  }return sum ===0
 } 
        //ou using test with regex
        function validParentheses(parens){
          var re = /\(\)/;
          while (re.test(parens)) parens = parens.replace(re, "");
          return !parens;
        }




//afficher qui aime
function likes(names) {
let num = names.length-2;
 
  if (names.length === 0 ){
    return 'no one likes this';}
  else if (names.length === 1){
    return names[0] + ' likes this';}
  else if (names.length === 2){
    return names[0] + ' and ' + names[1] + ' like this';}
  else if (names.length === 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  }
  else {
    return names[0] + ', ' + names[1] + ' and ' + (num) + ' others like this';}
}
        //ou en utilisant un objet
        function likes(names) {
          return {
            0: 'no one likes this',
            1: `${names[0]} likes this`, 
            2: `${names[0]} and ${names[1]} like this`, 
            3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
            4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
          }[Math.min(4, names.length)]
        }




//trier par rapport au nombre contenu dans les mots avec match()
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    




//camelcase to snakecase with check if number
function toUnderscore(string) {
  if(isNaN(string)){
      let strM = String(string).split('').map(e=>e.match(/[A-Z]/) ? '_' + e : e);
      let splitArr =  strM[0].split('');
      let newArr =  String(strM).replace(strM[0],splitArr[1]);
     return newArr.replace(/,/g,'').toLowerCase()
  }
  return String(string)
}




//return number phone with number entered using splice
function createPhoneNumber(numbers){
  let str = numbers.toString().replace(/,/g,'').split('');
  str.splice(0,0,'(')
  str.splice(4,0,')')
  str.splice(5,0," ")
  str.splice(9,0,'-')
 return str.join('')
}
        //ou magique
        function createPhoneNumber(numbers){
          var format = "(xxx) xxx-xxxx";
          
          for(var i = 0; i < numbers.length; i++)
          {
            format = format.replace('x', numbers[i]);
          }
          
          return format;
        }




// multiple ternary condition
function peopleWithAgeDrink(old) {
  return old < 14 ? "drink toddy" 
  : old < 18 ? "drink coke" 
  : old < 21 ? "drink beer"
  : "drink whisky";
};




//swap letter
function switcheroo(x){
  return [...x].map(e=> e == 'a' ? e.replace('a','b') : e == 'b' ? e.replace('b','a') : e).join('')
 }




 //array deux dimensions
 function well(x){
  let good=0;
  
  x.map(e=>{
    e.map(f=>{
      let g = f.toString().replace(/[^a-zA-Z]/g,'')
      if (String(g).toLowerCase() === "good"){good++}
    })
  })
  return good === 0? "Fail!" : good <=2 ? "Publish!" : "I smell a series!"
}