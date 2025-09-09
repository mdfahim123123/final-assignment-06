const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then (res=> res.json())
    .then(json =>displayCategories(json.categories))
};


const loadCard = (id) => {

const url = ` https://openapi.programming-hero.com/api/category/${id}`;
fetch(url)
.then(res=>res.json())
.then(card => {
   
   const clickBtn = document.getElementById(` btn-category-${id}`)
   console.log(clickBtn)

   
    displayCard (card.plants)
});

};

const displayCard = (cards) => { 
    const treeCardContainer = document.getElementById("treeCard");
    treeCardContainer.innerHTML = "";

    cards.forEach(card => {
        console.log(card);
        const plantsCard = document.createElement("div")
        plantsCard.innerHTML= ` <div class="card bg-base-100 w-60  justify-items-center shadow-sm">
  <figure>
    <img class="w-100 h-80"
      src="${ card.image}"
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      "${card.name}"
     </h2>
    <p>"${card.description}"</p>
    <div class="card-actions justify-between">
      <div class="badge badge-outline bg-[#DCFCE7] text-[#15803D]">"${card.category}"</div>
      <div class="badge badge-outline">"${card.price}"</div>
    </div>

    <button class="btn text-white rounded-3xl bg-[#15803D]">Add Cart</button>
  </div>
</div>`;
        
        treeCardContainer.append(plantsCard);
    });
}

const displayCategories = (categories) => {
    console.log(categories)
    const categoriesLevels = document.getElementById("categoriesLevels");
    categoriesLevels.innerHTML = ""

    for(let category of categories ){

        const btnDiv = document.createElement("div");
         btnDiv.innerHTML = `<button id="btn-category-${category.id}" onclick="loadCard(${category.id})" class=" btn w-45 ">${category.category_name}</button>
         `;


         categoriesLevels.appendChild(btnDiv);

    }

}




loadCategories()