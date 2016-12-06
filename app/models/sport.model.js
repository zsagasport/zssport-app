"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("./base.model");
var SportModel = (function (_super) {
    __extends(SportModel, _super);
    function SportModel() {
        _super.apply(this, arguments);
    }
    SportModel.prototype.stringify = function () {
        return JSON.stringify({
            _id: this.id,
            title: this.title
        });
    };
    return SportModel;
}(base_model_1.BaseModel));
exports.SportModel = SportModel;
//# sourceMappingURL=sport.model.js.map