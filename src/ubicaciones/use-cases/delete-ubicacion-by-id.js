import Swal from 'sweetalert2';

function alertClient(message) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}


export const deleteUbicacionById = async (id) => {    
    try {
        const url = `${import.meta.env.VITE_BASE_URL}/wsf/api/Ubicacion/${id}`;
        const res = await fetch(url, {
            method: 'DELETE',
        });

        const deleteResult = await res.json();
        console.log({ deleteResult });
        return true;
    } catch (error) {
        //console.log(error);
        alertClient(error);
        return [];
    }

}