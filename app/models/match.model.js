"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("./base.model");
var MatchModel = (function (_super) {
    __extends(MatchModel, _super);
    function MatchModel() {
        _super.apply(this, arguments);
    }
    MatchModel.prototype.stringify = function () {
        return JSON.stringify({
            _id: this.id,
            awayClub: this.awayClub,
            awayGoals: this.awayGoals,
            date: this.date,
            finished: this.finished,
            homeClub: this.homeClub,
            homeGoals: this.homeGoals,
            round: this.round
        });
    };
    return MatchModel;
}(base_model_1.BaseModel));
exports.MatchModel = MatchModel;
//# sourceMappingURL=match.model.js.map