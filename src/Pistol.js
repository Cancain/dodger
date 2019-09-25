"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pistol = /** @class */ (function () {
    function Pistol() {
        var _this = this;
        this.width = 5;
        this.height = 5;
        this.movementSpeed = 950;
        this.color = 0xffffff;
        this.shoot = function (scene, startPos, pointer) {
            _this.model = scene.add.rectangle(startPos.x, startPos.y, _this.width, _this.height, _this.color);
            var bullet = _this.model.body;
            scene.physics.add.existing(_this.model);
            scene.physics.moveToObject(_this.model, pointer, 700);
            return bullet;
        };
    }
    return Pistol;
}());
exports.default = Pistol;
//# sourceMappingURL=Pistol.js.map