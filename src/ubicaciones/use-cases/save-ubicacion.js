import { Ubicacion } from "../models/ubicacion";
import Swal from 'sweetalert2';

function alertClient(message) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 3500
    })
}

export const saveUbicacion = async (ubicacionLike) => {
    const ubicacion = new Ubicacion(ubicacionLike);
    //console.log('Actualizar: ', ubicacionLike);
    if (!ubicacion.bodega || !ubicacion.ubicacion) {
        throw Error('Digitar valor de bodega y ubicacion');
    }

    //const userToSave = userModelToLocalhost(user);
    let ubicacionUpdated;

    if (ubicacion.id) {
        ubicacionUpdated = await updateUbicacion(ubicacion);
    } else {
        ubicacionUpdated = await createUbicacion(ubicacion);
    }

    return ubicacionUpdated;
    // const updatedUser = await createUser(userToSave);
    // return updatedUser;
}

const createUbicacion = async (ubicacion) => {
    const url = `${import.meta.env.VITE_BASE_URL}/wsf/api/Ubicacion`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(ubicacion),
        headers: {
            'Content-Type': 'application/json',
            'token': `${import.meta.env.VITE_TOKEN}`
        }
    });

    const newUbicacion = await res.json();
    if(!newUbicacion){
        alertClient('La ubicacion ya existe!, no sera agregada.');
        return [];
    }else{
        alertClient('La ubicacion a sido almacenada!');
        return newUbicacion;        
    }
    
    
}


const updateUbicacion = async (ubicacion) => {
    //console.log(ubicacion);
    const url = `${import.meta.env.VITE_BASE_URL}/wsf/api/Ubicacion/${ubicacion.id}`;
    const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(ubicacion),
        headers: {
            'Content-Type': 'application/json',
            'token': `${import.meta.env.VITE_TOKEN}`
        }
    });

    const updateUbicacion = await res.json();
    alertClient('La ubicacion a sido actualizada!')
    //console.log(updateUbicacion);
    return updateUbicacion;
}