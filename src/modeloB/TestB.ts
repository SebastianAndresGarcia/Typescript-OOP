/*Codifique una clase TestB e implemente una prueba de los métodos anteriores creando 1 instancia de Cliente, 
5 instancias de Artículo, 3 instancias de Factura y para cada factura al menos 2 instancias de DetalleFactura.
 Asigne los valores, ejecute la prueba y muestre por pantalla el resultante. */

import { Articulo } from "./Articulo";
import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";
import { Factura } from "./Factura";

export class TestB {
    testB() {
        let cliente = new Cliente(1, "cliente1", 20333333339);

        let articulo1 = new Articulo(1, "agua", 100, "litro");
        let articulo2 = new Articulo(2, "queso", 550, "kilo");
        let articulo3 = new Articulo(3, "leche", 150, "litro");
        let articulo4 = new Articulo(4, "carne", 800, "kilo");
        let articulo5 = new Articulo(5, "sal", 30, "kilo");

        //E (Efectivo), TD (Tarjeta Credito), TC (Tarjeta Credito), CC (Cuenta Corriente), TR (Tranferencia)
        let factura1 = new Factura("A", 1, 1.21/*iva*/, "E", 0, 0, cliente, new Date("2022-01-02"));
        let factura2 = new Factura("B", 2, 80, "TD", 3, 3, cliente, new Date("2022-02-12"));
        let factura3 = new Factura("C", 3, 50, "TC", 7, 7, cliente, new Date("2022-03-23"));

        let detallefact11 = new DetalleFactura(factura1, 2, 0, articulo1);
        let detallefact12 = new DetalleFactura(factura1, 3, 0, articulo2);
        factura1.detallesfactura.push(detallefact11); factura1.detallesfactura.push(detallefact12);
        let detallefact21 = new DetalleFactura(factura2, 4, 699, articulo3);
        let detallefact22 = new DetalleFactura(factura2, 7, 2500, articulo4);
        factura2.detallesfactura.push(detallefact21); factura2.detallesfactura.push(detallefact22);
        let detallefact31 = new DetalleFactura(factura3, 6, 699, articulo5);
        let detallefact32 = new DetalleFactura(factura3, 8, 699, articulo3);
        factura3.detallesfactura.push(detallefact31); factura3.detallesfactura.push(detallefact32);
        const subtotal = document.getElementById("subtotal");
        if (subtotal == null) {
            alert("subtotal NULL");
        } else {
            subtotal.innerHTML =
                "subtotal: $" +
                detallefact11.calcularSubTotal().toString() + ", articulo: "+detallefact11.articulo.denominacion.toString()+", cantidad: "+detallefact11.cantidad.toString()+"<br>"+
                detallefact12.calcularSubTotal().toString() + ", articulo: "+detallefact12.articulo.denominacion.toString()+", cantidad: "+detallefact12.cantidad.toString()
               /* detallefact21.calcularSubTotal().toString() + " articulo: "+detallefact21.articulo.denominacion.toString()+" cantidad: "+detallefact21.cantidad.toString()+"\n"+
                detallefact22.calcularSubTotal().toString() + " articulo: "+detallefact22.articulo.denominacion.toString()+" cantidad: "+detallefact22.cantidad.toString()+"\n"+
                detallefact31.calcularSubTotal().toString() + " articulo: "+detallefact31.articulo.denominacion.toString()+" cantidad: "+detallefact31.cantidad.toString()+"\n"+
                detallefact32.calcularSubTotal().toString() + " articulo: "+detallefact32.articulo.denominacion.toString()+" cantidad: "+detallefact32.cantidad.toString()+"\n" */;
                
        }
        const totalitems = document.getElementById("totalitems");
        const TotalFinal = document.getElementById("TotalFinal");
        if (totalitems == null) {
            alert("NULL");
        } else {
            totalitems.innerHTML =
                "TotalItems: " + factura1.calcularTotalItems();
        }
        if (TotalFinal == null) {
            alert("NULL");
        } else {
            TotalFinal.innerHTML =
                "TotalFinal: " + factura1.calcularTotalFinal();
        }
    }

}
