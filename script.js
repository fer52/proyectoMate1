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
    //toma valores y valida exitencia de nodos
    indexFrom = from.value;
    indexTo = to.value;

    let isValidFrom = false;
    let isValidTo = false;
    nodes.forEach(function(node){

        if(node.id == indexFrom){
            isValidFrom = true;
        }

        if(node.id == indexTo){
            isValidTo = true;
        }
        
    })

    if(!isValidFrom || !isValidTo){
        alert('Arista invalida');
        return false;
    }

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

//------------------------------------------conjuntos--------------------------------------------
const form = document.querySelector('form');
  const result = document.querySelector('#result');
  const clearButton = document.querySelector('#clearButton');
  const dataButton = document.querySelector('#dataC');

  dataButton.addEventListener('click', () => {
    event.preventDefault();
    const set1 = new Set(document.getElementById('set1').value.split(', '));
    const set2 = new Set(document.getElementById('set2').value.split(', '));
    const union = new Set([...set1, ...set2]);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    result.innerHTML = `Unión: ${Array.from(union).join(', ')}<br>Intersección: ${Array.from(intersection).join(', ')}`;

    // Borrar elementos de los circulos
    const vennUnion = document.querySelector('#venn-union');
    const vennIntersection = document.querySelector('#venn-intersection');

    vennUnion.textContent = Array.from(union).join(', ');
    vennIntersection.textContent = Array.from(intersection).join(', ');
  })

// form.addEventListener('click', (event) => {
//     event.preventDefault();
//     const set1 = new Set(form.querySelector('#set1').value.split(', '));
//     const set2 = new Set(form.querySelector('#set2').value.split(', '));
//     const union = new Set([...set1, ...set2]);
//     const intersection = new Set([...set1].filter(x => set2.has(x)));
//     result.innerHTML = `Unión: ${Array.from(union).join(', ')}<br>Intersección: ${Array.from(intersection).join(', ')}`;

//     // Borrar elementos de los circulos
//     const vennUnion = document.querySelector('#venn-union');
//     const vennIntersection = document.querySelector('#venn-intersection');

//     vennUnion.textContent = Array.from(union).join(', ');
//     vennIntersection.textContent = Array.from(intersection).join(', ');
//   });

  clearButton.addEventListener('click', () => {
    result.innerHTML = ''; // Borra el contenido de #result

    // Restaurar el contenido de los círculos del diagrama de Venn
    const vennUnion = document.querySelector('#venn-union');
    const vennIntersection = document.querySelector('#venn-intersection');

    vennUnion.textContent = '';
    vennIntersection.textContent = '';
    document.getElementById('set1').value= '';
    document.getElementById('set2').value = '';
    
  });

function math2 (){
    console.log(2);
}

//------------------------------------------conjuntos--------------------------------------------

//------------------------------------------permutación--------------------------------------------
function getPermutation(){
    let permuta = parseInt(document.getElementById('setElement').value);
    let permuto = parseInt(document.getElementById('setGroups').value)

    let nF = factorial(permuta);
    let nkf = factorial(permuta - permuto);
    
    let resultP =  nF / nkf;

    document.getElementById('setResult').value = resultP;

}

function factorial(n){
    return (n == 0) ? 1 : n * factorial(n-1);
}

function math3 (){
    console.log(3);
}
//------------------------------------------permutación--------------------------------------------
//------------------------------------------mcd--------------------------------------------
function encontrarMCD(){
    let numero1 = parseInt(document.getElementById("input-num1").value);
    let numero2 = parseInt(document.getElementById("input-num2").value);
    let mcd = 0;

    for(let a = 1; a <= numero1 && a <= numero2; a++){
        if(numero1 % a == 0 && numero2 % a == 0){
            mcd = a;
        }
    }
    
    document.getElementById("texto salida").innerHTML =
    `El Maximo Comun Divisor de ${numero1}  y ${numero2} es: ${mcd}`;
}
//------------------------------------------mcd--------------------------------------------
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
    let btnNode = document.getElementById('newNode');
    if (btnNode != null && typeof(btnNode)!='undefined' && btnNode!=""){
        btnNode.addEventListener('click', (e) => {
            addNewNode(); 
        });
    }
    let btnV = document.getElementById('newV');
    if (btnV != null && typeof(btnV)!='undefined' && btnV!=""){
        btnV.addEventListener('click', (e) => {
            addEdge(); 
        });
    }
    //define la estructura de grafos
    initGraphs();
        

    //asigna llamado para permutacion
    let btnPermutation = document.getElementById('btnPermutation');
    btnPermutation.addEventListener('click', (e) => {
        getPermutation(); 
    });
});


