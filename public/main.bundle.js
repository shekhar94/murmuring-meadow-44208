webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__practice_practice_component__ = __webpack_require__("../../../../../src/app/practice/practice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/login-signup/login-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'practice', component: __WEBPACK_IMPORTED_MODULE_3__practice_practice_component__["a" /* PracticeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_signup_login_signup_component__["a" /* LoginSignupComponent */], data: { login: true } },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__login_signup_login_signup_component__["a" /* LoginSignupComponent */], data: { login: false } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-row-wrapper {\r\n    background: #8245CE;\r\n    /* #ef6c00; */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 48px;\r\n    padding: 0 24px;\r\n    position: relative;\r\n}\r\n\r\n.name-wrapper {\r\n    display: inline-block;\r\n    margin: 12px 0;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.nav-li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n    padding: 2px 10px;\r\n}\r\n\r\n.nav-li:hover {\r\n    color: #fff;\r\n}\r\n\r\n.nav-tab {\r\n    color: rgba(255, 255, 255, .7);\r\n}\r\n\r\n.active-tab {\r\n    color: #fff;\r\n    border-bottom: 2px solid #fff;\r\n}\r\n\r\n.ss-xl-font {\r\n    font-size: 18px;\r\n}\r\n\r\n.ss-l-font {\r\n    font-size: 16px;\r\n}\r\n\r\n.ss-m-font {\r\n    font-size: 14px;\r\n}\r\n\r\n.ss-s-font {\r\n    font-size: 12px;\r\n}\r\n\r\n.body-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.podcast-card-wrapper {\r\n    padding: 20px;\r\n    margin: 5px;\r\n    color: #000;\r\n    border: 1px solid #8245CE;\r\n    border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">fl.org</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" routerLink=\"/home\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item  active\">\r\n                <a class=\"nav-link\" href=\"#\" routerLink=\"/practice\">Practice</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Candidate experience</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Interview questions</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Placement papers</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Interests</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Feedback</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Forum</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" href=\"#\">Your score: 500 (Ranking 1)</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a><a class=\"nav-link\" href=\"#\" routerLink=\"/signup\">Signup</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<app-alert></app-alert>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_routing_service__ = __webpack_require__("../../../../../src/app/shared/routing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ToastrService } from 'ngx-toastr';

// import { AuthenticationService } from './shared/authentication.service';

var AppComponent = (function () {
    function AppComponent(
        // public afService: AuthenticationService,
        // private toastr: ToastrService,
        router, routingService) {
        this.router = router;
        this.routingService = routingService;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_routing_service__["a" /* RoutingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_routing_service__["a" /* RoutingService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_progressbar__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__practice_practice_component__ = __webpack_require__("../../../../../src/app/practice/practice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_signup_login_signup_component__ = __webpack_require__("../../../../../src/app/login-signup/login-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_routing_service__ = __webpack_require__("../../../../../src/app/shared/routing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_utility_service__ = __webpack_require__("../../../../../src/app/shared/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__utility_component_alert_alert_component__ = __webpack_require__("../../../../../src/app/utility-component/alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



// import { ToastrModule } from 'ngx-toastr';

// import { MaterialuiModule } from './materialui/materialui.module';






// import { AuthenticationService } from './shared/authentication.service';






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__practice_practice_component__["a" /* PracticeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_signup_login_signup_component__["a" /* LoginSignupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_23__utility_component_alert_alert_component__["a" /* AlertComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            // MaterialuiModule,
            __WEBPACK_IMPORTED_MODULE_12__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
            // ToastrModule.forRoot(),
            // AngularFireModule.initializeApp(environment.firebase),
            // AngularFireDatabaseModule,
            // AngularFireAuthModule,
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__shared_routing_service__["a" /* RoutingService */], __WEBPACK_IMPORTED_MODULE_20__shared_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_18__shared_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center\">\r\n    <button class=\"btn btn-outline-primary\" (click)=\"loginWith('facebook')\"><fa [name]=\"'facebook-square'\" [size]=\"2\"></fa></button>\r\n    <button class=\"btn btn-outline-danger\" (click)=\"loginWith('google')\"><fa [name]=\"'google-plus-square'\" [size]=\"2\"></fa></button>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"loginWith('twitter')\"><fa [name]=\"'twitter-square'\" [size]=\"2\"></fa></button>\r\n    <button class=\"btn btn-outline-info\" (click)=\"loginWith('linkedin')\"><fa [name]=\"'linkedin-square'\" [size]=\"2\"></fa></button>\r\n    <button class=\"btn btn-outline-success\" (click)=\"loginWith('github')\"><fa [name]=\"'github-square'\" [size]=\"2\"></fa></button>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_routing_service__ = __webpack_require__("../../../../../src/app/shared/routing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthenticationService } from '../shared/authentication.service';

// import { ToastrService } from 'ngx-toastr';
var AuthComponent = (function () {
    function AuthComponent(
        // public afService: AuthenticationService,
        routingService) {
        this.routingService = routingService;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_routing_service__["a" /* RoutingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_routing_service__["a" /* RoutingService */]) === "function" && _a || Object])
], AuthComponent);

