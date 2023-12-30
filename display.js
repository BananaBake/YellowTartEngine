// decode json 
/*
let json = '{ "name":"John", "age":30, "city":"New York"}';
let obj = JSON.parse(json);
console.log(obj);

//looping through json
for (let x in obj) {
  console.log(x + ": " + obj[x]);
}
*/
const soup = document.getElementById("soup");

for (let i = 0; i < 90; i++) {
  const content = chunk(
    i,
    i + 1
  );
  const div = document.createElement("div");
  div.innerHTML = content;
  div.id = i;
  div.classList.add("background");
  soup.appendChild(div);
}