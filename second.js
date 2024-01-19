window.onload = function() {
    //custom cursor
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

function getRandomPosition(element) {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // Get dimensions of the element
    var elementWidth = element.clientWidth;
    var elementHeight = element.clientHeight;

    // Calculate maximum X and Y positions to avoid overlapping with the viewport boundaries
    var maxX = viewportWidth - elementWidth;
    var maxY = viewportHeight - elementHeight;

    // Generate random X and Y positions
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
};
    
var images = document.querySelectorAll('.icon');

// Iterate through each image and set a random position
images.forEach(function(image) {
    var newPosition = getRandomPosition(image);
    
    // Set the new position using CSS
    image.style.position = 'absolute';
    image.style.left = newPosition.x + 'px';
    image.style.top = newPosition.y + 'px';
});
    
    images.forEach(function(icon){
    //console.log(images);
    var targetId = icon.getAttribute("data-target");
    //console.log(targetId);
    var targetDiv = document.getElementById(targetId);
    //console.log(targetDiv);

    console.log(targetDiv.clientWidth)
        
    var divPos = [Math.floor(Math.random() * (window.innerWidth - 500)), Math.floor(Math.random() * (window.innerHeight - 350))];
    
    document.addEventListener("mousemove", function(event) {
        //when div overlaps with image
        var sameIcon = document.querySelector('[data-target="' + targetId + '"]')


        console.log(sameIcon.getBoundingClientRect())
        var iconDim = sameIcon.getBoundingClientRect();
        var divDim = new Object();  
        divDim["left"] = divPos[0];
        divDim["top"] = divPos[1];
        divDim["right"] = divPos[0] + 500;
        divDim["bottom"] = divPos[1] + 300;

        var overlapped = divDim["right"] > iconDim["left"] &&
        divDim["left"] < iconDim["right"] && divDim["bottom"] > iconDim["top"] &&
        divDim["top"] < iconDim["bottom"] 
        console.log(overlapped)

        if (overlapped) {
            //detemrine position to put div
            if((window.innerWidth - iconDim["right"]) > (iconDim["left"])) {
                targetDiv.style.left = iconDim["right"];
            } else {
                targetDiv.style.left = 0;
            }
            if((window.innerHeight - iconDim["bottom"]) > (iconDim["top"])) {
                targetDiv.style.top = iconDim["bottom"];
            } else {
                targetDiv.style.top = 0;
            }
        } else {
            targetDiv.style.left = divPos[0] + "px";
            targetDiv.style.top = divPos[1] + "px";
        }
        
    });
    
    icon.addEventListener("mouseover", function() {
        targetDiv.style.zIndex = 999;
        targetDiv.style.display = "block";
        //console.log("hllo")
    });
    
    icon.addEventListener("mouseout", function() {
        targetDiv.style.zIndex = 0;
        targetDiv.style.display = "none";
    });    
});
    
};

function refreshPage(){
    window.location.reload();
} 

