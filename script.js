let size = Number(prompt("Enter container size; min:2, max:100"));

//let containerWidth = size*51.6;
const pxTotalArea = 700 / size;

size = size * size;
const container = document.getElementById("container");


//container.style.width = `80vw`;
//container.style.height = `80vh`;

//const pxWL = Math.sqrt(pxTotalArea);
let pxWidthLen = `${pxTotalArea}px`;

console.log(size);

for (let i = 0; i < size; i++) {
    const pixel = document.createElement("div");
    pixel.style.width = pxWidthLen;
    pixel.style.height = pxWidthLen; 

    container.appendChild(pixel);
    //pixel.classList.add("etch");
    pixel.addEventListener("onmouseenter", function(e) {
        let target = e.currentTarget;
        target.classList.add("etch");
        colorMe();
    });
}

function colorMe() {
    let targets = document.querySelectorAll("etch");
    console.log(targets);
}

//console.log(pxTotalArea);
//console.log(pxWLen);