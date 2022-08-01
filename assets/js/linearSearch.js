var container = document.getElementById("array");

// Asynchronous LinearSearch function
async function LinearSearch(delay = 300) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");

//Extracting the value entered by the user
    var num = document.getElementById("fname").value;

//Changing the color of all the blocks to violet
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#6b5b95";
    }

    output.innerText = "";

    var flag = 0;
// LinearSearch Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        //Changing the color of current block to red
        blocks[i].style.backgroundColor = "#FF4949";

        // To wait for .1 sec
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        //Extracting the value of current block
        var value = Number(blocks[i].childNodes[0].innerHTML);

        // To compare block value with entered value
        if (value == num) {
            flag = 1;
            output.innerText = "Element Found";
            blocks[i].style.backgroundColor = "#13CE66";
            break;
        } else {
            // Changing the color to the previous one
            blocks[i].style.backgroundColor = "#6b5b95";
        }
    }
//When element is not found in the array
    if (flag == 0) {
        output.innerText = "Element Not Found";
    }
}
// Calling generatearray function
//sortMain.generateInitialArray(sizeNum);
