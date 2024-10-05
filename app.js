 //trago aleatorio
async function getRandomDrink() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    displayDrink(data.drinks[0]);
}

function displayDrink(drink) {
    const randomDrink = document.getElementById('Tragorandom');
    randomDrink.innerHTML = `
    <div class="col-md-4 mb-4">
        <div class="card shadow">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
            <div class="card-body text-center">
                <h5 class="card-title">
                    <span class="text-muted">#11118 -</span>
                    <span class="text-danger">${drink.strDrink}</span>
                </h5>
                <p class="card-text">
                    <strong>Instrucciones:</strong> <span class="text-info">${drink.strInstructions}</span><br>
                    <strong>Tipo:</strong> <span class="text-success">${drink.strAlcoholic}</span>
                </p>
                <a href="#" class="btn btn-warning">Preparación</a>
            </div>
        </div>
    </div>`;
}


document.addEventListener('DOMContentLoaded', function () {
    getRandomDrink(); 
});


document.getElementById('TragoR').addEventListener('click', function () {
    getRandomDrink();
});

// Trago por nombre
document.getElementById('btnBuscar').addEventListener('click', async function () {
    const searchInput = document.getElementById('buscar').value;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    displayDrinks(data.drinks);
});

function displayDrinks(drinks) {
    const searchResults = document.getElementById('mostrarT');
    searchResults.innerHTML = '';
    drinks.forEach(drink => {
        searchResults.innerHTML += `
        <div class="col-md-2 mb-4">
            <div class="card shadow">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
                <div class="card-body text-center">
                    <h5 class="card-title">
                        <span class="text-muted">#11118 -</span>
                        <span class="text-danger">${drink.strDrink}</span>
                    </h5>
                    <p class="card-text">
                        <strong>Categoria:</strong> <span class="text-info">${drink.strCategory}</span><br>
                        <strong>Tipo:</strong> <span class="text-success">${drink.strAlcoholic}</span>
                    </p>
                    <a href="#" class="btn btn-warning">Preparación</a>
                </div>
            </div>
        </div>`;
    });
}

function displayDrink(drink) {
    const randomDrink = document.getElementById('Tragorandom');
    randomDrink.innerHTML = `
    <div class="col-md-4 mb-4">
        <div class="card shadow">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
            <div class="card-body text-center">
                <h5 class="card-title">
                    <span class="text-muted">#11118 -</span>
                    <span class="text-danger">${drink.strDrink}</span>
                </h5>
                <p class="card-text">
                    <strong>Instrucciones:</strong> <span class="text-info">${drink.strInstructions}</span><br>
                    <strong>Tipo:</strong> <span class="text-success">${drink.strAlcoholic}</span>
                </p>
                <a href="preparacion.html?id=${drink.idDrink}" class="btn btn-warning">Preparación</a> <!-- Nuevo -->
            </div>
        </div>
    </div>`;
}

function displayDrinks(drinks) {
    const searchResults = document.getElementById('mostrarT');
    searchResults.innerHTML = '';
    drinks.forEach(drink => {
        searchResults.innerHTML += `
        <div class="col-md-2 mb-4">
            <div class="card shadow">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
                <div class="card-body text-center">
                    <h5 class="card-title">
                        <span class="text-muted">#11118 -</span>
                        <span class="text-danger">${drink.strDrink}</span>
                    </h5>
                    <p class="card-text">
                        <strong>Categoria:</strong> <span class="text-info">${drink.strCategory}</span><br>
                        <strong>Tipo:</strong> <span class="text-success">${drink.strAlcoholic}</span>
                    </p>
                    <a href="preparacion.html?id=${drink.idDrink}" class="btn btn-warning">Preparación</a> <!-- Nuevo -->
                </div>
            </div>
        </div>`;
    });
}

