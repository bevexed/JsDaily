"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeSameItem = removeSameItem;
//去除数据中重复数据
function removeSameItem(arr) {
    return Array.from(new Set(arr));
}
//# sourceMappingURL=数组去重.js.map