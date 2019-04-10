(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-test-task-test-task-module"],{

/***/ "./src/app/views/pages/test-task/fixture.ts":
/*!**************************************************!*\
  !*** ./src/app/views/pages/test-task/fixture.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICES = [
    {
        title: 'Nieuwe producten en/of niches ontdekken',
        value: 1
    },
    {
        title: 'Huidig assortiment verbeteren',
        value: 2
    },
    {
        title: 'Productiedee valideren',
        value: 3
    },
    {
        title: 'Concurrentie monitoren / voorblijven',
        value: 4
    },
    {
        title: 'trends ontdekken',
        value: 5
    },
    {
        title: 'Winstmarge product(en) voorspellen',
        value: 6
    }
];
exports.CUSTOMER_CHARACTERICTISC = [
    {
        title: 'Groothandel',
        value: 1
    },
    {
        title: 'Private label',
        value: 2
    },
    {
        title: 'Retailer',
        value: 3
    },
    {
        title: 'E-tailer',
        value: 4
    },
    {
        title: 'Merkeigenaar / fabrikant',
        value: 5
    },
    {
        title: 'Dropshipping',
        value: 6
    },
    {
        title: 'Startend ondernemer',
        value: 7
    },
    {
        title: 'Student',
        value: 8
    },
    {
        title: 'Orienterend',
        value: 9
    }
];
exports.SALES_MODELS = [
    {
        title: 'Groothandel',
        value: 1
    },
    {
        title: 'Private label',
        value: 2
    },
    {
        title: 'Retailer',
        value: 3
    },
    {
        title: 'E-tailer',
        value: 4
    },
    {
        title: 'Merkeigenaar / fabrikant',
        value: 5
    },
    {
        title: 'Dropshipping',
        value: 6
    }
];
exports.DELIVERY_METHODS = [
    {
        title: 'Logistiek via bol.com LVB',
        value: 0
    },
    {
        title: 'Eigen logistiek LVM',
        value: 1
    }
];
exports.PRODUCT_RANGES = [
    {
        title: '1 to 25 producten',
        value: 1
    },
    {
        title: '25 to 100 producten',
        value: 2
    },
    {
        title: '100 to 500 producten',
        value: 3
    },
    {
        title: '500 to 1,000 producten',
        value: 4
    },
    {
        title: 'more than 1,000 producten',
        value: 5
    }
];
exports.MONTHLY_REVENUE = [
    {
        title: 'Up to 500 euros',
        value: 1
    },
    {
        title: '500 to 2,500 euros',
        value: 2
    },
    {
        title: '2,500 to 10,000 euros',
        value: 3
    },
    {
        title: '10,000 to 50,000 euros',
        value: 4
    },
    {
        title: 'more than 50,000 euros',
        value: 5
    },
];


/***/ }),

