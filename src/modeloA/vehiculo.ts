/*Codifique en la clase Vehiculo una función denominada “calcularTotalKilometrosRecorridos (Date fechaDesde, Date fechaHasta)” 
que retorne el total de kilómetros recorridos por el vehículo para un rango de fechas determinado. 
Reutilice el método del punto anterior. */
import { hojaruta } from "./hojaruta";
export class vehiculo {
    patente: string;
    marca: string;
    modelo: string;
    hojasruta: hojaruta[] = []; 

    constructor(patente: string, marca:string, modelo:string){
        this.patente=patente;
        this.marca=marca;
        this.modelo=modelo;
    }
  /*  get gethojasruta(){ 
        return this.hojasruta;
    }
    set sethojasruta(rutas: any){
        this.hojasruta=rutas;
    } */
    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date): number {
        let totalkm: number=0;
        if (this.hojasruta.length != null) {
            for (let i = 0; i < this.hojasruta.length; i++) {
                if (fechaDesde <= this.hojasruta[i].fecha && fechaHasta>= this.hojasruta[i].fecha) {
                    totalkm = totalkm + this.hojasruta[i].calcularTotalKilometros();
                }
            }
        }
        return totalkm;
    }
}