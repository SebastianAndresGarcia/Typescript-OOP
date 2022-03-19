/* 1- Codifique en la clase HojaRuta una función denominada “calcularTotalKilometros()” 
      que retorne el total de kilómetros realizados para la hoja de ruta. */
import { detalle } from "./detalle";
import { vehiculo } from "./vehiculo";

export class hojaruta{
    fecha: Date;
    numero: number;
    Vehiculo: vehiculo;
    detalles: detalle[] = [];
    //https://visual-foxpro-programmer.com/getter-setter-module-typescript
    
    constructor(fecha: Date, numero: number, Vehiculo: vehiculo){
        this.fecha=fecha;
        this.numero=numero;
        this.Vehiculo=Vehiculo;
    }

    calcularTotalKilometros(): number{
        let recorrido: number=0;
        if (this.detalles!=null){
            for(let i=0;i<this.detalles.length;i++){
                recorrido=recorrido + (this.detalles[i].kmRegreso-this.detalles[i].kmSalida);
            }
        }
        return recorrido;
    }
}


