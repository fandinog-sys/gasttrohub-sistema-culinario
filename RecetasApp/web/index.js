let recetas = [];

function registrarReceta(){

let nombre=document.getElementById("nombre").value;
let ingredientes=document.getElementById("ingredientes").value;
let costo=document.getElementById("costo").value;

let receta={
nombre:nombre,
ingredientes:ingredientes,
costo:costo
};

recetas.push(receta);

alert("Receta registrada");

mostrarRecetas();

}

function mostrarRecetas(){

let contenedor=document.getElementById("resultados");

contenedor.innerHTML="";

recetas.forEach((r,index)=>{

contenedor.innerHTML+=`
<div draggable="true" ondragstart="drag(event)" id="receta${index}">
<h3>${r.nombre}</h3>
<p>${r.ingredientes}</p>
</div>
`;

});

}

function buscarRecetas(){

let filtro=document.getElementById("buscarIngrediente").value;

let resultados=recetas.filter(r=>r.ingredientes.includes(filtro));

let contenedor=document.getElementById("resultados");

contenedor.innerHTML="";

resultados.forEach(r=>{

contenedor.innerHTML+=`
<h3>${r.nombre}</h3>
<p>${r.ingredientes}</p>
`;

});

}

function allowDrop(ev){
ev.preventDefault();
}

function drag(ev){
ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev){

ev.preventDefault();

let data=ev.dataTransfer.getData("text");

ev.target.appendChild(document.getElementById(data));

}

function generarLista(){

let lista="Lista de compras generada automáticamente";

document.getElementById("listaCompras").innerHTML=lista;

}