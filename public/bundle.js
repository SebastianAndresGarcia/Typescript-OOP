/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst testA_1 = __webpack_require__(/*! ./modeloA/testA */ \"./src/modeloA/testA.ts\");\r\n//console.log(\"antes de instanciar objeto\");\r\nlet a = new testA_1.testA();\r\na.main();\r\n//console.log(\"después de instanciar objeto\");\r\n/*let testB = new testB();\r\ntestB.mostrar();*/ \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQSxxRkFBd0M7QUFDeEMsNENBQTRDO0FBQzVDLElBQUksQ0FBQyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFDcEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1QsOENBQThDO0FBQzlDO2tCQUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RwdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB0ZXN0QSB9IGZyb20gXCIuL21vZGVsb0EvdGVzdEFcIjtcclxuLy9jb25zb2xlLmxvZyhcImFudGVzIGRlIGluc3RhbmNpYXIgb2JqZXRvXCIpO1xyXG5sZXQgYSA9IG5ldyB0ZXN0QSgpO1xyXG5hLm1haW4oKTtcclxuLy9jb25zb2xlLmxvZyhcImRlc3B1w6lzIGRlIGluc3RhbmNpYXIgb2JqZXRvXCIpO1xyXG4vKmxldCB0ZXN0QiA9IG5ldyB0ZXN0QigpO1xyXG50ZXN0Qi5tb3N0cmFyKCk7Ki8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/modeloA/detalle.ts":
/*!********************************!*\
  !*** ./src/modeloA/detalle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.detalle = void 0;\r\nclass detalle {\r\n    constructor(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, Hojaruta) {\r\n        this.kmSalida = kmSalida;\r\n        this.kmRegreso = kmRegreso;\r\n        this.horaSalida = horaSalida;\r\n        this.horaRegreso = horaRegreso;\r\n        this.minutoSalida = minutoSalida;\r\n        this.minutoRegreso = minutoRegreso;\r\n        this.Hojaruta = Hojaruta;\r\n    }\r\n}\r\nexports.detalle = detalle;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxvQS9kZXRhbGxlLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsT0FBTztJQVNoQixZQUFZLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxVQUFrQixFQUFFLFdBQW1CLEVBQ3BGLFlBQW9CLEVBQUUsYUFBcUIsRUFBRSxRQUFrQjtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFFLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFFLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFFLFVBQVUsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFFLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFFLFlBQVksQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFFLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0NBT0o7QUF6QkQsMEJBeUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHB0eXBlc2NyaXB0Ly4vc3JjL21vZGVsb0EvZGV0YWxsZS50cz8wY2UzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvamFydXRhIH0gZnJvbSBcIi4vaG9qYXJ1dGFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBkZXRhbGxle1xyXG4gICAga21TYWxpZGE6IG51bWJlcjtcclxuICAgIGttUmVncmVzbzogbnVtYmVyO1xyXG4gICAgaG9yYVNhbGlkYTogbnVtYmVyO1xyXG4gICAgaG9yYVJlZ3Jlc286IG51bWJlcjtcclxuICAgIG1pbnV0b1NhbGlkYTogbnVtYmVyO1xyXG4gICAgbWludXRvUmVncmVzbzogbnVtYmVyO1xyXG4gICAgSG9qYXJ1dGE6IGhvamFydXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGttU2FsaWRhOiBudW1iZXIsIGttUmVncmVzbzogbnVtYmVyLCBob3JhU2FsaWRhOiBudW1iZXIsIGhvcmFSZWdyZXNvOiBudW1iZXIsXHJcbiAgICAgICAgbWludXRvU2FsaWRhOiBudW1iZXIsIG1pbnV0b1JlZ3Jlc286IG51bWJlciwgSG9qYXJ1dGE6IGhvamFydXRhKXtcclxuICAgICAgICAgICAgdGhpcy5rbVNhbGlkYT0ga21TYWxpZGE7XHJcbiAgICAgICAgICAgIHRoaXMua21SZWdyZXNvPSBrbVJlZ3Jlc287XHJcbiAgICAgICAgICAgIHRoaXMuaG9yYVNhbGlkYT0gaG9yYVNhbGlkYTtcclxuICAgICAgICAgICAgdGhpcy5ob3JhUmVncmVzbz0gaG9yYVJlZ3Jlc287XHJcbiAgICAgICAgICAgIHRoaXMubWludXRvU2FsaWRhPSBtaW51dG9TYWxpZGE7XHJcbiAgICAgICAgICAgIHRoaXMubWludXRvUmVncmVzbz0gbWludXRvUmVncmVzbztcclxuICAgICAgICAgICAgdGhpcy5Ib2phcnV0YT1Ib2phcnV0YTtcclxuICAgIH1cclxuICAvKiAgZ2V0IGdldGhvamFydXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIGhvamFydXRhO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldGhvamFydXRhKGhvamE6IGhvamFydXRhKXtcclxuICAgICAgICB0aGlzLmhvamFydXRhPSBob2phO1xyXG4gICAgfSovXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modeloA/detalle.ts\n");

/***/ }),

