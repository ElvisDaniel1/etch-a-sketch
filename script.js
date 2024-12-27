let size = null;

if (size == null)
{
    size = Number(prompt("Enter container size; min:2, max:100"));
    createContainer();
}
    

const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    size = form.elements.size.value;
    createContainer();
});

function createContainer() {

    const pxTotalArea = 700 / size;
    size = size * size;
    
    const container = document.getElementById("container");

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }


    let pxWidthLen = `${pxTotalArea}px`;

    for (let i = 0; i < size; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = pxWidthLen;
        pixel.style.height = pxWidthLen; 

        container.appendChild(pixel);
        pixel.classList.add("pixels");
        pixel.addEventListener("mousemove", function(e) {
            let target = e.currentTarget;
            target.classList.add("etch");
            colorMe();
        });
    }
}

function colorMe() {
    let targets = document.querySelectorAll(".etch");
    targets.forEach(target => {
        target.style.backgroundColor = "red";
    });   
    console.log(targets);
}
console.log(size);
//console.log(pxTotalArea);
//console.log(pxWLen);