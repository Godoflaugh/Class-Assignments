//Documentation for adjusting size of box in external JS linked to html//
    document.getElementById("button1").addEventListener("click", function(){
        document.getElementById("box").style.height = "400px";
        document.getElementById("box").style.width = "400px";
    });



//Making the box smaller
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.height = "40px";
    document.getElementById("box").style.width = "40px";
});

//Making the box reset it's size
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px"
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "Orange";
    document.getElementById("box").style.opacity = "1";
});


//Making the box blue
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";

});

//fadeout effect
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0";
});



