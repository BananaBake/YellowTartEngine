function displayTart(pic,name,desc,price) {
  if (!(pic && name && desc && price)) return;
  let tart = document.createElement("div");
  tart.classList.add("background");
  let img = document.createElement("img");
  img.classList.add("tart-image");
  img.src = `./images/tarts/${pic}.jpeg`;
  let tartText = document.createElement("div");
  tartText.classList.add("tart-text");
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
  tartText.appendChild(nameText);
  tartText.appendChild(descText);
  tartText.appendChild(priceText);
  tartText.appendChild(addButton);
  tart.appendChild(img);
  tart.appendChild(tartText);
  document.getElementById("products").appendChild(tart);
}