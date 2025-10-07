alert(`En este programa se mostrara si hace 
calor o el clima es agradable, dependiendo de 
la temperatura digitada`);
//Primero asignamos el valor temperatura
//y pedimos la temperatura con la que vamos a trabajar
let temperatura = parseFloat(prompt(`
Por favor digite de cuantos grados centigrados
es la temperatura`));
//luego programamos las condicionales y mostramos que hace calor
//en caso de que se cumpla la condicion, o clima agradable en caso
//contrario
if(temperatura>=30){
    alert(`Hace calor`);
}else{
    alert("El clima es agradable");
}
