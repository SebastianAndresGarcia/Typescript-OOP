/*1- Codifique en la clase DetalleFactura una función llamada calcularSubTotal() que asigne a la variable 
subtotal el monto resultante de la cantidad de artículos vendidos por el precio de cada artículo. */
import { Articulo } from "./Articulo";
import { Factura } from "./Factura";

export class DetalleFactura {
    factura: Factura;
    articulo: Articulo;
    cantidad: number;
    subtotal: number;

    constructor(
        factura: Factura,
        cantidad: number,
        subtotal: number,
        articulo: Articulo
    ) {
        this.factura = factura;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.articulo=articulo;
    }
    calcularSubTotal(){
        let SubTotal: number = 0;
        SubTotal= SubTotal + (this.articulo.precio*this.cantidad);
        return SubTotal;
    }
}