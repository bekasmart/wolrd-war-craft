const id = window.location.href.split("id=")[1];

const url = "https://65e562ea3070132b3b25fc12.mockapi.io/card";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const product = data.find((product) => product.id == id);
    updateContent(product);
  });


function updateContent(product) {
    document.querySelector("img").src = product.imgUrl;
    document.querySelector("h3").textContent = product.brand;
    document.querySelector("p").textContent = product.category;
    document.querySelector("p").textContent = product.price;

}