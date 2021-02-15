let doc = document.querySelector("html");
const boton1 = document.getElementById("myButton1");
const boton2 = document.getElementById("myButton2");
const boton3 = document.getElementById("myButton3");
const boton4 = document.getElementById("myButton4");
const boton5 = document.getElementById("myButton5");
const boton6 = document.getElementById("myButton6");
boton1.onclick = function(){pregunta1()}; 
boton2.onclick = function(){pregunta2()}; 
boton3.onclick = function(){pregunta3()}; 
boton4.onclick = function(){pregunta4()}; 
boton5.onclick = function(){pregunta5()};
boton6.onclick = function(){pregunta6()};  

// Ejercicio1
function pregunta1(){

    const numero = window.prompt('inserte un numero');
    let cuadrado;
    let cubo;
	
	for(let i = 0; i <= numero; i++){
        cuadrado = 0;
        cubo = 0;
        cuadrado = i * i;
        cubo = cuadrado * i;
        document.write('<br><tr><td> ' + i + '</td><td> ' + cuadrado + '</td><td> ' + cubo + '</td></tr>');
    }    
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

//Ejercicio 2
function pregunta2(){
    let inicio = Date.now();
    const numero1 = Math.round(Math.random()*100);
    const numero2 = Math.round(Math.random()*100);
    const respuesta = window.prompt("Ingrese el resultado:" + numero1 + "+" + numero2);
    if(respuesta == (numero1 + numero2)){
        let fin = Date.now();
        document.write('<h1>CORRECTO!!</h1><br>' + 'Tardaste: ' + ((fin - inicio)/1000)+ 'segundos');
    }
    else{
        let fin = Date.now();
        document.write('<h1>INCORRECTO :c</h1><br>' + 'Tardaste: ' + ((fin - inicio)/1000)+ 'segundos');
    }
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

//Ejercicio 3
function pregunta3(){
    
    let array = [-5, 52, 0, -3, 0, 0, 1, -3, 5, 6, 8, -4, 0];
    let cero = 0;
    let mayores = 0;
    let menores = 0;
    document.write('<p>Arreglo: </p>'); 
    for(let i = 0; i < 13; i++){
        document.write(array[i]+ "   ");
        if(array[i] == 0){
            cero++;
        }
        else if(array[i] < 0){
            menores++;
        }
        else{
            mayores++;
        }
    }
    document.write('<p>Numeros menores a 0: </p>' + menores + '<br><p>Numeros mayores a 0: </p>' + mayores + '<br><p>Cantidad de 0: </p>' + cero);
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

//Ejercicio 4
function pregunta4(){
    
    let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    let prom =[0, 0, 0];

    document.write('<h3>Matriz: </h3>');
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            document.write(array[i][j] + "   ");
            prom[i] = prom[i] + array[i][j];
        }
        document.write('<br>');
    }
   const numero = window.prompt('inserte un numero');
    for(let i = 0; i < 3; i++){
         document.write(prom[i]/3+ "   ");
    }
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

//Ejercicio 5
function pregunta5(){
    const numero = window.prompt('inserte el numero que desea invertir');
    var n = numero;
    var modulo = 0;
    document.write("El numero original es: "+ numero);

    const inverso = (numero) => parseInt(String(numero).split("").reverse().join(""), 10);
    document.write("<br><br>El numero invertido es: "+inverso(numero));
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

//Ejercicio 6
class User{
    constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    }
    sayHi(){
        alert("Hi " + this.nombre);
    }
    calcularAñoNacimiento(){
        document.write('Tu año de nacimiento es: ' + (2021 - this.edad));
    }
    
};

function pregunta6(){
    
    const name = window.prompt('Dime tu nombre');
    const age = window.prompt('Dime tu edad');
    let user = new User(name, age);
    user.sayHi();
    user.calcularAñoNacimiento();
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}
function reWrite(){
    // Re-write the webpage
    window.location.reload(true);
}




