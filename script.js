let shop = document.querySelector('#shop');

let shopData = [
  {
    id: 1,
    name: 'Casual Shoe',
    desc: 'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ab?',
    price: 32,
    img: './images/hero.png',
  },
  {
    id: 2,
    name: 'Perty Shoe',
    desc: 'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ab?',
    price: 44,
    img: './images/hero2.png',
  },
  {
    id: 3,
    name: 'Perty Beg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi officia voluptate dicta inventore corrupti?',
    price: 55,
    img: './images/hero3.png',
  },
];

let generateShopItem = () => {
  return (shop.innerHTML = shopData
    .map((item) => {
      let { id, name, desc, price, img } = item;
      return `
    <li product-id-${id} class="item">
        <div class="image-wrapper">
            <img src=${img} alt="">
        </div>
        <div class="product-derails">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="product-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg>
                    <div id=${id} class="quantity">0</div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>

                </div>
            </div>
        </div>
    </li>
    `;
    })
    .join(''));
};
generateShopItem();
