document.addEventListener('DOMContentLoaded', () => {
    fetch('peluditos.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cardsPeluditos');
            data.forEach((peludito, index) => {
                const card = document.createElement('div');
                card.className = `card ${index % 2 === 0 ? 'pink' : 'blue'}`; // Alternar colores de las tarjetas

                card.innerHTML = `
                    <div class="textCard">
                        <h4>${peludito.name}</h4>
                        <p>${peludito.description}</p>
                    </div>
                    <div class="imgCard">
                        <img src="${peludito.image}" alt="${peludito.name}">
                    </div>
                    <div class="additionalInfo">

                    <div>
                    <p><img src="img/weight.svg" alt="Peso icono">${peludito.weight}</p>
                    <p><img src="img/pets.svg" alt="Tipo icono"> ${peludito.type}</p>
                    </div> 

                    <div>
                    <p><img src="img/measure.svg" alt="Tamaño icono">${peludito.size}</p>
                    <p><img src="img/dog.svg" alt="Edad icono"> ${peludito.age} años </p>
                    </div>
                    
                </div>
                `;

                cardsContainer.appendChild(card);
            });
        });
});