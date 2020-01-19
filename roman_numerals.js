function convertToRoman(num) {
 let romanDict = {
     1 : 'I',
     4 : 'IV', 
     5 : 'V',
     9 : 'IX',
     10: 'X',
     40: 'XL',
     50: 'L',
     90: 'XC',
     100:'C',
     400: 'CD',
     500: 'D',
     900: 'CM',
     1000: 'M'
 };
 
 let roman = '';
 let keys = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
 for (let i =0 ; i < keys.length; i++){
     while (num >= keys[i]){
         roman += romanDict[keys[i]];
         num -= keys[i];
     }
     if (num > 0){
         continue;
     }
 }
 return roman;
}

console.log(convertToRoman(97));
