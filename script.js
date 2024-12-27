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
        pixel.addEventListener("mouseover", function(e) {
            let target = e.currentTarget;
            target.classList.add("etch");
            colorMe(e);
        });
    }
}

function colorMe(e) {
    let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";

    for(let i = 0; i < 6; i++)
    {
        let randNum = Math.floor(Math.random() * 16); 
        randHex = hexValues[randNum];
        hexColor = hexColor.concat(randHex);
    }

    /*
    let targets = document.querySelectorAll(".etch");
    targets.forEach(target => {
        target.style.backgroundColor = hexColor;
    });   
    */
    let pixel = e.currentTarget;
    pixel.style.backgroundColor = hexColor;
}

//console.log(pxTotalArea);
//console.log(pxWLen);