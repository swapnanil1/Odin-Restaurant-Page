// const dishImages = require.context(
//   "../images",
//   false,
//   /^dish*\.(jpg|jpeg|png)$/
// );

// const dishImagesPaths = dishImages.keys().map(dishImages);

import img1 from "../images/dishes/dish1.jpeg";
import img2 from "../images/dishes/dish2.jpeg";
import img3 from "../images/dishes/dish3.jpeg";
import img4 from "../images/dishes/dish4.jpeg";
import img5 from "../images/dishes/dish5.jpeg";
import img6 from "../images/dishes/dish6.jpeg";

const dishImagesPaths = [img1, img2, img3, img4, img5, img6];

export default function menu() {
  const content = document.getElementById("content");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 1; i <= 6; i++) {
    const gridItem = document.createElement("div");
    gridItem.id = `grid-item-${i}`;
    gridItem.classList.add("grid-item");

    if (dishImagesPaths[i - 1]) {
      const imagePath = dishImagesPaths[i - 1];
      const dishImage = document.createElement("img");
      dishImage.src = imagePath;
      gridItem.appendChild(dishImage);
    }

    const para = document.createElement("p");
    para.textContent = fetchDishInfo(i);
    gridItem.appendChild(para);
    const orderBtn = document.createElement("button");
    orderBtn.classList.add("orderBtn");
    orderBtn.textContent = "Order Now";
    orderBtn.addEventListener("click", () => {
      alert("Order Placed!");
    });
    gridItem.appendChild(orderBtn);
    gridContainer.appendChild(gridItem);
  }

  content.appendChild(gridContainer);
}
function fetchDishInfo(n) {
  if (n == 1) {
    return "Chicken Biryani: A fragrant explosion of flavor in every bite";
  } else if (n == 2) {
    return "Chicken Bharta: Creamy, smoky, shredded chicken perfection.Chicken Bharta: Creamy, smoky, shredded chicken perfection.";
  } else if (n == 3) {
    return "lish Mach: The rich, oily, undisputed king of Bengali fish";
  } else if (n == 4) {
    return "Mutton Korma: Melt-in-your-mouth mutton in a luxuriously creamy, spiced sauce.";
  } else if (n == 5) {
    return "Potoler Dorma & Fried Rice: Experience the exquisite Bengali pairing of stuffed gourd and fragrant rice.";
  } else {
    return "Gulab Jamun: The perfect warm, syrupy, melt-in-your-mouth ending to any meal";
  }
}
