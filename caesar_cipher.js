function rot13(str) { // LBH QVQ VG!
  let decrypted = '';
  for (let i =0; i < str.length;i++){
    decrypted += cipher(str[i]);
  }
  console.log(decrypted);
  return decrypted;
}

function cipher(char){
  console.log('called with: '+char);
  let dict = { 
   'A':'N','B':'O','C':'P','D':'Q','E':'R','F':'S',
   'G':'T','H':'U','I':'V','J':'W','K':'X','L':'Y',
   'M':'Z','N':'A','O':'B','P':'C','Q':'D','R':'E',
   'S':'F','T':'G','U':'H','V':'I','W':'J','X':'K',
   'Y':'L','Z':'M' 
   };
   if (char in dict){
     return dict[char];
   }else{
     return char;
   }
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
