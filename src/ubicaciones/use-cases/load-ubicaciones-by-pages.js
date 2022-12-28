import { Ubicacion } from "../models/ubicacion"

export const loadUbicacionesByPage = async (page = 1) => {    
    const url = `${import.meta.env.VITE_BASE_URL}/wsf/api/Ubicacion?_page=${page}`;
    const res = await fetch(url, {            
        method: 'GET',
    });

    const data = await res.json();

    const ubicaciones = data.map(Ubicacion);
    return ubicaciones;
    //console.log(data);
}