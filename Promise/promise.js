let promise = new Promise((resolve, reject) => {
    //...some code
    let a = true
    if (a) {
        resolve(value)
    } else {
        reject(error)
    }

})

promise.then((value) => {
    //success
}, (error) => {
    //failure
})
// promise封装ajax
let getJSON = function (url) {
    let promise = new Promise(function (resolve, reject) {
        let client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4){
                return;
            }
            if (this.status === 200){
                resolve(this.response)
            }else {
                reject(new Error(this.statusText))
            }
        }
    })
}

