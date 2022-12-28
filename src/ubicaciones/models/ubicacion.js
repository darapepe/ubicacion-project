

export class Ubicacion {
    constructor({ id, bodega, ubicacion, tiempo_uz, tiempo_nivel_a, tiempo_nivel_b, tiempo_nivel_c, tiempo_nivel_d }) {
        this.id = id;
        this.bodega = bodega;
        this.ubicacion = ubicacion;
        this.tiempo_uz = tiempo_uz;
        this.tiempo_nivel_a = tiempo_nivel_a;
        this.tiempo_nivel_b = tiempo_nivel_b;
        this.tiempo_nivel_c = tiempo_nivel_c;
        this.tiempo_nivel_d = tiempo_nivel_d;
    }
}