"use strict";
exports.__esModule = true;
exports.vehiculo = void 0;
var vehiculo = /** @class */ (function () {
    function vehiculo(patente, marca, modelo) {
        this.hojasruta = [];
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    /*  get gethojasruta(){
          return this.hojasruta;
      }
      set sethojasruta(rutas: any){
          this.hojasruta=rutas;
      } */
    vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var totalkm = 0;
        if (this.hojasruta.length != null) {
            for (var i = 0; i < this.hojasruta.length; i++) {
                if (fechaDesde <= this.hojasruta[i].fecha && fechaHasta >= this.hojasruta[i].fecha) {
                    totalkm = totalkm + this.hojasruta[i].calcularTotalKilometros();
                }
            }
        }
        return totalkm;
    };
    return vehiculo;
}());
exports.vehiculo = vehiculo;
;
