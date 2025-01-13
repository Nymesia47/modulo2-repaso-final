'use strict';

const ulList = document.querySelector('.js-list');

function renderPalettes (list) {
    for (const palette of list) {
        let content = `<h3>${palette.name}</h3>`;
        let colors = '';
        for(const color of palette.colors) {
            colors += `<div class="palette__color" style="background-color:#${color}"></div>`
        }

        ulList.innerHTML += `<li>
        ${content}
        <div class="palettes">
        ${colors}
        </div>
        </li>`
    }
}

function getDataApi () {
    fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
    .then(resp => resp.json())
    .then(data => {
        const palettes = data.palettes;
        renderPalettes(palettes);
    });
}

getDataApi();