/***/ "./src/app/views/pages/test-task/test-task.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/test-task/test-task.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8 stepper\">\n\t<mat-horizontal-stepper>\n\t\t<!-- First step 'welcome' -->\n\t\t<mat-step>\n\t\t\t<ng-template matStepLabel>Choose service</ng-template>\n\t\t\t<h1>Hi Sander!</h1>\n\t\t\t<p class=\"text-bold\">\n\t\t\t\tVertel ons hoe we kunnen helpen door aan te geven wat jouw hofddoel\n\t\t\t\tis voor het gebruiken van Zollie\n\t\t\t</p>\n\t\t\t<div class=\"radio-group\">\n\t\t\t<ng-container *ngFor=\"let service of services; let i = index\">\n\t\t\t\t<input type=\"radio\"\n\t\t\t\t\t\t\t [value]=\"service.value\"\n\t\t\t\t\t\t\t [id]=\"'service' + i\"\n\t\t\t\t\t\t\t name=\"service\"\n\t\t\t\t\t\t\t [formControl]=\"serviceControl\">\n\t\t\t\t<label [for]=\"'service' + i\">\n\t\t\t\t\t{{ service.title }}\n\t\t\t\t</label>\n\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div class=\"button-group\">\n\t\t\t\t<button mat-raised-button color=\"primary\"\n\t\t\t\t\t\t\t\tmatStepperNext\n\t\t\t\t\t\t\t\t[disabled]=\"isDisabled(serviceControl.value)\">\n\t\t\t\t\tVelgende\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</mat-step>\n\t\t<!-- Second step 'is seller?' -->\n\t\t<mat-step>\n\t\t\t<ng-template matStepLabel>Are you seller?</ng-template>\n\t\t\t<h1>Laten we elkaar beter leren kenne</h1>\n\t\t\t<p class=\"text-bold\">Ben je momenteel al een verkoper via bol.com?</p>\n\t\t\t<div class=\"radio-group\">\n\t\t\t\t<input type=\"radio\"\n\t\t\t\t\t\t\t\tvalue=\"1\"\n\t\t\t\t\t\t\t\tid=\"seller1\"\n\t\t\t\t\t\t\t\t[formControl]=\"sellerControl\">\n\t\t\t\t<label for=\"seller1\">\n\t\t\t\t\tJa, ik ben verkper via lol.com\n\t\t\t\t</label>\n\t\t\t\t<input type=\"radio\"\n\t\t\t\t\t\t\t\tvalue=\"0\"\n\t\t\t\t\t\t\t\tid=\"seller0\"\n\t\t\t\t\t\t\t\t[formControl]=\"sellerControl\">\n\t\t\t\t<label for=\"seller0\">\n\t\t\t\t\tNee, ik ben (nog) geen verkoper via bol.com\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"button-group\">\n\t\t\t\t<button mat-raised-button color=\"primary\" matStepperPrevious>\n\t\t\t\t\tVorige\n\t\t\t\t</button>\n\t\t\t\t<button mat-raised-button color=\"primary\"\n\t\t\t\t\t\t\t\tmatStepperNext\n\t\t\t\t\t\t\t\t[disabled]=\"isDisabled(sellerControl.value)\">\n\t\t\t\t\tVelgende\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</mat-step>\n\t\t<!-- Third step 'no seller' -->\n\t\t<mat-step *ngIf=\"isSeller() === false\">\n\t\t\t<ng-template matStepLabel>Choice you characteristic</ng-template>\n\t\t\t<h1>Zllie os er om jou te helpen!</h1>\n\t\t\t<p class=\"text-bold\">\n\t\t\t\tOm jou zo goed mogelijk te kunnen helpen, maken we graag kennis.\n\t\t\t</p>\n\t\t\t<p class=\"text-bolder\">Ik ben een:</p>\n\t\t\t<div class=\"radio-group\">\n\t\t\t\t<ng-container *ngFor=\"let characteristic of customerCharacteristics; let i = index\">\n\t\t\t\t\t<input type=\"radio\"\n\t\t\t\t\t\t\t\t [value]=\"characteristic.value\"\n\t\t\t\t\t\t\t\t [id]=\"'characteristic' + i\"\n\t\t\t\t\t\t\t\t name=\"characteristic\"\n\t\t\t\t\t\t\t\t [formControl]=\"characteristicControl\">\n\t\t\t\t\t<label class=\"no-seller-form__label\" [for]=\"'characteristic' + i\">\n\t\t\t\t\t\t{{ characteristic.title }}\n\t\t\t\t\t</label>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div class=\"button-group\">\n\t\t\t\t<button mat-raised-button color=\"primary\" matStepperPrevious>\n\t\t\t\t\tVorige\n\t\t\t\t</button>\n\t\t\t\t<button mat-raised-button color=\"primary\"\n\t\t\t\t\t\t\t\tmatStepperNext\n\t\t\t\t\t\t\t\t[disabled]=\"isDisabled(characteristicControl.value)\">\n\t\t\t\t\tVelgende\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</mat-step>\n\t\t<ng-container *ngIf=\"isSeller() === true\">\n<!-- Third step 'seller' -->\n\t\t\t<mat-step>\n\t\t\t\t<ng-template matStepLabel>About your business</ng-template>\n\t\t\t\t<h1>Super! Laten we Zollie afstemmen op jouw business.</h1>\n\t\t\t\t<form class=\"business-form\" [formGroup]=\"businessForm\">\n\t\t\t\t\t<mat-form-field class=\"form-field\">\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t matInput\n\t\t\t\t\t\t\t\t\t placeholder=\"Wat is je bol.com verkopersnummer?\"\n\t\t\t\t\t\t\t\t\t formControlName=\"sellerNumber\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<p class=\"text-bolder\">\n\t\t\t\t\t\tWelk verkoopmodel pas je momenteel hoofdzakelijk\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"radio-group\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let model of salesModels; let i = index\">\n\t\t\t\t\t\t\t<input type=\"radio\"\n\t\t\t\t\t\t\t\t\t\t [value]=\"model.value\"\n\t\t\t\t\t\t\t\t\t\t [id]=\"'model' + i\"\n\t\t\t\t\t\t\t\t\t\t formControlName=\"salesModel\">\n\t\t\t\t\t\t\t<label class=\"business-form__label\" [for]=\"'model' + i\">\n\t\t\t\t\t\t\t\t{{ model.title }}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"text-bolder\">\n\t\t\t\t\t\tWelke leveringsmethode gedruik je hoofdzajelijk?\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"radio-group\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let method of deliveryMethods; let i = index\">\n\t\t\t\t\t\t\t<input type=\"radio\"\n\t\t\t\t\t\t\t\t\t\t [value]=\"method.value\"\n\t\t\t\t\t\t\t\t\t\t [id]=\"'method' + i\"\n\t\t\t\t\t\t\t\t\t\t formControlName=\"deliveryMethod\">\n\t\t\t\t\t\t\t<label class=\"business-form__label\" [for]=\"'method' + i\">\n\t\t\t\t\t\t\t\t{{ method.title }}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t\t<mat-form-field class=\"form-field\">\n\t\t\t\t\t\t<mat-select formControlName=\"productRange\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Hoeveel producten verkoop je momenteel via bol.com?\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let range of productRanges\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"range.value\">\n\t\t\t\t\t\t\t\t{{ range.title }}\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field class=\"form-field\">\n\t\t\t\t\t\t<mat-select formControlName=\"monthlyRevenue\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Wat is je geschatte maandelijkse omzet?\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let revenue of monthlyRevenue\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"revenue.value\">\n\t\t\t\t\t\t\t\t{{ revenue.title }}\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</form>\n\t\t\t\t<div class=\"button-group\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" matStepperPrevious>\n\t\t\t\t\t\tVorige\n\t\t\t\t\t</button>\n\t\t\t\t\t<button mat-raised-button color=\"primary\"\n\t\t\t\t\t\t\t\t\tmatStepperNext\n\t\t\t\t\t\t\t\t\t[disabled]=\"businessForm.invalid\">\n\t\t\t\t\t\tVelgende\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</mat-step>\n\t\t\t<!-- Fifth step 'last step for seller' -->\n\t\t\t<mat-step>\n\t\t\t\t<ng-template matStepLabel>Lnking API</ng-template>\n\t\t\t\t<h1>Nog betere data door te koppelen</h1>\n\t\t\t\t<p>\n\t\t\t\t\tDoor je verkopersaccount van bol.com te koppelen met Zolie, is het\n\t\t\t\t\tmogelijk om relevante updates te ontvaggen omtrent jouw assortiment,\n\t\t\t\t\tvoorraad en je concurrentie. Om je bol.com verkopersaccont te koppelen\n\t\t\t\t\tmet Zollie, dien je onderstaande velden in te vullen. Weet je niet\n\t\t\t\t\twaar je de public en private key kunt vinden, klik dan op de\n\t\t\t\t\tbraagtekens voor meer uitleg.\n\t\t\t\t</p>\n\t\t\t\t<form class=\"linking-form\" [formGroup]=\"linkingForm\">\n\t\t\t\t\t<mat-form-field class=\"form-field\">\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t matInput\n\t\t\t\t\t\t\t\t\t placeholder=\"Bol.com verkopersnummer\"\n\t\t\t\t\t\t\t\t\t formControlName=\"sellerNumber\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-icon matTooltip=\"Bol.com verkopersnummer\"\n\t\t\t\t\t\t\t\t\t\tmatTooltipPosition=\"after\">\n\t\t\t\t\t\thelp\n\t\t\t\t\t</mat-icon>\n\t\t\t\t\t<mat-form-field class=\"form-field\">\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t matInput\n\t\t\t\t\t\t\t\t\t placeholder=\"Public key\"\n\t\t\t\t\t\t\t\t\t formControlName=\"publicKey\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-icon matTooltip=\"Public key\" matTooltipPosition=\"after\">\n\t\t\t\t\t\thelp\n\t\t\t\t\t</mat-icon>\n\t\t\t\t\t<mat-form-field class=\"form-field\">\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t matInput\n\t\t\t\t\t\t\t\t\t placeholder=\"Private key\"\n\t\t\t\t\t\t\t\t\t formControlName=\"privateKey\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-icon matTooltip=\"Private key\" matTooltipPosition=\"after\">\n\t\t\t\t\t\t\thelp\n\t\t\t\t\t</mat-icon>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<mat-radio-group class=\"form-field\" formControlName=\"agree\">\n\t\t\t\t\t\t\t<mat-radio-button value=\"1\">\n\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\tDoor het invullen van mijn verkopersnummer, public key en\n\t\t\t\t\t\t\t\tprivate key, ga ik akkoord mer het berweren van mijn dara\n\t\t\t\t\t\t\t\tvolgens de <b>koppenlingsvoorwaarden</b> van Zollie\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<div class=\"button-group\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" matStepperNext>\n\t\t\t\t\t\tLater koppelen\n\t\t\t\t\t</button>\n\t\t\t\t\t<button mat-raised-button color=\"primary\"\n\t\t\t\t\t\t\t\t\t[disabled]=\"linkingForm.invalid\">\n\t\t\t\t\t\tKoppelen\n\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t</mat-step>\n\t\t</ng-container>\n\t</mat-horizontal-stepper>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/test-task/test-task.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/test-task/test-task.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stepper {\n  font-size: 16px; }\n  .stepper ::ng-deep .mat-horizontal-stepper-header {\n    pointer-events: none; }\n  .stepper .business-form .form-field, .stepper .linking-form .form-field {\n    width: 80%; }\n  .stepper .business-form .toolpit, .stepper .linking-form .toolpit {\n    cursor: pointer; }\n  .stepper .radio-group {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around; }\n  .stepper .radio-group label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      height: 100px;\n      width: 200px;\n      margin: 15px 0;\n      border: 1px #646c9a solid;\n      border-radius: 10px;\n      transition: .5s; }\n  .stepper .radio-group label:hover {\n        box-shadow: 0 0 20px #646c9a8a; }\n  .stepper .radio-group input[type=\"radio\"] {\n      display: none; }\n  .stepper .radio-group input[type=\"radio\"]:checked + label {\n      box-shadow: 0 0 25px 5px #646c9a8a;\n      transition: .3s; }\n  .stepper .button-group {\n    display: flex;\n    justify-content: flex-end; }\n  .stepper .button-group button {\n      margin-left: 10px; }\n  .stepper .text-bold {\n    font-weight: bold; }\n  .stepper .text-bolder {\n    font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXJfMi90ZXN0L3Rlc3QyL3N0ZXBwZXIvc3RlcHBlci10ZXN0L3NyYy9hcHAvdmlld3MvcGFnZXMvdGVzdC10YXNrL3Rlc3QtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWUsRUFBQTtFQURoQjtJQUlFLG9CQUFvQixFQUFBO0VBSnRCO0lBU0csVUFBVSxFQUFBO0VBVGI7SUFhRyxlQUFlLEVBQUE7RUFibEI7SUFrQkUsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkIsRUFBQTtFQXBCL0I7TUF1QkcsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixZQUFZO01BQ1osY0FBYztNQUNkLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO0VBaENsQjtRQW1DSSw4QkFBOEIsRUFBQTtFQW5DbEM7TUF3Q0csYUFBYSxFQUFBO0VBeENoQjtNQTRDRyxrQ0FBa0M7TUFDbEMsZUFBZSxFQUFBO0VBN0NsQjtJQWtERSxhQUFhO0lBQ2IseUJBQXlCLEVBQUE7RUFuRDNCO01Bc0RHLGlCQUFpQixFQUFBO0VBdERwQjtJQTJERSxpQkFBaUIsRUFBQTtFQTNEbkI7SUErREUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy90ZXN0LXRhc2svdGVzdC10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXIge1xuXHRmb250LXNpemU6IDE2cHg7XG5cblx0OjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdH1cblxuXHQuYnVzaW5lc3MtZm9ybSwgLmxpbmtpbmctZm9ybSB7XG5cdFx0LmZvcm0tZmllbGQge1xuXHRcdFx0d2lkdGg6IDgwJTtcblx0XHR9XG5cblx0XHQudG9vbHBpdCB7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHR9XG5cblx0LnJhZGlvLWdyb3VwIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuXHRcdGxhYmVsIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0bWFyZ2luOiAxNXB4IDA7XG5cdFx0XHRib3JkZXI6IDFweCAjNjQ2YzlhIHNvbGlkO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRcdHRyYW5zaXRpb246IC41cztcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAyMHB4ICM2NDZjOWE4YTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cblx0XHRpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAyNXB4IDVweCAjNjQ2YzlhOGE7XG5cdFx0XHR0cmFuc2l0aW9uOiAuM3M7XG5cdFx0fVxuXHR9XG5cblx0LmJ1dHRvbi1ncm91cCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cdFx0YnV0dG9uIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdH1cblx0fVxuXG5cdC50ZXh0LWJvbGQge1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG5cblx0LnRleHQtYm9sZGVyIHtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/test-task/test-task.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/test-task/test-task.component.ts ***!
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var fixture_1 = __webpack_require__(/*! ./fixture */ "./src/app/views/pages/test-task/fixture.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var TestTaskComponent = /** @class */ (function () {
    function TestTaskComponent() {
        this.services = fixture_1.SERVICES;
        this.customerCharacteristics = fixture_1.CUSTOMER_CHARACTERICTISC;
        this.salesModels = fixture_1.SALES_MODELS;
        this.deliveryMethods = fixture_1.DELIVERY_METHODS;
        this.productRanges = fixture_1.PRODUCT_RANGES;
        this.monthlyRevenue = fixture_1.MONTHLY_REVENUE;
        this.serviceControl = new forms_1.FormControl('');
        this.sellerControl = new forms_1.FormControl('');
        this.characteristicControl = new forms_1.FormControl('');
        this._initBusinessForm();
        this._initLinkingForm();
    }
    TestTaskComponent.prototype._initBusinessForm = function () {
        this.businessForm = new forms_1.FormGroup({
            sellerNumber: new forms_1.FormControl('', [forms_1.Validators.required]),
            salesModel: new forms_1.FormControl('', [forms_1.Validators.required]),
            deliveryMethod: new forms_1.FormControl('', [forms_1.Validators.required]),
            productRange: new forms_1.FormControl('', [forms_1.Validators.required]),
            monthlyRevenue: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    TestTaskComponent.prototype._initLinkingForm = function () {
        this.linkingForm = new forms_1.FormGroup({
            sellerNumber: new forms_1.FormControl('', [forms_1.Validators.required]),
            publicKey: new forms_1.FormControl('', [forms_1.Validators.required]),
            privateKey: new forms_1.FormControl('', [forms_1.Validators.required]),
            agree: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    TestTaskComponent.prototype.isDisabled = function (value) {
        return !value;
    };
    TestTaskComponent.prototype.isSeller = function () {
        if (this.sellerControl.value === '') {
            return null;
        }
        return this.sellerControl.value === '1';
    };
    TestTaskComponent = __decorate([
        core_1.Component({
            selector: 'kt-test-task',
            template: __webpack_require__(/*! ./test-task.component.html */ "./src/app/views/pages/test-task/test-task.component.html"),
            styles: [__webpack_require__(/*! ./test-task.component.scss */ "./src/app/views/pages/test-task/test-task.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestTaskComponent);
    return TestTaskComponent;
}());
exports.TestTaskComponent = TestTaskComponent;


/***/ }),

/***/ "./src/app/views/pages/test-task/test-task.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/test-task/test-task.module.ts ***!
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// Material Modules
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// Core Module
var core_module_1 = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
// Test Task Component
var test_task_component_1 = __webpack_require__(/*! ./test-task.component */ "./src/app/views/pages/test-task/test-task.component.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var TestTaskModule = /** @class */ (function () {
    function TestTaskModule() {
    }
    TestTaskModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: test_task_component_1.TestTaskComponent
                    }
                ]),
                core_module_1.CoreModule,
                material_1.MatStepperModule,
                material_1.MatRadioModule,
                material_1.MatButtonModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatIconModule,
                material_1.MatTooltipModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            declarations: [
                test_task_component_1.TestTaskComponent
            ]
        })
    ], TestTaskModule);
    return TestTaskModule;
}());
exports.TestTaskModule = TestTaskModule;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-test-task-test-task-module.js.map