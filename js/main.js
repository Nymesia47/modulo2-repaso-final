'use strict';

/*
Lista de tareas:

1- Leer muy bien el enunciado
2- Escribir una lista de tareas
3- Crear el repositorio de Github y clonarlo (con el enlace de githubClassroom)
4- Crear la estructura de proyecto, dos opciones: AWSk o usar HTML y CSS
5- Commit inicial (push)
6- Maquetación basica de la web, html, css

1 - PINTAR LAS PALETAS CON LOS DATOS DE LA API

 - seleccionar los elementos del HTML: ul
 - Hacer la peticion al servidor
     -Acceder/guardar los datos que se necesita
     - Pimtar las paletas de colores en el HTML

2- BUSCAR LAS PALETAS POR NOMBRE
  - añadir un input de tipo text para buscar
  - Escuchar evento sobre el input, 'input', 'keyup'
     - recoger el valor del input
     - filtrar la lista de paletas por el nombre que ecribio la usuaria (filter())
     - pintar las paletas filtradas

3- MARCAR LAS PALETAS FAVORITAS
  - Crear un array de favoritas vacio
  - escuchar evento click sobre paleta LI
   - obtener la paleta clicada
   -añadir al array de favoritos la paleta que se ha clicado
   - Guardar el array en el LS
    Pintar las paletas favoritas, añadir una class CSS, estilo

4- Guardar en el localstorage
  - cuando el servidor me responda con los datos de las paletas
     -guardar en el LS el array

  - cuando carga la pagina obtener las paletas del LS
      - hay paletas en el LS
         -pintar las paletas con la informacion del LS
      - no hay paletas en el LS
         - Pido los datos al servidor fetch()
            - pintar las paletas con la informacione del servidor

  
*/

//https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json