
var counter = 0;

//Up counter
function tickUp() {
    counter += 1;
    document.getElementById("counter").innerHTML = counter;

}

//Down Counter
function tickDown(){
    counter -= 1;
    document.getElementById("counter").innerHTML = counter;

}

//For loop function
function runForLoop() {

    let outputElement = document.getElementById("forLoopResult");

    let htmlOutput = "";

    for (let i = 0; i <= counter; i++) {
        //document.getElementById("forLoopResult").innerHTML = i;

        htmlOutput += i+" ";

    }

    outputElement.innerHTML = htmlOutput;


}

//show the odd numbers
function showOddNumbers() {

    let outputElement = document.getElementById("oddNumberResult");

    let htmlOutput = "";

    for (let i = 0; i <= counter; i++) {
        //document.getElementById("forLoopResult").innerHTML = i;

        if (i != 0 && i % 2 == 1) {

            htmlOutput += i+" ";

        }
    }

    outputElement.innerHTML = htmlOutput;

}

//multiples of 5
function addMultiplesToArray() {

    const array = [];

    for (let i = 0; i <= counter; i++) {

        if (i != 0 && i % 5 == 0) {

            array.push(i);

        }

    }

    const reversed = array.reverse();
    console.log(reversed);

}

//print car
function printCarObject() {

    const type = document.getElementById("carType");
    const mpg = document.getElementById("carMPG");
    const color = document.getElementById("carColor");

    const labeltype = type.value;
    const labelmpg = mpg.value;
    const labelcolor = color.value;

    const typedescribed = "cType: " + "'"+labeltype+"',";
    const mpgdescribed = "cMPG: " + "'"+labelmpg+"',";
    const colordescribed = "cColor: " + "'"+labelcolor+"'";

    console.log(typedescribed, mpgdescribed, colordescribed);

}


//fill car stuff with presets
function loadCar(carNumber) {

    let fillcar;

    if (carNumber === 1) {

        fillcar = carObject1;

    } 
    else if (carNumber === 2) {

        fillcar = carObject2;

    } 
    else if (carNumber === 3) {

        fillcar = carObject3;

    }

    document.getElementById("carType").value = fillcar.cType;
    document.getElementById("carMPG").value = fillcar.cMPG;
    document.getElementById("carColor").value = fillcar.cColor;
    

}


//required colors
const colors = ["red", "green", "blue"];
//color change
function changeColor(colorNumber) {


    const paragraph = document.getElementById("styleParagraph");


    const color = colorNumber - 1;


    if (color >= 0 && color < colors.length) {


        paragraph.style.color = colors[color];


    }

}
