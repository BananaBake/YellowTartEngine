function displayTart(pic,name,desc,price) {
  if (!(pic && name && desc && price)) return;
  let tart = document.createElement("div");
  tart.classList.add("background");
  let img = document.createElement("img");
  img.classList.add("tart-image");
  img.src = `./images/tarts/${pic}.jpeg`;
  let nameText = document.createElement("p");
  nameText.classList.add("bold");
  nameText.innerText = name;
  let descText = document.createElement("p");
  descText.innerText = desc;
  let priceText = document.createElement("p");
  priceText.innerText = "£" + price;
  let addButton = document.createElement("button");
  addButton.classList.add("add-to-cart");
  addButton.innerText = "Add to cart";
  tart.appendChild(img);
  tart.appendChild(nameText);
  tart.appendChild(descText);
  tart.appendChild(priceText);
  tart.appendChild(addButton);
  document.getElementById("products").appendChild(tart);
}