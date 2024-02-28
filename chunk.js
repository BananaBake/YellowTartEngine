function displayTart(pic,name,desc,price){
  let tart = document.createElement("div");
  tart.classList.add("background");
  let img = document.createElement("img");
  img.classList.add("tart-image");
  img.src = pic;
  let nameText = document.createElement("p");
  nameText.classList.add("bold");
  nameText.innerText = name;
  let descText = document.createElement("p");
  descText.innerText = desc;
  let priceText = document.createElement("button");
  priceText.innerText = "Buy £" + price ;
  priceText.classList.add("payBtn");
  tart.appendChild(img);
  tart.appendChild(nameText);
  tart.appendChild(descText);
  tart.appendChild(priceText);
  document.getElementById("soup").appendChild(tart);
}