import './style.css'
import metropolisLogo from './LogoMetropolis.png'
import { loadUbicacionesByPage } from './src/ubicaciones/use-cases/load-ubicaciones-by-pages';
import { UbicacionesApp } from './src/ubicaciones/use-cases/ubicaciones-app';

document.querySelector('#app').innerHTML = `
  <div>    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${metropolisLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Gestion Tiempos Ubicaciones Bodega Metropolis 84</h1>
    <div class="card">
      
    </div>    
  </div>
`

const element = document.querySelector('.card');

UbicacionesApp(element);