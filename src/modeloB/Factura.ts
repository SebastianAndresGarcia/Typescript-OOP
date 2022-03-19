
import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";

export class Factura {
    letra: string;
    numero: number;
    recargo: number;
    tipoPago: string;
    totalItems: number;
    totalFinal: number;
    fecha: Date;
    cliente: Cliente;
    detallesfactura: DetalleFactura[] = [];
    constructor(
        letra: string,
        numero: number,
        recargo: number,
        tipoPago: string,
        totalItems: number,
        totalFinal: number,
        cliente: Cliente,
        fecha: Date) {
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
        this.cliente=cliente;
    }
    /*2- Codifique en la clase Factura una función llamada calcularTotalItems () que calcule el monto
 resultante de la suma de los subtotales de los artículos asociados al comprobante y asigne el resultado al 
 campo totalItems, reutilice el método calcularSubTotal() del punto anterior.
    */
    calcularTotalItems(){
        for(let i=0;i<this.detallesfactura.length;i++){
            this.totalItems=this.totalItems + this.detallesfactura[i].calcularSubTotal();
        }
        return this.totalItems;
    }
    /*3-Codifique en la clase Factura una función llamada calcularTotalFinal () que será equivalente al
     monto total de ítems + el recargo asignado a la factura. */
    calcularTotalFinal(){
        this.totalFinal=this.totalItems*this.recargo;
        return this.totalFinal;
    }
    
}

