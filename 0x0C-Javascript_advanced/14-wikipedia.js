const createElement = (data) => {
    var x = document.createElement("P");
    var t = document.createTextNode(data);
    x.appendChild(t);
    document.body.appendChild(x);
}

const queryWikipedia = (callback) => {
    var req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    callback(data);
}
