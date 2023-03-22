//activate navbar links on click
$(function() {
    $(".nav a").click(function()  {
        $("nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});



save_btn = document.querySelector(".save-btn");

save_btn.onclick = function () {
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Changes Saved";
        this.style = "pointer-events: none";
    }, 2000)
}