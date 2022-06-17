//cart Dropdown
const cart = document.querySelector(".cart");
const cartDown = document.querySelector(".cart_down");
const prodSec = document.querySelector(".product_section");
cart.addEventListener("click", () => {
  cartDown.classList.toggle("cart_visible");
});

// prodSec.addEventListener("click", (e) => {
//   cartDown.classList.remove("cart_visible");
// });

//Quantity increase & decrease
const incre = document.querySelector(".incre");
const decre = document.querySelector(".decre");
const quantity = document.querySelector(".quantity_no");

incre.addEventListener("click", () => {
  let value = quantity.value;
  if (quantity.value <= 100) {
    value++;
    quantity.value = value;
  }
});
decre.addEventListener("click", () => {
  let value = quantity.value;
  if (quantity.value > 1) {
    value--;
    quantity.value = value;
  }
});

// Product Carousel Display
const displayImg = document.querySelector(".current img");
const images = document.querySelectorAll(".images img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    displayImg.setAttribute("src", image.src);
    image.classList.add("active");

    Object.values(images)
      .filter((item) => {
        return item != image;
      })
      .forEach((item) => {
        item.classList.remove("active");
        console.log(item);
      });
  });
});

//Add product to cart
const addCart = document.querySelector(".add_to_cart");
// const cartProds = document.querySelector(".cart_prods");
const empty = document.querySelector(".empty");
const prod = document.querySelector(".prod");
const prodNo = document.querySelector(".prod_no");
const Q_no = document.querySelector(".Q_no");
const total = document.querySelector(".total");
const del = document.querySelector(".delete");

addCart.addEventListener("click", () => {
  empty.style.display = "none";
  prod.style.display = "flex";
  cartDown.classList.add("cart_visible");
  prodNo.classList.add("visible");
  Q_no.innerHTML = quantity.value;
  let tValue = eval(125 * quantity.value).toFixed(2);
  total.innerText = "$" + tValue;
});
del.addEventListener("click", () => {
  empty.style.display = "block";
  prod.style.display = "none";
  prodNo.classList.remove("visible");
});

//| Hamburger Menu
const Menu = document.querySelector(".menu");
const clos = document.querySelector(".close");
const navList = document.querySelector(".navlist");
console.log(Menu);
Menu.addEventListener("click", () => {
  navList.style.left = "0";
  document.body.classList.add("overlay");
});

clos.addEventListener("click", () => {
  navList.style.left = "-100%";
});

//| Animation

// let tl = gsap.timeline({
//   defaults: {
//     duration: 1,
//     ease: "power3",
//     opacity: 0,
//     stagger: { amount: 0.3 },
//   },
// });

// tl.from(".navbar", {
//   y: -100,
// });
// tl.from(".anim1", {
//   x: -100,
// });
// tl.from(".anim2", {
//   y: 100,
// });
