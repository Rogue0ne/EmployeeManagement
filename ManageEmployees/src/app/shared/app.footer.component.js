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
var app_common_services_1 = require("./app.common.services");
var AppFooterComponent = (function () {
    function AppFooterComponent(appCommonService) {
        this.appCommonService = appCommonService;
    }
    ;
    AppFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appCommonService.GetAppSettings()
            .then(function (resp) {
            _this.ContactContent = resp != null ? resp.AppSettings[_this.appCommonService.GetConfigData['ContactId']].SETTING_VALUE
                : '';
        });
    };
    ;
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    core_1.Component({
        selector: 'page-footer',
        templateUrl: './templates/app.footer.template.html',
        providers: [app_common_services_1.AppCommonServices]
    }),
    __metadata("design:paramtypes", [app_common_services_1.AppCommonServices])
], AppFooterComponent);
exports.AppFooterComponent = AppFooterComponent;
//# sourceMappingURL=app.footer.component.js.map