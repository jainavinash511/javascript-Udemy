class product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.desc = desc;
  }
}

class ProductList {
  products = [
    new product("Pillow", "", 19.99, "A Nice Pillow"),
    new product("Carpet", "", 89.99, "A Nice Carpet"),
  ];
  buttonhandler() {
    console.log("Added to the cart");
  }
  render() {
    const displayList = document.getElementById("app");
    const productsEle = document.createElement("ul");
    productsEle.className = "product-list";
    for (let prod of this.products) {
      const prodEle = document.createElement("li");
      prodEle.className = "product-item";
      prodEle.innerHTML = `
        <div>
            <div class ="product-item__content">
            <h2>${prod.title}</h2>
            <p>${prod.price}</p>
            <p>${prod.desc}</p>
            <button> Add To Cart </button>
            <div>
        </div>
        `;
      const addToCartButton = prodEle.querySelector("button");
      addToCartButton.addEventListener("click", this.buttonhandler);
      productsEle.append(prodEle);
    }
    displayList.append(productsEle);
  }
}
const Prod = new ProductList();
Prod.render();
