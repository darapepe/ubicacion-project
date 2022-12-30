import { renderLogin } from "../presentation/render-login/render-login";
import { renderModal } from "../presentation/render-modal/render-modal";
import { renderTable } from "../presentation/render-table/render-table";
import ubicacionesStore from "../store/ubicaciones-store";
import '/style.css';

export const UbicacionesApp = async (element) => {
    element.innerHTML = `<div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>`;

    const token = localStorage.getItem("token");
    if (!token || token == "NO") {
        element.innerHTML = '';
        renderLogin(element);
    } else {
        await ubicacionesStore.loadNextPage();
        element.innerHTML = '';

        renderTable(element);

        //renderButtons(element);

        // renderAddButton(element, () => { console.log('desde el padre'); });
        //renderAddButton(element);

        renderModal(element, async (ubicacionLike) => {
            const ubicacion = await saveUbicacion(ubicacionLike);
            ubicacionesStore.onUbicacionChanged(ubicacion);
            renderTable();
        });

        //console.log(usersStore.getUsers());
    }
}