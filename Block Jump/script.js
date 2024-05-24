// var character = 
// document.getElementById("character");
// var block = document.getElementById("block");
// function jump() {
//     character.classList.add("animate");
//     setTimeout(function() {
//         character.classList.remove("animate");
//     }, 500);
// }

document.addEventListener('DOMContentLoaded', function() {
    var character = document.getElementById("character");
    var block = document.getElementById("block");

    function jump() {
        if (!character.classList.contains("animate")) {
            character.classList.add("animate");
            setTimeout(function() {
                character.classList.remove("animate");
            }, 500);
        }
    }

    document.addEventListener('click', function() {
        jump();
    });
});
