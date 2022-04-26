
//When fact button is click generate number between 0 and 4 (Number of facts in catFactArray)
$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass, Boo has released two books" ]


//When textPink button is pressed...//
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

//when textOrange button is pressed...//
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

//when textGreen button is pressed...//
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//when boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//when boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})