var _a;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    © 2018 Copyright:\r\n    <a href=\"https://fl.org/\"> fl.org </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header-row-wrapper ss-l-font\">\r\n    <div class=\"name-wrapper\">\r\n        <a>SHEKHAR SUMAN</a>\r\n    </div>\r\n    <div class=\"header-container\">\r\n        <nav>\r\n            <ul>\r\n                <li class=\"nav-li nav-tab\">\r\n                    <a class=\"\">ABOUT</a>\r\n                </li>\r\n                <li class=\"nav-li active-tab\">\r\n                    <a class=\"\">PODCASTS</a>\r\n                </li>\r\n                <li class=\"nav-li nav-tab\">\r\n                    <a class=\"\">ARTICLES</a>\r\n                </li>\r\n                <li class=\"nav-li nav-tab\">\r\n                    <a class=\"\">COURSES</a>\r\n                </li>\r\n                <li class=\"nav-li nav-tab\">\r\n                    <a class=\"\">PROJECTS</a>\r\n                </li>\r\n                <li class=\"nav-li nav-tab\">\r\n                    <a class=\"\">INNOVATIONS</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<div class=\"body-wrapper ss-xl-font\">\r\n    <div class=\"podcast-card-wrapper\">\r\n        The Art Of Charm\r\n    </div>\r\n    <div class=\"podcast-card-wrapper\">\r\n        The One You Feed\r\n    </div>\r\n    <div class=\"podcast-card-wrapper\">\r\n        The Art Of Charm\r\n    </div>\r\n    <div class=\"podcast-card-wrapper\">\r\n        The One You Feed\r\n    </div>\r\n    <div class=\"podcast-card-wrapper\">\r\n        The Art Of Charm\r\n    </div>\r\n    <div class=\"podcast-card-wrapper\">\r\n        The One You Feed\r\n    </div>\r\n    <div class=\"podcast-card-wrapper\">\r\n        The Art Of Charm\r\n    </div>\r\n    <div class=\"podcast-card-wrapper\">\r\n        The One You Feed\r\n    </div>\r\n</div> -->\r\n\r\n\r\n<!-- <mat-tab-group>\r\n    <mat-tab label=\"Tab 1\">Content 1</mat-tab>\r\n    <mat-tab label=\"Tab 2\">Content 2</mat-tab>\r\n    <mat-tab label=\"Tab 2\">Content 2</mat-tab>\r\n    <mat-tab label=\"Tab 2\">Content 2</mat-tab>\r\n    <mat-tab label=\"Tab 2\">Content 2</mat-tab>\r\n    <mat-tab label=\"Tab 2\">Content 2</mat-tab>\r\n</mat-tab-group> -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\">fl.org</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" routerLink=\"/home\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item  active\">\r\n                <a class=\"nav-link\" href=\"#\" routerLink=\"/practice\">Practice</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Candidate experience</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Interview questions</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Placement papers</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Interests</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Feedback</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Forum</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" href=\"#\">Your score: 500 (Ranking 1)</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"container\">\r\n    <div class=\"card col-sm\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Aptitude</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <label for=\"catFormControlSelect1\">Choose category</label>\r\n            <select class=\"form-control\" id=\"catFormControlSelect1\">\r\n            <option>Problems on train</option>\r\n            <option>Permutations and combinations</option>\r\n          </select>\r\n            <label for=\"diffFormControlSelect1\">Difficulty</label>\r\n            <select class=\"form-control\" id=\"diffFormControlSelect1\">\r\n            <option>Easy</option>\r\n            <option>Medium</option>\r\n            <option>Hard</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\">Next</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"card text-right w-100\" style=\"width: 18rem;\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">SSC examination date</h5>\r\n            <p class=\"card-text\">SSC declared examination dates for next exam.</p>\r\n            <a href=\"#\" class=\"btn btn-primary\">Wanna know complete story</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Question model -->\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#exampleModalCenter\">\r\n  Start test\r\n</button>\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">New question</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p class=\"text-left\">Left aligned text on all viewport sizes ggggg gggggg ggggggggg ggggggg gggggggggggg ggggggggggg gggggggggggg gggggggggggggggg.\r\n                </p>\r\n                <hr /> Option 1\r\n                <hr /> Option 2\r\n                <hr /> Option 3\r\n                <hr /> Option 4\r\n                <hr />\r\n                <div class=\"container\">\r\n                    <p>\r\n                        <a class=\"btn btn-outline-danger\" data-toggle=\"collapse\" href=\"#multiCollapseExample1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1\">View answer</a>\r\n                    </p>\r\n                    <p class=\"text-danger\">This will reduce your score please try your best before viewing the answer</p>\r\n                    <div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">\r\n                        <div class=\"card card-body\">\r\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-danger progress-bar-animated progress-bar-striped\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    <div class=\"progress-bar bg-success progress-bar-animated progress-bar-striped\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-danger\" data-dismiss=\"modal\">End practice</button>\r\n                <button type=\"button\" class=\"btn btn-outline-primary\">Next question</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Question model end -->\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#resultModalCenter\">\r\n      View result\r\n</button>\r\n<div class=\"modal fade\" id=\"resultModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"resultModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <p class=\"text-success\">Correct: 4</p>\r\n                <p class=\"text-danger\">Wrong: 5</p>\r\n                <p class=\"text-secondary\">Not attempted: 1</p>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n\r\n                <div class=\"container\">\r\n                    <p class=\"text-success\">Congratulations you have completed the set!</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Practice next set</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Category selection alert -->\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#catModalCenter\">\r\n      Category\r\n</button>\r\n<div class=\"modal fade\" id=\"catModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"catModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                Confirmation\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"container\">\r\n                    <p class=\"text-success\">Hi you have selected problems on train with category hard are you ready for challenge!</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-success\" data-dismiss=\"modal\">I'm ready let the war begin..</button>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">I wanna change settings.....</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-signup/login-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-signup/login-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n        <app-login (onSignupClick)=\"onSignupClick($event)\" *ngIf=\"login\"></app-login>\n        <app-signup (onSigninClick)=\"onSigninClick($event)\" *ngIf=\"!login\"></app-signup>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-signup/login-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AlertComponent } from '../utility-component/alert/alert.component';
var LoginSignupComponent = (function () {
    function LoginSignupComponent(route) {
        this.route = route;
    }
    LoginSignupComponent.prototype.ngOnInit = function () {
        this.login = this.route.snapshot.data.login;
    };
    LoginSignupComponent.prototype.onSignupClick = function () {
        this.login = false;
    };
    LoginSignupComponent.prototype.onSigninClick = function () {
        this.login = true;
    };
    return LoginSignupComponent;
}());
LoginSignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-signup',
        template: __webpack_require__("../../../../../src/app/login-signup/login-signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-signup/login-signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], LoginSignupComponent);

var _a;
//# sourceMappingURL=login-signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5 border\">\r\n    <div class=\"\">\r\n        <h3 class=\"text-center mt-2\">Login</h3>\r\n        <p class=\"text-secondary text-center\">\r\n            <!-- Dude if you will be logged in we can show you your progress. -->\r\n        </p>\r\n    </div>\r\n    <div *ngIf=\"isLoginError\" class=\"alert alert-danger mt-2\">\r\n        Invalid login or password. Please try again.\r\n    </div>\r\n    <form method=\"post\" class=\"register\" #loginForm=\"ngForm\" novalidate=\"novalidate\">\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"inputEmail\">Email<span class=\"text-danger\">*</span></label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon text-secondary\" [class]=\"\"><fa [name]=\"'user'\" [size]=\"1\"></fa></span>\r\n                    <input #email=\"ngModel\" [(ngModel)]=\"model.email\" name=\"email\" type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" [pattern]=\"utilityService.pattern.email\" required>\r\n                </div>\r\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger mt-2\">\r\n                    <div *ngIf=\"email.errors.pattern && !email.errors.required\">\r\n                        Wrong email format.\r\n                    </div>\r\n                    <div *ngIf=\"email.errors.required\">\r\n                        Email is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"inputPassword\">Password<span class=\"text-danger\">*</span></label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon text-secondary\"><fa [name]=\"'lock'\" [size]=\"1\"></fa></span>\r\n                    <input #password=\"ngModel\" [(ngModel)]=\"model.password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" [pattern]=\"utilityService.pattern.password\" required>\r\n                </div>\r\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger mt-2\">\r\n                    <div *ngIf=\"password.errors.pattern && !password.errors.required\">\r\n                        Wrong password format minimum 6 and max 14 characters.\r\n                    </div>\r\n                    <div *ngIf=\"password.errors.required\">\r\n                        Password is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12 text-center\">\r\n                <button (click)=\"onLoginSubmit(loginForm)\" type=\"button\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\"><fa [name]=\"'sign-in'\" [size]=\"1\"></fa>Login</button>\r\n                <hr class=\"divider\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <p class=\"text-secondary text-center\">Or sign up with:</p>\r\n    <app-auth></app-auth>\r\n    <p class=\"text-secondary text-center small\">By clicking \"Sign up\" you agree to our <a href=\"#\">Terms of Service</a>.</p>\r\n    <p class=\"text-secondary text-center small\">New to fl.org? <a (click)=\"handleSignupClick()\" class=\"text-primary\">Sign up</a></p>\r\n    <!-- <div *ngIf=\"afService.user | async as user\">\r\n        <h3>Hello {{user.displayName}}</h3>\r\n        <img [src]=\"user.photoURL\">\r\n        <button (click)=\"afService.logout()\">Logout</button>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_login__ = __webpack_require__("../../../../../src/app/user-login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routing_service__ = __webpack_require__("../../../../../src/app/shared/routing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utility_service__ = __webpack_require__("../../../../../src/app/shared/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AlertComponent } from '../utility-component/alert/alert.component';

// import { AuthenticationService } from '../shared/authentication.service';



var LoginComponent = (function () {
    function LoginComponent(httpClient, router, 
        // private alertComponent: AlertComponent,
        // public afService: AuthenticationService,
        authService, 
        // private toastr: ToastrService,
        routingService, utilityService) {
        this.httpClient = httpClient;
        this.router = router;
        this.authService = authService;
        this.routingService = routingService;
        this.utilityService = utilityService;
        this.onSignupClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLoginError = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__user_login__["a" /* UserLogin */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleSignupClick = function () {
        this.onSignupClick.emit();
    };
    LoginComponent.prototype.onLoginSubmit = function (loginForm) {
        var _this = this;
        var user = {
            email: this.model.email,
            password: this.model.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                // console.log(data);
                _this.utilityService.alertUtil.add('success', 'Successfully logged in.', 5000);
                _this.isLoginError = false;
                _this.resetForm(loginForm);
                _this.authService.storeUserData(data.token, data.user);
                _this.routingService.goto('/practice');
            }
            else {
                _this.utilityService.alertUtil.add('danger', 'Error in logging in please try again.', 5000);
            }
        });
    };
    // handleLoginClick() { // post form data to backend
    //   this.httpClient.post('http://localhost:3000/login', this.model)
    //   .subscribe(data => {
    //     const res: any = data;
    //     if (res.status === 'error') { // Error in adding new user
    //       console.log(res.data);
    //     } else { // valid user added goto homepage
    //       console.log('go to home page');
    //       this.gotoPractice();
    //     }
    //   });
    // }
    // login(loginForm: NgForm) {
    //   this.afService.loginWithEmailPassword(loginForm.value.email, loginForm.value.password)
    //   .then(result => {
    //     this.isLoginError = false;
    //     this.resetForm(loginForm);
    //     this.routingService.goto('/practice');
    //     this.toastr.success('Logged in successfully', 'User');
    //   }).catch(error => {
    //     this.isLoginError = true;
    //     this.toastr.error('Error in logging in', error.message);
    //   });
    // }
    // loginWith(providerName: string) {
    //   this.afService.authenticateWith(providerName)
    //   .then(result => {
    //     this.toastr.success('Logged in successfully', 'User');
    //     this.routingService.goto('/practice');
    //   }).catch(error => {
    //     this.toastr.error('Error in logging in', error.message);
    //   });
    // }
    LoginComponent.prototype.resetForm = function (loginForm) {
        if (loginForm != null) {
            loginForm.reset();
        }
        this.model = {
            email: '',
            password: ''
        };
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "onSignupClick", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_routing_service__["a" /* RoutingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_routing_service__["a" /* RoutingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_utility_service__["a" /* UtilityService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/practice-card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeCard; });
var PracticeCard = (function () {
    function PracticeCard(title, categoryDescription, levelDescription, btnTxt) {
        this.title = title;
        this.categoryDescription = categoryDescription;
        this.levelDescription = levelDescription;
        this.btnTxt = btnTxt;
    }
    return PracticeCard;
}());

//# sourceMappingURL=practice-card.js.map

/***/ }),

/***/ "../../../../../src/app/practice/practice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/practice/practice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card col-sm mt-20\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{model.title}}</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <label for=\"categoryDescription\">Choose category</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"model.categoryDescription\" name=\"categoryDescription\" id=\"categoryDescription\">\r\n          <option *ngFor=\"let option of categories\" [value]=\"option.categoryDescription\">{{option.categoryDescription}}</option>\r\n        </select>\r\n            <label for=\"levelDescription\">Difficulty</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"model.levelDescription\" name=\"levelDescription\" id=\"levelDescription\">\r\n          <option *ngFor=\"let option of difficulty\" [value]=\"option.levelDescription\">{{option.levelDescription}}</option>\r\n        </select>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <button (click)=\"openModal(templateConfirmation)\" type=\"button\" class=\"btn btn-outline-primary\">{{model.btnTxt}}</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #templateConfirmation>\r\n    <div class=\"modal-header\">\r\n        Confirmation\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"container\">\r\n            <p class=\"text-success\">Hi you have selected {{model.categoryDescription}} with difficulty level {{model.levelDescription}} are you ready for challenge!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"handleNextClick(template)\">I'm ready let the war begin..</button>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"closeModal()\">I wanna change settings.....</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">New question</h5>\r\n    </div>\r\n    <div class=\"question-modal-body\">\r\n        <div class=\"modal-body\">\r\n            <p class=\"text-left padding-b-10 border-b-q\" [innerHTML]=\"'Q. ' + questions[nextQuestionIndex].question\"></p>\r\n            <p class=\"text-left padding-b-10 border-b-q\" (click)=\"handleOptionClick(i)\" *ngFor=\"let option of questions[nextQuestionIndex].options; let i = index\">\r\n                {{i + '. '}}<span [innerHTML]=\"option\" [ngClass]=\"{'text-success': (questions[nextQuestionIndex].answer === i) && optionValidationArr[i],'text-danger': (questions[nextQuestionIndex].answer !== i) && optionValidationArr[i]}\"></span>\r\n                <span class=\"float-right\" [ngClass]=\"{'text-success': (questions[nextQuestionIndex].answer === i) && optionValidationArr[i]}\" *ngIf=\"(questions[nextQuestionIndex].answer === i) && optionValidationArr[i]\">You are right</span><span class=\"float-right\"\r\n                    [ngClass]=\"{'text-danger': (questions[nextQuestionIndex].answer !== i) && optionValidationArr[i]}\" *ngIf=\"(questions[nextQuestionIndex].answer !== i) && optionValidationArr[i]\">Please try again</span>\r\n            </p>\r\n            <div class=\"container\">\r\n                <p>\r\n                    <a class=\"btn btn-outline-danger\" data-toggle=\"collapse\" href=\"#multiCollapseExample1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1\">View answer</a>\r\n                </p>\r\n                <p class=\"text-danger\">This will reduce your score please try your best before viewing the answer</p>\r\n                <div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">\r\n                    <div class=\"card card-body\">\r\n                        Correct answer: <span class=\"text-success\">{{questions[nextQuestionIndex].answer}}</span><br> Explaination: <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr />\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar bg-success progress-bar-animated progress-bar-striped\" role=\"progressbar\" [style.width.%]=\"progress.correctPer\" [attr.aria-valuenow]=\"progress.correctPer\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{(progress.correctPer ? (progress.correctPer + '%'):'')}}</div>\r\n                <div class=\"progress-bar bg-danger progress-bar-animated progress-bar-striped\" role=\"progressbar\" [style.width.%]=\"progress.wrongPer\" [attr.aria-valuenow]=\"progress.wrongPer\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{(progress.wrongPer ? (progress.wrongPer+'%'):'')}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"handleAllQuestionsClick(resultTemplate)\">All questions</button>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"handleEndPracticeClick()\">End practice</button>\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getNextQuestion(template, resultTemplate)\">{{(((questionArrLen-1) !== nextQuestionIndex) ? \"Next question\" : \"View result\")}}</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-template #resultTemplate>\r\n    <div class=\"modal-header\">\r\n        <p class=\"text-success\">Correct: {{progress.correct}}</p>\r\n        <p class=\"text-danger\">Wrong: {{progress.wrong}}</p>\r\n        <p class=\"text-secondary\">Not attempted: {{progress.totalQ-progress.correct-progress.wrong}}</p>\r\n    </div>\r\n    <div class=\"modal-body\" *ngIf=\"!isAllQuestionModelVisible\">\r\n        <div class=\"progress\">\r\n            <div class=\"progress-bar bg-success progress-bar-animated progress-bar-striped\" role=\"progressbar\" [style.width.%]=\"progress.correctPer\" [attr.aria-valuenow]=\"progress.correctPer\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{(progress.correctPer ? (progress.correctPer + '%'):'')}}</div>\r\n            <div class=\"progress-bar bg-danger progress-bar-animated progress-bar-striped\" role=\"progressbar\" [style.width.%]=\"progress.wrongPer\" [attr.aria-valuenow]=\"progress.wrongPer\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{(progress.wrongPer ? (progress.wrongPer+'%'):'')}}</div>\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n            <p class=\"text-success\">{{progress.correctPer === 100 ? resultMsg.fullyCorrect : resultMsg.partiallyCorrect}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <button [ngClass]=\"{'btn-success': (question.answer === answerArray[i]), 'btn-danger': answerArray[i] && (question.answer !== answerArray[i]),'btn-secondary': (!answerArray[i])}\" *ngFor=\"let question of questions; let i = index\" type=\"button\" class=\"btn rounded-circle margin-r-5 margin-b-5\"\r\n            (click)=\"handleQuestionClick(template, i)\">{{i}}</button>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" *ngIf=\"!isAllQuestionModelVisible\" class=\"btn btn-outline-primary\" (click)=\"handleEndPracticeClick()\">Practice next set</button>\r\n        <button type=\"button\" *ngIf=\"isAllQuestionModelVisible\" class=\"btn btn-outline-primary\" (click)=\"handleGoBackToPractice(template)\">Go back to practice</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/practice/practice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__practice_card__ = __webpack_require__("../../../../../src/app/practice-card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PracticeComponent = (function () {
    function PracticeComponent(modalService, httpClient) {
        this.modalService = modalService;
        this.httpClient = httpClient;
        this.categories = [
            { id: '1', categoryDescription: 'Problems on train' },
            { id: '2', categoryDescription: 'Permutations and combinations' }
        ];
        this.difficulty = [
            { id: '1', levelDescription: 'Easy' },
            { id: '1', levelDescription: 'Medium' },
            { id: '1', levelDescription: 'Hard' }
        ];
        this.answerArray = [];
        this.firstSelection = -1; // first selected option by user for current question reset to -1 for new question
        this.nextQuestionIndex = 0;
        this.optionValidationArr = []; // stores either this option has been clicked by user or not
        this.model = new __WEBPACK_IMPORTED_MODULE_2__practice_card__["a" /* PracticeCard */]('Aptitude', this.categories[0].categoryDescription, this.difficulty[0].levelDescription, 'Next');
        this.nextDataTgt = '#questionModalCenter';
        this.resultMsg = {
            fullyCorrect: 'Congratulations you have completed the set!',
            partiallyCorrect: 'Would you like to try not attempted questions/wrongly answered questions once again!'
        };
        this.isAllQuestionModelVisible = false;
    }
    PracticeComponent.prototype.handleNextClick = function (template) {
        var _this = this;
        // TODO api call get questions array on the basis of selected
        // 1. category
        // 2. difficulty
        console.log(this.model.categoryDescription + ' ' + this.model.levelDescription);
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]()
            .set('questionType', this.model.categoryDescription)
            .set('difficulty', this.model.levelDescription);
        this.httpClient
            .get('http://localhost:3000/questions/getQuestion', { params: params })
            .subscribe(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isArray"])(data)) {
                _this.questions = data;
                _this.questionArrLen = _this.questions.length;
                _this.progress = {
                    correct: 0,
                    wrong: 0,
                    totalQ: _this.questions.length,
                    correctPer: 0,
                    wrongPer: 0
                };
                console.log('fetching questions from db' + _this.questions);
                _this.closeModal();
                if (__WEBPACK_IMPORTED_MODULE_5_lodash__["gt"](_this.questionArrLen, 0)) {
                    _this.openModal(template);
                }
                else {
                    console.log('No questions available');
                }
            }
        });
    };
    PracticeComponent.prototype.getNextQuestion = function (template, resultTemplate) {
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["lt"](__WEBPACK_IMPORTED_MODULE_5_lodash__["sum"]([this.nextQuestionIndex, 1]), this.questionArrLen)) {
            //  TODO go to next question
            this.closeModal();
            this.nextQuestionIndex++;
            this.firstSelection = -1; // reset first selection for new question
            this.optionValidationArr = []; // reset validation array
            this.openModal(template);
        }
        else {
            // TODO for this selection all questions are over
            // show final score
            // give option to load next set of questions
            this.nextQuestionIndex = 0;
            this.closeModal();
            this.openModal(resultTemplate);
        }
    };
    PracticeComponent.prototype.getPercentage = function (value, total) {
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["round"](__WEBPACK_IMPORTED_MODULE_5_lodash__["divide"](__WEBPACK_IMPORTED_MODULE_5_lodash__["multiply"](value, 100), total), 2);
    };
    PracticeComponent.prototype.handleOptionClick = function (indexOfOption) {
        this.optionValidationArr[indexOfOption] = true;
        // TODO if user is able to choose correct option on first click
        // Add one in correct
        // else Add one to wrong
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["eq"](this.firstSelection, -1)) {
            this.firstSelection = indexOfOption;
            if (__WEBPACK_IMPORTED_MODULE_5_lodash__["eq"](this.questions[this.nextQuestionIndex].answer, indexOfOption)) {
                this.progress.correct++;
                this.progress.correctPer = this.getPercentage(this.progress.correct, this.progress.totalQ);
            }
            else {
                this.progress.wrong++;
                this.progress.wrongPer = this.getPercentage(this.progress.wrong, this.progress.totalQ);
            }
            this.answerArray[this.nextQuestionIndex] = indexOfOption;
        }
    };
    PracticeComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PracticeComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    PracticeComponent.prototype.handleAllQuestionsClick = function (resultTemplate) {
        // TODO hide question modal
        // show all question model with status of all questions
        this.closeModal();
        this.openModal(resultTemplate);
        this.isAllQuestionModelVisible = true;
    };
    PracticeComponent.prototype.handleGoBackToPractice = function (template) {
        this.closeModal();
        this.isAllQuestionModelVisible = false;
        this.openModal(template);
    };
    PracticeComponent.prototype.resetOptionValidationArr = function (indexOfClickedQuestion) {
        //  TODO if already selected option is correct then disable other options after
        //  initializing optionValidationArr with correct value
        //  if wrong or not answered just initialize the optionValidationArr arr
        this.optionValidationArr = [];
        var correctAns = this.answerArray[indexOfClickedQuestion] &&
            __WEBPACK_IMPORTED_MODULE_5_lodash__["eq"](this.answerArray[indexOfClickedQuestion], this.questions[indexOfClickedQuestion].answer);
        if (!this.answerArray[indexOfClickedQuestion] &&
            !__WEBPACK_IMPORTED_MODULE_5_lodash__["eq"](this.answerArray[indexOfClickedQuestion], 0)) {
            // undefined and not 0: 0 means first option
            this.firstSelection = -1;
            // dont update anything
        }
        else if (correctAns) {
            // correct answer
            this.firstSelection = this.answerArray[indexOfClickedQuestion];
            this.optionValidationArr[this.answerArray[indexOfClickedQuestion]] = true;
        }
        else {
            // wrong answer
            // TODO reduce number of wrong ans by one
            this.progress.wrong--;
            this.answerArray[indexOfClickedQuestion] = undefined; // change to not answered
            this.firstSelection = -1;
            this.progress.wrongPer = this.getPercentage(this.progress.wrong, this.progress.totalQ);
        }
    };
    PracticeComponent.prototype.handleQuestionClick = function (template, indexOfClickedQuestion) {
        this.closeModal();
        this.isAllQuestionModelVisible = false;
        this.nextQuestionIndex = indexOfClickedQuestion;
        this.resetOptionValidationArr(indexOfClickedQuestion);
        this.openModal(template);
    };
    PracticeComponent.prototype.handleEndPracticeClick = function () {
        // reset all practice data
        this.optionValidationArr = [];
        this.answerArray = [];
        this.progress = {
            correct: 0,
            wrong: 0,
            totalQ: this.questions.length,
            correctPer: 0,
            wrongPer: 0
        };
        this.closeModal();
    };
    PracticeComponent.prototype.ngOnInit = function () { };
    return PracticeComponent;
}());
PracticeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-practice',
        template: __webpack_require__("../../../../../src/app/practice/practice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/practice/practice.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], PracticeComponent);

var _a, _b;
//# sourceMappingURL=practice.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // this.isDev = true;  // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
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
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/routing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutingService = (function () {
    function RoutingService(router) {
        this.router = router;
    }
    RoutingService.prototype.goto = function (route) {
        this.router.navigate([route]);
    };
    return RoutingService;
}());
RoutingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RoutingService);

