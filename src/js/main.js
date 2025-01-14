'use strict';

const ulList = document.querySelector('.js-list');
const inputSearch = document.querySelector('.js-search');
let palettes = [];
let favPalettes = [];

const handleClickFav = (ev) => {
    const liClicked = ev.currentTarget.id;

    //buscar la paleta clickada a partir del id
    const paletteSelect = palettes.find((eachPalette)=>eachPalette.id === liClicked);

    //comprobar que la paleta seleccionada no este en el array de fav - findIndex, find, filter, bucle
    const indexFavSelected = favPalettes.findIndex((palette) => palette.id === liClicked);
    if (indexFavSelected  === -1) {
        favPalettes.push(paletteSelect);
    } else {};
    localStorage.setItem('favPalettes', JSON.stringify(favPalettes));

    //eliminar del array
    //favPalettes.splice(indexFavSelected, 1)

    console.log(favPalettes);
    renderPalettes(palettes);


    
};

const listenerPalettes = ()=>{
    const allPalettesLi = document.querySelectorAll ('.js_palette');
    for (const li of allPalettesLi) {
        li.addEventListener('click', handleClickFav);
    }
};

//pintar paletas

function renderPalettes (list) {
    ulList.innerHTML = '';
    for (const palette of list) {
        let colors = '';
        for(const color of palette.colors) {
            colors += `<div class="palette__color" style="background-color:#${color}"></div>`
        }
        //verificar si la palette esta en el array de fav
        const findFav = favPalettes.find(palFav => palFav.id === palette.id);
        let css = findFav ? 'favorite' : '';

        ulList.innerHTML += `
        <li id= '${ palette.id}' class='js_palette ${css}'>
           <h3>${palette.name}</h3>
           <div class="palettes">
               ${colors}
           </div>
        </li>`;
    }
    listenerPalettes();

}

//buscar los datos en la API

function getDataApi () {
    fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
    .then(resp => resp.json())
    .then(data => {
        palettes = data.palettes;
        console.log(palettes);
        renderPalettes(palettes);
        //guardar datos en el local storage
        localStorage.setItem('palettesServer', JSON.stringify(palettes));
    });
}

//function filter

function handleSearch (ev) {
    const valueSearch = ev.target.value;
    const filteredPalettes = palettes.filter((item)=> item.name.toLowerCase().includes(valueSearch.toLowerCase()));
    renderPalettes(filteredPalettes);
}

inputSearch.addEventListener('input', handleSearch);

//obtengo los datos del LS para saber si ejecuto o no el getDataApi

const dataPalettesLS = localStorage.getItem('palettesServer');
const favdataPalettesLS = localStorage.getItem('favPalettes');
if (dataPalettesLS) {
    palettes = JSON.parse(dataPalettesLS);
    if(favdataPalettesLS) {
        favPalettes = JSON.parse(favdataPalettesLS);
    }
    renderPalettes(palettes);
} else {
    getDataApi();
}


