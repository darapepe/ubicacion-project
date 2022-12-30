import './style.css'
import metropolisLogo from './LogoMetropolis.png'
import { loadUbicacionesByPage } from './src/ubicaciones/use-cases/load-ubicaciones-by-pages';
import { UbicacionesApp } from './src/ubicaciones/use-cases/ubicaciones-app';

document.querySelector('#app').innerHTML = `
  <div>    
    <a href="https://www.metropoliscenter.com.co" target="_blank">
      <img src="${metropolisLogo}" class="logo metropolis" alt="Metropolis logo" />
    </a>
    <h1>Gestion Tiempos Ubicaciones Bodega Metropolis 84</h1>
    <div class="card">
      
    </div>    
  </div>
`

const element = document.querySelector('.card');

UbicacionesApp(element);