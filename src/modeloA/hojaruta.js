"use strict";
exports.__esModule = true;
exports.hojaruta = void 0;
var hojaruta = /** @class */ (function () {
    //https://visual-foxpro-programmer.com/getter-setter-module-typescript
    function hojaruta(fecha, numero, Vehiculo) {
        this.detalles = [];
        this.fecha = fecha;
        this.numero = numero;
        this.Vehiculo = Vehiculo;
    }
    hojaruta.prototype.calcularTotalKilometros = function () {
        var recorrido = 0;
        if (this.detalles != null) {
            for (var i = 0; i < this.detalles.length; i++) {
                recorrido = recorrido + (this.detalles[i].kmSalida - this.detalles[i].kmRegreso);
            }
        }
        return recorrido;
    };
    return hojaruta;
}());
exports.hojaruta = hojaruta;