/***/ "./src/modeloA/hojaruta.ts":
/*!*********************************!*\
  !*** ./src/modeloA/hojaruta.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.hojaruta = void 0;\r\nclass hojaruta {\r\n    //https://visual-foxpro-programmer.com/getter-setter-module-typescript\r\n    constructor(fecha, numero, Vehiculo) {\r\n        this.detalles = [];\r\n        this.fecha = fecha;\r\n        this.numero = numero;\r\n        this.Vehiculo = Vehiculo;\r\n    }\r\n    calcularTotalKilometros() {\r\n        let recorrido = 0;\r\n        if (this.detalles != null) {\r\n            for (let i = 0; i < this.detalles.length; i++) {\r\n                recorrido = recorrido + (this.detalles[i].kmSalida - this.detalles[i].kmRegreso);\r\n            }\r\n        }\r\n        return recorrido;\r\n    }\r\n}\r\nexports.hojaruta = hojaruta;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxvQS9ob2phcnV0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFLQSxNQUFhLFFBQVE7SUFLakIsc0VBQXNFO0lBRXRFLFlBQVksS0FBVyxFQUFFLE1BQWMsRUFBRSxRQUFrQjtRQUgzRCxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBSXJCLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1QkFBdUI7UUFDbkIsSUFBSSxTQUFTLEdBQVMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBRSxJQUFJLEVBQUM7WUFDcEIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUNuQyxTQUFTLEdBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNoRjtTQUNKO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBdEJELDRCQXNCQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RwdHlwZXNjcmlwdC8uL3NyYy9tb2RlbG9BL2hvamFydXRhLnRzPzExOTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogMS0gQ29kaWZpcXVlIGVuIGxhIGNsYXNlIEhvamFSdXRhIHVuYSBmdW5jacOzbiBkZW5vbWluYWRhIOKAnGNhbGN1bGFyVG90YWxLaWxvbWV0cm9zKCnigJ0gXHJcbiAgICAgIHF1ZSByZXRvcm5lIGVsIHRvdGFsIGRlIGtpbMOzbWV0cm9zIHJlYWxpemFkb3MgcGFyYSBsYSBob2phIGRlIHJ1dGEuICovXHJcbmltcG9ydCB7IGRldGFsbGUgfSBmcm9tIFwiLi9kZXRhbGxlXCI7XHJcbmltcG9ydCB7IHZlaGljdWxvIH0gZnJvbSBcIi4vdmVoaWN1bG9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBob2phcnV0YXtcclxuICAgIGZlY2hhOiBEYXRlO1xyXG4gICAgbnVtZXJvOiBudW1iZXI7XHJcbiAgICBWZWhpY3VsbzogdmVoaWN1bG87XHJcbiAgICBkZXRhbGxlczogZGV0YWxsZVtdID0gW107XHJcbiAgICAvL2h0dHBzOi8vdmlzdWFsLWZveHByby1wcm9ncmFtbWVyLmNvbS9nZXR0ZXItc2V0dGVyLW1vZHVsZS10eXBlc2NyaXB0XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGZlY2hhOiBEYXRlLCBudW1lcm86IG51bWJlciwgVmVoaWN1bG86IHZlaGljdWxvKXtcclxuICAgICAgICB0aGlzLmZlY2hhPWZlY2hhO1xyXG4gICAgICAgIHRoaXMubnVtZXJvPW51bWVybztcclxuICAgICAgICB0aGlzLlZlaGljdWxvPVZlaGljdWxvO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGFyVG90YWxLaWxvbWV0cm9zKCk6IG51bWJlcntcclxuICAgICAgICBsZXQgcmVjb3JyaWRvOiBudW1iZXI9MDtcclxuICAgICAgICBpZiAodGhpcy5kZXRhbGxlcyE9bnVsbCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5kZXRhbGxlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHJlY29ycmlkbz1yZWNvcnJpZG8gKyAodGhpcy5kZXRhbGxlc1tpXS5rbVNhbGlkYS10aGlzLmRldGFsbGVzW2ldLmttUmVncmVzbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlY29ycmlkbztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modeloA/hojaruta.ts\n");

/***/ }),

