// King D Shoes

console.log("Welcome to King D Shoes!");

const search = document.querySelector(".search input");

if (search) {
  search.addEventListener("keyup", function () {
    const filter = search.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();

      if (name.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
