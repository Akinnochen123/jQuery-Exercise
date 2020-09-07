//question1
$(function(){
    console.log(`Lets get ready to party with jquery`);
})

$(function(){
  //question2 
  $("img").addClass("image-centre");

  //question3
  $("article").find("p").eq(-1).remove();

  //question4
  $("#title").css("font-size",`${Math.floor(Math.random()*100)}px`);

  //question5
  $("ol").append($("<li>").text("Whatever I want"));

  //question6 
  $("aside").empty().append($("<p>").text("Sorry, the list wasn't necessary"));

  //question7
  $("img").on("click",function(){
    this.remove();
})

//question8
$('img').on('click', function(e) {
    $(e.target).remove()
}) 


})