/***/ "./src/modeloA/testA.ts":
/*!******************************!*\
  !*** ./src/modeloA/testA.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.testA = void 0;\r\n/* 3- Codifique una clase TestA e implemente una prueba de los métodos anteriores creando 1 instancia de Vehiculo,\r\n3 instancias de HojaRuta y para cada hoja de ruta 3 instancias de Detalle. Asigne los valores, ejecute\r\nla prueba y muestre por pantalla el resultante. */\r\nconst detalle_1 = __webpack_require__(/*! ./detalle */ \"./src/modeloA/detalle.ts\");\r\nconst hojaruta_1 = __webpack_require__(/*! ./hojaruta */ \"./src/modeloA/hojaruta.ts\");\r\nconst vehiculo_1 = __webpack_require__(/*! ./vehiculo */ \"./src/modeloA/vehiculo.ts\");\r\nclass testA {\r\n    main() {\r\n        let Vehiculo = new vehiculo_1.vehiculo(\"LPV176\", \"VW Gol\", \"2021\");\r\n        let Hojaruta = new hojaruta_1.hojaruta(new Date(\"2022-02-20\"), 1, Vehiculo);\r\n        let Hojaruta2 = new hojaruta_1.hojaruta(new Date(\"2022-02-22\"), 2, Vehiculo);\r\n        let Hojaruta3 = new hojaruta_1.hojaruta(new Date(\"2022-02-24\"), 3, Vehiculo);\r\n        let detalle11 = new detalle_1.detalle(0, 10, 12, 13, 0, 0, Hojaruta);\r\n        let detalle12 = new detalle_1.detalle(10, 20, 13, 14, 0, 0, Hojaruta);\r\n        let detalle13 = new detalle_1.detalle(20, 30, 14, 15, 0, 0, Hojaruta);\r\n        Hojaruta.detalles.push(detalle11);\r\n        Hojaruta.detalles.push(detalle12);\r\n        Hojaruta.detalles.push(detalle13);\r\n        let detalle21 = new detalle_1.detalle(0, 100, 12, 13, 0, 0, Hojaruta2);\r\n        let detalle22 = new detalle_1.detalle(100, 200, 13, 14, 0, 0, Hojaruta2);\r\n        let detalle23 = new detalle_1.detalle(200, 300, 14, 15, 0, 0, Hojaruta2);\r\n        Hojaruta2.detalles.push(detalle21);\r\n        Hojaruta2.detalles.push(detalle22);\r\n        Hojaruta2.detalles.push(detalle23);\r\n        let detalle31 = new detalle_1.detalle(10, 30, 12, 13, 0, 0, Hojaruta3);\r\n        let detalle32 = new detalle_1.detalle(30, 60, 13, 14, 0, 0, Hojaruta3);\r\n        let detalle33 = new detalle_1.detalle(60, 90, 14, 15, 0, 0, Hojaruta3);\r\n        Hojaruta3.detalles.push(detalle31);\r\n        Hojaruta3.detalles.push(detalle32);\r\n        Hojaruta3.detalles.push(detalle33);\r\n        /*let rutas: hojaruta[];\r\n        rutas.push(Hojaruta);\r\n        rutas.push(Hojaruta2);\r\n        rutas.push(Hojaruta3);*/\r\n        //Vehiculo.sethojasruta(rutas); quise usar setter pero me larga error\r\n        //Vehiculo.hojasruta.push(Hojaruta);\r\n        //Vehiculo.sethojasruta(rutas);\r\n        Vehiculo.hojasruta.push(Hojaruta);\r\n        Vehiculo.hojasruta.push(Hojaruta2);\r\n        Vehiculo.hojasruta.push(Hojaruta3);\r\n        const totalKm = document.getElementById(\"totalKm\");\r\n        if (totalKm == null) {\r\n            alert(\"oops\");\r\n        }\r\n        else {\r\n            totalKm.innerHTML =\r\n                \"El total de kilometros de la hoja de ruta es: \" +\r\n                    Hojaruta.calcularTotalKilometros().toString() + \" km.\";\r\n        }\r\n        const totalKmRecorridos = document.getElementById(\"totalKmRecorridos\");\r\n        if (totalKmRecorridos == null) {\r\n            alert(\"oops\");\r\n        }\r\n        else {\r\n            totalKmRecorridos.innerHTML =\r\n                \"El total de kilometros recorridos por el vehículo: \" +\r\n                    Vehiculo.calcularTotalKilometrosRecorridos(new Date(\"2022-02-19\"), new Date(\"2022-02-21\")).toString() + \" km.\";\r\n        }\r\n    }\r\n}\r\nexports.testA = testA;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxvQS90ZXN0QS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7a0RBRWtEO0FBQ2xELG1GQUFvQztBQUNwQyxzRkFBc0M7QUFDdEMsc0ZBQXNDO0FBR3RDLE1BQWEsS0FBSztJQUNkLElBQUk7UUFDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksU0FBUyxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUVqRSxJQUFJLFNBQVMsR0FBRyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksU0FBUyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksU0FBUyxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvRCxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdELElBQUksU0FBUyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3RCxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQzs7O2dDQUd3QjtRQUV4QixxRUFBcUU7UUFDckUsb0NBQW9DO1FBQ3BDLCtCQUErQjtRQUMvQixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILE9BQU8sQ0FBQyxTQUFTO2dCQUNiLGdEQUFnRDtvQkFDaEQsUUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO1NBRTlEO1FBQ0QsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkUsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLEVBQUU7WUFDM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxpQkFBaUIsQ0FBQyxTQUFTO2dCQUN2QixxREFBcUQ7b0JBQ3JELFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUN0SDtJQUVMLENBQUM7Q0FDSjtBQTNERCxzQkEyREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHR5cGVzY3JpcHQvLi9zcmMvbW9kZWxvQS90ZXN0QS50cz9mODcxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIDMtIENvZGlmaXF1ZSB1bmEgY2xhc2UgVGVzdEEgZSBpbXBsZW1lbnRlIHVuYSBwcnVlYmEgZGUgbG9zIG3DqXRvZG9zIGFudGVyaW9yZXMgY3JlYW5kbyAxIGluc3RhbmNpYSBkZSBWZWhpY3VsbywgXHJcbjMgaW5zdGFuY2lhcyBkZSBIb2phUnV0YSB5IHBhcmEgY2FkYSBob2phIGRlIHJ1dGEgMyBpbnN0YW5jaWFzIGRlIERldGFsbGUuIEFzaWduZSBsb3MgdmFsb3JlcywgZWplY3V0ZSBcclxubGEgcHJ1ZWJhIHkgbXVlc3RyZSBwb3IgcGFudGFsbGEgZWwgcmVzdWx0YW50ZS4gKi9cclxuaW1wb3J0IHsgZGV0YWxsZSB9IGZyb20gXCIuL2RldGFsbGVcIjtcclxuaW1wb3J0IHsgaG9qYXJ1dGEgfSBmcm9tIFwiLi9ob2phcnV0YVwiO1xyXG5pbXBvcnQgeyB2ZWhpY3VsbyB9IGZyb20gXCIuL3ZlaGljdWxvXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIHRlc3RBIHtcclxuICAgIG1haW4oKSB7XHJcbiAgICAgICAgbGV0IFZlaGljdWxvID0gbmV3IHZlaGljdWxvKFwiTFBWMTc2XCIsIFwiVlcgR29sXCIsIFwiMjAyMVwiKTtcclxuXHJcbiAgICAgICAgbGV0IEhvamFydXRhID0gbmV3IGhvamFydXRhKG5ldyBEYXRlKFwiMjAyMi0wMi0yMFwiKSwgMSxWZWhpY3Vsbyk7XHJcbiAgICAgICAgbGV0IEhvamFydXRhMiA9IG5ldyBob2phcnV0YShuZXcgRGF0ZShcIjIwMjItMDItMjJcIiksIDIsVmVoaWN1bG8pO1xyXG4gICAgICAgIGxldCBIb2phcnV0YTMgPSBuZXcgaG9qYXJ1dGEobmV3IERhdGUoXCIyMDIyLTAyLTI0XCIpLCAzLFZlaGljdWxvKTtcclxuXHJcbiAgICAgICAgbGV0IGRldGFsbGUxMSA9IG5ldyBkZXRhbGxlKDAsIDEwLCAxMiwgMTMsIDAsIDAsIEhvamFydXRhKTtcclxuICAgICAgICBsZXQgZGV0YWxsZTEyID0gbmV3IGRldGFsbGUoMTAsIDIwLCAxMywgMTQsIDAsIDAsIEhvamFydXRhKTtcclxuICAgICAgICBsZXQgZGV0YWxsZTEzID0gbmV3IGRldGFsbGUoMjAsIDMwLCAxNCwgMTUsIDAsIDAsIEhvamFydXRhKTtcclxuICAgICAgICBIb2phcnV0YS5kZXRhbGxlcy5wdXNoKGRldGFsbGUxMSk7XHJcbiAgICAgICAgSG9qYXJ1dGEuZGV0YWxsZXMucHVzaChkZXRhbGxlMTIpO1xyXG4gICAgICAgIEhvamFydXRhLmRldGFsbGVzLnB1c2goZGV0YWxsZTEzKTsgXHJcblxyXG4gICAgICAgIGxldCBkZXRhbGxlMjEgPSBuZXcgZGV0YWxsZSgwLCAxMDAsIDEyLCAxMywgMCwgMCwgSG9qYXJ1dGEyKTtcclxuICAgICAgICBsZXQgZGV0YWxsZTIyID0gbmV3IGRldGFsbGUoMTAwLCAyMDAsIDEzLCAxNCwgMCwgMCwgSG9qYXJ1dGEyKTtcclxuICAgICAgICBsZXQgZGV0YWxsZTIzID0gbmV3IGRldGFsbGUoMjAwLCAzMDAsIDE0LCAxNSwgMCwgMCwgSG9qYXJ1dGEyKTtcclxuICAgICAgICBIb2phcnV0YTIuZGV0YWxsZXMucHVzaChkZXRhbGxlMjEpO1xyXG4gICAgICAgIEhvamFydXRhMi5kZXRhbGxlcy5wdXNoKGRldGFsbGUyMik7XHJcbiAgICAgICAgSG9qYXJ1dGEyLmRldGFsbGVzLnB1c2goZGV0YWxsZTIzKTtcclxuXHJcbiAgICAgICAgbGV0IGRldGFsbGUzMSA9IG5ldyBkZXRhbGxlKDEwLCAzMCwgMTIsIDEzLCAwLCAwLCBIb2phcnV0YTMpO1xyXG4gICAgICAgIGxldCBkZXRhbGxlMzIgPSBuZXcgZGV0YWxsZSgzMCwgNjAsIDEzLCAxNCwgMCwgMCwgSG9qYXJ1dGEzKTtcclxuICAgICAgICBsZXQgZGV0YWxsZTMzID0gbmV3IGRldGFsbGUoNjAsIDkwLCAxNCwgMTUsIDAsIDAsIEhvamFydXRhMyk7XHJcbiAgICAgICAgSG9qYXJ1dGEzLmRldGFsbGVzLnB1c2goZGV0YWxsZTMxKTtcclxuICAgICAgICBIb2phcnV0YTMuZGV0YWxsZXMucHVzaChkZXRhbGxlMzIpO1xyXG4gICAgICAgIEhvamFydXRhMy5kZXRhbGxlcy5wdXNoKGRldGFsbGUzMyk7XHJcblxyXG4gICAgICAgIC8qbGV0IHJ1dGFzOiBob2phcnV0YVtdO1xyXG4gICAgICAgIHJ1dGFzLnB1c2goSG9qYXJ1dGEpO1xyXG4gICAgICAgIHJ1dGFzLnB1c2goSG9qYXJ1dGEyKTtcclxuICAgICAgICBydXRhcy5wdXNoKEhvamFydXRhMyk7Ki9cclxuXHJcbiAgICAgICAgLy9WZWhpY3Vsby5zZXRob2phc3J1dGEocnV0YXMpOyBxdWlzZSB1c2FyIHNldHRlciBwZXJvIG1lIGxhcmdhIGVycm9yXHJcbiAgICAgICAgLy9WZWhpY3Vsby5ob2phc3J1dGEucHVzaChIb2phcnV0YSk7XHJcbiAgICAgICAgLy9WZWhpY3Vsby5zZXRob2phc3J1dGEocnV0YXMpO1xyXG4gICAgICAgIFZlaGljdWxvLmhvamFzcnV0YS5wdXNoKEhvamFydXRhKTtcclxuICAgICAgICBWZWhpY3Vsby5ob2phc3J1dGEucHVzaChIb2phcnV0YTIpO1xyXG4gICAgICAgIFZlaGljdWxvLmhvamFzcnV0YS5wdXNoKEhvamFydXRhMyk7XHJcbiAgICAgICAgY29uc3QgdG90YWxLbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxLbVwiKTtcclxuICAgICAgICBpZiAodG90YWxLbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwib29wc1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b3RhbEttLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICBcIkVsIHRvdGFsIGRlIGtpbG9tZXRyb3MgZGUgbGEgaG9qYSBkZSBydXRhIGVzOiBcIiArXHJcbiAgICAgICAgICAgICAgICBIb2phcnV0YS5jYWxjdWxhclRvdGFsS2lsb21ldHJvcygpLnRvU3RyaW5nKCkgKyBcIiBrbS5cIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3RhbEttUmVjb3JyaWRvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxLbVJlY29ycmlkb3NcIik7XHJcbiAgICAgICAgaWYgKHRvdGFsS21SZWNvcnJpZG9zID09IG51bGwpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJvb3BzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsS21SZWNvcnJpZG9zLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICBcIkVsIHRvdGFsIGRlIGtpbG9tZXRyb3MgcmVjb3JyaWRvcyBwb3IgZWwgdmVow61jdWxvOiBcIiArXHJcbiAgICAgICAgICAgICAgICBWZWhpY3Vsby5jYWxjdWxhclRvdGFsS2lsb21ldHJvc1JlY29ycmlkb3MobmV3IERhdGUoXCIyMDIyLTAyLTE5XCIpLCBuZXcgRGF0ZShcIjIwMjItMDItMjFcIikpLnRvU3RyaW5nKCkgKyBcIiBrbS5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modeloA/testA.ts\n");

