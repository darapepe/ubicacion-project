

//import { Ubicacion } from '../../models/ubicacion';
import ubicacionesStore from '../../store/ubicaciones-store';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
    <tr>
        <th>#ID</th>
        <th>Bodega</th>
        <th>Ubicacion</th>
        <th>Tiempo UZ</th>
        <th>Tiempo Nivel A</th>
        <th>Tiempo Nivel B</th>
        <th>Tiempo Nivel C</th>
        <th>Tiempo Nivel D</th>
    </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody)
    return table;
}

const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user');
    if (!element) return;
    const id = element.getAttribute('data-id');
    showModal(id);
}

const tableDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user');
    if (!element) return;
    const id = element.getAttribute('data-id');
    try {
        await deleteUserById(id);
        await ubicacionesStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();

    } catch (error) {
        console.log(error);
        alert('No se pudo eliminar');
    }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    const ubicaciones = ubicacionesStore.getUbicaciones();

    if (!table) {
        table = createTable();
        element.append(table);

        //TODO: listener a la tabla
        table.addEventListener('click', tableSelectListener);
        table.addEventListener('click', tableDeleteListener);
    }

    let tableHTML = '';
    ubicaciones.forEach(ubicacion => {
        tableHTML += `
        <tr>
            <td>${ubicacion.id}</td>
            <td>${ubicacion.bodega}</td>
            <td>${ubicacion.ubicacion}</td>
            <td>${ubicacion.tiempo_uz}</td>
            <td>${ubicacion.tiempo_nivel_a}</td>
            <td>${ubicacion.tiempo_nivel_b}</td>
            <td>${ubicacion.tiempo_nivel_c}</td>
            <td>${ubicacion.tiempo_nivel_d}</td>
            <td>
                <a href="#" class="select-user" data-id="${ubicacion.id}">Select</a>
                |
                <a href="#" class="delete-user" data-id="${ubicacion.id}">Delete</a>
            </td>
        </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;
}