const dishImages = require.context(
  "../images",
  false,
  /^dish*\.(jpg|jpeg|png)$/
);

const dishImagesPaths = dishImages.keys().map(dishImages);

function menu() {
  const content = document.getElementById("content");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 1; i <= 6; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add(`grid-item-${i}`);

    if (dishImagesPaths[i - 1]) {
      const imagePath = dishImagesPaths[i - 1];
      const dishImage = document.createElement("img");
      dishImage.src = imagePath;
      gridItem.appendChild(dishImage);
    }

    const para = document.createElement("p");
    para.textContent = "ABC";
    gridItem.appendChild(para);
    gridContainer.appendChild(gridItem);
  }

  content.appendChild(gridContainer);
}

export default menu;
