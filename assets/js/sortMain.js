var sizeNum = document.getElementById("arraySize").value;
var div_sizes = [];
var divs = [];
//var cont = document.getElementsById("array");

function generateInitialArray1(){
    for (var i = 0; i < sizeNum; i++) {
        var value = Math.ceil(Math.random() * 100);

        divs[i] = document.createElement("div");

        divs[i].classList.add("block");

        divs[i].style.height = `${value * 3}px`;
        divs[i].style.transform = `translate(${i * 30}px)`;

        var array_ele_label = document.createElement("label");
        divs[i].classList.add("block_id");
        divs[i].innerText = value;

        divs[i].appendChild(array_ele_label);
        container.appendChild(divs[i]);
    }

}

// Function to generate the array of blocks
function generateInitialArray() {
    for (var i = 0; i < sizeNum; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);

        // Creating element div
        var array_ele = document.createElement("div");
        divs[i] = array_ele;

        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);

    }
}


function deletePreviousArray(){
    for (var i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
}


function updateArray(){
    deletePreviousArray();
    sizeNum = document.getElementById("arraySize").value;
    generateInitialArray();
}

window.onload = updateArray();
