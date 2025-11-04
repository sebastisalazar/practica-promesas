/*w    
    JavaScript:
        Crea una función que simule una llamada a una API y devuelva una promesa.
        La promesa debe resolverse después de un retraso simulado (por ejemplo, 2 segundos).
        La promesa debe resolver con un objeto de usuario ficticio (nombre, correo electrónico).
        Maneja la promesa usando .then() y .catch() para mostrar los datos en el contenedor o mostrar un mensaje de error en caso de fallo.

*/

/**************************VARIABLES**************************/

const datos=[
       {nombre:"pepe",email:"pepe@gmail.com"},
] 

const chivato="pepe";


/**************************EVENTOS**************************/

document.addEventListener('click', (ev) => {
    
    //previene envio al servidor
    ev.preventDefault();
    
    //si al boton que se ha hecho click tiene el ID #btninfo
    if (ev.target.matches('#btninfo')) {

        console.log("Has hecho click en el boton!")

        //Espera 2 para llamar a la API
        setTimeout(()=>{
            
            
            llamadaAPI(chivato) //Chivato es el nombre a buscar declarado como global

                //RESUELVE PROMESA
                .then((respuesta)=>{

                    const persona=respuesta; //Guarda la respuesta en una constante

                    pintarResultado(persona); //pasa la constante a la funcion pintar Resultado
                    
                    //console.log( persona)
                })
                //SI LO QUE RECIBE ES ERROR, TAMBIEN LO ENVIA A PINTAR
                .catch((error)=>{
                    pintarResultado(error);
                }) 
        },2000)
          
    }
})


/**************************FUNCIONES**************************/
/**
 * LlamadaAPI busca a un usuario en un array global datos
 * @param  {String} nomAbuscar es el nombre a buscar
 * @returns {promise | string} Devuelve promise si el objeto es encontrado o String si no es encontrado
 */
const llamadaAPI=(nomAbuscar)=>{

    //si el nombre a buscar existe lo guarda en un una constante
    const persona=datos.find((element)=>{
        return element.nombre==nomAbuscar
    })

        //console.log(persona)
    
    //devuele el estado de un una promesa
    return new Promise((resolve,reject)=>{
        
        if(typeof persona=="object"){ //si el array persona devuelve algo de tipo objeto lo devuelve como promesa
            resolve(persona);
        }else{ //si no envia un mensaje
            reject("No se han obtenido datos");
        }
    });

}

//PINTA
/**
 * Pinta en el dom dependiendo del tipo de argumento recibido
 * @param {String | Object} objetoAPintar indicara lo que se debe pintar. Si es String solo se pinta P si no una lista
 */
const pintarResultado=(objetoAPintar)=>{
    
    //crear un fragmento
    const fragmento=document.createDocumentFragment();

    //captura el contenido dentro del div con ID  #datosdiv
    const datosDiv=document.querySelector('#datosdiv');

    //Limpia lo que hubiese dentro
    datosDiv.innerHTML="";

    //Se evalua el objeto recibido. Si es de tipo objeto pintara una lista con los atributos del objeto

    if(typeof objetoAPintar=="object"){

        //crear etiquetas
        const div=document.createElement('DIV')
        const ul=document.createElement('UL')
        const liNombre=document.createElement('LI')
        const liCorreo=document.createElement('LI')

        //setear los textos en las etiquetas a partir de los atributos del objeto
        liNombre.textContent=`Nombre: ${objetoAPintar.nombre}`
        liCorreo.textContent=`Email: ${objetoAPintar.email}`

        //insercion
        div.append(ul)
        ul.append(liNombre)
        ul.append(liCorreo)
        fragmento.append(div);

    }else{ //si lo que recibe no es un objeto se pinta un parrafo con el mensaje(tipo String)
        //creacion de etiqueta parrafo
        const parrafo=document.createElement("P")
        //insercion del mensaje recibido como texto dentro de P
        parrafo.textContent=objetoAPintar;

        //se añade P al fragmento
        fragmento.append(parrafo)

    }
    

    // console.log(fragmento);

    //lo que sea que se haya pintado en el fragmento escribe dentro de datos DIV
    datosDiv.append(fragmento);
    
}

















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





















