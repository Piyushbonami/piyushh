// const searchBar = document.querySelector('#search-bar');
// const searchButton = document.querySelector('#searchButton'); 
// const divBar = document.querySelector('.recipe-container');

// async function fetchRecipe(query) {
    
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//         const data = await response.json();
//         data.meals.forEach(meal =>
//              {
//             const receipeDiv=document.createElement('div');
//             receipeDiv.classList.add('receipe-div');
//             receipeDiv.innerHTML =`<img src="${meal.strMealThumb}">
//             <h3>${meal.strMeal}</h3>
//             <p>${meal.strCategory}</p>
//             <p>${meal.strArea}</p>  
//             `;
//             //creating a button
//             const btn=document.createElement("button");
//             btn.classList.add('view-button');
//             btn.textContent="view receipe";
//             receipeDiv.appendChild(btn);
//             divBar.appendChild(receipeDiv);
//             btn.addEventListener('click',function(e){ 
//                 const divbar=document.createElement('div');
//                 divbar.classList.add("btnbar");
//                 divbar.innerHTML=`
//                 <div>${strInstructions}</div>
//                 `
                

//             })

//         });

    
// }

// searchButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log("Button is pressed");
//     const searchInput = searchBar.value.trim();
//     if (searchInput) {
//         fetchRecipe(searchInput);
//     }
// });
const h2=document.querySelector('#display')
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#searchButton'); 
const divBar = document.querySelector('.recipe-container');


async function fetchRecipe(query) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    if (h2) {
        h2.innerText = `Favourite food: ${query} are below`;
    }

    if (data.meals) {
        data.meals.forEach(meal => {
            const receipeDiv = document.createElement('div');
            receipeDiv.classList.add('receipe-div');

            receipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
            `;

            // Create "View Recipe" button
            const btn = document.createElement("button");
            btn.classList.add('view-button');
            btn.textContent = "View Recipe";

            // Append button to the recipe div
            receipeDiv.appendChild(btn);
            divBar.appendChild(receipeDiv);

            // Add event listener to button
            btn.addEventListener('click', function () {
                // Toggle instruction display
                let existing = receipeDiv.querySelector('.instructions');
                if (existing) {
                    existing.remove(); // Remove if already shown
                } else {
                    const instructionsDiv = document.createElement('div');
                    instructionsDiv.classList.add("instructions");
                    instructionsDiv.innerHTML = `
                        <p><strong>Instructions:</strong></p>
                        <p>${meal.strInstructions}</p>
                    `;
                    receipeDiv.appendChild(instructionsDiv);
                }
            });
        });
    } else {
        divBar.innerHTML = `<p>No recipes found for "${query}".</p>`;
    }
}

searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button is pressed");
    const searchInput = searchBar.value.trim();
    if (searchInput) {
        divBar.innerHTML = ""; // Clear previous results
        fetchRecipe(searchInput);
    }
});
