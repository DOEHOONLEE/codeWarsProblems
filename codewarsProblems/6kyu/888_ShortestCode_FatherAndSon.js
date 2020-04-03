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
  return s.replace("/\w/g", s.split("").forEach(function(c) {
      if (s.incldues(c.toLocaleLowerCase()) && s.incldues(c.toUpperCase())) {
          
      }
      return (s.includes(c.toLowerCase()) && s.includes(c.toUpperCase())) ? c : "";
  }))
}