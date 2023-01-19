const container = document.querySelector(".grid-container");

const colorPicker = document.querySelector(".color");
const number = document.querySelector(".number");

let color = "";

addGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
  }
};

addGrid();

const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.classList.add("color");
  });
});
