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
var core_1 = require('@angular/core');
var mock_competitions_1 = require('./mock-competitions');
var CompetitionService = (function () {
    function CompetitionService() {
    }
    // getCompetitions(): Promise<Competition[]> {
    //     return Promise.resolve(COMPETITIONS);
    // }
    // getCompetitionsSlowly(): Promise<Competition[]> {
    //     return new Promise(resolve => {
    //         // Simulate server latency with 2 second delay
    //         setTimeout(() => resolve(this.getCompetitions()), 2000);
    //     });
    // }
    CompetitionService.prototype.getHeroes = function () {
        return mock_competitions_1.COMPETITIONS;
    };
    CompetitionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CompetitionService);
    return CompetitionService;
}());
exports.CompetitionService = CompetitionService;
//# sourceMappingURL=competition.service.js.map