/***/ }),

/***/ "./src/modeloA/vehiculo.ts":
/*!*********************************!*\
  !*** ./src/modeloA/vehiculo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.vehiculo = void 0;\r\nclass vehiculo {\r\n    constructor(patente, marca, modelo) {\r\n        this.hojasruta = [];\r\n        this.patente = patente;\r\n        this.marca = marca;\r\n        this.modelo = modelo;\r\n    }\r\n    /*  get gethojasruta(){\r\n          return this.hojasruta;\r\n      }\r\n      set sethojasruta(rutas: any){\r\n          this.hojasruta=rutas;\r\n      } */\r\n    calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta) {\r\n        let totalkm = 0;\r\n        if (this.hojasruta.length != null) {\r\n            for (let i = 0; i < this.hojasruta.length; i++) {\r\n                if (fechaDesde <= this.hojasruta[i].fecha && fechaHasta >= this.hojasruta[i].fecha) {\r\n                    totalkm = totalkm + this.hojasruta[i].calcularTotalKilometros();\r\n                }\r\n            }\r\n        }\r\n        return totalkm;\r\n    }\r\n}\r\nexports.vehiculo = vehiculo;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxvQS92ZWhpY3Vsby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJQSxNQUFhLFFBQVE7SUFNakIsWUFBWSxPQUFlLEVBQUUsS0FBWSxFQUFFLE1BQWE7UUFGeEQsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0g7Ozs7O1VBS007SUFDSixpQ0FBaUMsQ0FBQyxVQUFnQixFQUFFLFVBQWdCO1FBQ2hFLElBQUksT0FBTyxHQUFTLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLFVBQVUsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDL0UsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLENBQUM7aUJBQ25FO2FBQ0o7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQTVCRCw0QkE0QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHR5cGVzY3JpcHQvLi9zcmMvbW9kZWxvQS92ZWhpY3Vsby50cz81OWY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qQ29kaWZpcXVlIGVuIGxhIGNsYXNlIFZlaGljdWxvIHVuYSBmdW5jacOzbiBkZW5vbWluYWRhIOKAnGNhbGN1bGFyVG90YWxLaWxvbWV0cm9zUmVjb3JyaWRvcyAoRGF0ZSBmZWNoYURlc2RlLCBEYXRlIGZlY2hhSGFzdGEp4oCdIFxyXG5xdWUgcmV0b3JuZSBlbCB0b3RhbCBkZSBraWzDs21ldHJvcyByZWNvcnJpZG9zIHBvciBlbCB2ZWjDrWN1bG8gcGFyYSB1biByYW5nbyBkZSBmZWNoYXMgZGV0ZXJtaW5hZG8uIFxyXG5SZXV0aWxpY2UgZWwgbcOpdG9kbyBkZWwgcHVudG8gYW50ZXJpb3IuICovXHJcbmltcG9ydCB7IGhvamFydXRhIH0gZnJvbSBcIi4vaG9qYXJ1dGFcIjtcclxuZXhwb3J0IGNsYXNzIHZlaGljdWxvIHtcclxuICAgIHBhdGVudGU6IHN0cmluZztcclxuICAgIG1hcmNhOiBzdHJpbmc7XHJcbiAgICBtb2RlbG86IHN0cmluZztcclxuICAgIGhvamFzcnV0YTogaG9qYXJ1dGFbXSA9IFtdOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXRlbnRlOiBzdHJpbmcsIG1hcmNhOnN0cmluZywgbW9kZWxvOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5wYXRlbnRlPXBhdGVudGU7XHJcbiAgICAgICAgdGhpcy5tYXJjYT1tYXJjYTtcclxuICAgICAgICB0aGlzLm1vZGVsbz1tb2RlbG87XHJcbiAgICB9XHJcbiAgLyogIGdldCBnZXRob2phc3J1dGEoKXsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9qYXNydXRhO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldGhvamFzcnV0YShydXRhczogYW55KXtcclxuICAgICAgICB0aGlzLmhvamFzcnV0YT1ydXRhcztcclxuICAgIH0gKi9cclxuICAgIGNhbGN1bGFyVG90YWxLaWxvbWV0cm9zUmVjb3JyaWRvcyhmZWNoYURlc2RlOiBEYXRlLCBmZWNoYUhhc3RhOiBEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdG90YWxrbTogbnVtYmVyPTA7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9qYXNydXRhLmxlbmd0aCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ob2phc3J1dGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmZWNoYURlc2RlIDw9IHRoaXMuaG9qYXNydXRhW2ldLmZlY2hhICYmIGZlY2hhSGFzdGE+PSB0aGlzLmhvamFzcnV0YVtpXS5mZWNoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsa20gPSB0b3RhbGttICsgdGhpcy5ob2phc3J1dGFbaV0uY2FsY3VsYXJUb3RhbEtpbG9tZXRyb3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWxrbTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modeloA/vehiculo.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;