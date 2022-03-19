"use strict";
exports.__esModule = true;
exports.testA = void 0;
/* 3- Codifique una clase TestA e implemente una prueba de los métodos anteriores creando 1 instancia de Vehiculo,
3 instancias de HojaRuta y para cada hoja de ruta 3 instancias de Detalle. Asigne los valores, ejecute
la prueba y muestre por pantalla el resultante. */
var detalle_1 = require("./detalle");
var hojaruta_1 = require("./hojaruta");
var vehiculo_1 = require("./vehiculo");
var testA = /** @class */ (function () {
    function testA() {
    }
    testA.prototype.main = function () {
        var Vehiculo = new vehiculo_1.vehiculo("LPV176", "VW Gol", "2021");
        var Hojaruta = new hojaruta_1.hojaruta(new Date("2022-02-20"), 1, Vehiculo);
        var Hojaruta2 = new hojaruta_1.hojaruta(new Date("2022-02-22"), 2, Vehiculo);
        var Hojaruta3 = new hojaruta_1.hojaruta(new Date("2022-02-24"), 3, Vehiculo);
        var detalle11 = new detalle_1.detalle(0, 10, 12, 13, 0, 0, Hojaruta);
        var detalle12 = new detalle_1.detalle(10, 20, 13, 14, 0, 0, Hojaruta);
        var detalle13 = new detalle_1.detalle(20, 30, 14, 15, 0, 0, Hojaruta);
        Hojaruta.detalles.push(detalle11);
        Hojaruta.detalles.push(detalle12);
        Hojaruta.detalles.push(detalle13);
        var detalle21 = new detalle_1.detalle(0, 100, 12, 13, 0, 0, Hojaruta2);
        var detalle22 = new detalle_1.detalle(100, 200, 13, 14, 0, 0, Hojaruta2);
        var detalle23 = new detalle_1.detalle(200, 300, 14, 15, 0, 0, Hojaruta2);
        Hojaruta2.detalles.push(detalle21);
        Hojaruta2.detalles.push(detalle22);
        Hojaruta2.detalles.push(detalle23);
        var detalle31 = new detalle_1.detalle(10, 30, 12, 13, 0, 0, Hojaruta3);
        var detalle32 = new detalle_1.detalle(30, 60, 13, 14, 0, 0, Hojaruta3);
        var detalle33 = new detalle_1.detalle(60, 90, 14, 15, 0, 0, Hojaruta3);
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
        var totalKm = document.getElementById("totalKm");
        if (totalKm == null) {
            alert("oops");
        }
        else {
            totalKm.innerHTML =
                "El total de kilometros de la hoja de ruta es: " +
                    Hojaruta.calcularTotalKilometros().toString() + " km.";
        }
        var totalKmRecorridos = document.getElementById("totalKmRecorridos");
        if (totalKmRecorridos == null) {
            alert("oops");
        }
        else {
            totalKmRecorridos.innerHTML =
                "El total de kilometros recorridos por el vehículo: " +
                    Vehiculo.calcularTotalKilometrosRecorridos(new Date("2022-02-19"), new Date("2022-02-21")).toString() + " km.";
        }
    };
    return testA;
}());
exports.testA = testA;
