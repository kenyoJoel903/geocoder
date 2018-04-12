webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_service/distrito.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistritoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__var_constant__ = __webpack_require__("../../../../../src/app/_service/var.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistritoService = /** @class */ (function () {
    function DistritoService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__var_constant__["a" /* URLS */].base + __WEBPACK_IMPORTED_MODULE_1__var_constant__["a" /* URLS */].distritos;
    }
    DistritoService.prototype.getHeaders = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "bearer " + token).set('Content-Type', 'application/json');
        return headers;
    };
    DistritoService.prototype.getDistritos = function (query, token) {
        var distritos = [];
        return this.http.get(this.url + "?search=" + query, {
            headers: this.getHeaders(token)
        });
    };
    DistritoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DistritoService);
    return DistritoService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/geocoder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__var_constant__ = __webpack_require__("../../../../../src/app/_service/var.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeocoderService = /** @class */ (function () {
    function GeocoderService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__var_constant__["a" /* URLS */].base + __WEBPACK_IMPORTED_MODULE_1__var_constant__["a" /* URLS */].simple_Addres;
    }
    GeocoderService.prototype.simpleAddress = function (ubigeo, address, token) {
        return this.http.get(this.url + "?address=" + address + "&ubigeo=" + ubigeo + "&token=" + token);
    };
    GeocoderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], GeocoderService);
    return GeocoderService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
        var osmAttr = "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, " +
            "Tiles courtesy of <a href='http://hot.openstreetmap.org/' target='_blank'>Humanitarian OpenStreetMap Team</a>";
        var esriAttr = "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, " +
            "iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, " +
            "Esri China (Hong Kong), and the GIS User Community";
        var cartoAttr = "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> " +
            "&copy; <a href='http://cartodb.com/attributions'>CartoDB</a>";
        var geodirAttr = "<a href='http://www.geodir.co/'><b>Geodir</b></a> &copy; Map";
        this.baseMaps = {
            OpenStreetMap: __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                attribution: osmAttr
            }),
            Esri: __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                attribution: esriAttr
            }),
            CartoDB: __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: cartoAttr
            }),
            GeoDir: __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://geocoder.geodir.co/geocoder.api/tile/v1/{z}/{x}/{y}", {
                attribution: geodirAttr
            }),
        };
    }
    MapService.prototype.addmarker = function (lat, lng, descripcion) {
        var location = __WEBPACK_IMPORTED_MODULE_2_leaflet__["latLng"](lat, lng);
        var popup = "<div>Latitude: " + lat + "<div><div>Longitude: " + lng + "<div><br/><div>" + descripcion + "<div>";
        var icon = __WEBPACK_IMPORTED_MODULE_2_leaflet__["icon"]({
            iconUrl: "assets/marker-icon.png",
            shadowUrl: "assets/marker-shadow.png"
        });
        var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"](location, {
            draggable: true,
            icon: icon
        })
            .bindPopup(popup, {
            offset: __WEBPACK_IMPORTED_MODULE_2_leaflet__["point"](12, 6)
        })
            .addTo(this.map)
            .openPopup();
        marker.on("click", function () { return marker.remove(); });
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/var.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URLS; });
var URLS = {
    base: "http://api.geodir.co/geocoder",
    distritos: '/asistido/v1/source/distrito',
    simple_Addres: '/geocoding/v1/geodir.address/simple'
};


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\r\n    /*position:absolute;*/\r\n    bottom:0;\r\n    width:100%;\r\n    height: 800px;\r\n  }\r\n\r\n#mainForm{\r\n  padding: 50px;\r\n  background: #efefef;\r\n  height: 800px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4\" id=\"mainForm\">\n        <form>\n          <div class=\"row\">\n              <div class=\"col-sm-6 form-group\">\n                  <label for=\"token\">Token</label>\n                  <input type=\"text\" [(ngModel)]=\"token\" id=\"token\" name=\"token\" class=\"form-control\" placeholder=\"Ingrese token\"/>\n                  <a href=\"http://geocoder.geodir.co/geocoder/\" target=\"_blank\" >Obtener token</a>\n              </div>\n              <div class=\"col-sm-6 form-group\">\n                  <label for=\"busqueda\">Distrito</label>\n                  <ng2-completer [(ngModel)]=\"queryDistrito\" [datasource]=\"dataService\" (selected)=\"onItemSelect($event)\" (keyup)=\"onSearchDistrito($event)\"  [textSearching]=\"'Buscando...'\"\n                  [placeholder]=\"'Ingrese el nombre de un distrito'\" [textNoResults]=\"'Sin resultados'\" [clearUnselected]=true [pause]=\"250\"\n                  name=\"busqueda\" [inputClass]=\"['form-control']\" [minSearchLength]=\"2\"></ng2-completer>\n              </div>\n              \n          </div>\n          <div class=\"row\">\n              <div class=\"col-sm-8 form-group\">\n                  <label for=\"direccion\">Direccion</label>\n                  <input type=\"text\" [(ngModel)]=\"address\" id=\"direccion\" name=\"direccion\" class=\"form-control\" placeholder=\"Ingrese direccion\"/>\n              </div>\n              <div class=\"col-sm-4 \">\n                  <br/>\n                  <button class=\"btn btn-primary\" (click)=\"searchAddress()\">Buscar</button>\n              </div>\n          </div>\n        </form>\n    </div>\n    <div class=\"col-8\" id=\"map\">\n      mapa\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_distrito_service__ = __webpack_require__("../../../../../src/app/_service/distrito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_map_service__ = __webpack_require__("../../../../../src/app/_service/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_geocoder_service__ = __webpack_require__("../../../../../src/app/_service/geocoder.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(distritoService, completerService, mapService, geocoderServide) {
        this.distritoService = distritoService;
        this.completerService = completerService;
        this.mapService = mapService;
        this.geocoderServide = geocoderServide;
    }
    AppComponent.prototype.ngOnInit = function () { this.initMapa(); };
    AppComponent.prototype.initMapa = function () {
        var center = __WEBPACK_IMPORTED_MODULE_3_leaflet__["latLng"](-12.1035703, -77.0327431);
        var mapa = __WEBPACK_IMPORTED_MODULE_3_leaflet__["map"]("map", {
            zoomControl: false,
            center: center,
            zoom: 16,
            minZoom: 2,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.GeoDir]
        });
        __WEBPACK_IMPORTED_MODULE_3_leaflet__["control"].zoom({ position: "topright" }).addTo(mapa);
        __WEBPACK_IMPORTED_MODULE_3_leaflet__["control"].layers(this.mapService.baseMaps).addTo(mapa);
        __WEBPACK_IMPORTED_MODULE_3_leaflet__["control"].scale().addTo(mapa);
        this.mapService.map = mapa;
    };
    AppComponent.prototype.onSearchDistrito = function (event) {
        var _this = this;
        var obsDistritos = this.distritoService.getDistritos(event.target.value, this.token);
        obsDistritos.subscribe(function (data) {
            _this.distritos = data;
            _this.dataService = _this.completerService.local(_this.distritos, 'name', 'name');
        });
    };
    AppComponent.prototype.onItemSelect = function (selected) {
        if (selected) {
            this.distritoSelected = selected.originalObject;
        }
    };
    AppComponent.prototype.searchAddress = function () {
        var _this = this;
        this.geocoderServide.simpleAddress(this.distritoSelected.ubigeo, this.address, this.token)
            .subscribe(function (data) {
            if (data.address) {
                var _address = data.address;
                var descripcion = _address[0].results[0]['properties']['label'];
                _this.mapService.addmarker(_address[0].results[0]['geometry']['coordinates'][1], _address[0].results[0]['geometry']['coordinates'][0], descripcion);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_distrito_service__["a" /* DistritoService */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_completer__["a" /* CompleterService */],
            __WEBPACK_IMPORTED_MODULE_4__service_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_5__service_geocoder_service__["a" /* GeocoderService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_distrito_service__ = __webpack_require__("../../../../../src/app/_service/distrito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_map_service__ = __webpack_require__("../../../../../src/app/_service/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_geocoder_service__ = __webpack_require__("../../../../../src/app/_service/geocoder.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_completer__["b" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_distrito_service__["a" /* DistritoService */], __WEBPACK_IMPORTED_MODULE_7__service_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_8__service_geocoder_service__["a" /* GeocoderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map