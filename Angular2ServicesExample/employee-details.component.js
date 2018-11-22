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
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.employees = [];
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; });
    };
    return EmployeeDetailsComponent;
}());
EmployeeDetailsComponent = __decorate([
    core_1.Component({
        selector: 'employee-details',
        template: "<h2>Employee Details</h2>\n                <ul *ngFor=\"let employee of employees\">\n                    <li>{{employee.id}}. {{employee.name}}</li>\n                </ul>\n              "
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeDetailsComponent);
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;
//# sourceMappingURL=employee-details.component.js.map