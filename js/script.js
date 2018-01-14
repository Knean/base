$(function() {
  images = ["images\\laptop-mobile_small.jpg","images\\laptop-on-table_small.jpg", "images\\people-office-group-team_small.jpg"]
  // jQuery goes here..."""")
  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fvvvvvvadeOut(2000);

  var i = 0+images.length;
  
  
    $("#pics").on("click",function(){
   
      $(this).prop("src",images[i % images.length])
      ++i;
     
      
    })
  $("#btn-click").click(function(event){
    console.log(event)
     alert("button was clicked");

  })
  /* $(".red-box").fadeTo(2000,0.5) */
  $(".red-box").hover(function(){$(this).fadeTo(2000,0.1)},function(){$(this).stop()})
  $(".green-box").hover(function(event)
    {
      $(this).html("i was hovered");   
    })
});