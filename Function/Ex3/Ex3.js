// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function combinition(str) {
    let arr = []
    for (i = 0; i < str.length; i++)
    {
        for (j = 0; j < str.length; j++)
        str.slice(i,j+1) === '' ? "" : arr.push(str.slice(i,j+1))
    }
    return arr
}

function combinition2(str) {
    let arr = [];
    [ ...str.split('')].forEach((_,i) => [...str.split('')].forEach((__,j) => str.slice(i,j+1) === '' ? "" : arr.push(str.slice(i,j+1))))
    return arr
}

 console.log(combinition("dog"))
console.log(combinition2("dog"))
 console.log(combinition("dogb"))
console.log(combinition2("dogb"))


function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");