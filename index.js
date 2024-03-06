const y = document.querySelector("#login"); //В этом коде мы добавляем слушатель события "click" к элементу с id "login".
y.addEventListener("click", () => { 
  //  При клике на этот элемент происходит переход на страницу "inpyt.html
  window.location.href = "inpyt.html";
});
//addEventListener событияга обробатоват етеды
const url = "https://65e562ea3070132b3b25fc12.mockapi.io/card"; //В этом участке кода мы определяем переменную url,
async function fetchData() {
  // которая содержит ссылку на API, откуда мы будем получать данные.
  let data = await fetch(url).then((res) => res.json()); //Затем мы создаем асинхронную функцию fetchData,
  return data; //которая отправляет запрос на этот URL и возвращаетданные в формате JSON
}

async function main() {
  //В функции main мы вызываем функцию fetchData и ждем получения данных.
  // После этого мы обращаемся к элементу с классом "cards" и заполняем
  //его содержимое данными, полученными из API. Для каждого продукта
  //создается HTML разметка с изображением, названием и ценой.
  const cards = document.querySelector(".cards");
  let data = await fetchData();
  console.log(data);
  cards.innerHTML = data
    .map((product) => {
      return `
      <div class="card-body-img"> 
        <div class="cards-body" id="${product.id}">
       <img class="card_img" src="${product.imgUrl}" width=350 />
       <h5 class="card-title">${product.brand}</h5>
       <p class="card-text">${product.price}</p>
       </div>
    </div>
    `;
    })
    .join("");

  detailsPage();
}

function detailsPage() {
  ///Функция detailsPage добавляет слушатели событий "click" 
  //ко всем изображениям продуктов. При клике на изображение 
  //происходит перенаправление на страницу "details.html" с
  // помощью id продукта.
  let imgs = document.querySelectorAll(".card_img");
  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      let id = img.parentElement.id;

      window.location.href = `details.html?id=${id}`;
    });
  });
}

main();//Наконец, вызывается функция main, которая запускает весь процесс получения данных и отображения их на странице.
