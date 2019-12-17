"use strict";

var promise = new Promise(function (resolve, reject) {
    //...some code
    var a = true;
    if (a) {
        resolve(value);
    } else {
        reject(error);
    }
});

promise.then(function (value) {
    //success
}, function (error) {
    //failure
});
// promise封装ajax
var getJSON = function getJSON(url) {
    var promise = new Promise(function (resolve, reject) {
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
};
//# sourceMappingURL=promise.js.map