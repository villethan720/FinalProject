const searchPart = document.getElementById("searchBar");

function partInventory(part1, part2, part3, part4, part5, part6, part7, part8) {
    this.exhaust = part1,
    this.spoiler = part2,
    this.turbo = part3,
    this.hood = part4,
    this.rims = part5,
    this.fender = part6,
    this.muffler = part7,
    this.steeringWheel = part8
}

var allPart = new partInventory("exhaust", "spoiler", "turbo", "hood", "rims", "fender", "muffler", "steering wheel");


function findPart(input) {
    if (input === "exhaust") {
        alert("This part is available");
    }

    else if (input === allPart.spoiler) {
        alert("This part is available");
    }

    else if (input === allPart.turbo) {
        alert("This part is available");
    }

    else if (input === allPart.hood) {
        alert("This part is available");
    }

    else if (input === allPart.rims) {
        alert("This part is available");
    }

    else if (input === allPart.fender) {
        alert("This part is available");
    }

    else if (input === allPart.muffler) {
        alert("This part is available");
    }

    else if (input === allPart.steeringWheel) {
        alert("This part is available");
    }

    


}

