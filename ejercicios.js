
//Obtención del elemento "contenedor" y guardada su referencia en la variable 'contenedor'
const contenedor = document.getElementById ("contenedor");

//Creación del document fragment y guardada su referencia en la variable 'lista'
const lista = document.createDocumentFragment();

//Creación del elemento <ul> y almacenado en el document fragment de la variable 'lista'
const ul = document.createElement ('ul');
lista.appendChild(ul);

//Creación del template del elemento <li>
const template = document.getElementById ("myTemplate");
const nodo = template.cloneNode (true);

//Creación de una serie de 50 elementos 'li'
try {
    for (i = 0; i <= 50; i++) {
    const li = document.createElement ('li');
    li.textContent = i;
    //Inserción de los elementos 'li' al elemento 'ul'
    ul.appendChild(li);
}
}
catch (err) {
    console.log ('Error. list element could not be created');
}
finally {
    console.log ('Finally');
}

//Inserción del document fragment 'lista' en el 'contenedor'
contenedor.appendChild(lista);