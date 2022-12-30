const btnBuscar = document.querySelector('#button-login');

async function getToken(correo, password) {
    let _data = {
        email: correo,
        password: password,
    }

    const url = 'http://localhost:4001/login';
    
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

btnBuscar.addEventListener('click', async (event) => {
    event.preventDefault();
    let correo = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const token = await getToken(correo, password);
    localStorage.setItem("token", token);
});