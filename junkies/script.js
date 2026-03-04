const data = {
  ourQualities: [
    {
      id: 1,
      image: "assets/quality_food.svg",
      title: "QUALITY FOOD",
      description: "Fresh ingredients and authentic Chinese recipes prepared with consistency and care."
    },
    {
      id: 2,
      image: "assets/super_taste.svg",
      title: "SUPER TASTE",
      description: "Every dish is wok-cooked for bold aroma, rich flavor, and a memorable taste."
    },
    {
      id: 3,
      image: "assets/fast_delivery.svg",
      title: "FAST DELIVERY",
      description: "Quick service and warm meals so your cravings are served right on time."
    }
  ],
  dishes: [
    { id: 1, image: "assets/dinner1.jpeg", title: "CHILLI GARLIC NOODLES", category: "Dinner" },
    { id: 2, image: "assets/dinner2.png", title: "CRISPY HONEY CHILLI POTATO", category: "Snacks" },
    { id: 3, image: "assets/breakfast1.png", title: "SCHEZWAN FRIED RICE", category: "Lunch" },
    { id: 4, image: "assets/dinner3.png", title: "VEG MANCHURIAN", category: "Dinner" },
    { id: 5, image: "assets/lunch1.png", title: "CHILLI CHICKEN", category: "Lunch" },
    { id: 6, image: "assets/dinner4.png", title: "HOT & SOUR SOUP", category: "Dinner" },
    { id: 7, image: "assets/dinner5.png", title: "KUNG PAO CHICKEN", category: "Dinner" },
    { id: 8, image: "assets/dinner6.png", title: "DRAGON PRAWNS", category: "Dinner" }
  ],
  whoWeAre: [
    { id: 1, number: "1", title: "Flagship Restaurant" },
    { id: 2, number: "20", title: "Chefs In Kitchen" },
    { id: 3, number: "08", title: "Years Of Experience" },
    { id: 4, number: "200", title: "Chinese Dishes" }
  ],
  coffees: [
    { id: 1, image: "assets/street_noodles.jpg", title: "Chilli Garlic Noodles", type: "Wok Tossed" },
    { id: 2, image: "assets/street_potato.jpg", title: "Honey Chilli Potato", type: "Crispy" },
    { id: 3, image: "assets/street_friedrice.jpg", title: "Schezwan Fried Rice", type: "Spicy" },
    { id: 4, image: "assets/street_manchurian.jpg", title: "Veg Manchurian", type: "Street Favorite" },
    { id: 5, image: "assets/street_lollipop.jpg", title: "Chicken Lollipop", type: "Non-Veg" },
    { id: 6, image: "assets/street_springroll.jpg", title: "Spring Roll Platter", type: "Crunchy" },
    { id: 7, image: "assets/street_dragon.jpg", title: "Dragon Chicken", type: "Fiery" },
    { id: 8, image: "assets/street_paneer.jpg", title: "Paneer Chilli", type: "Chef Special" }
  ],
  team: [
    { id: 1, image: "assets/team_member_1.png", name: "CHEF LI WEI", designation: "Founder & Head Chef" },
    { id: 2, image: "assets/team_member_2.png", name: "CHEF MEI LIN", designation: "Sous Chef" },
    { id: 3, image: "assets/team_member_3.png", name: "CHEF ARJUN", designation: "Wok Specialist" },
    { id: 4, image: "assets/team_member_4.png", name: "CHEF KABIR", designation: "Senior Chef" }
  ]
};

function renderQualities() {
  const container = document.getElementById("qualitiesContainer");
  if (!container) return;
  container.innerHTML = data.ourQualities
    .map(
      (item) => `
      <div class="card">
        <img src="${item.image}" alt="${item.title}" />
        <p class="title">${item.title}</p>
        <p class="description">${item.description}</p>
      </div>
    `
    )
    .join("");
}

function renderDishes() {
  const container = document.getElementById("dishesContainer");
  if (!container) return;
  container.innerHTML = data.dishes
    .map(
      (item) => `
      <div class="card">
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <button>${item.category}</button>
      </div>
    `
    )
    .join("");
}

function renderWhoAreWe() {
  const left = document.getElementById("whoLeft");
  const right = document.getElementById("whoRight");
  if (!left || !right) return;

  left.innerHTML = data.whoWeAre
    .slice(0, 2)
    .map(
      (item) => `
      <div class="card">
        <h1 class="heading" style="font-weight:300;">${item.number}</h1>
        <p>${item.title}</p>
      </div>
    `
    )
    .join("");

  right.innerHTML = data.whoWeAre
    .slice(2)
    .map(
      (item) => `
      <div class="card">
        <h1 class="heading" style="font-weight:300;">${item.number}</h1>
        <p>${item.title}</p>
      </div>
    `
    )
    .join("");
}

function renderCoffees() {
  const container = document.getElementById("coffeeContainer");
  if (!container) return;
  container.innerHTML = data.coffees
    .map(
      (item) => `
      <div class="coffee_card">
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <button>${item.type}</button>
      </div>
    `
    )
    .join("");
}

function renderTeam() {
  const container = document.getElementById("teamContainer");
  if (!container) return;
  container.innerHTML = data.team
    .map(
      (item) => `
      <div class="card">
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.designation}</p>
      </div>
    `
    )
    .join("");
}

function initNavbar() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  if (!navLinks || !hamburger) return;

  const toggle = () => navLinks.classList.toggle("showmenu");

  hamburger.addEventListener("click", toggle);
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("showmenu"));
  });
}

function initReservation() {
  const form = document.getElementById("reservationForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "success.html";
  });
}

renderQualities();
renderDishes();
renderWhoAreWe();
renderCoffees();
renderTeam();
initNavbar();
initReservation();
