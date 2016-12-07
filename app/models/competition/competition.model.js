"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require('../base.model');
var CompetitionModel = (function (_super) {
    __extends(CompetitionModel, _super);
    function CompetitionModel(id, country, seasonId, sportId, title) {
        if (id === void 0) { id = 0; }
        _super.call(this, id);
        this.title = title;
    }
    CompetitionModel.prototype.stringify = function () {
        return JSON.stringify({
            _id: this.id,
            country: this.country,
            seasonId: this.seasonId,
            sportId: this.sportId,
            title: this.title
        });
    };
    return CompetitionModel;
}(base_model_1.BaseModel));
exports.CompetitionModel = CompetitionModel;
//# sourceMappingURL=competition.model.js.map