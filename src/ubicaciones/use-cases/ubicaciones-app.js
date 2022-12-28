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
    await ubicacionesStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);

    //renderButtons(element);

    // renderAddButton(element, () => { console.log('desde el padre'); });
    //renderAddButton(element);

    // renderModal(element, async (userLike) => {
    //     const user = await saveUser(userLike);
    //     usersStore.onUserChanged(user);
    //     renderTable();
    // });

    //console.log(usersStore.getUsers());
}