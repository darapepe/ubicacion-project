import loginHtml from './render-login.html?raw';
import './render-login.css';
import Swal from 'sweetalert2';

function alertClient(message) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

let login, form, correo, password;

export const renderLogin = (element, callback) => {
    login = document.createElement('div');
    login.innerHTML = loginHtml;
    //login.className = 'container';
    form = login.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        // console.log('Formulario enviado');
        const formData = new FormData(form);
        for (const [key, value] of formData) {
            if (key === 'email') {
                correo = value;
                continue;
            }
            if (key === 'password') {
                password = value;
                continue;
            }
        }
        //console.log(correo);
        const token = await getToken(correo, password);

        if (!token || token == 'NO') {
            alertClient('Error en la autenticacion!');
        } else {
            localStorage.setItem("token", token);
            window.location.reload(false);
        }

        console.log(token);
    });

    element.append(login);
}

async function getToken(correo, password) {
    let _data = {
        email: correo,
        password: password,
    }

    const url = 'https://darapepe.onrender.com/login';

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    const data = await res.json();

    const ubicaciones = data;
    if (!ubicaciones.token) {
        return "NO"
    } else {
        return ubicaciones.token
    }
    //console.log(ubicaciones.token);
}