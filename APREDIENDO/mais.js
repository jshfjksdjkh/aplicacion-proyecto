console.log("empezando la clad JS");
alert("soy una alerta");

var primera=23;
let segunda=47;
let tres = "hola";

let resultado = primera+segunda

console.log(resultado);
console.log(tres);
function salir(){
    let on = true;
    console.log(on)
}

salir();


let factura2= 55231;


const factura =55231;

//factura=32;
factura2="jose";

console.log("let:"+ factura2);
console.log("const:"+factura);


if(factura2){
    console.log("si ahi factura");
}else{
    if(factura2==23){
        console.log("no ahi factura")
    }
    console.log("no ahi factura");
}

//(condicion)?  valor verdadero:valor falso

let res = factura2 ? " si ahi una factura" : "no ahi factura ";

console.log(res);

// ciclos repetitivos(for, while,do-while)

for(let i=0; i<=10; i++){
    console.log(i);
}

let i=0;
while(i<=10){
    console.log(i);
    i++;
}

i=0;

do{

    console.log(i);
    i++
}while(i<=10);

//manejo de string 

let saludo="hola clase!";

// encontrar un caradter si no lo encuentra pone -1, si lo encuentra pone el nuemro de ubicacion 

console.log(saludo.indexOf("a"));
//string inicia o termina
console.log(saludo.startsWith("H"));
console.log(saludo.endsWith("!"));

//si la consola incluye cierto caracter o palabra 
console.log(saludo.includes("g"));

console.log("**operadores**")
//opreador AND (&&) devuelve si a (si es verdadero), si no, b
console.log(45 && false)
console.log(50 && "10")

//operador OR (||) devuelve a(si es verdero) si no, b
console.log(false || "verdadero")
console.log("10"|| 10)

let isCorrect= true;
const doTask=()=>"OK!";
console.log(isCorrect&&doTask());

let = instructores=["juan","jesus","carla"];
console.log(instructores[2]);

const tecnico={
    name:"Programacion de Softaware",
    time:"1 año",
    practicas: true
}
console.log(tecnico.name +" "+ tecnico.time)
console.log("--interpolacion de variables--")

const data= `soy un texto combinado coon variables ${tecnico.practicas} como esta y está ${instructores}`;

console.log(data);

//Una función en Java es un fragmento de código, unas cuantas líneas de programación, que resuelven un problema único y muy puntual, que se puede reutilizar cuantas veces sea necesario a lo largo de un proyecto o programa de mayor tamaño

function saludar(x, y){
    let suma = x + y;
    console.log("suma:"+suma);
    

}
///funcion flecha

const saludar=() => {
    let i=0
    while(i<=instruc.lenght){console.log(`hola prefesor`)}
}




saludar(5,20);
saludar(instructores)


