/* 3- Codifique una clase TestA e implemente una prueba de los métodos anteriores creando 1 instancia de Vehiculo, 
3 instancias de HojaRuta y para cada hoja de ruta 3 instancias de Detalle. Asigne los valores, ejecute 
la prueba y muestre por pantalla el resultante. */
import { detalle } from "./detalle";
import { hojaruta } from "./hojaruta";
import { vehiculo } from "./vehiculo";


export class testA {
    main() {
        let Vehiculo = new vehiculo("LPV176", "VW Gol", "2021");

        let Hojaruta = new hojaruta(new Date("2022-02-20"), 1,Vehiculo);
        let Hojaruta2 = new hojaruta(new Date("2022-02-22"), 2,Vehiculo);
        let Hojaruta3 = new hojaruta(new Date("2022-02-24"), 3,Vehiculo);

        let detalle11 = new detalle(0, 10, 12, 13, 0, 0, Hojaruta);
        let detalle12 = new detalle(10, 20, 13, 14, 0, 0, Hojaruta);
        let detalle13 = new detalle(20, 50, 14, 15, 0, 0, Hojaruta);
        Hojaruta.detalles.push(detalle11);
        Hojaruta.detalles.push(detalle12);
        Hojaruta.detalles.push(detalle13); 

        let detalle21 = new detalle(0, 100, 12, 13, 0, 0, Hojaruta2);
        let detalle22 = new detalle(100, 200, 13, 14, 0, 0, Hojaruta2);
        let detalle23 = new detalle(200, 300, 14, 15, 0, 0, Hojaruta2);
        Hojaruta2.detalles.push(detalle21);
        Hojaruta2.detalles.push(detalle22);
        Hojaruta2.detalles.push(detalle23);

        let detalle31 = new detalle(10, 30, 12, 13, 0, 0, Hojaruta3);
        let detalle32 = new detalle(30, 60, 13, 14, 0, 0, Hojaruta3);
        let detalle33 = new detalle(60, 90, 14, 15, 0, 0, Hojaruta3);
        Hojaruta3.detalles.push(detalle31);
        Hojaruta3.detalles.push(detalle32);
        Hojaruta3.detalles.push(detalle33);

        /*let rutas: hojaruta[];
        rutas.push(Hojaruta);
        rutas.push(Hojaruta2);
        rutas.push(Hojaruta3);*/

        //Vehiculo.sethojasruta(rutas); quise usar setter pero me larga error
        //Vehiculo.hojasruta.push(Hojaruta);
        //Vehiculo.sethojasruta(rutas);
        Vehiculo.hojasruta.push(Hojaruta);
        Vehiculo.hojasruta.push(Hojaruta2);
        Vehiculo.hojasruta.push(Hojaruta3);
        const totalKm = document.getElementById("totalKm");
        if (totalKm == null) {
            alert("oops");
        } else {
            totalKm.innerHTML =
                "El total de kilometros de la hoja de ruta es: " +
                Hojaruta.calcularTotalKilometros().toString() + " km.";
                
        }
        const totalKmRecorridos = document.getElementById("totalKmRecorridos");
        if (totalKmRecorridos == null) {
            alert("oops");
        } else {
            totalKmRecorridos.innerHTML =
                "El total de kilometros recorridos por el vehículo: " +
                Vehiculo.calcularTotalKilometrosRecorridos(new Date("2022-02-19"), new Date("2022-02-23")).toString() + " km.";
        }

    }
}

