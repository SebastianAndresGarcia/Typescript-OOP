import { hojaruta } from "./hojaruta";

export class detalle{
    kmSalida: number;
    kmRegreso: number;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;
    Hojaruta: hojaruta;

    constructor(kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso: number,
        minutoSalida: number, minutoRegreso: number, Hojaruta: hojaruta){
            this.kmSalida= kmSalida;
            this.kmRegreso= kmRegreso;
            this.horaSalida= horaSalida;
            this.horaRegreso= horaRegreso;
            this.minutoSalida= minutoSalida;
            this.minutoRegreso= minutoRegreso;
            this.Hojaruta=Hojaruta;
    }
  /*  get gethojaruta(){
        return hojaruta;
    }
    set sethojaruta(hoja: hojaruta){
        this.hojaruta= hoja;
    }*/
}