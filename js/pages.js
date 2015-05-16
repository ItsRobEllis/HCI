$(document).ready(function(){

    function hideAll(){
        //Fades Out all articles
        $(".Article1").fadeOut();
        $(".Article2").fadeOut();
        $(".Article3").fadeOut();
        $(".Article4").fadeOut();
    };

    $(".Menu-Element").click(function(){
        //Get the ID of the clicked button
        var clickedID = $(this).attr('id');


        //Fade out the appropriate article
        switch (clickedID) {
        case 'button1':
            hideAll();
            $(".Article1").delay(200).fadeIn();
            break;
        case 'button2':
            hideAll();
            $(".Article2").delay(200).fadeIn();
            break;
        case 'button3':
            hideAll();
            $(".Article3").delay(200).fadeIn();
            break;
        case 'button4':
            hideAll();
            $(".Article4").delay(200).fadeIn();
            break;
        }
    });
});
