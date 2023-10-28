//agregar código para su función

//variables iniciales de grafos
//------------------------------------------grafos--------------------------------------------
//Función para crear un grafo FC
// crea array de nodos
let nodes = new vis.DataSet([
    {id: 1, label: 'Nodo 1'}
]);

// crea arrays de aristas
let edges = new vis.DataSet([
]);
//{from: 1, to: 3}

//función para crear nodo
function addNewNode (){

    //agrega valor
    let indexNode = nodes.length +1 ;
    nodes.add({id: indexNode , label: 'Nodo ' + indexNode});
    
}
//función para crear arista
function addEdge(){

    let indexEdge = edges.length +1 ;
    let indexFrom, indexTo;
    let from = document.getElementById('fromInput');
    let to = document.getElementById('toInput');

indexFrom = from.value;
indexTo = to.value;

//agrega valor
    edges.add({id: indexEdge , from: indexFrom, to: indexTo});
    
//limpia
from.value = '';
to.value = '';

}

//función para crear estructura inicial de grafos
function initGraphs(){

    // referencia objeto
    let container = document.getElementById('mynetwork');

    // asigna data
    let data = {
        nodes: nodes,
        edges: edges
    };
    let options = {};

    // inicia
    var network = new vis.Network(container, data, options);  
}
//------------------------------------------grafos--------------------------------------------

function math2 (){
    console.log(2);
}
function math3 (){
    console.log(3);
}
function math4 (){
    console.log(4);
}
function math5 (){
    console.log(5);
}

function changeContent(sectionId) {
    const sections = document.querySelectorAll('.page-content');
    // sections.forEach((section) => {
    //     section.style.display = 'none';
    // });
    // document.getElementById(sectionId).style.display = 'block';

    switch (sectionId){
        case "section1":
            math1();
            break;
        case "section2":
            math2();
            break;
        case "section3":
            math3();
            break;
        case "section4":
            math4();
            break;
        case "section5":
            math5();
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navigationLinks = document.querySelectorAll('.mdl-tabs__tab');
    navigationLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const sectionId = e.target.getAttribute('href').substring(1);
            changeContent(sectionId);
        });
    });

    // Mostrar la primera sección por defecto
    // changeContent('section1');


    //cambios iniciales para sección 1
    //agrega evento a boton para crear nodo
    let btnNode = document.getElementById('newNode');;
    if (btnNode != null && typeof(btnNode)!='undefined' && btnNode!=""){
        btnNode.addEventListener('click', (e) => {
            addNewNode(); 
        });
    }
    let btnV = document.getElementById('newV');;
    if (btnV != null && typeof(btnV)!='undefined' && btnV!=""){
        btnV.addEventListener('click', (e) => {
            addEdge(); 
        });
    }
    //define la estructura de grafos
    initGraphs();
        
});


