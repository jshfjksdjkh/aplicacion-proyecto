class aprendiz{
    constructor(nombre,sexo,competencia,aprendices){
        this.nombre =nombre;
        this.edad= edad;
        this.sexo=sexo;
        this.competencia=competencia;
        this.aprendices=aprendices;

    }
    showInfoAprendiz(){
        console.log(`tu nombre es ${this.nombre} tienes ${this.edad} años y eres (a) ${this.sexo} tu competencia ${this.competencia}`)


    }
    recorrerA();
    let i=0;
    while(i<5){
        if (this.aprendices[i].starsWith("c")){
            console.log(`${this.aprendices[i]}no puede pasar`)
        }else if (this.aprendices[i].starsWith("a")){
            console.log(`${this.aprendices[i]}Espere por favor`)

        
    }
    i++;


    let programación=new("julia",23,"maasculino","javaSE", aprendices);
    programación.showInfoAprendiz();
    programación.recorrerA();

}
}