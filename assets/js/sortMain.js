var sizeNum = document.getElementById("arraySize").value;
var div_sizes = [];
var divs = [];
//var cont = document.getElementsById("array");

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

function generateSortedArray(){
    var array = [];

    for(var i = 0; i<sizeNum; i++){
        var innerVal = Number(Math.ceil(Math.random()*100));
        array.push(innerVal);
    }

    array.sort(function (a, b){
        return a-b;
    });

    for (var i = 0; i < 20; i++) {
        var value = array[i];

        // Creating element div
        var array_ele = document.createElement("div");

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
    //generateInitialArray();
    generateSortedArray();
}

window.onload = updateArray();
