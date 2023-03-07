function reverse(str) {
let ss = [];
for(let i = 0; i < str.length; i++) {
  ss.push(str[i]);
}
let reversed = "";
for(let i = 0; i < str.length; i++) {
    reversed += ss.pop();
    }
return reversed;
}


console.log(reverse("string"));

    

