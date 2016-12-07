"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("../base.model");
var SeasonModel = (function (_super) {
    __extends(SeasonModel, _super);
    function SeasonModel(id, end, start, title) {
        if (id === void 0) { id = 0; }
        _super.call(this, id);
        this.end = end;
        this.start = start;
        this.title = title;
    }
    SeasonModel.prototype.stringify = function () {
        return JSON.stringify({
            _id: this.id,
            end: this.end,
            start: this.start,
            title: this.title
        });
    };
    return SeasonModel;
}(base_model_1.BaseModel));
exports.SeasonModel = SeasonModel;
//# sourceMappingURL=season.model.js.map