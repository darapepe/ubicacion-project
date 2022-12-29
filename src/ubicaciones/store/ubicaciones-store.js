import { loadUbicacionesByPage } from "../use-cases/load-ubicaciones-by-pages";



const state = {
    currentPage: 0,
    ubicaciones: [],
}


const loadNextPage = async () => {
    const ubicaciones = await loadUbicacionesByPage(state.currentPage + 1);
    if (ubicaciones?.length === 0) return;
    state.currentPage += 1;
    state.ubicaciones = ubicaciones;
}

const loadPreviusPage = async () => {
    if (state.currentPage === 1) return;
    const ubicaciones = await loadUbicacionesByPage(state.currentPage - 1);
    state.currentPage -= 1;
    state.ubicaciones = ubicaciones;
}


const onUbicacionChanged = (updateUbicacion) => {

    let wasFound = false;

    state.ubicaciones = state.ubicaciones.map(ubicacion => {
        if (ubicacion.id === updateUbicacion.id) {
            wasFound = true;
            return updateUbicacion;
        }
        return ubicacion;
    });

    if (state.ubicaciones.length < 10 && !wasFound) {
        state.ubicaciones.push(updateUbicacion);
    }
}

const reloadPage = async () => {
    const ubicaciones = await loadUbicacionesByPage(state.currentPage);
    if (ubicaciones.length === 0) {
        await loadPreviusPage();
        return;
    };
    state.ubicaciones = ubicaciones;
}

export default {
    loadNextPage,
    loadPreviusPage,
    onUbicacionChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUbicaciones: () => [...state.ubicaciones],
    getCurrentPage: () => state.currentPage,
}