var _a;
//# sourceMappingURL=routing.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = (function () {
    function UtilityService() {
        this.pattern = {
            email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
            password: '[A-Za-z0-9]{6,14}' // Minimum 6 and max 14 characters
        };
        this.alertUtil = {
            alerts: [],
            add: function (type, msg, timeout) {
                this.alerts.push({
                    type: type,
                    msg: msg,
                    timeout: timeout
                });
            },
            onClosed: function (dismissedAlert) {
                this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
            }
        };
    }
    return UtilityService;
}());
UtilityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UtilityService);

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5 border\">\r\n    <div class=\"\">\r\n        <h3 class=\"text-center mt-2\">Sign up</h3>\r\n        <p class=\"text-secondary text-center\">Signup to get started with a brand new learning experience.</p>\r\n    </div>\r\n    <form method=\"post\" class=\"register\" #signupForm=\"ngForm\" novalidate=\"novalidate\">\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"inputFname\">First Name <span class=\"text-danger\">*</span></label>\r\n                <input #firstName=\"ngModel\" [(ngModel)]=\"model.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"inputFname\" placeholder=\"First Name\" required>\r\n                <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\" class=\"alert alert-danger mt-2\">\r\n                    <div *ngIf=\"firstName.errors.required\">\r\n                        First name is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"inputLname\">Last Name <span class=\"text-danger\">*</span></label>\r\n                <input #lastName=\"ngModel\" [(ngModel)]=\"model.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"inputLname\" placeholder=\"Last Name\" required>\r\n                <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\" class=\"alert alert-danger mt-2\">\r\n                    <div *ngIf=\"lastName.errors.required\">\r\n                        Last name is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"inputEmail\">Email address <span class=\"text-danger\">*</span></label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><fa [name]=\"'envelope'\" [size]=\"1\"></fa></span>\r\n                    <input #email=\"ngModel\" [(ngModel)]=\"model.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email address\" [pattern]=\"utilityService.pattern.email\" required>\r\n                </div>\r\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger mt-2\">\r\n                    <div *ngIf=\"email.errors.pattern && !email.errors.required\">\r\n                        Wrong email format.\r\n                    </div>\r\n                    <div *ngIf=\"email.errors.required\">\r\n                        Email is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"inputPassword\">Password <span class=\"text-danger\">*</span></label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><fa [name]=\"'lock'\" [size]=\"1\"></fa></span>\r\n                    <input #password=\"ngModel\" [(ngModel)]=\"model.password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" [pattern]=\"utilityService.pattern.password\" required>\r\n                </div>\r\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger mt-2\">\r\n                    <div *ngIf=\"password.errors.pattern && !password.errors.required\">\r\n                        Wrong password format minimum 6 and max 14 characters.\r\n                    </div>\r\n                    <div *ngIf=\"password.errors.required\">\r\n                        Password is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label for=\"inputPassword\">Confirm password <span class=\"text-danger\">*</span></label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><fa [name]=\"'lock'\" [size]=\"1\"></fa></span>\r\n                    <input validate [disabled]=\"password.invalid\" #confirmPassword=\"ngModel\" [(ngModel)]=\"model.confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"inputConfirmPassword\" placeholder=\"Confirm password\" required>\r\n                </div>\r\n                <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\" class=\"alert alert-danger mt-2\">\r\n                    <div *ngIf=\"confirmPassword.errors.required\">\r\n                        confirmPassword is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12 text-center\">\r\n                <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!signupForm.valid\" (click)=\"onRegisterSubmit(signupForm)\">Sign Up</button>\r\n                <hr class=\"divider\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <p class=\"text-secondary text-center\">Or sign up with:</p>\r\n    <app-auth></app-auth>\r\n    <p class=\"text-secondary text-center small\">By clicking \"Sign up\" you agree to our <a href=\"#\">Terms of Service</a>.</p>\r\n    <p class=\"text-secondary text-center small\">Already have an account? <a (click)=\"handleSigninClick(signupForm)\" class=\"text-primary\">Sign in</a></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utility_service__ = __webpack_require__("../../../../../src/app/shared/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ToastrService } from 'ngx-toastr';

