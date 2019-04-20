(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill {\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n  \n  .contain {\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  \n  .cover {\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n  \n  .none {\n    -o-object-fit: none;\n       object-fit: none;\n  }\n  \n  .scale-down {\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"todo\" style=\"margin-top: 40px\">\n  <ng-flash-message></ng-flash-message>\n  <router-outlet class=\"todo\"></router-outlet>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_resenias_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/resenias.service */ "./src/app/services/resenias.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_listado_ahorro_listado_ahorro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/listado-ahorro/listado-ahorro.component */ "./src/app/components/listado-ahorro/listado-ahorro.component.ts");
/* harmony import */ var _components_listado_adquiere_listado_adquiere_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/listado-adquiere/listado-adquiere.component */ "./src/app/components/listado-adquiere/listado-adquiere.component.ts");
/* harmony import */ var _components_preguntas_ahorro_preguntas_ahorro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/preguntas-ahorro/preguntas-ahorro.component */ "./src/app/components/preguntas-ahorro/preguntas-ahorro.component.ts");
/* harmony import */ var _components_preguntas_adquiere_preguntas_adquiere_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/preguntas-adquiere/preguntas-adquiere.component */ "./src/app/components/preguntas-adquiere/preguntas-adquiere.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_empezar_empezar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/empezar/empezar.component */ "./src/app/components/empezar/empezar.component.ts");
/* harmony import */ var _components_preguntas_cdt_preguntas_cdt_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/preguntas-cdt/preguntas-cdt.component */ "./src/app/components/preguntas-cdt/preguntas-cdt.component.ts");
/* harmony import */ var _components_preguntas_producto_preguntas_producto_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/preguntas-producto/preguntas-producto.component */ "./src/app/components/preguntas-producto/preguntas-producto.component.ts");
/* harmony import */ var _components_listado_cdt_listado_cdt_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/listado-cdt/listado-cdt.component */ "./src/app/components/listado-cdt/listado-cdt.component.ts");
/* harmony import */ var _components_detail_cdt_detail_cdt_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/detail-cdt/detail-cdt.component */ "./src/app/components/detail-cdt/detail-cdt.component.ts");
/* harmony import */ var _components_resenias_resenias_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/resenias/resenias.component */ "./src/app/components/resenias/resenias.component.ts");
/* harmony import */ var _components_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/construccion/construccion.component */ "./src/app/components/construccion/construccion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















 // this is needed!















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'busca-producto', component: _components_empezar_empezar_component__WEBPACK_IMPORTED_MODULE_24__["EmpezarComponent"] },
    { path: 'ahorra', component: _components_preguntas_ahorro_preguntas_ahorro_component__WEBPACK_IMPORTED_MODULE_20__["PreguntasAhorroComponent"] },
    { path: 'adquiere', component: _components_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_30__["ConstruccionComponent"] },
    { path: 'registro', component: _components_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_30__["ConstruccionComponent"] },
    { path: 'dashboard', component: _components_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_30__["ConstruccionComponent"] },
    { path: 'preguntas-cdt', component: _components_preguntas_cdt_preguntas_cdt_component__WEBPACK_IMPORTED_MODULE_25__["PreguntasCdtComponent"] },
    { path: 'listado-cdt', component: _components_listado_cdt_listado_cdt_component__WEBPACK_IMPORTED_MODULE_27__["ListadoCdtComponent"] },
    { path: 'CDT', component: _components_detail_cdt_detail_cdt_component__WEBPACK_IMPORTED_MODULE_28__["DetailCDTComponent"] },
    { path: 'resenias', component: _components_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_30__["ConstruccionComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _components_listado_ahorro_listado_ahorro_component__WEBPACK_IMPORTED_MODULE_18__["ListadoAhorroComponent"],
                _components_listado_adquiere_listado_adquiere_component__WEBPACK_IMPORTED_MODULE_19__["ListadoAdquiereComponent"],
                _components_preguntas_ahorro_preguntas_ahorro_component__WEBPACK_IMPORTED_MODULE_20__["PreguntasAhorroComponent"],
                _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_22__["RegistroComponent"],
                _components_preguntas_adquiere_preguntas_adquiere_component__WEBPACK_IMPORTED_MODULE_21__["PreguntasAdquiereComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
                _components_empezar_empezar_component__WEBPACK_IMPORTED_MODULE_24__["EmpezarComponent"],
                _components_preguntas_cdt_preguntas_cdt_component__WEBPACK_IMPORTED_MODULE_25__["PreguntasCdtComponent"],
                _components_preguntas_producto_preguntas_producto_component__WEBPACK_IMPORTED_MODULE_26__["PreguntasProductoComponent"],
                _components_listado_cdt_listado_cdt_component__WEBPACK_IMPORTED_MODULE_27__["ListadoCdtComponent"],
                _components_detail_cdt_detail_cdt_component__WEBPACK_IMPORTED_MODULE_28__["DetailCDTComponent"],
                _components_resenias_resenias_component__WEBPACK_IMPORTED_MODULE_29__["ReseniasComponent"],
                _components_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_30__["ConstruccionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_15__["TagInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__["NgFlashMessagesModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_resenias_service__WEBPACK_IMPORTED_MODULE_13__["ReseniasService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/construccion/construccion.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/construccion/construccion.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/construccion/construccion.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/construccion/construccion.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\" style=\"text-align:center\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Hola! Estamos construyendo algo increible...\n      </h1>\n      <h3>Vuelve pronto!</h3>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img src=\"/assets/img/construc.svg\" style=\"width:30%\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/construccion/construccion.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/construccion/construccion.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConstruccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstruccionComponent", function() { return ConstruccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstruccionComponent = /** @class */ (function () {
    function ConstruccionComponent() {
    }
    ConstruccionComponent.prototype.ngOnInit = function () {
    };
    ConstruccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-construccion',
            template: __webpack_require__(/*! ./construccion.component.html */ "./src/app/components/construccion/construccion.component.html"),
            styles: [__webpack_require__(/*! ./construccion.component.css */ "./src/app/components/construccion/construccion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConstruccionComponent);
    return ConstruccionComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/detail-cdt/detail-cdt.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/detail-cdt/detail-cdt.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-lg-4{\n    padding: 0 3%;\n}"

/***/ }),

/***/ "./src/app/components/detail-cdt/detail-cdt.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/detail-cdt/detail-cdt.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin: 5% auto\" xmlns=\"http://www.w3.org/1999/html\">\n    <div class=\"row\" style=\"width: 100%\">\n        <div class=\"col-lg-4\">\n            <div style=\"text-align: center\">\n                <h2>Banco de Bogotá</h2>\n                <img style=\"width: 100%;\" src=\"https://s3-eu-west-1.amazonaws.com/rankia/images/valoraciones/0026/3596/oficinas-horarios-bancos-bogota.png?1487772955\">\n                <h4>Calificación Servicio: <span style=\"color: green\">8.3</span></h4>\n            </div>\n        </div>\n        <div class=\"col-lg-4 text-center\">\n            <h2>Información del producto</h2>\n            <table class=\"table\">\n                <tr>\n                    <td>Tipo de producto</td>\n                    <td>CDT tasa fija</td>\n                </tr>\n                <tr>\n                    <td>Rendimiento</td>\n                    <td>4.45%</td>\n                </tr>\n                <tr>\n                    <td>Plazo</td>\n                    <td>120 días</td>\n                </tr>\n                <tr>\n                    <td>Monto mínimo</td>\n                    <td>$100,000</td>\n                </tr>\n            </table>\n            <button class=\"btn btn-success btn-lg\">\n                <a style=\"color: white\"\n                   href=\"https://www.bancodebogota.com/wps/portal/banco-de-bogota/bogota/productos/para-ti/cdt-e-inversion/cdt-tradicional\">Visita\n                    al Banco</a>\n            </button>\n        </div>\n        <div class=\"col-lg-4 text-center\">\n            <h2>Reseñas</h2>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">La aplicación es excelente</li>\n                <li class=\"list-group-item\">Es el peor Banco...no recomiendo tener tarjetas con ellos...</li>\n                <li class=\"list-group-item\">No me interesa el servicio de un banco que al comprar cartera dicen una tasa de interés y luego la suben un punto sin informar. Súmele que tiene la tasa de cuota de manejo y seguro de vida mal alto. </li>\n\n            </ul>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/detail-cdt/detail-cdt.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/detail-cdt/detail-cdt.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailCDTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCDTComponent", function() { return DetailCDTComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_resenias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resenias.service */ "./src/app/services/resenias.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailCDTComponent = /** @class */ (function () {
    function DetailCDTComponent(reseniasService, router, route) {
        this.reseniasService = reseniasService;
        this.router = router;
        this.route = route;
    }
    DetailCDTComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            //this.idProd = +params['id']; // esto es lo que se debe hacer cuando tengamos id para prods
            _this.idProd = +1;
            if (_this.idProd != null && _this.idProd != undefined) {
                _this.cargarReseniasProducto(_this.idProd);
            }
        });
    };
    DetailCDTComponent.prototype.cargarReseniasProducto = function (idProd) {
        var _this = this;
        this.reseniasService.cargarResenias(idProd).subscribe(function (res) {
            console.log(res);
            _this.reseniasService.actualizarResenias(res);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DetailCDTComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-cdt',
            template: __webpack_require__(/*! ./detail-cdt.component.html */ "./src/app/components/detail-cdt/detail-cdt.component.html"),
            styles: [__webpack_require__(/*! ./detail-cdt.component.css */ "./src/app/components/detail-cdt/detail-cdt.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resenias_service__WEBPACK_IMPORTED_MODULE_2__["ReseniasService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DetailCDTComponent);
    return DetailCDTComponent;
}());



/***/ }),

/***/ "./src/app/components/empezar/empezar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/empezar/empezar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    -o-object-fit: fill;\n       object-fit: fill;\n    width: 100%\n}\n\n\n.intro {\n    height: 100%\n}\n\n\n.left {\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    overflow-y: auto;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    max-width: 100%;\n    overflow-x: hidden;\n    background-color: #ffffff;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%236fc728' fill-opacity='0.06' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n\n.right {\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    overflow: auto;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    max-width: 100%;\n    overflow-x: hidden;\n    background-color: #ffffff;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffd34e' fill-opacity='0.13' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n\n@media (max-width: 992px) {\n    .left {\n        height: 50%\n    }\n\n    .right {\n        height: 50%\n    }\n}\n\n\n.about {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #000;\n    color: #FFF;\n    height: 100%\n}\n\n\n.container {\n    padding: 0\n}\n\n\n.card{\n    background: rgba(255,255,255,0);\n}\n\n\n.card-header {\n    background: rgba(255,255,255,0);\n}\n\n\n.card-header h4 {\n    color: black;\n    transition: all .4s;\n    background: rgba(255,255,255,0);\n}\n\n\n.card-header h4:hover {\n    color: #6FC728;\n    background: rgba(255,255,255,0);\n}\n\n\n.btn {\n    margin: 60px;\n    border-color: rgba(255,255,255,0);\n    background-color: rgb(194, 243, 102);\n    transition: all .4s;\n    width: 50% !important;\n}\n\n\n.btn-adquiere {\n    margin: 60px;\n    border-color: rgba(255,255,255,0);\n    background-color: #0077aa;\n    color: #f1f1f1;\n    transition: all .4s;\n}\n\n\n.btn-ahorro {\n    margin: 60px;\n    border-color: rgba(255,255,255,0);\n    background-color: #FFD34E;\n    color: black;\n    transition: all .4s;\n}\n\n\n.btn:hover {\n    background-color: rgb(194, 243, 102);\n}\n"

/***/ }),

/***/ "./src/app/components/empezar/empezar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/empezar/empezar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"intro\">\n  <div class=\"row\" style=\"height:100%\">\n    <div class=\"col-lg-6 col-sm-12 left\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <img src=\"/assets/img/ahorro.svg\">\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1>¡Empieza a <span style=\"color: #FFD34E\">ahorrar</span> ya!</h1>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <a class=\"btn btn-primary btn-ahorro btn-xl js-scroll-trigger\" id=\"btnLoginEmpr\"\n            [routerLink]=\"['/ahorra']\">\n              ¡Vamos!\n            </a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div id=\"collapseLoginEmpr\" class=\"collapse border-0\" aria-labelledby=\"btnLoginEmpr\">\n\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"accordion border-0\" style=\"text-align: justify\" id=\"accordionExample\">\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingProyectoOne\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseProyectoOne\" aria-expanded=\"true\" aria-controls=\"collapseProyectoOne\">\n                    <h4 class=\"mb-0\">\n                      ¿Cuánto dinero necesito para iniciar?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseProyectoOne\" class=\"collapse border-0\" aria-labelledby=\"headingProyectoOne\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseProyectoDos\" aria-expanded=\"true\" aria-controls=\"collapseProyectoDos\">\n                    <h4 class=\"mb-0\">\n                      ¿En cuántos tipos de ahorro puedo invertir mi dinero?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseProyectoDos\" class=\"collapse border-0\" aria-labelledby=\"headingProyectoDos\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseProyectoTres\" aria-expanded=\"true\" aria-controls=\"collapseProyectoTres\">\n                    <h4 class=\"mb-0\">\n                      ¿Debo pagar algún tipo de membresía?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseProyectoTres\" class=\"collapse border-0\" aria-labelledby=\"headingProyectoTres\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12 right\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <img src=\"/assets/img/adquiere2.svg\">\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1>¿Necesitas dinero? ¡<span style=\"color: #0077aa\">Adquiérelo</span> ahora!</h1>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <a class=\"btn btn-primary btn-adquiere btn-xl js-scroll-trigger\" id=\"btnLoginWork\" [routerLink]=\"['/adquiere']\">\n              ¡Vamos!\n            </a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div id=\"collapseLoginWorker\" class=\"collapse border-0\" aria-labelledby=\"btnLoginWork\">\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"accordion border-0\" style=\"text-align: justify\" id=\"accordionExample\">\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTrabajoTresOne\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseTrabajoTresOne\" aria-expanded=\"true\" aria-controls=\"collapseTrabajoTresOne\">\n                    <h4 class=\"mb-0\">\n                      ¿Consultar un producto me obliga a adquirirlo?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseTrabajoTresOne\" class=\"collapse border-0\" aria-labelledby=\"headingTrabajoTresOne\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseTrabajoTresDos\" aria-expanded=\"true\" aria-controls=\"collapseTrabajoTresDos\">\n                    <h4 class=\"mb-0\">\n                      ¿Qué tipos de productos financieros me pueden ofrecer?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseTrabajoTresDos\" class=\"collapse border-0\" aria-labelledby=\"headingTrabajoTresDos\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseTrabajoTresTres\" aria-expanded=\"true\" aria-controls=\"collapseTrabajoTresTres\">\n                    <h4 class=\"mb-0\">\n                      ¿Qué requisitos debo cumplir para poder adquirir un producto ofrecido?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseTrabajoTresTres\" class=\"collapse border-0\" aria-labelledby=\"headingTrabajoTresTres\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/empezar/empezar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/empezar/empezar.component.ts ***!
  \*********************************************************/
/*! exports provided: EmpezarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpezarComponent", function() { return EmpezarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmpezarComponent = /** @class */ (function () {
    function EmpezarComponent() {
    }
    EmpezarComponent.prototype.ngOnInit = function () {
    };
    EmpezarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empezar',
            template: __webpack_require__(/*! ./empezar.component.html */ "./src/app/components/empezar/empezar.component.html"),
            styles: [__webpack_require__(/*! ./empezar.component.css */ "./src/app/components/empezar/empezar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpezarComponent);
    return EmpezarComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Freelancer v5.0.0 (https://startbootstrap.com/template-overviews/freelancer)\n * Copyright 2013-2018 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)\n */\n\n body {\n  font-family: 'Lato';\n}\n\n h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n  font-family: 'Montserrat';\n}\n\n hr.star-light,\nhr.star-dark {\n  max-width: 15rem;\n  padding: 0;\n  text-align: center;\n  border: none;\n  border-top: solid 0.25rem;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n hr.star-light:after,\nhr.star-dark:after {\n  position: relative;\n  top: -.8em;\n  display: inline-block;\n  padding: 0 0.25em;\n  content: '\\f005';\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 2em;\n}\n\n hr.star-light {\n  border-color: #fff;\n}\n\n hr.star-light:after {\n  color: #fff;\n  background-color: #FFD34E;\n}\n\n hr.star-dark {\n  border-color: #2C3E50;\n}\n\n hr.star-dark:after {\n  color: #2C3E50;\n  background-color: white;\n}\n\n section {\n  padding: 6rem 0;\n}\n\n section h2 {\n  font-size: 2.25rem;\n  line-height: 2rem;\n}\n\n @media (min-width: 992px) {\n  section h2 {\n      font-size: 3rem;\n      line-height: 2.5rem;\n  }\n}\n\n .btn-xl {\n  padding: 1rem 1.75rem;\n  font-size: 1.25rem;\n}\n\n .btn-social {\n  width: 3.25rem;\n  height: 3.25rem;\n  font-size: 1.25rem;\n  line-height: 2rem;\n}\n\n .scroll-to-top {\n  z-index: 1042;\n  right: 1rem;\n  bottom: 1rem;\n  display: none;\n}\n\n .scroll-to-top a {\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: rgba(33, 37, 41, 0.5);\n  line-height: 3.1rem;\n}\n\n #mainNav {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-weight: 700;\n  font-family: 'Montserrat';\n}\n\n #mainNav .navbar-brand {\n  color: #fff;\n}\n\n #mainNav .navbar-nav {\n  margin-top: 1rem;\n  letter-spacing: 0.0625rem;\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link {\n  color: #fff;\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link:hover {\n  color: #FFD34E;\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link:active,\n#mainNav .navbar-nav li.nav-item a.nav-link:focus {\n  color: #fff;\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link.active {\n  color: #FFD34E;\n}\n\n #mainNav .navbar-toggler {\n  font-size: 80%;\n  padding: 0.8rem;\n}\n\n @media (min-width: 992px) {\n  #mainNav {\n      padding-top: 1.5rem;\n      padding-bottom: 1.5rem;\n      transition: padding-top 0.3s, padding-bottom 0.3s;\n  }\n\n  #mainNav .navbar-brand {\n      font-size: 2em;\n      transition: font-size 0.3s;\n  }\n\n  #mainNav .navbar-nav {\n      margin-top: 0;\n  }\n\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active {\n      color: #fff;\n      background: #FFD34E;\n  }\n\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active:active,\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active:focus,\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active:hover {\n      color: #fff;\n      background: #FFD34E;\n  }\n\n  #mainNav.navbar-shrink {\n      padding-top: 0.5rem;\n      padding-bottom: 0.5rem;\n  }\n\n  #mainNav.navbar-shrink .navbar-brand {\n      font-size: 1.5em;\n  }\n}\n\n header.masthead {\n  padding-top: calc(6rem + 72px);\n  padding-bottom: 6rem;\n}\n\n header.masthead h1 {\n  font-size: 3rem;\n  line-height: 3rem;\n}\n\n header.masthead h2 {\n  font-size: 1.3rem;\n  font-family: 'Lato';\n}\n\n @media (min-width: 992px) {\n  header.masthead {\n      padding-top: calc(6rem + 106px);\n      padding-bottom: 6rem;\n  }\n\n  header.masthead h1 {\n      font-size: 4.75em;\n      line-height: 4rem;\n  }\n\n  header.masthead h2 {\n      font-size: 1.75em;\n  }\n}\n\n .portfolio {\n  margin-bottom: -15px;\n}\n\n .portfolio .portfolio-item {\n  position: relative;\n  display: block;\n  max-width: 25rem;\n  margin-bottom: 15px;\n}\n\n .portfolio .portfolio-item .portfolio-item-caption {\n  transition: all ease 0.5s;\n  opacity: 0;\n  background-color: rgba(24, 188, 156, 0.9);\n}\n\n .portfolio .portfolio-item .portfolio-item-caption:hover {\n  opacity: 1;\n}\n\n .portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {\n  font-size: 1.5rem;\n}\n\n @media (min-width: 576px) {\n  .portfolio {\n      margin-bottom: -30px;\n  }\n\n  .portfolio .portfolio-item {\n      margin-bottom: 30px;\n  }\n}\n\n .portfolio-modal .portfolio-modal-dialog {\n  padding: 3rem 1rem;\n  min-height: calc(100vh - 2rem);\n  margin: 1rem calc(1rem - 8px);\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 3rem 1rem rgba(0, 0, 0, 0.5);\n}\n\n .portfolio-modal .portfolio-modal-dialog .close-button {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n}\n\n .portfolio-modal .portfolio-modal-dialog .close-button i {\n  line-height: 38px;\n}\n\n .portfolio-modal .portfolio-modal-dialog h2 {\n  font-size: 2rem;\n}\n\n @media (min-width: 768px) {\n  .portfolio-modal .portfolio-modal-dialog {\n      min-height: 100vh;\n      padding: 5rem;\n      margin: 3rem calc(3rem - 8px);\n  }\n\n  .portfolio-modal .portfolio-modal-dialog h2 {\n      font-size: 3rem;\n  }\n}\n\n .floating-label-form-group {\n  position: relative;\n  border-bottom: 1px solid #e9ecef;\n}\n\n .floating-label-form-group input,\n.floating-label-form-group textarea {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding-right: 0;\n  padding-left: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n  box-shadow: none !important;\n}\n\n .floating-label-form-group label {\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  transition: top 0.3s ease, opacity 0.3s ease;\n  vertical-align: middle;\n  vertical-align: baseline;\n  opacity: 0;\n}\n\n .floating-label-form-group:not(:first-child) {\n  padding-left: 14px;\n  border-left: 1px solid #e9ecef;\n}\n\n .floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1;\n}\n\n .floating-label-form-group-with-focus label {\n  color: #FFD34E;\n}\n\n form .row:first-child .floating-label-form-group {\n  border-top: 1px solid #e9ecef;\n}\n\n .footer {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  background-color: #fff;\n  color: #fff;\n}\n\n .copyright {\n  background-color: #1a252f;\n}\n\n a {\n  color: #FFD34E;\n}\n\n a:focus,\na:hover,\na:active {\n  color: #128f76;\n}\n\n .btn {\n  border-width: 2px;\n}\n\n .bg-primary {\n  background-color: #FFD34E !important;\n}\n\n .bg-secondary {\n  background-color: #2C3E50 !important;\n}\n\n .text-primary {\n  color: #FFD34E !important;\n}\n\n .text-secondary {\n  color: #2C3E50 !important;\n}\n\n .btn-primary {\n  background-color: #FFD34E;\n  border-color: #FFD34E;\n}\n\n .btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active {\n  background-color: #128f76;\n  border-color: #128f76;\n}\n\n .btn-secondary {\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n\n .btn-secondary:hover,\n.btn-secondary:focus,\n.btn-secondary:active {\n  background-color: #1a252f;\n  border-color: #1a252f;\n}\n\n /*!\n* Start Bootstrap - Freelancer v5.0.0 (https://startbootstrap.com/template-overviews/freelancer)\n* Copyright 2013-2018 Start Bootstrap\n* Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)\n*/\n\n body {\n  font-family: Lato\n}\n\n h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n  font-family: Montserrat\n}\n\n hr.star-dark,\nhr.star-light {\n  max-width: 15rem;\n  padding: 0;\n  text-align: center;\n  border: none;\n  border-top: solid .25rem;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  margin-left: auto;\n  margin-right: auto\n}\n\n hr.star-dark:after,\nhr.star-light:after {\n  position: relative;\n  top: -.8em;\n  display: inline-block;\n  padding: 0 .25em;\n  content: '\\f005';\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 2em\n}\n\n hr.star-light {\n  border-color: #fff\n}\n\n hr.star-light:after {\n  color: #fff;\n  background-color: #FFD34E\n}\n\n hr.star-dark {\n  border-color: #2c3e50\n}\n\n hr.star-dark:after {\n  color: #2c3e50;\n  background-color: #fff\n}\n\n section {\n  padding: 6rem 0\n}\n\n section h2 {\n  font-size: 2.25rem;\n  line-height: 2rem\n}\n\n @media (min-width:992px) {\n  section h2 {\n      font-size: 3rem;\n      line-height: 2.5rem\n  }\n}\n\n .btn-xl {\n  padding: 1rem 1.75rem;\n  font-size: 1.25rem\n}\n\n .btn-social {\n  width: 3.25rem;\n  height: 3.25rem;\n  font-size: 1.25rem;\n  line-height: 2rem\n}\n\n .scroll-to-top {\n  z-index: 1042;\n  right: 1rem;\n  bottom: 1rem;\n  display: none\n}\n\n .scroll-to-top a {\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: rgba(33, 37, 41, .5);\n  line-height: 3.1rem\n}\n\n #mainNav {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-weight: 700;\n  font-family: Montserrat\n}\n\n #mainNav .navbar-brand {\n  color: #fff\n}\n\n #mainNav .navbar-nav {\n  margin-top: 1rem;\n  letter-spacing: .0625rem\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link {\n  color: #fff\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link:hover {\n  color: #FFD34E\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link:active,\n#mainNav .navbar-nav li.nav-item a.nav-link:focus {\n  color: #fff\n}\n\n #mainNav .navbar-nav li.nav-item a.nav-link.active {\n  color: #FFD34E\n}\n\n #mainNav .navbar-toggler {\n  font-size: 80%;\n  padding: .8rem\n}\n\n @media (min-width:992px) {\n  #mainNav {\n      padding-top: 1.5rem;\n      padding-bottom: 1.5rem;\n      transition: padding-top .3s, padding-bottom .3s\n  }\n\n  #mainNav .navbar-brand {\n      font-size: 2em;\n      transition: font-size .3s\n  }\n\n  #mainNav .navbar-nav {\n      margin-top: 0\n  }\n\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active {\n      color: #fff;\n      background: #FFD34E\n  }\n\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active:active,\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active:focus,\n  #mainNav .navbar-nav>li.nav-item>a.nav-link.active:hover {\n      color: #fff;\n      background: #FFD34E\n  }\n\n  #mainNav.navbar-shrink {\n      padding-top: .5rem;\n      padding-bottom: .5rem\n  }\n\n  #mainNav.navbar-shrink .navbar-brand {\n      font-size: 1.5em\n  }\n}\n\n header.masthead {\n  padding-top: calc(6rem + 72px);\n  padding-bottom: 6rem\n}\n\n header.masthead h1 {\n  font-size: 3rem;\n  line-height: 3rem\n}\n\n header.masthead h2 {\n  font-size: 1.3rem;\n  font-family: Lato\n}\n\n @media (min-width:992px) {\n  header.masthead {\n      padding-top: calc(6rem + 106px);\n      padding-bottom: 6rem\n  }\n\n  header.masthead h1 {\n      font-size: 4.75em;\n      line-height: 4rem\n  }\n\n  header.masthead h2 {\n      font-size: 1.75em\n  }\n}\n\n .portfolio {\n  margin-bottom: -15px\n}\n\n .portfolio .portfolio-item {\n  position: relative;\n  display: block;\n  max-width: 25rem;\n  margin-bottom: 15px\n}\n\n .portfolio .portfolio-item .portfolio-item-caption {\n  transition: all ease .5s;\n  opacity: 0;\n  background-color: rgba(24, 188, 156, .9)\n}\n\n .portfolio .portfolio-item .portfolio-item-caption:hover {\n  opacity: 1\n}\n\n .portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {\n  font-size: 1.5rem\n}\n\n @media (min-width:576px) {\n  .portfolio {\n      margin-bottom: -30px\n  }\n\n  .portfolio .portfolio-item {\n      margin-bottom: 30px\n  }\n}\n\n .portfolio-modal .portfolio-modal-dialog {\n  padding: 3rem 1rem;\n  min-height: calc(100vh - 2rem);\n  margin: 1rem calc(1rem - 8px);\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 3rem 1rem rgba(0, 0, 0, .5)\n}\n\n .portfolio-modal .portfolio-modal-dialog .close-button {\n  position: absolute;\n  top: 2rem;\n  right: 2rem\n}\n\n .portfolio-modal .portfolio-modal-dialog .close-button i {\n  line-height: 38px\n}\n\n .portfolio-modal .portfolio-modal-dialog h2 {\n  font-size: 2rem\n}\n\n @media (min-width:768px) {\n  .portfolio-modal .portfolio-modal-dialog {\n      min-height: 100vh;\n      padding: 5rem;\n      margin: 3rem calc(3rem - 8px)\n  }\n\n  .portfolio-modal .portfolio-modal-dialog h2 {\n      font-size: 3rem\n  }\n}\n\n .floating-label-form-group {\n  position: relative;\n  border-bottom: 1px solid #e9ecef\n}\n\n .floating-label-form-group input,\n.floating-label-form-group textarea {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding-right: 0;\n  padding-left: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: 0 0;\n  box-shadow: none !important\n}\n\n .floating-label-form-group label {\n  font-size: .85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  transition: top .3s ease, opacity .3s ease;\n  vertical-align: middle;\n  vertical-align: baseline;\n  opacity: 0\n}\n\n .floating-label-form-group:not(:first-child) {\n  padding-left: 14px;\n  border-left: 1px solid #e9ecef\n}\n\n .floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1\n}\n\n .floating-label-form-group-with-focus label {\n  color: #FFD34E\n}\n\n form .row:first-child .floating-label-form-group {\n  border-top: 1px solid #e9ecef\n}\n\n .tehu2{\n  color: #FFD34E;\n}\n\n .footer {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  background-color: #1E1E1E;\n  color: #fff\n}\n\n .copyright {\n  background-color: #FFD34E;\n  color: #1E1E1E\n}\n\n a {\n  color: #FFD34E\n}\n\n a:active,\na:focus,\na:hover {\n  color: #128f76\n}\n\n .btn {\n  border-width: 2px\n}\n\n .bg-primary {\n  background-color: #FFD34E !important\n}\n\n .bg-secondary {\n  background-color: #2c3e50 !important\n}\n\n .text-primary {\n  color: #FFD34E !important\n}\n\n .text-secondary {\n  color: #2c3e50 !important\n}\n\n .btn-primary {\n  background-color: #FFD34E;\n  border-color: #FFD34E\n}\n\n .btn-primary:active,\n.btn-primary:focus,\n.btn-primary:hover {\n  background-color: #128f76;\n  border-color: #128f76\n}\n\n .btn-secondary {\n  background-color: #2c3e50;\n  border-color: #2c3e50\n}\n\n .btn-secondary:active,\n.btn-secondary:focus,\n.btn-secondary:hover {\n  background-color: #1a252f;\n  border-color: #1a252f\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"footer text-center\" style=\"margin-top:0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-5 mb-lg-0\">\n        <h4 class=\"text-uppercase mb-4\"><span style=\"color:#FFD34E\">BankIn</span><span style=\"color:#fff\">Best</span></h4>\n        <p class=\"lead mb-0\">Las finanzas <span style=\"color:#FFD34E\">más fácil que nunca</span></p>\n      </div>\n      <div class=\"col-md-4 mb-5 mb-lg-0\">\n        <h4 class=\"text-uppercase mb-4\">Nuestras redes</h4>\n        <ul class=\"list-inline mb-0\">\n          <li class=\"list-inline-item\">\n            <a class=\"btn btn-outline-light btn-social text-center rounded-circle\" href=\"https://www.facebook.com/BankinBest-409969889767941/\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n          </li>\n          \n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <h4 class=\"text-uppercase mb-4\">Contacto</h4>\n        <p class=\"lead mb-0\">dj.bautista10@uniandes.edu.co</p>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div class=\"copyright py-4 text-center\">\n  <div class=\"container\">\n    <small> BankinBest&copy; 2019</small>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoffee"];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Stylish Portfolio v5.0.1 (https://startbootstrap.com/template-overviews/stylish-portfolio)\n * Copyright 2013-2018 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\n */\nbody,\nhtml {\n    width: 100%;\n}\nbody {\n    font-family: 'Source Sans Pro'\n}\n.btn-xl {\n    padding: 1.25rem 2.5rem\n}\n.content-section {\n    padding-top: 7.5rem;\n    padding-bottom: 7.5rem\n}\n.content-section-heading h2 {\n    font-size: 3rem\n}\n.content-section-heading h3 {\n    font-size: 1rem;\n    text-transform: uppercase\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-weight: 700\n}\n.text-faded {\n    color: rgba(0, 0, 0, .7)\n}\n.map {\n    height: 30rem\n}\n@media (max-width:992px) {\n    .map {\n        height: 75%\n    }\n}\n.map iframe {\n    pointer-events: none\n}\n.scroll-to-top {\n    position: fixed;\n    right: 15px;\n    bottom: 15px;\n    display: none;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    color: #fff;\n    background: rgba(52, 58, 64, .5);\n    line-height: 45px\n}\n.scroll-to-top:focus,\n.scroll-to-top:hover {\n    color: #fff\n}\n.scroll-to-top:hover {\n    background: #343a40\n}\n.scroll-to-top i {\n    font-weight: 800\n}\n.masthead {\n    padding-top: 0;\n    min-height: 30rem;\n    position: relative;\n    display: table;\n    width: 100%;\n    height: auto;\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n    background: linear-gradient(90deg, rgba(244, 208, 44, 0.2) 0, rgba(255, 255, 225, 0.2) 100%);\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: fill;\n}\n.otroCard {\n    margin: 0 auto;\n    background-color: repeating-linear-gradient(45deg,\n        rgba(255, 255, 255, .1),\n        rgba(255, 255, 255, .1) 10px,\n        rgba(255, 255, 255, .3) 10px,\n        rgba(255, 255, 255, .3) 40px);\n    border: 0\n}\n.card2 {\n    margin-top: 0;\n    margin: 0 auto;\n    background-color: rgba(255, 255, 255, 0);\n    border: 0\n}\n.card3{\n    margin: 0 auto;\n    margin-top: 2%;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n.trabaja {\n    top: 0;\n    margin-top: 0;\n    ;\n}\n.masthead h1 {\n    font-size: 4rem;\n    margin: 0;\n    padding: 0;\n\n}\n#btnResWork {\n    background-color: #6FC728\n}\n@media (min-width:992px) {\n    .masthead {\n        height: 100vh;\n    }\n\n    .masthead h1 {\n        font-size: 5.5rem;\n    }\n\n    #btnResWork {\n        margin-top: 150px\n    }\n}\n#sidebar-wrapper {\n    position: fixed;\n    z-index: 2;\n    right: 0;\n    width: 250px;\n    transition: all .4s ease 0s;\n    -webkit-transform: translateX(250px);\n    transform: translateX(250px);\n    background: #1d809f;\n    border-left: 1px solid rgba(255, 255, 255, .1)\n}\n.sidebar-nav {\n    position: absolute;\n    top: 0;\n    width: 250px;\n    margin: 0;\n    padding: 0;\n    list-style: none\n}\n.sidebar-nav li.sidebar-nav-item a {\n    display: block;\n    text-decoration: none;\n    color: #fff;\n    padding: 15px\n}\n.sidebar-nav li a:hover {\n    text-decoration: none;\n    color: #fff;\n    background: rgba(255, 255, 255, .2)\n}\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n    text-decoration: none\n}\n.sidebar-nav>.sidebar-brand {\n    font-size: 1.2rem;\n    background: rgba(52, 58, 64, .1);\n    height: 80px;\n    line-height: 50px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 15px\n}\n.sidebar-nav>.sidebar-brand a {\n    color: #fff\n}\n.sidebar-nav>.sidebar-brand a:hover {\n    color: #fff;\n    background: 0 0\n}\n#sidebar-wrapper.active {\n    right: 250px;\n    width: 250px;\n    transition: all .4s ease 0s\n}\n.menu-toggle {\n    position: fixed;\n    right: 15px;\n    top: 15px;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    color: #fff;\n    background: rgba(52, 58, 64, .5);\n    line-height: 50px;\n    z-index: 999\n}\n.menu-toggle:focus,\n.menu-toggle:hover {\n    color: #fff\n}\n.menu-toggle:hover {\n    background: #343a40\n}\n.service-icon {\n    background-color: #FFD34E;\n    color: #404040;\n    height: 7rem;\n    width: 7rem;\n    display: block;\n    line-height: 7.5rem;\n    font-size: 2.25rem;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .1)\n}\n.callout {\n    padding: 15rem 0;\n    background: linear-gradient(90deg, rgba(255, 255, 255, .1) 0, rgba(255, 255, 255, .1) 100%);\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover\n}\n.callout h2 {\n    font-size: 3.5rem;\n    font-weight: 700;\n    display: block;\n    max-width: 30rem\n}\n.portfolio-item {\n    display: block;\n    position: relative;\n    overflow: hidden;\n    max-width: 530px;\n    margin: auto auto 1rem\n}\n.portfolio-item .caption {\n    display: flex;\n    ;\n    width: 100%;\n    background-color: rgba(33, 37, 41, .2);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: 1\n}\n.portfolio-item .caption .caption-content {\n    color: #fff;\n    margin: auto 2rem 2rem\n}\n.portfolio-item .caption .caption-content h2 {\n    font-size: .8rem;\n    text-transform: uppercase\n}\n.portfolio-item .caption .caption-content p {\n    font-weight: 300;\n    font-size: 1.2rem\n}\n@media (min-width:992px) {\n    .portfolio-item {\n        max-width: none;\n        margin: 0\n    }\n\n    .portfolio-item .caption {\n        -webkit-transition: -webkit-clip-path .25s ease-out, background-color .7s;\n        -webkit-clip-path: inset(0);\n        clip-path: inset(0)\n    }\n\n    .portfolio-item .caption .caption-content {\n        transition: opacity .25s;\n        margin-left: 5rem;\n        margin-right: 5rem;\n        margin-bottom: 5rem\n    }\n\n    .portfolio-item img {\n        -webkit-transition: -webkit-clip-path .25s ease-out;\n        -webkit-clip-path: inset(-1px);\n        clip-path: inset(-1px)\n    }\n\n    .portfolio-item:hover img {\n        -webkit-clip-path: inset(2rem);\n        clip-path: inset(2rem)\n    }\n\n    .portfolio-item:hover .caption {\n        background-color: rgba(68, 208, 0, .2);\n        -webkit-clip-path: inset(2rem);\n        clip-path: inset(2rem)\n    }\n}\nfooter.footer {\n    padding-top: 5rem;\n    padding-bottom: 5rem\n}\nfooter.footer .social-link {\n    display: block;\n    height: 4rem;\n    width: 4rem;\n    line-height: 4.3rem;\n    font-size: 1.5rem;\n    background-color: #1d809f;\n    transition: background-color .15s ease-in-out;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .1)\n}\nfooter.footer .social-link:hover {\n    background-color: #155d74;\n    text-decoration: none\n}\na {\n    color: #1d809f\n}\na:active,\na:focus,\na:hover {\n    color: #155d74\n}\n.btn-primary {\n    background-color: #FFD34E !important;\n    border-color: #FFD34E !important;\n    color: #fff !important\n}\n.btn-primary:active,\n.btn-primary:focus,\n.btn-primary:hover {\n    background-color: #6FC728 !important;\n    border-color: #6FC728 !important\n}\n.btn-secondary {\n    background-color: #ecb807 !important;\n    border-color: #ecb807 !important;\n    color: #fff !important\n}\n.btn-secondary:active,\n.btn-secondary:focus,\n.btn-secondary:hover {\n    background-color: #ba9106 !important;\n    border-color: #ba9106 !important\n}\n.btn-dark {\n    color: #fff !important\n}\n.btn {\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .1);\n    font-weight: 700\n}\n.bg-primary {\n    background-color: #1d809f !important\n}\n.bg-light {\n    background-color: #fff !important\n}\n.text-primary {\n    color: #1d809f !important\n}\n.text-secondary2 {\n    color: #ecb807 !important\n}\n.text-secondary {\n    color: #215263 !important\n}\n#about1 {\n    background: linear-gradient(90deg, rgba(244, 208, 44, .1) 0, rgba(68, 208, 0, .1) 80%);\n}\n.richie-icon{\n    width: 120px;\n    height: 120px; \n    -webkit-animation-name: floating; \n            animation-name: floating;\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n}\n@-webkit-keyframes floating {\n    from { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\n    65%  { -webkit-transform: translate(0, 15px); transform: translate(0, 15px); }\n    to   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \n}\n@keyframes floating {\n    from { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\n    65%  { -webkit-transform: translate(0, 15px); transform: translate(0, 15px); }\n    to   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \n}\n#services {\n    padding-top: 5%;\n    background:\n        linear-gradient(135deg, #FFFFFF 25%, transparent 25%) -50px 0,\n        linear-gradient(225deg, #FFFFFF 25%, transparent 25%) -50px 0,\n        linear-gradient(315deg, #FFFFFF 25%, transparent 25%),\n        linear-gradient(45deg, #FFFFFF 25%, transparent 25%);\n    background-size: 100px 100px;\n    background-color: rgba(33,82, 99, .1);\n}\n@media only screen and (max-width: 768px) {\n    #landing-page-imgs {\n        display: none;\n    }\n    #servicioslandingdiv{\n        display: none;\n    }\n}\n.btn-empieza, .btn-empieza:hover, .btn-empieza:active, .btn-empieza:visited {\n    background-color: #0E3B69 !important;\n    color: white !important;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic\"\n  rel=\"stylesheet\" type=\"text/css\">\n\n\n\n<header class=\"masthead d-flex\" style=\"padding:0; height: auto;  border-bottom-style: solid; border-bottom-width: 1px\">\n  <div class=\"container\" style=\"margin-bottom:5%; border-bottom-style: solid; border-bottom-width: 2px\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card card2\">\n          <div class=\"container text-center trabaja\">\n            <h1 class=\"mb-1\"> <span><img src=\"/assets/img/richie.svg\" class=\"richie-icon\"></span></h1>\n          </div>\n        </div>\n        <div class=\"overlay\"></div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"card card3\"\n        style=\"width: 68rem; background-color:rgba(255,255,255, .9); border-style: solid; border-color: rgba(0,0,0, .0); border-width: 1px;\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\" style=\"text-align:center\">TU PRIMER AMIGO FINANCIERO</h3>\n          <h5 class=\"card-subtitle mb-2\" style=\"text-align:center; color: #0E3B69\">Te conoce, te asesora, y te ayuda a\n            crecer mientras aprendes.</h5>\n          <br>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"container\" style=\"text-align: center\">\n                        <div class=\"row\" style=\"margin-bottom:5%;\">\n                          <div class=\"col-md-12\">\n                            <h3>Empieza ahora...</h3>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin-bottom:5%\">\n                          <div class=\"col-md-12\">\n                            <h5>Regístrate en un paso</h5>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin-bottom:5%\">\n                          <div class=\"col-md-12\">\n                            <h5>Totalmente <span style=\"color:#FFD34E\"> GRATIS</span></h5>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin-bottom:5%;\">\n                          <div class=\"col-md-12\">\n                            <button type=\"button\" class=\"btn btn-empieza\"\n                              style=\"width:100%; margin-top:5%; color: #0E3B69;\" data-toggle=\"modal\"\n                              data-target=\"#exampleModalLong\">Empecemos!</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"container\" style=\"text-align: center\" id=\"servicioslandingdiv\">\n                        <div class=\"row\" style=\"margin-bottom:5%;\">\n                          <div class=\"col-md-12\">\n                            <span>Mejores inversiones</span>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin-bottom:5%\">\n                          <div class=\"col-md-12\">\n                            <span>Mejores préstamos</span>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin-bottom:5%\">\n                          <div class=\"col-md-12\">\n                            <span>Conexión a bancos más rápida</span>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin-bottom:5%\">\n                          <div class=\"col-md-12\">\n                            <span>Acceso a toda la información</span>\n                          </div>\n                        </div>\n                        <div class=\"row\" style=\"margin-bottom:5%\">\n                          <div class=\"col-md-12\">\n                            <span>Tu información bancaria segura</span>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\"\n                style=\"background-image: url('/assets/img/richienormie.svg'); background-repeat: no-repeat; background-attachment: cover; background-position: center;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\" style=\"margin-top: 5%; margin-bottom: 5%\">\n        <img src=\"/assets/img/dejaque.svg\" />\n      </div>\n      <div class=\"col-md-4\" style=\"margin-top: 5%; margin-bottom: 5%\">\n        <img src=\"/assets/img/tehara.svg\" />\n      </div>\n      <div class=\"col-md-4\" style=\"margin-top: 5%; margin-bottom: 5%\">\n        <img src=\"/assets/img/creceygana.svg\" />\n      </div>\n    </div>\n    <div class=\"row\" id=\"landing-page-imgs\">\n      <div class=\"col-md-4\">\n        <img src=\"/assets/img/dejaquepic.svg\" />\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"/assets/img/teharapic.svg\" />\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"/assets/img/creceyganapic.svg\" />\n      </div>\n    </div>\n  </div>\n</header>\n\n\n<section class=\"content-section text-center\" style=\"padding-bottom: 0; padding-top: 2%\">\n  <div class=\"content-section-heading\">\n    <iframe [attr.width]=\"video.width\" [attr.height]=\"video.height\" src=\"https://www.youtube.com/embed/FgF4gKWSbI0\"\n      frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </div>\n</section>\n\n<section class=\"content-section text-center\" style=\"padding-bottom: 0; padding-top: 2%\">\n  <div class=\"content-section-heading\">\n    <h3 class=\"text-secondary mb-0\" style=\"color: rgb(33,82, 99)\">Servicios</h3>\n    <h2 class=\"mb-5\">¿Qué ofrecemos?</h2>\n  </div>\n</section>\n\n\n\n<section class=\"content-section text-center\" id=\"services\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\n          <i class=\"fas fa-search\"></i>\n        </span>\n        <h4>\n          <strong>Busca</strong>\n        </h4>\n        <p class=\"text-faded mb-0\">Con ayuda de Richie, encuentra esos productos que cambiaran tu vida</p>\n      </div>\n      <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\n          <i class=\"fas fa-bullhorn\"></i>\n        </span>\n        <h4>\n          <strong>Recomienda</strong>\n        </h4>\n        <p class=\"text-faded mb-0\">A partir de toda tu experiencia, puedes guiar a otros en su búsqueda</p>\n      </div>\n      <div class=\"col-lg-3 col-md-6 mb-5 mb-md-0\">\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\n          <i class=\"far fa-handshake\"></i>\n        </span>\n        <h4>\n          <strong>Contacta</strong>\n        </h4>\n        <p class=\"text-faded mb-0\">Tú relájate y disfruta, nosotros te conectamos con el banco por ti</p>\n      </div>\n      <div class=\"col-lg-3 col-md-6\">\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\n          <i class=\"fas fa-pencil-alt\"></i>\n        </span>\n        <h4>\n          <strong>Aprende</strong>\n        </h4>\n        <p class=\"text-faded mb-0\">Y lo mejor, sin darte cuenta irás aprendiendo del mundo financiero</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"content-section-heading text-center\">\n          <h3 class=\"text-secondary mb-0\">FALTA POCO</h3>\n          <h2 class=\"mb-5\">Ingresa estos pocos pasos</h2>\n        </div>\n        <br>\n        <form class=\"form\" (submit)=\"onRegistroSubmit()\" *ngIf=\"correcto==false\">\n          <div class=\"form-group\">\n            <label for=\"Nombre\" style=\"color:black\">¿Cómo te llamas?</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingresa tu nombre\" [(ngModel)]=\"nombre\" name=\"nombre\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\" style=\"color:black\">¿Tienes algún correo para comunicarnos contigo?</label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Ingresa tu correo\" [(ngModel)]=\"email\" name=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"telefono\" style=\"color:black\">Deja un teléfono para saber que eres tú</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Ingresa un teléfono\" [(ngModel)]=\"telefono\"\n              name=\"telefono\">\n          </div>\n\n          <div class=\"from-group\">\n            <div class=\"form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"acepta\" [(ngModel)]=\"acepta\" name=\"acepta\">\n              <label class=\"form-check-label\" for=\"acepta\">Acepto términos de privacidad de datos</label>\n            </div>\n          </div>\n          <br>\n          <div class=\"from-group\" style=\"text-align:center\">\n            <input class=\"btn btn-empieza\" type=\"submit\" value=\"Enviar\">\n          </div>\n        </form>\n        <h3 *ngIf=\"correcto==true\">Listo, tus datos han sido guardados</h3>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.correcto = false;
        this.tam = 0;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"];
        this.video = {
            width: 0,
            height: 0
        };
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.cambiarTamanioVideo = function () {
            this.video.width = (this.innerWidth / 100) * 80;
            this.video.height = (this.video.width / 16) * 9;
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.cambiarTamanioVideo();
        // Create an Observable that will publish a value on an interval
        //const secondsCounter = interval(1000);
        // Subscribe to begin publishing values
        //secondsCounter.subscribe(n => this.cargarImagenes());
    };
    HomeComponent.prototype.onRegistroSubmit = function () {
        var _this = this;
        var usuario = {
            nombre: this.nombre,
            email: this.email,
            telefono: this.telefono,
            acepta: this.acepta
        };
        this.authService.registerUser(usuario).subscribe(function (data) {
            if (data.nombre != undefined) {
                _this.correcto = true;
            }
            else {
            }
        });
    };
    HomeComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        this.cambiarTamanioVideo();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/listado-adquiere/listado-adquiere.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/listado-adquiere/listado-adquiere.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/listado-adquiere/listado-adquiere.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/listado-adquiere/listado-adquiere.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listado-adquiere works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/listado-adquiere/listado-adquiere.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/listado-adquiere/listado-adquiere.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListadoAdquiereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoAdquiereComponent", function() { return ListadoAdquiereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoAdquiereComponent = /** @class */ (function () {
    function ListadoAdquiereComponent() {
    }
    ListadoAdquiereComponent.prototype.ngOnInit = function () {
    };
    ListadoAdquiereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listado-adquiere',
            template: __webpack_require__(/*! ./listado-adquiere.component.html */ "./src/app/components/listado-adquiere/listado-adquiere.component.html"),
            styles: [__webpack_require__(/*! ./listado-adquiere.component.css */ "./src/app/components/listado-adquiere/listado-adquiere.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListadoAdquiereComponent);
    return ListadoAdquiereComponent;
}());



/***/ }),

/***/ "./src/app/components/listado-ahorro/listado-ahorro.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/listado-ahorro/listado-ahorro.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/listado-ahorro/listado-ahorro.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/listado-ahorro/listado-ahorro.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listado-ahorro works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/listado-ahorro/listado-ahorro.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/listado-ahorro/listado-ahorro.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListadoAhorroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoAhorroComponent", function() { return ListadoAhorroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoAhorroComponent = /** @class */ (function () {
    function ListadoAhorroComponent() {
    }
    ListadoAhorroComponent.prototype.ngOnInit = function () {
    };
    ListadoAhorroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listado-ahorro',
            template: __webpack_require__(/*! ./listado-ahorro.component.html */ "./src/app/components/listado-ahorro/listado-ahorro.component.html"),
            styles: [__webpack_require__(/*! ./listado-ahorro.component.css */ "./src/app/components/listado-ahorro/listado-ahorro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListadoAhorroComponent);
    return ListadoAhorroComponent;
}());



/***/ }),

/***/ "./src/app/components/listado-cdt/listado-cdt.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/listado-cdt/listado-cdt.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#labels-lista {\n    padding: 0 1.25rem;\n}\n\n.img-logo{\n    height: 50px;\n    width: auto;\n}\n\n.list-group-item{\n    margin-top: 10px;\n    padding: 0.5rem 1.25rem;\n}\n\n.panel-info{\n    margin: 0 10%;\n}\n\n.col-li{\n    line-height: 50px;\n    vertical-align: center;\n    font-size: 1.1rem;\n    font-weight: 500;\n}\n"

/***/ }),

/***/ "./src/app/components/listado-cdt/listado-cdt.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/listado-cdt/listado-cdt.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:100%; padding-bottom: 10%; background-color: rgba(218, 218, 218, 0)\">\n    <div class=\"row\" style=\"align-content:center; margin: 0 auto;\">\n        <div class=\"col-md-12\" style=\"margin: 0 auto\">\n            <br>\n            <div style=\"text-align: center;\">\n                <h1 style=\" font-size: 48px; text-decoration: underline\"> LO QUE TÚ QUIERES ES UN CDT\n                </h1>\n            </div>\n        </div>\n    </div>\n\n    <br>\n    <br>\n\n\n    <div class=\"panel-info\">\n        <form class=\"opciones\">\n            <div class=\"form-row\">\n                <div class=\"form-group col\">\n                    <label for=\"input-plazo\">Plazo en meses</label>\n                    <input type=\"text\" name=\"input-plazo\" id=\"input-plazo\" class=\"form-control\"\n                           [(ngModel)]=\"plazo\">\n                </div>\n\n                <div class=\"form-group col\">\n                    <label for=\"input-monto\">Cantidad a invertir</label>\n                    <input type=\"text\" name=\"input-monto\" id=\"input-monto\" class=\"form-control\"\n                           [(ngModel)]=\"monto\">\n                </div>\n            </div>\n\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Ordenar por</button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                    <button ngbDropdownItem>Tasa</button>\n                    <button ngbDropdownItem>Servicio</button>\n                </div>\n            </div>\n\n        </form>\n\n        <br>\n        <br>\n\n        <div class=\"row\" id=\"labels-lista\">\n            <div class=\"col-6\">\n                <h5><b>Banco</b></h5>\n            </div>\n            <div class=\"col-3\">\n                <h5><b>Calificación Servicio</b></h5>\n            </div>\n            <div class=\"col-3\" style=\"text-align: right\">\n                <h5><b>Tasa</b></h5>\n            </div>\n        </div>\n        <ul class=\"list-group\">\n            <li *ngFor=\"let cdt of cdts; index as i\" class=\"list-group-item\">\n                <div class=\"row\">\n                    <div class=\"col-1 p-0 text-center\">\n                        <img class=\"img-logo\" src=\"{{cdt.imagenBanco}}\">\n                    </div>\n                    <div class=\"col-5 col-li\">\n                        {{cdt.nombre}}\n                    </div>\n                    <div class=\"col-3 col-li\" style=\"text-align: center\">\n                        {{cdt.puntajeServicio}}\n                    </div>\n                    <div class=\"col-3 col-li\" style=\"text-align: right\">\n                        {{cdt.tasa}}%\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/listado-cdt/listado-cdt.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/listado-cdt/listado-cdt.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListadoCdtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoCdtComponent", function() { return ListadoCdtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoCdtComponent = /** @class */ (function () {
    function ListadoCdtComponent(route) {
        this.route = route;
        this.cdts = [
            {
                id: 6,
                nombre: 'Banco de Bogotá',
                imagenBanco: 'https://s3-eu-west-1.amazonaws.com/rankia/images/valoraciones/0026/3596/oficinas-horarios-bancos-bogota.png?1487772955',
                puntajeServicio: 3.2,
                tasa: 4.4,
                montoMinimo: 100000,
                img: 'https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0026/3596/oficinas-horarios-bancos-bogota.png',
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            },
            {
                id: 1,
                nombre: 'Bancolombia',
                imagenBanco: 'https://static.minuto30.com/wp-content/uploads/20180316125826/logo-bancolombia-Copiar.jpg',
                puntajeServicio: 4.5,
                tasa: 4.15,
                montoMinimo: 1000000,
                img: 'http://atlantisplaza.com/wp-content/uploads/2015/07/ATLANTIS-logo-bancolombia.jpg',
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            },
            {
                id: 2,
                nombre: 'Davivienda',
                imagenBanco: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122017/untitled-1_46.png?SkWEIbMr9ueOpXRpWV76npWq7MrNd9iw&itok=g1WnLvq1',
                puntajeServicio: 4.1,
                tasa: 5.15,
                montoMinimo: 1000000,
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            },
            {
                id: 3,
                nombre: 'Pichincha',
                imagenBanco: 'data:image/png;base64,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',
                puntajeServicio: 4.6,
                tasa: 3.75,
                montoMinimo: 1000000,
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            },
            {
                id: 4, nombre: 'Colpatria',
                imagenBanco: 'data:image/png;base64,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',
                puntajeServicio: 3.6,
                tasa: 4.3,
                montoMinimo: 1000000,
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            },
            {
                id: 5,
                nombre: 'Falabella',
                imagenBanco: 'https://cdn-sa.mall-connect.com/image/upload/v1423382033/mefik9y8h6io9yidlbbu.jpg',
                puntajeServicio: 4.3,
                tasa: 5.00,
                montoMinimo: 1000000,
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            },
            {
                id: 6,
                nombre: 'GNB Sudameris',
                imagenBanco: 'data:image/png;base64,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',
                puntajeServicio: 3.2,
                tasa: 4.4,
                montoMinimo: 100000,
                img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAAAxlBMVEX///+Yw1JBc6SIujCXw1D7/fj5+/Sdxl6LvDaQv0LY6MAvaZ45bqE+caMpZZzW4Opji7NNe6nz9/mPkZWMp8SxsrTZ2tvr6+uTwEidoKKzxNfZ4uuMj5KPvj/z+Oyluc/U1dZagq2nqazv9eW9v8Ho8dqy0YPh7dDc6sgaXpeAnr6XmZzN4a/m5ueqzXS4ury31IrJ36ilymvC0eC/2Zm21InK36qSrMfT5bnJ1uTm7PJylLiny2+cxVtkibGetM2AthYDWJXZlYUXAAAT6ElEQVR4nO1cjXaiOhdFBRFQO2pboxVqRZSp1KqlHWrb6Xzv/1JfAgHyB+LUonOXe617q0DC2cnJ+UscSTrjjDPOOOOMM84oH4pWOxH8qX8/WbVyImiUQVY+NkuMM9kz2TPZM9kz2VPAmeyZ7JnsmewXyH7vsJwWWXkJn5UBQB9l+H8A4B/YWtbAf4+s5qoa2PheQ66oHy8AzHyw8VSgvevP2n+OrKxY1hJK5FS0iuSZpg1bS+5qDXt5iedWxh/gpP/bZAHAbebeBhK1iF5mAGo20mh5baJHNU8y92V7UmTlWWYnjr8Bq3c4nUtPetHgInYUCc3uv0u2YmV2okuqLdWtmewqkrQE8osluVYwW+7F9qTIyps12dBxyG+RoJYD/1qbRjgsdSUmW8xanxZZNXtqKdTjYZiHLAGYB0XYng5ZWdOAt7MzfT236qnMfsUDFeB7klXkHSdDFqzr+u6JtWa+t3YTmRUQrGsmMuHrIn74VMjKwLYkO3x+vptygKWeLRXJdpaS5D0XMVWnQhYkTwcF1q3lzufo7+rDhf+PHFaB6vRpkJXBzMn2sXlw7fhTgSE9CbLyTFVXOvQ1yo6uLE5ay7bCRo5r/iMzC+acFM7Mtrme9LWbfqljdXfCtlZQYNGeBlmHaxQsV4Ku5nbgoNwAwgYv9D1PQ8sh91WnQZaaRCXbQimOApmqUOOl+py5p280mBKe/MzKtYB4vP4xI5au4/L9eSxPjDVsuMp71ymQrVBavMLTbKMJdp+jbzxlBsgVKbo0yy3snAJZoEoKZ418YknWA35RM9B934Wr3PLzYuSjk5WBNpMr5h9aNS29lvJbLe26utMNK5JVUd5PemaBPF+HGQs1d0FNayQXVNeeZaxSBrafX6s5MlngPyOnAYDceCfMkltTNzr+bO1UYQK+C6c283VHJltDDJdgtVIrMGJMmlhzKpZy+PgiA7ZU983M9x2VrBwlsHPIxdFkRJY3VNA8rZaJ560n9zMVW/GtrMjxiGRleROJrkDH4mryCpqY2UbQPh2A+SqJq4L4U90N2BZZinxEsqqGK06IzQpo5jtMzQlVDqMlCB9Vjz0bCaqTvMIr8I7KUphnuZ/jkQU+GR3Ndd3TiUaOay+xpq5lSEz2mYzICz6WUX6nMHey859jqrHY7LjrZHaDsFLuM7Gy10CjYpsAaELhdc3UxEWao5GVZS3LxiTkXM/GOQ4J3Mz6AKrnCvySIjnOXDi+xyIrvy/9r3ZsS9ZzMjC2nTCB18TFxqORZcI/YY1C58fDqhPKb9tpgqTM/VhT9NXzx0mRBdgSx6K/z9yVt6sqA+3W2kvJKh+1ijC88jWxlTgSWXkDnQjMZXw8wU7DbKxTUXSCA2WG6eFwHF1i4KCkPiv1ORpZCYUDUHgl4lVfL9MW9ffIKdmBS+9bUnDUZ9aeK76/2jyrp+ZnoSnGkZGXVyfWczR7vlyzTeuOpebsYx6LrOnD2GdHw2CZfc8TOum1L9nrmqll8D0SWZWus7hCKazsaVWWH1lDVXdcS3k/IWvMlkGJh91NkW1LZb4SxRsJHOGyPRLZzIDC831fL5qubzhjHEO8XXsksukO+1IQNEYy7d7Ny5TdW8qi+sxRyAKQvtWiLI0eoK+R8/V3b01nwXZqmyVvpUomGx5iAs9ZRX9XcV1pPmsg8xVUdvSr1+l9AcVLs12YDOvLGcu2XLLyzG/IQFW42kIIZ6miGzae0l1a/OGQZRqY/9fW9APzxlHJmjZM0Ja+qNIUwn5nh4HfpEyw2rmm2bCxXLIAFY7qbMKzImRgvYmfY5nxwMzJRyydGILjkq00ZjpfGLQLHggSAG3OUlvY6z9EZ95xZ9ZnFFiRSFdp7c2a3asPyL0D57hrFrBRgLMhwwtuxXLYVS6nolCF9bUlW2OVLQWS6+1lJY7/XGyY3fcZUPd581w7JtkKUEWnB/BzWUGE9xwOiVKZ2fW9xJ3X6Hyv7AhK1io7dTWrH0bU3Qvcdhor8lxJ2WRB8KLuLjUhOKJKa0zQ3bzA5bvcKbxifxyRbGXOnhh4Jr/gM1yWJ+kbUUnYeYlGaqbVAskXF8kpWOSyLZ1soxafkrAD/t11PwjZiM6nWpKzdv0wYXIddJpIr+/WkcA8IlmAQ6J5TdZqG9brwlD3ZanD5M6LoiyXDH3VdW210VG99R1Amlbgi2szFOwVzLFiK1U6Wexp1fflitNT19/YFjCdoCY4HfOsLXXXW8u2VEcHoebgz84jNCHspReffis/n41sTLYC1mfP0sxcW4rlz5b+OnnQB+bceqmpNmrrPNtOkuPodACthONpEUMRx8ilk5WhtxQ+JVlLP5r2uuSYDVMNbFMGZhJh6RpwlEpYMreCgPwhjGfSK/wFxoye56SuaXkkNWbPsyXw5tKqkuQ/1tw3VQUdBvmIH3hGO5TxODnoRE0SnzAcbPtFWTvJYDhJ0fwIZNcfAqfio3WooElb6xGj+lxyTSDHp66tPxvkeBV/PftY1V3IxA73hqzk9zGWO0c/CGF7dgI7OJYaV4DtZp9q8jUANLDx8HDUffAnvhWquIN+i1gBH8RKiAOrQF1aErbixFx7Jtgczc9WNDXhys6C/hFNAVyqarwMqQU+x05ENiPzYxFnNlFqG0TTbG/C29ZMd/yjBhXAD2IBA9p3WCoZAJgbrnw8nyW/vpM/0HkiqNthX0nUjHOqd3QyoT5X7VWDSt9L97NpUcyBHuMl2fhQpGBDr23NpF0KLblpPtcVP7J1OCiT6nbENuzTBuBdp3O8slM8vOFcdyR3Njdd24nfv0RnQio0AOlTZuyhEAAqWjT9YVFScWcAdoC2Zxu2Y7suSH59eiSy8jKahDXwdd91KzX8+tBRePwZFzPVdNFZBbh4Z2GVvb5aqmi7XQZLO9DkzXsDfPDPl57PgrXj69a7tvbgm13sNuYrmIw5ok3rpDKhZO0wayZaGe/Jb4lNEP10/iS2P6BrMd/hFCvzII6ObKA/q+IfM5hx1SrnpyzaxvcL/QTuOBtbMrLKFkzPrVmopxuQOW+JHufQkTObnwJZBPCx9maa+SLZbs5PcszEzxb60eipkkXzgW44fiNHBVOy7tf/PYNjH5uHdHLlM5PcxSnw+7OTJ5uPdGal/f+phn+MrExs0m7+62QrxA6A/2U9PnWyGtHRl+3xv0Q2M4j6j5Cl6sf1WsP8Et8TJ2tS4llKffaVhXvaZE3+cJj+hck9UbJh2gJk0UG4+eyv2Z4kWaChutqGO2GLYcKbGWfF/x2yMFgOofp63WZPXxBwVrYVqCB8fK+w6mTIytrHDKPQzwwVf4meXbKll2OTrZjaTphy3qHxHFjr3Z3HKOGf6ZZcvQC+cBaqSPchgr8bzzPOOOOMM844ZXQTZDzQ5250+6JuBC0frsfXD4KHoxbo7nXW3e/BYNHDWFxdix6YjNkr/R7PrHfFPjQd9EYIvcHjA9/reILvLq4Ed78Lg8kY47E3mvAs+r0Bd2kx4R5b0GS7V6PRZPzQ7/YfxpMR1+94MVpMr8O78K2D0ugOCCnHvQV3f7rosbL0F70p+xhNdtzrTVN+3WlvRCpNfzCaEH1C5o/7yfzXIMlK1yOexXTCaehiMmI1niI7HQ3otQjppQ36vcWYbnw14lXlW0CRlSYLRuGuRw/TEXOt37seLBjLsqAUhJO9OxjFDSBXTm2n3JL/HtBkpz2GxNUASjemr0GyXZYPQfahJ1j63URlBtyyQO/lVeo7QJMdj2hJ+kiICWOiIFk44/Q6I8hO2FmnMObXe9iIHeVvAUOWGfYpEpwbAUgW6sCYvJaSFax7At0FZ9yjVqUocr4aRxwYQUKycC4euAcRuGVPYcyuiaSZwHkfHDTZAT3u15ERfaQFicjCOSKuJmS7+VOUySlzFA6JAe0z6Dfi1dqnL0dkoSEimiZkr5kuaHQF8UjcaQl6TJDtPjJWpx8vP3rCMVm4ltPVmZCdioxt2nSRuaAH4sV8UAwGE4xBb8GECskKpk1UTBYGA8nlhOxj7pJ9yFbWAR+9HRyDwVWMwYIJ+lOrQ+lYQhb6zC776FUu2eueMNlAmJRBlqDxcDWig8dEskfSd6Zk+0lsUXBmr7NntmyySF+JVUu8vk86z5RsumzTNZsbUuSpcRlrljaCj6mj7ZOxDhlFEWTh89HnhCwbltDoL7ISnGw7fUAwZB9ShlQCQJookmwcHCZkH8ThYPK6LGXd0e4wYMh2U6M0mDxcpyCCX4psP4r/0tv5M/Q4ytDy6aiEFJ4hK01iWa97UeEEY7Eg9Js0qdehUUvJ5jvah16GHi9KsE8c2UFM9mrw0CdAREY02SjsSsn2+WyWREZ6My0jWuTVGI98n11DqYliyIaxBaHlYrl5b0Xiga90fQdYAxVPIFefGI9SeWmyXWh1yErFQBA5pPnvVFBx6g5KSWdZslfxWxdsXJ6aLpYsWohkoao/YItM0ACkM3fFse2Lhuc7wOSzcZBwzZXUoCHFc82RRWVJKp4c9B5JvehOe2Q6OKWKi6i8WBJXKuu5niTh4hW/hhJPyJOFETE1ZjB/WkyTCtuUrZVCdlfX8ciNB6NJWfsCg8UgRm+UqF9fVFuJA4I+P+uc1j9MRr3B5HH6CJMpZiIlNNWL0WJyNZ1ewbuDkqYVYppinMp0/SgY7PhiV7Cf0eerp+PHwWKxGDyOhZnB9XQC7y6uxuXu9pxxxhlnnHHGGWWi+zr89fbjrlPt3P24/xxekFHB8DbB8GJXRxe3tzdho8v7y/u3O9hjtRmhVe28/RrefBuFYugO76s/2waSJ0SzabTbnfvbp214++l/Roqfrzv6ahlGFf59a0cEW9VqtYX+H/0Hezbeht9PKUu6px+QJ5TCaFY7nU61hT4gCeGVn5foie1dtRldQ2hv87uDM9mBf+8NI23TCj/GPTfbzdsymPGyfVbbLcilcz+82CLV7W5vhvcdoxVJ2Ym0uXvz9BZfanXyO8RkpYvhZ9KmOdx2u6jnt2Y0AEbnCNo87BhQFOOe0c3u050RErtLr100seTGfV6PCVmEVyPimrbY3ht4rncsh4Nji4a+1X4TjfJtOxSKsFOvbayURt6ag2SJIfoV6e0l8cAwmu5Ws9y5fW010RBniB5yM0ijfBcrspEjJyL7I/n2ZHBk8bVq8/dXZN8XT2iIW81Me/ME2Rrk3c/Y4LQ62RtZNNmLNk9Wuoz6ae/0YofDsI24Gjm2FQpFrayhEVvX5ltmI5rsjYhsN/RH7NXvxOvP6g6uUrdJ6/hTQrZqZPqOAjMr3TcLmPUDYhtK0c5377+aFClEtoXXbfspo00RsnjUjBLOyoTotPK1McTWaJJuBspo3L7hhZulE0XIXkRkf5ZE9peRJ3CCuzZpMhHZp26nlRtbFCG7jci2yyF7I/AIIlxQ0QYkC7V3i8Oi5g9hkyJko9e3muWQjXQxz12KAK0xss4XP7Eif4oeKq7GLfFoHRo3kTXc16sjssg3PrVzjFQRspEPEw/WwRF59b1fFpOVbuP4VqAaRci+RTlQKVqMYnVEdt8IJiErxdF8lZe3ANltmFJku+qDAi+Z6i5bzCIlK/2IHFDzjv9NzG6yYUxh7HB7h8Inl74VA0G228F5KSfybrLh641yrFNsi1t7Dy1BVrrBoZTBuq9dZMOEtsU1+y7gJdvMzcFFIMnCvDxi22bMnJAsflV3+3SPKjPNTlaweXBs8Xr7tW9DiizMmrADouNrEVnI9vLy/u13JypC7a9Tfw8crH2VbFzLYNytkGwVl1Jj3F2WlcteHIhs7IDoLFxM1mj//NluJ/XGVtMoSZPjKtjeNoIlK71htmRCIVbj4cV2u714un2rtvEEt4y3MoIKvuRXEBxZ6Xc0U61WyjbPQCHcXOJqarW5t6P/C2Cy+8fhPNnY3TbTotRuP9u9x4ZcFIAdGjeY7FeCihjbKs73fsdyF0sEcrPEQ2Ibl5L2HVcBWekiLlzE7qQI2TRv+vZdHxxUZKSzv+4oUJt5ArJRQbaa7hMUIosrJcTewbfhNxZPOKy/22hHqoXRJgdESDZxt0bkyoqRlaoCr/Ut+NXMMcfd4e3n5VvVEMy+mGwyS+0wZytIFqfEzW9P4F9jHcpZtFiYImQTdxuuwIJku+2/tJL7oltEh6IiYiGy0h22UihwLEgWbxyVUCi/zNNjjE++JnebRTZ2t+h2UbLRrkCudh0GN7FsOW+KqvbFyCbuttW8KUr2V1lk42E1cnKBvcgmO9WtzkVBsnhLsIT9ni2WLWdL4HUvsom7bXWq+5D9fgMlpZY/O42O9tkLkyX2M/dR4/2zkb8B3p/Krmfup8ZSXMYTkxVQwpsS5WS1uGCW6X72Jpvk8jxZUYK120QeEHh/KnM7en+ycXYrSN55M5Q95d+CbTUyERnbW8P9yUpVbjczrlRwE/gjfLSkTUsJHVyLiuXihGCfoCJGFxt5jix36GlYZOP/sIhKBi3jTaDKP/hwcSfZOFrhZ5ax+pGpb+9d8vsSnjrRrnTzkqV7I0gEdpPF7pYjS+8Ydi+NcIzL2bIk3vvZDF/cNH7c3qR1pO1nfE5kT7LRUufJVo23123U9et9mD8a1dJ2BVJsPzthdROdnP39dn+JSvcdIzoPZrSpSkURsmF2ayTfErJVOKh3v3/fdZoGfFvLqH6WZptovF620CFcRA+fEW6FB44vmYPQn0Zz12ljKYwWRGRDW4iHsP02PBLVENvh5Z3xE1Xt26h237m/feXFubm/L7CB3K022+kXqCSwwxSGuOsjoLu9uLi4+WrpentXrpU944wzzjjjjDMOhv8Dbtv8+FSnEuIAAAAASUVORK5CYII=',
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            },
            {
                id: 7,
                nombre: 'Av Villas',
                imagenBanco: 'http://www.uco.edu.co/trabajosocial/Lists/LogosEnConvenio/avvillas.jpg',
                puntajeServicio: 3.2,
                tasa: 4.15,
                montoMinimo: 1000000,
                img: 'https://www.centrocomercialfundadores.com/wp-content/uploads/2018/05/av_villas_1.jpg',
                calificacionesProducto: [{
                        usuario: "danielxd",
                        puntaje: 4.5,
                        resenia: "me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "franciscoxd",
                        puntaje: 2.5,
                        resenia: "no me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "andresxd",
                        puntaje: 1.0,
                        resenia: "nel, kiasco men xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "angelloxd",
                        puntaje: 4.0,
                        resenia: "no, pos si me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "davidxd",
                        puntaje: 4.6,
                        resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "cristianxd",
                        puntaje: 3.9,
                        resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
                    },
                    {
                        usuario: "fajardoxd",
                        puntaje: 3.0,
                        resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
                    }]
            }
        ];
    }
    ListadoCdtComponent.prototype.ngOnInit = function () {
        this.plazo = 12;
        this.monto = 1000000;
        this.cdts = this.cdts.sort(function (cdt1, cdt2) { return cdt2.tasa - cdt1.tasa; });
    };
    ListadoCdtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listado-productos',
            template: __webpack_require__(/*! ./listado-cdt.component.html */ "./src/app/components/listado-cdt/listado-cdt.component.html"),
            styles: [__webpack_require__(/*! ./listado-cdt.component.css */ "./src/app/components/listado-cdt/listado-cdt.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListadoCdtComponent);
    return ListadoCdtComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    -o-object-fit: fill;\n       object-fit: fill;\n    width: 100%\n}\n\n\n.intro {\n    height: 100%\n}\n\n\n.left {\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    overflow-y: auto;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    max-width: 100%;\n    overflow-x: hidden;\n    background-color: #ffffff;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%236fc728' fill-opacity='0.06' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n\n.right {\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    overflow: auto;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    max-width: 100%;\n    overflow-x: hidden;\n    background-color: #ffffff;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffd34e' fill-opacity='0.13' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n\n@media (max-width: 992px) {\n    .left {\n        height: 50%\n    }\n\n    .right {\n        height: 50%\n    }\n}\n\n\n.about {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #000;\n    color: #FFF;\n    height: 100%\n}\n\n\n.container {\n    padding: 0\n}\n\n\n.card{\n    background: rgba(255,255,255,0);\n}\n\n\n.card-header {\n    background: rgba(255,255,255,0);\n}\n\n\n.card-header h4 {\n    color: black;\n    transition: all .4s;\n    background: rgba(255,255,255,0);\n}\n\n\n.card-header h4:hover {\n    color: #6FC728;\n    background: rgba(255,255,255,0);\n}\n\n\n.btn {\n    margin: 60px;\n    border-color: rgba(255,255,255,0);\n    background-color: rgb(194, 243, 102);\n    transition: all .4s;\n    width: 50% !important;\n}\n\n\n.btn-adquiere {\n    margin: 60px;\n    border-color: rgba(255,255,255,0);\n    background-color: #0077aa;\n    color: #f1f1f1;\n    transition: all .4s;\n}\n\n\n.btn-ahorro {\n    margin: 60px;\n    border-color: rgba(255,255,255,0);\n    background-color: #FFD34E;\n    color: black;\n    transition: all .4s;\n}\n\n\n.btn:hover {\n    background-color: rgb(194, 243, 102);\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"intro\">\n  <div class=\"row\" style=\"height:100%\">\n    <div class=\"col-lg-6 col-sm-12 left\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <img src=\"/assets/img/ahorro.svg\">\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1>¡Empieza a <span style=\"color: #FFD34E\">ahorrar</span> ya!</h1>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <a class=\"btn btn-primary btn-ahorro btn-xl js-scroll-trigger\" id=\"btnLoginEmpr\"\n            [routerLink]=\"['/ahorra']\">\n              ¡Vamos!\n            </a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div id=\"collapseLoginEmpr\" class=\"collapse border-0\" aria-labelledby=\"btnLoginEmpr\">\n\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"accordion border-0\" style=\"text-align: justify\" id=\"accordionExample\">\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingProyectoOne\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseProyectoOne\" aria-expanded=\"true\" aria-controls=\"collapseProyectoOne\">\n                    <h4 class=\"mb-0\">\n                      ¿Cuánto dinero necesito para iniciar?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseProyectoOne\" class=\"collapse border-0\" aria-labelledby=\"headingProyectoOne\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseProyectoDos\" aria-expanded=\"true\" aria-controls=\"collapseProyectoDos\">\n                    <h4 class=\"mb-0\">\n                      ¿En cuántos tipos de ahorro puedo invertir mi dinero?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseProyectoDos\" class=\"collapse border-0\" aria-labelledby=\"headingProyectoDos\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseProyectoTres\" aria-expanded=\"true\" aria-controls=\"collapseProyectoTres\">\n                    <h4 class=\"mb-0\">\n                      ¿Debo pagar algún tipo de membresía?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseProyectoTres\" class=\"collapse border-0\" aria-labelledby=\"headingProyectoTres\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12 right\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <img src=\"/assets/img/adquiere2.svg\">\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1>¿Necesitas dinero? ¡<span style=\"color: #0077aa\">Adquiérelo</span> ahora!</h1>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <a class=\"btn btn-primary btn-adquiere btn-xl js-scroll-trigger\" id=\"btnLoginWork\" [routerLink]=\"['/adquiere']\">\n              ¡Vamos!\n            </a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div id=\"collapseLoginWorker\" class=\"collapse border-0\" aria-labelledby=\"btnLoginWork\">\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"accordion border-0\" style=\"text-align: justify\" id=\"accordionExample\">\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTrabajoTresOne\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseTrabajoTresOne\" aria-expanded=\"true\" aria-controls=\"collapseTrabajoTresOne\">\n                    <h4 class=\"mb-0\">\n                      ¿Consultar un producto me obliga a adquirirlo?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseTrabajoTresOne\" class=\"collapse border-0\" aria-labelledby=\"headingTrabajoTresOne\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseTrabajoTresDos\" aria-expanded=\"true\" aria-controls=\"collapseTrabajoTresDos\">\n                    <h4 class=\"mb-0\">\n                      ¿Qué tipos de productos financieros me pueden ofrecer?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseTrabajoTresDos\" class=\"collapse border-0\" aria-labelledby=\"headingTrabajoTresDos\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card border-0\">\n                <div class=\"card-header border-0\" id=\"headingTu\">\n                  <a data-toggle=\"collapse\" data-target=\"#collapseTrabajoTresTres\" aria-expanded=\"true\" aria-controls=\"collapseTrabajoTresTres\">\n                    <h4 class=\"mb-0\">\n                      ¿Qué requisitos debo cumplir para poder adquirir un producto ofrecido?\n                    </h4>\n                  </a>\n                </div>\n\n                <div id=\"collapseTrabajoTresTres\" class=\"collapse border-0\" aria-labelledby=\"headingTrabajoTresTres\"\n                  data-parent=\"#accordionExample\">\n                  <div class=\"card-body border-0\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3\n                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                    labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.showFlashMessage({
                    messages: ['Acceso correcto'],
                    type: 'success', timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger', timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n    -webkit-transform: translateZ(0)\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light fixed-top\" style=\"background-color: #1E1E1E; padding: 0;\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"background-color: #1E1E1E; height: 100%; margin: 0\"><span style=\"color:#FFD34E\">BankIn</span><span style=\"color:#fff\">Best</span></a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span> <i class=\"fas fa-caret-down\" style=\"color: #fff\"></i></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\" *ngIf=\"true\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\"><span style=\"color:#f1f1f1\">Dashboard</span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"true\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/busca-producto']\"><span style=\"color:#FFD34E\">Empezar</span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"false\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\"><span style=\"color:#FD1C03\">Logout</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['You are logged out'],
            type: 'success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/preguntas-adquiere/preguntas-adquiere.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/preguntas-adquiere/preguntas-adquiere.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    bottom: 0;\n    height: 100px;\n    left: 0;\n    margin: auto;\n    right: 0;\n    width: 100px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n\n.card:before,\n.effect7:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n    top: 0;\n    bottom: 0;\n    left: 10px;\n    right: 10px;\n    border-radius: 100px / 10px;\n}\n\n.card:after {\n    right: 10px;\n    left: auto;\n    -webkit-transform: skew(8deg) rotate(3deg);\n            transform: skew(8deg) rotate(3deg);\n}"

/***/ }),

/***/ "./src/app/components/preguntas-adquiere/preguntas-adquiere.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/preguntas-adquiere/preguntas-adquiere.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%; height: 100%; background-color: rgba(218, 218, 218, 0)\">\n  <div class=\"card\" style=\"width: 20rem; margin-top: 8rem\">\n    <div class=\"card-body\">\n      <h3>pregunta 3</h3>\n    </div>\n  </div>\n  <div class=\"card\" style=\"width: 20rem; margin-top: 8rem\">\n    <div class=\"card-body\">\n      <h3>pregunta 2</h3>\n    </div>\n  </div>\n  <div class=\"card\" style=\"width: 20rem; margin-top: 8rem\">\n    <div class=\"card-body\">\n      <h3>pregunta 1</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/preguntas-adquiere/preguntas-adquiere.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/preguntas-adquiere/preguntas-adquiere.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PreguntasAdquiereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasAdquiereComponent", function() { return PreguntasAdquiereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreguntasAdquiereComponent = /** @class */ (function () {
    function PreguntasAdquiereComponent() {
    }
    PreguntasAdquiereComponent.prototype.ngOnInit = function () {
    };
    PreguntasAdquiereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preguntas-adquiere',
            template: __webpack_require__(/*! ./preguntas-adquiere.component.html */ "./src/app/components/preguntas-adquiere/preguntas-adquiere.component.html"),
            styles: [__webpack_require__(/*! ./preguntas-adquiere.component.css */ "./src/app/components/preguntas-adquiere/preguntas-adquiere.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreguntasAdquiereComponent);
    return PreguntasAdquiereComponent;
}());



/***/ }),

/***/ "./src/app/components/preguntas-ahorro/preguntas-ahorro.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/preguntas-ahorro/preguntas-ahorro.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    bottom: 0;\n    height: 100px;\n    left: 0;\n    margin: auto;\n    right: 0;\n    width: 100px;\n}\n\n.card:before,\n.effect7:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    bottom: 0;\n    left: 10px;\n    right: 10px;\n    border-radius: 100px / 10px;\n}\n\n.card:after {\n    right: 10px;\n    left: auto;\n    -webkit-transform: skew(8deg) rotate(3deg);\n            transform: skew(8deg) rotate(3deg);\n}"

/***/ }),

/***/ "./src/app/components/preguntas-ahorro/preguntas-ahorro.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/preguntas-ahorro/preguntas-ahorro.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%; height: 100%; background-color: rgba(218, 218, 218, 0)\">\n\n  <div class=\"row\" style=\"align-content:center; margin: 0 auto;\">\n    <div class=\"col-md-12\" style=\"margin: 0 auto\">\n      <br>\n      <h3>¿Quieres un alto porcentaje de ahorro a cambio de no poder usar tu dinero por un tiempo?\n      </h3>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"card\" style=\"width: 20rem; height: 20rem; margin-top: 8rem; background-color: #FFD34E\" [routerLink]=\"['/preguntas-cdt']\">\n      <div class=\"card-body\">\n        <span\n          style=\" font-size: 82px; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%)\"><b>SÍ</b></span>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 20rem; height: 20rem; margin-top: 8rem; \" [routerLink]=\"['/preguntas-cdt']\">\n      <div class=\"card-body\">\n        <span style=\" font-size: 42px; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%)\"><b>NO\n            SÉ</b></span>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 20rem; height: 20rem; margin-top: 8rem; background-color: #FFD34E\" [routerLink]=\"['/preguntas-cdt']\">\n      <div class=\"card-body\">\n        <span\n          style=\" font-size: 82px; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%)\"><b>NO</b></span>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/preguntas-ahorro/preguntas-ahorro.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/preguntas-ahorro/preguntas-ahorro.component.ts ***!
  \***************************************************************************/
/*! exports provided: PreguntasAhorroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasAhorroComponent", function() { return PreguntasAhorroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreguntasAhorroComponent = /** @class */ (function () {
    function PreguntasAhorroComponent() {
    }
    PreguntasAhorroComponent.prototype.ngOnInit = function () {
    };
    PreguntasAhorroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preguntas-ahorro',
            template: __webpack_require__(/*! ./preguntas-ahorro.component.html */ "./src/app/components/preguntas-ahorro/preguntas-ahorro.component.html"),
            styles: [__webpack_require__(/*! ./preguntas-ahorro.component.css */ "./src/app/components/preguntas-ahorro/preguntas-ahorro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreguntasAhorroComponent);
    return PreguntasAhorroComponent;
}());



/***/ }),

/***/ "./src/app/components/preguntas-cdt/preguntas-cdt.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/preguntas-cdt/preguntas-cdt.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    bottom: 0;\n    height: 100px;\n    left: 0;\n    margin: auto;\n    right: 0;\n    width: 100px;\n}\n\n.card:before,\n.effect7:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    bottom: 0;\n    left: 10px;\n    right: 10px;\n    border-radius: 100px / 10px;\n}\n\n.card:after {\n    right: 10px;\n    left: auto;\n    -webkit-transform: skew(8deg) rotate(3deg);\n            transform: skew(8deg) rotate(3deg);\n}"

/***/ }),

/***/ "./src/app/components/preguntas-cdt/preguntas-cdt.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/preguntas-cdt/preguntas-cdt.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:100%; padding-bottom: 10%; background-color: rgba(218, 218, 218, 0)\">\n  <div class=\"row\" style=\"align-content:center; margin: 0 auto;\">\n    <div class=\"col-md-12\" style=\"margin: 0 auto\">\n      <br>\n      <div style=\"text-align: center;\">\n        <h1 style=\" font-size: 48px; text-decoration: underline\"> LO QUE TÚ QUIERES ES UN <span\n            style=\"color:#FFD34E\">CDT</span>\n        </h1>\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"row\" style=\"align-content:center; margin: 0 auto;\">\n    <div class=\"col-md-12\" style=\"margin: 0 auto\">\n      <br>\n      <div style=\"text-align: center;\">\n        <h3> ¿Quieres ganar lo mismo durante todo el tiempo?\n        </h3>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"margin-top:5%\">\n    <div class=\"card\" style=\"width: 20rem; height: 20rem; background-color: #FFD34E\" [routerLink]=\"['/listado-cdt']\">\n\n      <div class=\"card-body\">\n        <span\n          style=\" font-size: 82px; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%)\"><b>SÍ</b></span>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 20rem; height: 20rem;\" [routerLink]=\"['/listado-cdt']\">\n      <div class=\"card-body\">\n        <span style=\" font-size: 42px; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%)\"><b>NO\n            SÉ</b></span>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 20rem; height: 20rem; background-color: #FFD34E\" [routerLink]=\"['/listado-cdt']\">\n      <div class=\"card-body\">\n        <span\n          style=\" font-size: 82px; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%)\"><b>NO</b></span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/preguntas-cdt/preguntas-cdt.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/preguntas-cdt/preguntas-cdt.component.ts ***!
  \*********************************************************************/
/*! exports provided: PreguntasCdtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasCdtComponent", function() { return PreguntasCdtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreguntasCdtComponent = /** @class */ (function () {
    function PreguntasCdtComponent() {
    }
    PreguntasCdtComponent.prototype.ngOnInit = function () {
    };
    PreguntasCdtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preguntas-cdt',
            template: __webpack_require__(/*! ./preguntas-cdt.component.html */ "./src/app/components/preguntas-cdt/preguntas-cdt.component.html"),
            styles: [__webpack_require__(/*! ./preguntas-cdt.component.css */ "./src/app/components/preguntas-cdt/preguntas-cdt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreguntasCdtComponent);
    return PreguntasCdtComponent;
}());



/***/ }),

/***/ "./src/app/components/preguntas-producto/preguntas-producto.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/preguntas-producto/preguntas-producto.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/preguntas-producto/preguntas-producto.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/preguntas-producto/preguntas-producto.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  preguntas-producto works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/preguntas-producto/preguntas-producto.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/preguntas-producto/preguntas-producto.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PreguntasProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasProductoComponent", function() { return PreguntasProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreguntasProductoComponent = /** @class */ (function () {
    function PreguntasProductoComponent() {
    }
    PreguntasProductoComponent.prototype.ngOnInit = function () {
    };
    PreguntasProductoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preguntas-producto',
            template: __webpack_require__(/*! ./preguntas-producto.component.html */ "./src/app/components/preguntas-producto/preguntas-producto.component.html"),
            styles: [__webpack_require__(/*! ./preguntas-producto.component.css */ "./src/app/components/preguntas-producto/preguntas-producto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreguntasProductoComponent);
    return PreguntasProductoComponent;
}());



/***/ }),

/***/ "./src/app/components/registro/registro.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/registro/registro.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patata {\n    color: white;\n    height: 100%;\n    width: 100%;\n    background:\n      radial-gradient(circle farthest-side at 0% 50%, #fff 23.5%, rgba(240, 166, 17, 0) 0)21px 30px,\n      radial-gradient(circle farthest-side at 0% 50%, #6FC728 24%, rgba(240, 166, 17, 0) 0)19px 30px,\n      linear-gradient(#fff 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #fff 0)0 0,\n      linear-gradient(150deg, #fff 24%, #6FC728 0, #6FC728 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #6FC728 0, #6FC728 76%, #fff 0)0 0,\n      linear-gradient(30deg, #fff 24%, #6FC728 0, #6FC728 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #6FC728 0, #6FC728 76%, #fff 0)0 0,\n      linear-gradient(90deg, #6FC728 2%, #fff 0, #fff 98%, #6FC728 0%)0 0 #fff;\n    background-size: 40px 60px;\n  }\n  \n  \n  .card {\n    bottom: 0;\n    height: 100px;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n    background: #FFFFFF;\n  \n  }\n  \n  \n  .card:before,\n  .effect7:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n    top: 0;\n    bottom: 0;\n    left: 10px;\n    right: 10px;\n    border-radius: 100px / 10px;\n  }\n  \n  \n  .card:after {\n    right: 10px;\n    left: auto;\n    -webkit-transform: skew(8deg) rotate(3deg);\n            transform: skew(8deg) rotate(3deg);\n  }\n  \n  \n  /*@keyframes widen {\n      100% {\n        width: 100%;\n      }\n    }*/"

/***/ }),

/***/ "./src/app/components/registro/registro.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/registro/registro.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/javascript\" src=\"path/to/angular.min.js\"></script>\n <script type=\"text/javascript\" src=\"path/to/ng-tags-input.min.js\"></script>\n\n<div class=\"patata\">\n\n    <div class=\"card\" style=\"width: 40%; height: 600px\">\n      <div class=\"card-body\">\n        <form class=\"form\" (submit)=\"onRegistroSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"Nombre\" style=\"color:black\">¿Cómo te llamas?</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingresa tu nombre\" [(ngModel)]=\"nombre\" name=\"nombre\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"cedula\" style=\"color:black\">Necesitamos saber quién eres</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Ingresa tu cédula\" [(ngModel)]=\"cedula\" name=\"cedula\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\" style=\"color:black\">¿Tienes algún correo para comunicarnos contigo?</label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Ingresa tu correo\" [(ngModel)]=\"email\" name=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"conocimientos\" style=\"color:black\">Cuéntanos qué sabes hacer</label>\n            <tag-input name=\"conocimientos\" [(ngModel)]='conocimientosTag'></tag-input>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"clave\" style=\"color:black\">Por tu seguridad, protege tu cuenta</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"Ingresa una contraseña\" [(ngModel)]=\"clave\" name=\"clave\">\n          </div>\n\n         \n          <div class=\"from-group\">\n            <input class=\"btn btn-success\" type=\"submit\" value=\"Regristrar\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\" value=\"remember-me\"> Recordar\n              </label>\n            </div>\n          </div>\n        </form> \n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/registro/registro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.conocimientosTag = [];
        this.conocimientos = [];
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.onRegistroSubmit = function () {
        var _this = this;
        var i;
        for (i = 0; i < this.conocimientosTag.length; i++) {
            this.conocimientos[i] = this.conocimientosTag[i].value;
        }
        var user = {
            nombre: this.nombre,
            cedula: this.cedula,
            email: this.email,
            clave: this.clave,
            conocimientos: this.conocimientos
        };
        console.log(user);
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.showFlashMessage({
                    messages: ['Acceso correcto'],
                    type: 'success', timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger', timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/components/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/components/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/components/resenias/resenias.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/resenias/resenias.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resenias/resenias.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/resenias/resenias.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Content her-->\n  <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\">Active</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n          <div class=\"dropdown-menu\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n          </div>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n  </ul>\n</div>\n\n<section class=\"write-review py-5 bg-light\" id=\"write-review\">\n  <div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n          <div class=\"row\">\n      <div class=\"col-md-6\">\n          <h5>Overall Rating</h5>\n      </div>\n      <div class=\"col-md-6 text-warning\">\n          <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i>\n      </div>\n  </div>\n  <hr>\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <p>User-friendliness</p>\n          </div>\n          <div class=\"col-md-6 text-warning\">\n          <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i>\n      </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <p>User-friendliness</p>\n          </div>\n          <div class=\"col-md-6 text-warning\">\n          <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i>\n      </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <p>User-friendliness</p>\n          </div>\n          <div class=\"col-md-6 text-warning\">\n          <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i>\n      </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <p>User-friendliness</p>\n          </div>\n          <div class=\"col-md-6 text-warning\">\n          <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i>\n      </div>\n      </div>\n      <hr>\n      <div class=\"row pt-3\">\n          <div class=\"col-md-12\">\n              <button type=\"button\" class=\"btn btn-primary\">Write Reviews</button>\n          </div>\n      </div>\n      </div>\n      <div class=\"col-md-8 my-5 py-5\">\n          <h6>Write your idea about the car</h6>\n          <p>Your review will give better insights of car</p>\n          <button type=\"button\" class=\"btn btn-success\">Write Reviews</button>\n\n      </div>\n  </div>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/components/resenias/resenias.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/resenias/resenias.component.ts ***!
  \***********************************************************/
/*! exports provided: ReseniasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReseniasComponent", function() { return ReseniasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resenias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/resenias.service */ "./src/app/services/resenias.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReseniasComponent = /** @class */ (function () {
    function ReseniasComponent(reseniasService) {
        this.reseniasService = reseniasService;
        this.resenias = [];
        this.cargarResenias = function () {
            var _this = this;
            this.reseniasService.darResenias().subscribe(function (res) {
                _this.resenias = res;
            }, function (err) {
                console.log(err);
                return false;
            });
        };
    }
    ReseniasComponent.prototype.ngOnInit = function () {
        this.cargarResenias();
    };
    ReseniasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resenias',
            template: __webpack_require__(/*! ./resenias.component.html */ "./src/app/components/resenias/resenias.component.html"),
            styles: [__webpack_require__(/*! ./resenias.component.css */ "./src/app/components/resenias/resenias.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resenias_service__WEBPACK_IMPORTED_MODULE_1__["ReseniasService"]])
    ], ReseniasComponent);
    return ReseniasComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://52.67.84.163:8080/api/datos-registro/', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://192.168.10.113:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://192.168.10.113:3000/users/profile', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token == undefined) {
            return false;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            return !helper.isTokenExpired(localStorage.id_token); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/resenias.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resenias.service.ts ***!
  \**********************************************/
/*! exports provided: ReseniasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReseniasService", function() { return ReseniasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReseniasService = /** @class */ (function () {
    function ReseniasService(http) {
        this.http = http;
        this.resenias = [];
    }
    ReseniasService.prototype.cargarResenias = function (idProd) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('apidanielruta_resenias_de_producto_con_id/' + idProd, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ReseniasService.prototype.actualizarResenias = function (reseniasP) {
        // this.resenias = reseniasP; // cuando lo tengamos hecho
        this.resenias = [{
                usuario: "danielxd",
                puntaje: 4.5,
                resenia: "me gusta xdxdxdxdxdxddd"
            },
            {
                usuario: "franciscoxd",
                puntaje: 2.5,
                resenia: "no me gusta xdxdxdxdxdxddd"
            },
            {
                usuario: "andresxd",
                puntaje: 1.0,
                resenia: "nel, kiasco men xdxdxdxdxdxddd"
            },
            {
                usuario: "angelloxd",
                puntaje: 4.0,
                resenia: "no, pos si me gusta xdxdxdxdxdxddd"
            },
            {
                usuario: "davidxd",
                puntaje: 4.6,
                resenia: "no, no... sí me gusta xdxdxdxdxdxddd"
            },
            {
                usuario: "cristianxd",
                puntaje: 3.9,
                resenia: "me gusta, pero no tanto xdxdxdxdxdxddd"
            },
            {
                usuario: "fajardoxd",
                puntaje: 3.0,
                resenia: "ni me gusta ni me desagrada xdxdxdxdxdxddd"
            }];
    };
    ReseniasService.prototype.darResenias = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.resenias);
    };
    ReseniasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ReseniasService);
    return ReseniasService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/whatevercamps/Documents/BankInBest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map