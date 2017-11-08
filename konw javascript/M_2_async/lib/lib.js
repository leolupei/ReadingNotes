function ajax(url, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.addEventListener("readystatechange", (evt) => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200 || xhr.status == 304) {
                fn(null, xhr.response);
            }
            else {
                fn(new Error(xhr.statusText))
            }
        }

    });
    xhr.addEventListener('error', (evt) => fn(new Error(xhr.statusText)));
    xhr.send();
}