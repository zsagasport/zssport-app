"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("../base.model");
var ClubModel = (function (_super) {
    __extends(ClubModel, _super);
    function ClubModel(id, country, title) {
        if (id === void 0) { id = 0; }
        _super.call(this, id);
        this.country = country;
        this.title = title;
    }
    ClubModel.prototype.stringify = function () {
        return JSON.stringify({
            _id: this.id,
            country: this.country,
            title: this.title
        });
    };
    return ClubModel;
}(base_model_1.BaseModel));
exports.ClubModel = ClubModel;
//# sourceMappingURL=club.model.js.map