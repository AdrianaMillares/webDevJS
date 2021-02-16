const doc = document.querySelector("html");

const boton = document.getElementById("boton");
boton.onclick = function(){total()};

function total(){
    let p1 = document.getElementById("tacos").value;
    let p2 = document.getElementById("coca").value;
    let p3 = document.getElementById("lima").value;

    if(p1 < 0 || p2 < 0 || p3 < 0){
        alert("Cantidad invalida");
    }
    else if(p1 == 0 && p2 == 0 && p3 ==0){
        alert("Cantidad invalida");
    }
    else{    
    let iva = 0;
    let suma = 0;
    document.write('<p>Total tacos de tripa: </p>' + (p1*12) + '<br><p>Total coca cola: </p>' + ((p2*14)) + '<br><p>Total agua de lima: </p>' + (p3*15));
    suma = (p1*12) + (p2*14) + (p3*15);
    iva = suma * 0.16;
    suma = suma + iva;
    document.write('<br><br>IVA: ' + iva);
    document.write('<br><br>Total a pagar: ' + suma);
    }

}