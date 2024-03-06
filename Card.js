function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="cards-body">
    <img src=${product.imgUrl} width=400
    <h5 class="card-title">${product.brand}</h5>
    <p class="card-text">${product.price}</p>
    </div>
    `;
  card.addEventListener("click", () => {
    window.location.href = `details.html?id=${product.id}`;
  });
  return card;
}

const url = "https://65e562ea3070132b3b25fc12.mockapi.io/card";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const card = createCard(product);
      document.querySelector(".cards").appendChild(card);
    });
  });
