//agregar código para su función

//Función para crear un grafo FC
function math1 (){
    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);
    
}
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


    //agrega evento a boton para crear nodo
    let btnNode = document.querySelector('#newNode');;
    if (btnNode != null && typeof(btnNode)!='undefined' && btnNode!=""){
        btnNode.addEventListener('click', (e) => {
           math1(); 
        });
    }
        
});


