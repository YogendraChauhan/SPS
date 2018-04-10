"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Angular imports
var core_1 = require("@angular/core");
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.clickEvent = new core_1.EventEmitter();
        this.defaultOptions = {
            className: 'btn',
            type: 'button',
            disabled: false,
            value: 'Button'
        };
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.options = Object.assign({}, this.defaultOptions, this.options);
    };
    ButtonComponent.prototype.onClick = function (event) {
        this.clickEvent.emit(event);
    };
    __decorate([
        core_1.Input('options')
    ], ButtonComponent.prototype, "options");
    __decorate([
        core_1.Output('clickEvent')
    ], ButtonComponent.prototype, "clickEvent");
    ButtonComponent = __decorate([
        core_1.Component({
            selector: 'sps-button',
            templateUrl: './button.component.html',
            styleUrls: ['./button.component.less']
        })
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
