const filterButton = document.querySelectorAll(".filter_button button");
const filterable_card = document.querySelectorAll(".filter_card .gallery_card");
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterable_card.forEach(gallery_card => {
    gallery_card.classList.add("hide");

    if(gallery_card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
    gallery_card.classList.remove("hide");

    }
  });
};
// console.log(filterButton,filterable_card)

filterButton.forEach((button) => button.addEventListener("click", filterCards));
