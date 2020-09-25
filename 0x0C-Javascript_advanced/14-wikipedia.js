function createElement(data) {
    var x = document.createElement("P");
    var t = document.createTextNode(data);
    x.appendChild(t);
    document.body.appendChild(x);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    req.onreadystatechange = function (event) {
      if(req.readyState === 4) {
        if(req.status === 200) {
          callback(null, JSON.parse(req.responseText))
        } else {
          const error = new Error('Error');
          return callback(error, null);
        }
      }
    }
    req.send();
  }
  
  queryWikipedia(createElement);
