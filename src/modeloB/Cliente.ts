import { Factura } from "./Factura";

export class Cliente {
    numero: number;
    razonsocial: string;
    cuit: number;
    facturas: Factura[] = [];
    constructor(
        numero: number,
        razonsocial: string,
        cuit: number,

    ) {
        this.numero = numero;
        this.razonsocial = razonsocial;
        this.cuit = cuit;
    }
    /*
    4- Codifique en la clase Cliente una función llamada totalFacturadoXTipoPago (tipoPago:string) que calcule el 
    total facturado por el cliente según el tipo de pago asignado, si el tipo de pago es nulo retorne el monto 
    total sin filtrar. 
    Tomar en cuenta Factura->tipoPago (valores validos)= 
    E (Efectivo), TD (Tarjeta Credito), TC (Tarjeta Credito), CC (Cuenta Corriente), TR (Tranferencia)
    */
    totalFacturadoXTipoPago(tipoPago: string) {
        let totalxtipopago: number = 0;
        if (tipoPago != null) {
            for (let i = 0; i < this.facturas.length; i++) {
                if (this.facturas[i].tipoPago == tipoPago) {
                    totalxtipopago = totalxtipopago + (this.facturas[i].calcularTotalFinal());
                }
            }
        } else {
            for (let i = 0; i < this.facturas.length; i++) {
                totalxtipopago = totalxtipopago + (this.facturas[i].calcularTotalFinal());
            }
        }
        return totalxtipopago;
    }
}