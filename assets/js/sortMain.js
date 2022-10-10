var sizeNum1 = document.getElementById("arraySize")[0].value;
var sizeNum = parseInt(sizeNum1);
var divs = [];
var firstTime = 1;

var speedStr = document.getElementById("speedVal")[0].value;
var speed = parseInt(speedStr);

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
        array_ele.style.width = `${560/sizeNum}px`
        array_ele.style.transform = `translate(${i * (600/sizeNum)}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        if(sizeNum<40) {

            array_ele_label.innerText = value;
        }

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

function swap(b1, b2){
    return new Promise((resolve) => {

        // For exchanging styles of two blocks
        var temp = b1.style.transform;
        b1.style.transform = b2.style.transform;
        b2.style.transform = temp;

        window.requestAnimationFrame(function() {

            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(b2, b1);
                resolve();
            }, 250);
        });
    });
}

async function BubbleSort(delay = speed) {
    var blocks = document.querySelectorAll(".block");

    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {

            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                .childNodes[0].innerHTML);

            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }

            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }

        //changing the color of greatest element
        //found in the above traversal
        blocks[blocks.length - i - 1]
            .style.backgroundColor = "#343920";
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

    for (var i = 0; i < sizeNum; i++) {
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
//quick sort
async function lometo_partition(l, r, delay = speed*7) {

    var blocks = document.querySelectorAll(".block");

    // Storing the value of pivot element
    var pivot = Number(blocks[r].childNodes[0].innerHTML);
    var i = l - 1;
    blocks[r].style.backgroundColor = "red";

    for (var j = l; j <= r - 1; j++) {
        // To change background-color of the
        // blocks to be compared
        blocks[j].style.backgroundColor = "yellow";
        // To wait for 700 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
        var value =
            Number(blocks[j].childNodes[0].innerHTML);

        // To compare value of two blocks
        if (value < pivot) {
            i++;
            var temp1 = blocks[i].style.height;
            var temp2 = blocks[i].childNodes[0].innerText;
            blocks[i].style.height = blocks[j].style.height;
            blocks[j].style.height = temp1;
            blocks[i].childNodes[0].innerText =
                blocks[j].childNodes[0].innerText;
            blocks[j].childNodes[0].innerText = temp2;
            blocks[i].style.backgroundColor = "orange";
            if (i != j) blocks[j].style.backgroundColor = "pink";
            //To wait for 700 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
        } else blocks[j].style.backgroundColor = "pink";
    }
    // Swapping the ith with pivot element
    i++;
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[r].style.height;
    blocks[r].style.height = temp1;
    blocks[i].childNodes[0].innerText =
        blocks[r].childNodes[0].innerText;
    blocks[r].childNodes[0].innerText = temp2;
    blocks[r].style.backgroundColor = "pink";
    blocks[i].style.backgroundColor = "green";

    // To wait for 2100 milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay * 3)
    );
    //document.getElementsByClassName("range")[0].innerText = "";
    for (var k = 0; k < sizeNum; k++)
        blocks[k].style.backgroundColor = "#6b5b95";
    return i;
}


async function QuickSort(l, r, delay = speed) {
    if(firstTime == 1){
        r = sizeNum-1;
        firstTime = firstTime+1;
        if (l < r) {
            // Storing the index of pivot element after partition
            var pivot_idx = await lometo_partition(l, r);
            // Recursively calling quicksort for left partition
            await QuickSort(l, pivot_idx - 1);
            // Recursively calling quicksort for right partition
            await QuickSort(pivot_idx + 1, r);

        }
    }else{
        if (l < r) {
            // Storing the index of pivot element after partition
            var pivot_idx = await lometo_partition(l, r);
            // Recursively calling quicksort for left partition
            await QuickSort(l, pivot_idx - 1);
            // Recursively calling quicksort for right partition
            await QuickSort(pivot_idx + 1, r);
        }
    }

}

function Randomize(){
    deletePreviousArray();
    generateInitialArray();
}


function deletePreviousArray(){
    for (var i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
}

function updateArray(){
    deletePreviousArray();
    sizeNum = document.getElementById("arraySize").value;
    firstTime= 1;
    generateInitialArray();
}

window.onload = updateArray();
