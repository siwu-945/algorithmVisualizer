var container = document.getElementById("array");
var btn = document.getElementsByClassName("nav-link");

var clicked1 = true;
var clicked2 = false;

btn[0].onclick = function(){
    clicked1 = true;
    clicked2 = false;
}
btn[2].onclick = function(){
    clicked1 = false;
    clicked2 =true;
}

const sleep = (time) =>{
    return new Promise(resolve => setTimeout(resolve, time));
}

function searchAlgo(delay = 300) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");
    var searchAlgoName = document.getElementById("algoName");
    var worstTimeComplex = document.getElementById("Worst Case");
    var bestTimeComplex = document.getElementById("Best_case");
    if(clicked1){
        searchAlgoName.innerText = "Time Complexity of Linear Search is:"
        worstTimeComplex.innerText="Worst Case: O(n)";
        bestTimeComplex.innerText="Best Case: Ω(1)";
    }else if(clicked2){
        searchAlgoName.innerText = "Time Complexity of Binary Search is:"
        worstTimeComplex.innerText="Worst Case: O(log n)";
        bestTimeComplex.innerText="Best Case: Ω(1)";
    }


//Extracting the value entered by the user
    var num = document.getElementById("fname").value;

//initialize the color of blocks
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#343920";
    }

    output.innerText = "";

    var flag = 0;
// LinearSearch Algorithm
    const linearSearch = async () => {
        for (var i = 0; i < blocks.length; i += 1) {
            //Changing the color of current block to red
            blocks[i].style.backgroundColor = "#FF4949";
            await sleep(300);
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
                blocks[i].style.backgroundColor = "#343920";
            }
        }
    }

    //binary search Algorithm
    var bFlag = 0;
    var start = 0;
    var end = 20-1;
    const binarySearch = async() => {
        while (start <= end){
            var mid = Math.floor((start + end) /2);

            blocks[mid].style.backgroundColor = "#FF4949";

            var value = Number(blocks[mid].childNodes[0].innerHTML);

            await sleep(300);

            if (value == num){
                output.innerText = "Element Found";
                blocks[mid].style.backgroundColor = "#13CE66";
                bFlag = 1;
                break;
            }
            if(value > num){
                end = mid-1;
                blocks[mid].style.backgroundColor = "#343920"
            }else{
                start = mid +1;
                blocks[mid].style.backgroundColor = "#343920";
            }
        }
        if (bFlag == 0) {
            output.innerText = "Element Not Found";
        }
    }
    if(clicked1 === true){
        linearSearch().then(r=>console.log("error"));
    }
    else if(clicked2 === true) {
        binarySearch().then(r => console.log("error"));
    }

//When element is not found in the array
    if (flag == 0) {
        output.innerText = "Element Not Found";
    }
}
