var num1 = 1;
var num2 = 2;
var esVerdad = true;
var hoy = new Date();
function sumar(n1, n2) {
    var valorSuma = n1 + n2;
    console.log("la suma es " + valorSuma);
}
function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
var mensaje = "prueba 1";
if (true) {
    var mensaje_1 = "prueba 2";
}
console.log(mensaje);
var OPCIONES = "OK";
//OPCIONES="error";
saludar("harley");
sumar(1, 2);
function pruebas(t1, t2, t3) {
    if (t2 === void 0) { t2 = "prueba"; }
    if (t3) {
        console.log("t1 = " + t1 + " t2=" + t2 + " tiene t3 " + t3);
    }
    else {
        console.log("t1 = " + t1 + " tiene t2 " + t2);
    }
}
pruebas("ok");
pruebas("ok", "de nuevo");
pruebas("ok", "de nuevo", "ok ");
var nuevaFucnion = function (a) {
    return a;
};
var funcion2 = function (a) { return a; };
var funcion3 = function (a, b) {
    return a + b;
};
var funcion4 = function (a, b) { return a + b; };
var funcion5 = function (a, b, c) {
    var d = a + b - c;
    return d;
};
console.log(funcion2(1));
console.log(funcion4(1, 2));
console.log(funcion5(1, 2, 3));
var miarreglo = {
    vt1: "mi prueba",
    vt2: "prueba 2"
};
var valt1 = miarreglo.vt1;
var valt2 = miarreglo.vt2;
console.log(valt1, valt2);
var vt1 = miarreglo.vt1, vt2 = miarreglo.vt2;
console.log(vt1, vt2);
var pruebaArreglo = ["p1", "p2", "p3"];
var pos1 = pruebaArreglo[0], pos2 = pruebaArreglo[1], pos3 = pruebaArreglo[2];
console.log(pos1, pos2, pos3);
