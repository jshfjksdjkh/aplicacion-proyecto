console.log("**asicronia***")
// promise(puden cumplirse o fallar)

// pido el listado de 5mil usuarios
// muuesto menu principal
// muestra foto  perfi
// muestro todo..
// muestra listado de 5mil usuarios


const tareaAsicronica=()=>{
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
           console.log("preoceso asicronico terminado");
           resolve(); 
        }, 1300);
    })
    return promise;
}

tareaAsicronica().then(function(){
    console.log("todo OK")
});


console.log("veamos si funciona");