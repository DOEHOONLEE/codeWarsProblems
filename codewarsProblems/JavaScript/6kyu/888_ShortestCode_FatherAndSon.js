/*
#Task:
Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string ```s```, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example: 

```sc("Aab")``` should return ```"Aa"```

```sc("AabBc")``` should return ```"AabB"```

```sc("AaaaAaab")``` should return ```"AaaaAaa"```(father can have a lot of son)

```sc("aAAAaAAb")``` should return ```"aAAAaAA"```(son also can have a lot of father ;-)
*/

function sc(s){
    var str = "";
  for (var i=0;i<s.length;i++) {
    if ((s[i] == s[i].toLowerCase() && s.includes(s[i].toUpperCase()))) {
      str = str + (s[i]+"");
    }
    if ((s[i] == s[i].toUpperCase() && s.includes(s[i].toLowerCase()))) {
      str = str + (s[i]+"");
    }
  }
  return str;
}

const sc = s => (s+"").split("").filter(c => ).filter((v,i,a) => 
(v == v.toLowerCase() && a.includes(v.toUpperCase())) || (v == v.toUpperCase() && a.includes(v.toLowerCase())));






