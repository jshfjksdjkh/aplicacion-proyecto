// rest:junta los elementos
function saludarRest(saludo,...nombre){
    for(i in nombre){
        console.log(`${saludo} ${nombre[i]}`);

    }
}
saludarRest("hola","fernando","javier","maritza", "teo");


//spred: esparce los elementos como si fuese enviandos por separados

function saludarSpread(saludo,...nombre){
    console.log(`${saludo} ${nombre}.`);
}
let person=["maria","juan","pedro","julian"];
saludarSpread("hola",person);


let partes= ["piernas", "brazos",];
let cuerpo= ["cabeza", "cuello",...partes,"pies", "cabello"]


console.log(cuerpo);

//clases: es un plantill, define las prpeiedades y metodos de un obejto. se puden reutilizar por medio de instancia .
console.log("***---clases---**")

class persons{
    constructor(nombre,edad,sexo){
        this.nombre= nombre;
        this.edad=edad;
        this.sexo=sexo;
    }

    getName(){
        console.log("tu te llamas"+this.nombre)
    }
    getAllInfo(){
        console.log(`tu nombre es ${this.nombre} tienes ${this.edad} años y eres una (a) ${this.sexo}`)

    }
}
let juanes=new persons("juanes",47,"masculino")
juanes.getAllInfo()


class aprendiz extends persons{
    constructor(nombre,edad,sexo,programa,competencia){
        super(nombre,edad,sexo);
        this.programa=programa
        this.competencia=competencia
    }
    getaprendiz(){
        console.log(`te llamas ${this.nombre} tienes ${this.edad} años eres un (a) ${this.sexo} tu programa ${this.programa} y estas dando ${this.competencia}`)

    }
}
let julian = new aprendiz("julian",19,"masculino","motores","mantenimiento de vehiculo pesado");
julian.getaprendiz();