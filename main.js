
let marca = prompt("Ingresar marca de la camara a buscar")
let ip = prompt("Ingresar ip de la camara a buscar")
let equipo = prompt("Ingresar equipo a buscar")
let ubicacion = prompt("Ingresar ubicacion de la camara a buscar")
let Switch = prompt("Ingresar switch a buscar")


const datosBusqueda = {
    marca:marca,
    ip: ip,
    equipo:equipo,
    ubicacion:ubicacion,
    switch:Switch
}



function mostrarIslas(islas){
console.log(islas)
islas.forEach( islas =>{
    console.log(`Marca: ${islas.marca} - Equipo: ${islas.equipo} - Switch: ${islas.switch} - Ubicacion: ${islas.ubicacion} - Numero IP: ${islas.ip}`)
})
}




function filtrarIslas(){
    const resultado = islas.filter(filtrarMarca).filter(filtrarEquipo).filter(filtrarUbicacion).filter(filtrarSwitch);
    if (resultado.length){
        mostrarIslas(resultado)
        
    }else{
        console.log("sin resultado")
    }
}

function filtrarMarca(islas){
    if(datosBusqueda.marca){
        return islas.marca === datosBusqueda.marca
    }
    return islas
}

function filtrarUbicacion(islas){
    if(datosBusqueda.ubicacion){
        return islas.ubicacion === datosBusqueda.ubicacion
    }
    return islas
}

function filtrarEquipo(islas){
    if(datosBusqueda.equipo){
        return islas.equipo === datosBusqueda.equipo
    }
    return islas
}

function filtrarSwitch(islas){
    if(datosBusqueda.switch){
        return islas.switch === datosBusqueda.switch
    }
    return islas
}

filtrarIslas(islas)