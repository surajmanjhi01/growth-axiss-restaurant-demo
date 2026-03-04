const vegMenu = {
  starters: [
    "Sweet Corn Soup",
    "Hot & Sour Soup",
    "Veg Spring Rolls",
    "Paneer Chilli",
    "Crispy Corn Pepper",
    "Veg Manchurian",
    "Chilli Mushroom",
    "Honey Chilli Potato"
  ],
  paneerSpecials: [
    "Paneer Tikka Masala",
    "Paneer Schezwan",
    "Kadhai Paneer",
    "Paneer Black Pepper",
    "Palak Paneer",
    "Paneer Garlic Gravy",
    "Paneer Do Pyaza",
    "Matar Paneer"
  ],
  dalVarieties: ["Dal Makhani", "Dal Tadka", "Yellow Dal", "Dal Fry", "Palak Dal"],
  riceOptions: [
    "Veg Fried Rice",
    "Schezwan Fried Rice",
    "Hakka Noodles",
    "Burnt Garlic Rice",
    "Jeera Rice",
    "Veg Biryani",
    "Paneer Biryani"
  ],
  breadOptions: ["Tandoori Roti", "Butter Naan", "Garlic Naan", "Kulcha", "Paratha"],
  accompaniments: ["Raita", "Papad", "Pickle", "Salad", "Green Chutney"],
  desserts: ["Hot Gulab Jamun", "Ice Cream", "Rasmalai", "Kheer"]
};

const nonVegMenu = {
  streetFood: [
    "Chicken Lollipop",
    "Drums of Heaven",
    "Chilli Garlic Noodles",
    "Schezwan Momos",
    "Honey Chilli Potato",
    "Paneer Chilli Dry"
  ],
  starters: [
    "Chicken 65",
    "Chicken Lollipop",
    "Drums of Heaven",
    "Chicken Chilli Dry",
    "Garlic Pepper Chicken",
    "Dragon Chicken",
    "Chicken Manchurian"
  ],
  chickenSpecials: [
    "Chilli Chicken Gravy",
    "Kung Pao Chicken",
    "Chicken Schezwan",
    "Chicken Black Pepper",
    "Chicken Hot Garlic",
    "Chicken Curry",
    "Chicken Tikka Masala"
  ],
  muttonSpecials: ["Mutton Rogan Josh", "Mutton Curry", "Kadhai Mutton", "Mutton Korma"],
  dalVarieties: ["Dal Makhani", "Dal Tadka", "Yellow Dal"],
  riceOptions: ["Chicken Fried Rice", "Chicken Biryani", "Egg Fried Rice", "Hakka Noodles", "Plain Rice"],
  breadOptions: ["Tandoori Roti", "Butter Naan", "Garlic Naan", "Keema Naan", "Kulcha"],
  accompaniments: ["Raita", "Papad", "Pickle", "Salad"],
  desserts: ["Hot Gulab Jamun", "Ice Cream", "Rasmalai", "Kheer"]
};

function createSection(title, items, featured = false, bullet = "•") {
  const itemClass = featured ? "menu-item featured" : "menu-item";
  return `
    <div class="menu-section ${featured ? "highlight-section" : ""}">
      <div class="section-header">
        <h2 class="section-title">${title}</h2>
        <div class="section-line"></div>
      </div>
      <div class="menu-grid">
        ${items
          .map(
            (item) => `
          <div class="${itemClass}">
            <span class="item-bullet">${bullet}</span>
            <span class="item-name">${item}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMenu(category) {
  const content = document.getElementById("menuContent");
  if (!content) return;

  if (category === "veg") {
    content.innerHTML = `
      <div class="menu-sections">
        ${createSection("Starters (Any Two)", vegMenu.starters)}
        ${createSection("Choice of Paneer", vegMenu.paneerSpecials, true, "★")}
        ${createSection("Choice of Dal", vegMenu.dalVarieties)}
        ${createSection("Choice of Rice", vegMenu.riceOptions)}
        ${createSection("Choice of Bread", vegMenu.breadOptions)}
        ${createSection("Accompaniments", vegMenu.accompaniments)}
        ${createSection("Desserts", vegMenu.desserts, true, "♥")}
      </div>
    `;
    return;
  }

  content.innerHTML = `
    <div class="menu-sections">
      ${createSection("Chinese Street Food", nonVegMenu.streetFood)}
      ${createSection("Starters (Any Two)", nonVegMenu.starters)}
      ${createSection("Choice of Chicken", nonVegMenu.chickenSpecials, true, "★")}
      ${createSection("Choice of Mutton", nonVegMenu.muttonSpecials, true, "★")}
      ${createSection("Choice of Dal", nonVegMenu.dalVarieties)}
      ${createSection("Choice of Rice", nonVegMenu.riceOptions)}
      ${createSection("Choice of Bread", nonVegMenu.breadOptions)}
      ${createSection("Accompaniments", nonVegMenu.accompaniments)}
      ${createSection("Desserts", nonVegMenu.desserts, true, "♥")}
    </div>
  `;
}

const tabs = document.querySelectorAll(".category-tab");
let activeCategory = "veg";

renderMenu(activeCategory);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.category;
    renderMenu(activeCategory);
  });
});
