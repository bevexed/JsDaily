"use strict";

function ate() {
    var arr = [];
    var arr2 = [];
    this.shopCateListData.forEach(function (c) {
        if (arr2.length === 8) {
            arr2 = [];
        }
        if (arr2.length === 0) {
            arr.push(arr2);
        }
        arr2.push(c);
    });
    return arr;
}
//# sourceMappingURL=fenZhu.js.map