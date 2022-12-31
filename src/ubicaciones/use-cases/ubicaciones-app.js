import { renderAddButton } from "../presentation/render-add-button/render-add-button";
import { renderButtons } from "../presentation/render-buttons/render-buttons";
import { renderLogin } from "../presentation/render-login/render-login";
import { renderModal } from "../presentation/render-modal/render-modal";
import { renderTable } from "../presentation/render-table/render-table";
import ubicacionesStore from "../store/ubicaciones-store";
import { saveUbicacion } from "./save-ubicacion";
//import '/style.css';

export const UbicacionesApp = async (element) => {
    element.innerHTML = `<div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>`;

    let auth = 0;

    const token = localStorage.getItem("token");

    if (!token || token == "NO") {
        element.innerHTML = '';
        renderLogin(element);
    } else {
        const url = `${import.meta.env.VITE_BASE_URL_AUTH}/welcome`;

        const res = await fetch(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-access-token": token
            }
        });

        const data = await res.status;

        if (data != 200) {
            localStorage.removeItem("token");
            element.innerHTML = '';
            renderLogin(element);
        } else {
            auth = 1;
        }
    }

    if (auth === 1) {
        await ubicacionesStore.loadNextPage();
        element.innerHTML = '';

        renderTable(element);

        renderButtons(element);

        // renderAddButton(element, () => { console.log('desde el padre'); });
        renderAddButton(element);

        renderModal(element, async (ubicacionLike) => {
            const ubicacion = await saveUbicacion(ubicacionLike);
            ubicacionesStore.onUbicacionChanged(ubicacion);
            renderTable();
        });

        //console.log(usersStore.getUsers());
    }
}