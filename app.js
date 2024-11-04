const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "yellow",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



const wrapper=document.querySelector('.sliderWrapper');
const menuItem=document.querySelectorAll('.menuItem')

menuItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all menu items
    menuItem.forEach(el => el.classList.remove('active'));

    // Add 'active' class to the clicked item
    item.classList.add('active');

    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Assign new colors
    currentProductColors.forEach((color, colorIndex) => {
      color.style.backgroundColor = choosenProduct.colors[colorIndex].code;
    });
  });
});


currentProductColors.forEach((color,index)=>{
  color.addEventListener('click',()=>{
    currentProductImg.src=choosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size,index)=>{
  size.addEventListener('click',()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor='white'
      size.style.color='black'
    })
    size.style.backgroundColor='black'
    size.style.color='white'
  })
})

let productButton=document.querySelector('.productButton');
let close=document.querySelector('.Close');
let payment=document.querySelector('.payment');

productButton.addEventListener('click',()=>{
  payment.style.display='flex'
})

close.addEventListener('click',()=>{
  payment.style.display='none'
})

