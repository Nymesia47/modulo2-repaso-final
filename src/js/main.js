'use strict';

const ulList = document.querySelector('.js-list');
const inputSearch = document.querySelector('.js-search');
let palettes;

function renderPalettes (list) {
    ulList.innerHTML = '';
    for (const palette of list) {
        let colors = '';
        for(const color of palette.colors) {
            colors += `<div class="palette__color" style="background-color:#${color}"></div>`
        }

        ulList.innerHTML += `
        <li>
           <h3>${palette.name}</h3>
           <div class="palettes">
               ${colors}
           </div>
        </li>`;
    }
}

function getDataApi () {
    fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
    .then(resp => resp.json())
    .then(data => {
        palettes = data.palettes;
        renderPalettes(palettes);
    });
}

getDataApi();

//function filter

function handleSearch (ev) {
    const valueSearch = ev.target.value;
    const filteredPalettes = palettes.filter((item)=> item.name.toLowerCase().includes(valueSearch.toLowerCase()));
    renderPalettes(filteredPalettes);
}

inputSearch.addEventListener('input', handleSearch);