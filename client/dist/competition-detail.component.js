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
/**
 * Created by Kong on 3/19/2017.
 */
var core_1 = require('@angular/core');
var competition_1 = require('./competition');
var CompetitionDetailComponent = (function () {
    function CompetitionDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', competition_1.Competition)
    ], CompetitionDetailComponent.prototype, "competition", void 0);
    CompetitionDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-competition-detail',
            template: "\n    <div *ngIf=\"competition\">\n      <h2>{{competition.competitionName}} details!</h2>\n      <div>\n        <label>id: </label>{{competition.id}}\n      </div>\n      <div>\n        <label>competitionName: </label>\n        <input [(ngModel)]=\"competition.competitionName\" placeholder=\"competitionName\"/>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CompetitionDetailComponent);
    return CompetitionDetailComponent;
}());
exports.CompetitionDetailComponent = CompetitionDetailComponent;
//# sourceMappingURL=competition-detail.component.js.map