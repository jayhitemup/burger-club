$(document).ready(function() {

    var name = $("#name").val();
    var email = $("#name").val();
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("signbtn");
    var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(".col-sm-6").mouseover(function(){
    $(this).animate({
        paddingTop: "15px"
    }, 100);
}).mouseout(function(){
    $(this).animate({
        paddingTop: "10px"
    }, 100);
});

});