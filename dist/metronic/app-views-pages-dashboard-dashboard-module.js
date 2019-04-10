(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./src/app/views/pages/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<div class=\"row row-full-height\">\r\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6\">\r\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t<kt-widget26 [value]=\"570\" [desc]=\"'Total Sales'\" [options]=\"chartOptions1\"></kt-widget26>\r\n\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t</kt-portlet>\r\n\r\n\t\t\t\t<div class=\"kt-space-20\"></div>\r\n\r\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t<kt-widget26 [value]=\"640\" [desc]=\"'Completed Transactions'\" [options]=\"chartOptions2\"></kt-widget26>\r\n\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t</kt-portlet>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6\">\r\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t<kt-widget26 [value]=\"'234+'\" [desc]=\"'Transactions'\" [options]=\"chartOptions3\"></kt-widget26>\r\n\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t</kt-portlet>\r\n\r\n\t\t\t\t<div class=\"kt-space-20\"></div>\r\n\r\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t<kt-widget26 [value]=\"'4.4M$'\" [desc]=\"'Paid Comissions'\" [options]=\"chartOptions4\"></kt-widget26>\r\n\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t</kt-portlet>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Order Statistics'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget12></kt-widget12>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<kt-portlet>\r\n\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t<div class=\"row row-no-padding row-col-separator-xl\">\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-widget1></kt-widget1>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-widget14 [title]=\"'Daily Sales'\" [desc]=\"'Check out each collumn for more details'\"></kt-widget14>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-widget14 [title]=\"'Revenue Change'\" [desc]=\"'Revenue change breakdown by cities'\"></kt-widget14>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Download Files'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_1\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<div class=\"kt-widget4__tools\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\r\n\t\t\t\t\t\t\t\t<i class=\"flaticon2-download-symbol-of-down-arrow-in-a-rectangle\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'New Users'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_2\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm\" [ngClass]=\"item.buttonClass\">Follow</a>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Latest Updates'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_3\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-8\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Exclusive Datatable'\" [class]=\"'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu></kt-context-menu>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<kt-data-table></kt-data-table>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Authors Profit'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_4\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-8\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Best Sellers'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget5></kt-widget5>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Recent Activities'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-timeline2></kt-timeline2>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!--\r\n<kt-portlet>\r\n\t<kt-portlet-header>\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t</ng-container>\r\n\t\t<ng-container ktPortletTools>\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<kt-portlet-body></kt-portlet-body>\r\n\t<kt-portlet-footer></kt-portlet-footer>\r\n</kt-portlet>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXJfMi90ZXN0L3Rlc3QyL3N0ZXBwZXIvc3RlcHBlci10ZXN0L3NyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdHLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Lodash
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
// Services
var layout_1 = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.chartOptions1 = {
            data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
            color: this.layoutConfigService.getConfig('colors.state.brand'),
            border: 3
        };
        this.chartOptions2 = {
            data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
            color: this.layoutConfigService.getConfig('colors.state.danger'),
            border: 3
        };
        this.chartOptions3 = {
            data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
            color: this.layoutConfigService.getConfig('colors.state.success'),
            border: 3
        };
        this.chartOptions4 = {
            data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
            color: this.layoutConfigService.getConfig('colors.state.primary'),
            border: 3
        };
        // @ts-ignore
        this.widget4_1 = lodash_1.shuffle([
            {
                pic: './assets/media/files/doc.svg',
                title: 'Metronic Documentation',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/jpg.svg',
                title: 'Project Launch Evgent',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Full Developer Manual For 4.7',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/javascript.svg',
                title: 'Make JS Great Again',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/zip.svg',
                title: 'Download Ziped version OF 5.0',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Finance Report 2016/2017',
                url: 'https://keenthemes.com.my/metronic',
            },
        ]);
        // @ts-ignore
        this.widget4_2 = lodash_1.shuffle([
            {
                pic: './assets/media/users/100_4.jpg',
                username: 'Anna Strong',
                desc: 'Visual Designer,Google Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-brand'
            }, {
                pic: './assets/media/users/100_14.jpg',
                username: 'Milano Esco',
                desc: 'Product Designer, Apple Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-warning'
            }, {
                pic: './assets/media/users/100_11.jpg',
                username: 'Nick Bold',
                desc: 'Web Developer, Facebook Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-danger'
            }, {
                pic: './assets/media/users/100_1.jpg',
                username: 'Wilter Delton',
                desc: 'Project Manager, Amazon Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-success'
            }, {
                pic: './assets/media/users/100_5.jpg',
                username: 'Nick Stone',
                desc: 'Visual Designer, Github Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-dark'
            },
        ]);
        // @ts-ignore
        this.widget4_3 = lodash_1.shuffle([
            {
                icon: 'flaticon-pie-chart-1 kt-font-info',
                title: 'Metronic v6 has been arrived!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$500',
                valueColor: 'kt-font-info'
            }, {
                icon: 'flaticon-safe-shield-protection kt-font-success',
                title: 'Metronic community meet-up 2019 in Rome.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1260',
                valueColor: 'kt-font-success'
            }, {
                icon: 'flaticon2-line-chart kt-font-danger',
                title: 'Metronic Angular 7 version will be landing soon..',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1080',
                valueColor: 'kt-font-danger'
            }, {
                icon: 'flaticon2-pie-chart-1 kt-font-primary',
                title: 'ale! Purchase Metronic at 70% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-primary'
            }, {
                icon: 'flaticon2-rocket kt-font-brand',
                title: 'Metronic VueJS version is in progress. Stay tuned!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+134',
                valueColor: 'kt-font-brand'
            }, {
                icon: 'flaticon2-notification kt-font-warning',
                title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-warning'
            }, {
                icon: 'flaticon2-file kt-font-focus',
                title: 'Metronic React version is in progress.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+13%',
                valueColor: 'kt-font-focus'
            },
        ]);
        // @ts-ignore
        this.widget4_4 = lodash_1.shuffle([
            {
                pic: './assets/media/client-logos/logo5.png',
                title: 'Trump Themes',
                desc: 'Make Metronic Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$2500',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo4.png',
                title: 'StarBucks',
                desc: 'Good Coffee & Snacks',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$290',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo3.png',
                title: 'Phyton',
                desc: 'A Programming Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$17',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo2.png',
                title: 'GreenMakers',
                desc: 'Make Green Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$2.50',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo1.png',
                title: 'FlyThemes',
                desc: 'A Let\'s Fly Fast Again Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+200',
                valueColor: 'kt-font-brand'
            },
        ]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Core Module
var core_module_1 = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
var dashboard_component_1 = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: dashboard_component_1.DashboardComponent
                    },
                ]),
            ],
            providers: [],
            declarations: [
                dashboard_component_1.DashboardComponent,
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map