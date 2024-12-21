const products = {
  electronics: [
    {
      name: "iPhone 16",
      brand: "Apple",
      price: "$500",
      image: "https://m.media-amazon.com/images/I/61DjMd76QnL._SX679_.jpg",
    },
    {
      name: "Inspiron 15",
      brand: "Dell",
      price: "$800",
      image: "https://m.media-amazon.com/images/I/71ALJrxmmDL._SX679_.jpg",
    },
    {
      name: "Airpods Max",
      brand: "Apple",
      price: "$6000",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-blue_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724927052173",
    },
    {
      name: "Pixel Watch",
      brand: "Google",
      price: "$550",
      image:
        "https://m.media-amazon.com/images/I/41eHWhpEI6L._SX300_SY300_QL70_FMwebp_.jpg",
    },
  ],
  clothes: [
    {
      name: "T-Shirt",
      brand: "PS PAUL SMITH",
      price: "$200",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20231103/mzTV/65452554ddf77915196e18b5/-473Wx593H-410405912-1-MODEL.jpg",
    },
    {
      name: "Casual Shirt for Men",
      brand: "Lymio",
      price: "$40",
      image: "https://m.media-amazon.com/images/I/71URGw4O-XL._SY741_.jpg",
    },
    {
      name: "Printed Hoodie for Men",
      brand: "Trillion",
      price: "$60",
      image: "https://m.media-amazon.com/images/I/41vycoJlkwL.jpg",
    },
    {
      name: "Jeans",
      brand: "GRECIILOOKS",
      price: "$600",
      image: "https://m.media-amazon.com/images/I/71Of+RUIjlL._SY741_.jpg",
    },
  ],
  footware: [
    {
      name: "Air Jordan 1 Low",
      brand: "Nike",
      price: "$5000",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7b286498-95fa-4ffc-a62a-d440c12a304d/WMNS+AIR+JORDAN+1+LOW.png",
    },
    {
      name: "Boots",
      brand: "JACK & JONES",
      price: "$30",
      image: "https://m.media-amazon.com/images/I/61xf70cMbKL._SY695_.jpg",
    },

    {
      name: "Nike Offcourt Women's Slides",
      brand: "Nike",
      price: "$30",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/758c1766-6927-44c4-8a32-991c21b84dc2/WMNS+NIKE+OFFCOURT+SLIDE.png",
    },
    {
      name: "Knox Leather Boot's",
      brand: "Bata",
      price: "$300",
      image: "https://m.media-amazon.com/images/I/61FwtmuLFvL._SY695_.jpg",
    },
  ],
};

const container = document.querySelector(".container");

for (const category in products) {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "category";

  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent =
    category.charAt(0).toUpperCase() + category.slice(1);
  categoryDiv.appendChild(categoryTitle);

  const productsDiv = document.createElement("div");
  productsDiv.className = "products";

  products[category].forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="content">
                <h3>${product.name}</h3>
                <p>Brand: ${product.brand}</p>
                <p>Price: ${product.price}</p>
            </div>
        `;

    productsDiv.appendChild(productCard);
  });

  categoryDiv.appendChild(productsDiv);
  container.appendChild(categoryDiv);
}
