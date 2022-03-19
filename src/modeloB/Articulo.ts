import { DetalleFactura } from "./DetalleFactura";

export class Articulo {
    codigo: number;
    denominacion: string;
    precio: number;
    unidadmedida: string;
    detallesfactura: DetalleFactura[]=[];
    constructor(
        codigo: number,
        denominacion: string,
        precio: number,
        unidadmedida: string
        ) {
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadmedida = unidadmedida;
    }
}