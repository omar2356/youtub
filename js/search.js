$(document).ready(function(){
    $("#s-f-i").click(function() {
        $(".filter-column").slideToggle("slow")
      })
      $("input:checkbox").click(function ()   {
        var $box = $(this)
        if($box.is(":checked")) {
            var grob = "input:checkbox[name='" + $box.attr("name") + "']";
            $(grob).prop("checked",false)
            $box.prop("checked",true)
        }

    })
})