// Función para obtener el ID del cóctel de la URL
function getCocktailIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Llamada a la API para obtener los detalles del cóctel
async function getCocktailDetails(id) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    displayCocktailDetails(data.drinks[0]);
}

// Función para mostrar los detalles del cóctel en la página
function displayCocktailDetails(drink) {
    const cocktailDetails = document.getElementById('cocktailDetails');
    cocktailDetails.innerHTML = `
    <div class="col-md-6">
        <div class="card shadow">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">
                    <strong>Instrucciones:</strong> ${drink.strInstructions}<br>
                    <strong>Ingredientes:</strong> 
                    <ul>
                        ${getIngredients(drink).map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </p>
            </div>
        </div>
    </div>`;
}

// Función para obtener los ingredientes del cóctel
function getIngredients(drink) {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure || ''} ${ingredient}`);
        }
    }
    return ingredients;
}

// Ejecutar la función para cargar los detalles
document.addEventListener('DOMContentLoaded', function () {
    const cocktailId = getCocktailIdFromURL();
    if (cocktailId) {
        getCocktailDetails(cocktailId);
    }
});

