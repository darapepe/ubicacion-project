
import ubicacionesStore from '../../store/ubicaciones-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';



export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = ubicacionesStore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton);

    nextButton.addEventListener('click', async () => {
        await ubicacionesStore.loadNextPage();
        currentPageLabel.innerText = ubicacionesStore.getCurrentPage();
        renderTable(element);
    });

    prevButton.addEventListener('click', async () => {
        await ubicacionesStore.loadPreviusPage();
        currentPageLabel.innerText = ubicacionesStore.getCurrentPage();
        renderTable(element);
    });
}