alert(`En este programa se va a mostrar un mes, dependiendo
del numero que ingrese el usuario, siendo 1 enero hasta 12 
que seria diciembre`);
//Asignamos y pedimos el numero
let mes = parseInt(prompt(`Por favor digitar un numero
del 1 al 12`));
//luego programamos
switch (mes) {
    case 1:
    alert("Enero");
    break;
    case 2:
    alert("Febrero");
    break;
    case 3:
    alert("Marzo");
    break;
    case 4:
    alert("Abril");
    break;
    case 5:
    alert("Mayo");
    break;
    case 6:
    alert("Junio");
    break;
    case 7:
    alert("Julio");
    break;
    case 8:
    alert("Agosto");
    break;
    case 9:
    alert("Septiembre");
    break;
    case 10:
    alert("Octubre");
    break;
    case 11:
    alert("Noviembre");
    break;
    case 12:
    alert("Diciembre");
    break;
    default:
    alert("Numero invalido");
    break;
}
