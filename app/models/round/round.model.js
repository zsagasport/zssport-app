"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("../base.model");
var RoundModel = (function (_super) {
    __extends(RoundModel, _super);
    function RoundModel() {
        _super.apply(this, arguments);
    }
    RoundModel.prototype.stringify = function () {
        return JSON.stringify({
            _id: this.id,
            num: this.num
        });
    };
    return RoundModel;
}(base_model_1.BaseModel));
exports.RoundModel = RoundModel;
//# sourceMappingURL=round.model.js.map