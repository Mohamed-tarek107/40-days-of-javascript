const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill."
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce."
  }
];

const recipescopy = [...recipes]
const recipeList = document.getElementById("recipe-list")
const searchinput = document.getElementById("search")


const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", () =>{
    searchinput.value = "";
    localStorage.removeItem("searched")
    displayRecipes(recipes);
})


function displayRecipes(listOfRecipes) {
     recipeList.innerHTML = "";

        if (listOfRecipes.length === 0) {
    const noSearch = document.createElement("div");
    noSearch.className = "nosearch";
    noSearch.textContent = "No recipes found.";
    recipeList.appendChild(noSearch);
    return;
       }


    listOfRecipes.forEach(recipe => {
    
        const recipeDivs = document.createElement("div")
        recipeDivs.className = "recipe"

        const recipetitle = document.createElement("div")
        recipetitle.className = "recipe-title";
        recipetitle.textContent = recipe.title

        const details = document.createElement("div")
        details.className = "details"

        const ingredients = document.createElement("ul")
        ingredients.className = "ingredients"
        recipe.ingredients.forEach((item) =>{
           const li = document.createElement("li")
           li.textContent = item;
           ingredients.appendChild(li)
        })

        const instruct = document.createElement("p")
        instruct.textContent = recipe.instructions;

        recipetitle.addEventListener("click",() =>{
          // expand
          details.classList.toggle("expanded")
        })

        details.appendChild(instruct)
        details.appendChild(ingredients)
        recipeDivs.appendChild(recipetitle)
        recipeDivs.appendChild(details)
        recipeList.appendChild(recipeDivs)
    })
}
displayRecipes(recipes);

function search(){
  const input = searchinput.value.toLowerCase();

  const filtered = recipes.filter((recipe) =>{
    return recipe.title.toLowerCase().includes(input)
  })
  displayRecipes(filtered)
}


window.addEventListener("DOMContentLoaded", () =>{ 
  const savedsearch = localStorage.getItem("searched")
  if(savedsearch){ //prefill last 
    searchinput.value = savedsearch;
  }
})

searchinput.addEventListener("input", () => { //save search as user types
  localStorage.setItem("searched", searchinput.value);
});

searchinput.addEventListener("input", search)