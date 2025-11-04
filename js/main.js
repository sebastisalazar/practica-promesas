/*w    
    JavaScript:
        Crea una función que simule una llamada a una API y devuelva una promesa.
        La promesa debe resolverse después de un retraso simulado (por ejemplo, 2 segundos).
        La promesa debe resolver con un objeto de usuario ficticio (nombre, correo electrónico).
        Maneja la promesa usando .then() y .catch() para mostrar los datos en el contenedor o mostrar un mensaje de error en caso de fallo.

*/

/**************************VARIABLES**************************/

const datos=[
                {
                    nombre:"pepe",
                    email:"pepe@gmail.com"
                }
            ]  

const chivato=true;


/**************************EVENTOS**************************/

document.addEventListener('click', (ev) => {
        ev.preventDefault();
    if (ev.target.matches('#btninfo')) {
        pintarResultado(ev.target.id);    
    }
})




//SIMULACION 
function api(){
    return chivato;
}

//LAMADA API
const llamadaApi=(resulConnetion)=>{

    return new Promise((resolve,reject)=>{
        if(resulConnetion == true){
            resolve(datos);
        }else{
            reject("No se han obtenido datos");
        }
    });

}

//RESUELVE PROMESA
llamadaApi(api())
    .then((respuesta)=>{
        console.log( pintarResultado(respuesta))
    })
    .catch((error)=>{
        console.log(error)
    })

//PINTA
const pintarResultado=(respuesta)=>{
    
    const fragmento=document.createDocumentFragment();
    const datosDiv=document.querySelector('#datosdiv');
    
        respuesta.forEach(element => {
        const div=document.createElement('DIV')
        const ul=document.createElement('UL')
        const liNombre=document.createElement('LI')
        const liCorreo=document.createElement('LI')

        liNombre.textContent=element.nombre
        liCorreo.textContent=element.email

        div.append(ul)
        ul.append(liNombre)
        ul.append(liCorreo)
        fragmento.append(div);
    });
    
    datosDiv.append(fragmento);
    
}

//console.log(llamadaApi(chivato));
















/* 
const datosUsuario = [
  { id: 1 },
  { nombre: "Pepe" },
  { correo: "pepe@gmail.com" }
]

const getNombre = async () => {
    const nombre = datosUsuario.find((item) => item.nombre === nombre)?.nombre;
    if (nombre) return nombre;
    else throw `El nombre con id ${id} no existe`;
};

const getCorreo = async () => {
    const correo = datosUsuario.find((item) => item.correo === correo)?.correo;
    if (correo) return correo;
    else throw `El correo con id ${id} no existe`;
}

const getdatosUsuario = async () => {
  try {
    const nombre = await getNombre(nombre);
    const correo = await getCorreo(correo);

    return `el correo del usuario ${nombre} es ${correo}`;
  } catch (error) {
    throw error;
  }
};

const id=1;

getdatosUsuario(id)
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  }); */





















