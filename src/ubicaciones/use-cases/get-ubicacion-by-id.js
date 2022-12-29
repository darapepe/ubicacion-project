import { Ubicacion } from "../models/ubicacion";

export const getUbicacionById = async (id) => {
    //const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const url = `${import.meta.env.VITE_BASE_URL}/wsf/api/Ubicacion/${id}`;
    const res = await fetch(url);
    console.log(url);
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
    console.log(ubicaciones);
    return ubicaciones;
    
}