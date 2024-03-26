$(document).ready(function () {
  $("#mybtn").on("click", function () {
    red(); 

  });
   $(".reply").click(function(){
    $(this).parents("div.row").next("div.card").toggle("slow")
   })
});

function red() {
  var dost = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("mybtn");

  if (dost.style.display === "none") {
    dost.style.display = "inline";
    btn.innerHTML = "عرض المزيد";
    more.style.display = "none";
  } else {
    dost.style.display = "none";
    btn.innerHTML = "عرض عناصر اقل ";
    more.style.display = "inline";
  }
}

