

export class Ubicacion {
    constructor(apiResponse) {
        this.id = apiResponse.id;
        this.bodega = apiResponse.bodega;
        this.ubicacion = apiResponse.ubicacion;
        this.tiempo_uz = apiResponse.tiempo_uz;
        this.tiempo_nivel_a = apiResponse.tiempo_nivel_a;
        this.tiempo_nivel_b = apiResponse.tiempo_nivel_b;
        this.tiempo_nivel_c = apiResponse.tiempo_nivel_c;
        this.tiempo_nivel_d = apiResponse.tiempo_nivel_d;
    }
}