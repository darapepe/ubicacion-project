import { Ubicacion } from "../models/ubicacion";
import Swal from 'sweetalert2';

function alertClient(message) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        timer: 5000
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

export const loadUbicacionesByPage = async (page = 1) => {
    try {
        const url = `${import.meta.env.VITE_BASE_URL}/wsf/api/Ubicacion?_page=${page}`;
        const res = await fetch(url)
        const data = await res.json(r => {
            const dataRes = new Ubicacion();
            dataRes.id = r.id;
            dataRes.bodega = r.bodega;
            dataRes.ubicacion = r.ubicacion;
            dataRes.tiempo_uz = r.tiempo_uz;
            dataRes.tiempo_nivel_a = r.tiempo_nivel_a;
            dataRes.tiempo_nivel_b = r.tiempo_nivel_b;
            dataRes.tiempo_nivel_c = r.tiempo_nivel_c;
            dataRes.tiempo_nivel_d = r.tiempo_nivel_d;
        });

        const ubicaciones = data;
        return ubicaciones.sort((a, b) => {
            let retval = 0;
            if (a.ubicacion < b.ubicacion) retval = -1;
            if (a.ubicacion > b.ubicacion) retval = 1;
            if (retval === 0) retval = a.ubicacion > b.ubicacion ? -1 : 1;
            return retval;
        });
    } catch (error) {
        alertClient('Se presento error en la comunicacion.');
        return [];
    }    
    //console.log(data);
}