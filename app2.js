alert(`En este programa se clasificara la velocidad de un vehiculo
en muy lento, velocidad moderada, rapido y muy rapido
dependiendo de la velocidad digitada por el usuario`);
//Primero le pedimos que digite el valor de la velocidad
let velocidad = parseFloat(prompt("Por favor digite la velocidad"));
//Segundo programamos las condicionales
if(velocidad<30){
    alert(`Muy lento`)
}else if (velocidad>=30 && velocidad<=60){
    alert(`Velocidad moderada`)
}else if (velocidad>60 && velocidad<=100){
    alert(`Rapido`)
}else if (velocidad>100){
    alert(`Muy rapido`)
}