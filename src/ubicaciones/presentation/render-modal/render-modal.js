import modalHtml from './render-modal.html?raw';
import './render-modal.css';
import { getUbicacionById } from '../../use-cases/get-ubicacion-by-id';

let modal, form;
let loadedUbicacion = [];

export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    loadedUbicacion = [];

    if (!id) return;

    const ubicacion = await getUbicacionById(id);
    //console.log(ubicacion);
    setFormValues(ubicacion);
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

const setFormValues = (ubicacion) => {
    form.querySelector('[name="bodega"]').value = ubicacion.bodega;
    form.querySelector('[name="ubicacion"]').value = ubicacion.ubicacion;
    form.querySelector('[name="tiempouz"]').value = ubicacion.tiempo_uz;
    form.querySelector('[name="tiemponivela"]').value = ubicacion.tiempo_nivel_a;
    form.querySelector('[name="tiemponivelb"]').value = ubicacion.tiempo_nivel_b;
    form.querySelector('[name="tiemponivelc"]').value = ubicacion.tiempo_nivel_c;
    form.querySelector('[name="tiemponiveld"]').value = ubicacion.tiempo_nivel_d;
    loadedUbicacion = ubicacion;
}

export const renderModal = (element, callback) => {
    if (modal) return;
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal();
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        // console.log('Formulario enviado');
        const formData = new FormData(form);
        const ubicacionLike = { ...loadedUbicacion };

        for (const [key, value] of formData) {
            if (key === 'bodega') {
                ubicacionLike[key] = +value;
                continue;
            }
            if (key === 'tiempouz') {
                ubicacionLike[key] = +value;
                continue;
            }
            if (key === 'tiemponivela') {
                ubicacionLike[key] = +value;
                continue;
            }
            if (key === 'tiemponivelb') {
                ubicacionLike[key] = +value;
                continue;
            }
            if (key === 'tiemponivelc') {
                ubicacionLike[key] = +value;
                continue;
            }
            if (key === 'tiemponiveld') {
                ubicacionLike[key] = +value;
                continue;
            }
            
            ubicacionLike[key] = value;
        }
        //console.log(userLike);
        await callback(ubicacionLike);
        hideModal();
    });

    element.append(modal);
}