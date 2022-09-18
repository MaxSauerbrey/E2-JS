/*
Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. 


*/

const pizzas = [{
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['Queso Mozarela', 'Salsa', 'Aceitunas', 'Oregano', 'Pimienta', 'Sal'],
        precio: 1100
    },
    {
        id: 2,
        nombre: 'Napolitana',
        ingredientes: ['Queso Mozarela', 'Salsa', 'Tomates', 'Ajo', 'Aceitunas', 'Pimienta', 'Sal'],
        precio: 1350
    },
    {
        id: 3,
        nombre: '4 quesos',
        ingredientes: ['Queso Mozarela', 'Queso Gorgonzola', 'Queso Fontina', 'Queso Parmesano', 'Pimienta', 'Sal'],
        precio: 1400
    },
    {
        id: 4,
        nombre: 'Rucula y queso azul',
        ingredientes: ['Rucula', 'Tomates cherry caramelizado', 'Queso Azul', 'Pimienta', 'Sal'],
        precio: 1380

    },
    {
        id: 5,
        nombre: 'Palmitos',
        ingredientes: ['Palmitos', 'Salsa golf', 'Tomates', 'Huevo', 'Pimienta', 'Sal'],
        precio: 1250
    },
    {
        id: 6,
        nombre: 'Hongos',
        ingredientes: ['Queso Mozarela', 'Champiniones', 'Aceitunas', 'Pimienta', 'Sal'],
        precio: 1450
    }
];

const idPizza = document.getElementById('numero'),
    heading2 = document.getElementById('h2'),
    heading4 = document.getElementById('h4'),
    button = document.getElementById('btn'),
    input = document.getElementById('numero'),
    ingredients = document.getElementById('ingredients');

const pizza = () => {
    const pizzaId = parseInt(input.value);
    console.log(pizzaId);
    if (pizzas[pizzaId] != undefined) {
        heading2.innerHTML = `${pizzas[parseInt(idPizza.value-1)].nombre}`;
    } else {
        err();
    }
    heading2.style.color = 'red';
    heading4.innerHTML = `El precio de la pizza es de $${pizzas[parseInt(idPizza.value-1)].precio}`;
    heading4.style.color = 'red';
    ingredients.classList.remove('hidden');
    ingredients.innerHTML = `Los ingredientes de la pizza <b> ${pizzas[parseInt(idPizza.value-1)].nombre} </b> son: ${pizzas[parseInt(idPizza.value-1)].ingredientes.join(", ")}.`;

}

const err = () => {
    heading2.innerHTML = `Error.Ingrese una opción correcta.(1-6)`;
    heading4.textContent = "";
    ingredients.textContent = "";
}


// console.log(idPizza.value);
button.addEventListener('click', pizza);