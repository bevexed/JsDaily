"use strict";

//用已有数组制作二维数组
function sortByEach(all) {
    var arr = [];
    var arr2 = [];
    all.forEach(function (c) {
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
//# sourceMappingURL=lcy.personal.js.map