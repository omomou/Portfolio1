console.log("javascript");

console.log("javascript");

var container = document.getElementById("container");

for (var i = 0; i < 5; i++) {
    
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "Paragraph " + (i + 1);


    container.appendChild(newParagraph);
}

function changeColors() {
    document.body.style.backgroundColor = "#4CAF50"; 
    container.style.backgroundColor = "#fff"; 
    container.style.color = "#333"; 
}

changeColors();