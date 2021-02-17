function Lab2(){
    let goOn = true;
    while( goOn)
    {



        let width = prompt("Please input a width for your room.");
        let height = prompt("Please enter a height for your room.");
        let length = prompt("Please enter a length for your room.");

        let perimeter= 2*width + 2*length;
        console.log(`Perimeter: ${perimeter}`);

        let area = length * width;
        console.log(`Area: ${area}`);

        let volume = length * width * height;
        console.log(`Volume: ${volume}`);

        goOn=  ContinueRunning();
    }
}
function ContinueRunning(){
    let response= prompt("Would you like to continue? Y/N")
    if("y"===response.toLowerCase().trim())
    {
        return true;
    }
    else if ("n"===response.toLowerCase().trim())
    {
        return false;
    }
    else
    {
        alert("try again!");
        return ContinueRunning();
    }
}

function Lab2ViaTheDom(){
    let height = document.getElementById("Height").nodeValue;
    console.log("Height");
}