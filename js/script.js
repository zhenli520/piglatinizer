$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function(){
    let input = $(".input").val();
    let letter = "a";
    let vowelsList = ["a", "e", "i", "o", "u"];
    vowelsList.forEach(function(vowel){
        if (letter = vowel){
            input = input + "ay";
            return input
        } else(letter != vowel){

        }
    })
})






});