// import { AuthenticationService } from '../shared/authentication.service';


var SignupComponent = (function () {
    function SignupComponent(httpClient, 
        // public afService: AuthenticationService,
        authService, 
        // private toastr: ToastrService,
        utilityService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.utilityService = utilityService;
        this.onSigninClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.model = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        // afService.getData();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.handleSigninClick = function () {
        this.onSigninClick.emit();
    };
    SignupComponent.prototype.onRegisterSubmit = function (signupForm) {
        // const user = {
        //   name: this.name,
        //   email: this.email,
        //   username: this.username,
        //   password: this.password
        // }
        var _this = this;
        // // Required Fields
        // if(!this.validateService.validateRegister(user)) {
        //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
        //   return false;
        // }
        // // Validate Email
        // if(!this.validateService.validateEmail(user.email)) {
        // this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        //   return false;
        // }
        // Register user
        this.authService.registerUser(this.model).subscribe(function (data) {
            if (data.success) {
                _this.utilityService.alertUtil.add('success', 'Successfully signed up. Please login.', 5000);
                signupForm.resetForm();
                _this.handleSigninClick();
            }
            else {
                _this.utilityService.alertUtil.add('danger', 'Error in signing up. Please try again.', 5000);
                // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                // this.router.navigate(['/register']);
            }
        });
    };
    return SignupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "onSigninClick", void 0);
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_utility_service__["a" /* UtilityService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = (function () {
    function UserLogin() {
    }
    return UserLogin;
}());

//# sourceMappingURL=user-login.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/utility-component/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of utilityService.alertUtil.alerts\">\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"utilityService.alertUtil.onClosed(alert)\">{{ alert.msg }}</alert>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utility-component/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility-component/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utility_service__ = __webpack_require__("../../../../../src/app/shared/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(utilityService) {
        this.utilityService = utilityService;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/utility-component/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility-component/alert/alert.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_utility_service__["a" /* UtilityService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBKOmWpp2z-Lbn96QWljF7JOe9eTrQY1q0',
        authDomain: 'free-learning-695b5.firebaseapp.com',
        databaseURL: 'https://free-learning-695b5.firebaseio.com',
        projectId: 'free-learning-695b5',
        storageBucket: 'free-learning-695b5.appspot.com',
        messagingSenderId: '840327832060'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map