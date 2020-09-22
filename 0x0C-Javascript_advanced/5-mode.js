const changeMode = (size, weight, transform, background, color) => {
    return function() {
        document.body.style["font-size"] = size;
        document.body.style["font-weight"] = weight;
        document.body.style["text-transform"] = transform;
        document.body.style["background-color"] = background;
        document.body.style["color"] = color;
    }   
}

const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
const screenMode = changeMode(12, "normal", "lowercase", "white", "black");

const main = () => {
    var x = document.createElement("P");                        // Create a <p> element
    var t = document.createTextNode("Welcome Holberton!");      // Create a text node
    x.appendChild(t);                                           // Append the text to <p>
    document.body.appendChild(x);                               // Append <p> to <body>

    var x = document.createElement("BUTTON");
    var t = document.createTextNode('Spooky');
    x.setAttribute("onClick", "spooky()");
    x.appendChild(t);
    document.body.appendChild(x);

    var x = document.createElement("BUTTON");
    var t = document.createTextNode('Dark mode');
    x.setAttribute("onClick", "darkMode()");
    x.appendChild(t);
    document.body.appendChild(x);

    var x = document.createElement("BUTTON");
    var t = document.createTextNode('Screen Mode');
    x.setAttribute("onClick", "screenMode()");
    x.appendChild(t);
    document.body.appendChild(x);
}

main()