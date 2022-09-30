const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink';

const getData = url => {
  fetch(url) // Nos retorna una promesa pendiente
    .then(response => response.json()) // Si la promesa se cumple exitosa, nos retorna la response
    .then(json => printData(json))
    .catch(err => console.error(err)) // Si la promesa falla nos muestra el error
    setTimeout(() =>{
      contenedor.classList.add('esconder');
      root.classList.remove('esconder');
    }, 2200)
}

const getReceta = id => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  fetch(url)
  .then(resp => resp.json())
  .catch(err => console.error(err))
}

const root = document.getElementById('root');
const contenedor = document.getElementById('contenedor');
const miCard = document.getElementsByClassName('mi-card')

getData(url)

const printData = json => {
  const drinks = json.drinks;
  let str = '';
  for(let i = 0; i < drinks.length; i++){
    const bebida = drinks[i]
     console.log(bebida) 
    str = str + `
      <div class="col s12 m6 l3">
        <div class="card mi-card" id="${bebida.idDrink}">
          <div class="card-image">
            <img src="${bebida.strDrinkThumb}">
          </div>
          <div class="card-content">
            <p>${bebida.strDrink}</p>
            <p>${bebida.idDrink}</p>
            <p>Bebida número: ${i + 1}</p>
          </div>
          
        </div>
      </div>`
  
  }


  receta.innerHTML = str
  root.classList.add('esconder')
  receta.classList.remove('esconder')
} 