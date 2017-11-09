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
var core_1 = require("@angular/core");
var app_common_services_1 = require("../shared/app.common.services");
var AppHeaderComponent = (function () {
    function AppHeaderComponent(commonService) {
        this.commonService = commonService;
        this.selected = false;
    }
    AppHeaderComponent.prototype.showSelected = function () {
        this.selected = !this.selected;
    };
    ;
    AppHeaderComponent.prototype.Logout = function () {
        var _this = this;
        this.commonService
            .Logout()
            .then(function (resp) {
            if (resp.Status === "Success") {
                window.location.href = _this.commonService.configData["HomePage"];
            }
            else {
                alert('Error occured in logout.');
            }
        });
    };
    ;
    AppHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.GetAppSettings()
            .then(function (resp) {
            if (resp != null) {
                _this.HomeUrl = resp.AppSettings[_this.commonService.configData["HomeUrl"]].SETTING_VALUE;
            }
            else {
                _this.HomeUrl = '';
            }
        });
    };
    return AppHeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppHeaderComponent.prototype, "username", void 0);
AppHeaderComponent = __decorate([
    core_1.Component({
        selector: 'page-header',
        templateUrl: './template/app.header.template.html',
        providers: [app_common_services_1.AppCommonServices]
    }),
    __metadata("design:paramtypes", [app_common_services_1.AppCommonServices])
], AppHeaderComponent);
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app.header.component.js.map