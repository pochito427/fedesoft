let num1:number=1;
let num2:number=2;
let esVerdad:boolean = true;
let hoy:Date = new Date();

function sumar(n1:number, n2:number){
	let valorSuma:number = n1 + n2;
	console.log(`la suma es ${valorSuma}`);
}

function saludar(nombre:string){
	console.log(`Hola ${nombre.toUpperCase()}`);
}

let mensaje = "prueba 1";

if(true){
	let mensaje= "prueba 2";
}
console.log(mensaje);

const OPCIONES ="OK";

//OPCIONES="error";

saludar("harley");

sumar(1,2);

function pruebas (t1:string, t2:string= "prueba", t3?:string){
    
    
        if(t3){
            console.log(`t1 = ${t1} t2=${t2} tiene t3 ${t3}`);
        }else{
            console.log(`t1 = ${t1} tiene t2 ${t2}`);
        }
}
    
pruebas("ok");
pruebas("ok", "de nuevo");
pruebas("ok", "de nuevo", "ok ");

let nuevaFucnion =  function (a:number){
	return a;
}

let funcion2 = (a:number) => a;

let funcion3 = function(a:number,b:number){
	return a+b;
}

let funcion4 = (a:number,b:number) => a+b;

let funcion5 = (a:number,b:number,c:number)=>{
	let d = a + b - c;
	return d;
}

console.log(funcion2(1));
console.log(funcion4(1,2));
console.log(funcion5(1,2,3));

let miarreglo ={
	vt1: "mi prueba",
	vt2: "prueba 2"
}

let valt1 = miarreglo.vt1;
let valt2 = miarreglo.vt2;
console.log(valt1, valt2);

let { vt1 , vt2 } = miarreglo;

console.log(vt1,vt2);

let pruebaArreglo:string[] = ["p1","p2","p3"];
let [pos1,pos2,pos3] = pruebaArreglo;

console.log(pos1, pos2, pos3);

    
    