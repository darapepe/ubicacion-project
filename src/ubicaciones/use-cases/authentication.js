

export const getToken = async (correo,password) => {
    //const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const url = `${import.meta.env.VITE_BASE_URL_AUTH}/login`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            email: correo,
            password: password
        },
    });
    console.log(url);
    const data = await res.json();

    const ubicaciones = data;
    console.log(ubicaciones);
    //return ubicaciones;
    
}