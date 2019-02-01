

$(document).ready(function() {
   
    $("#form-gif-request").submit(fetchAndDisplayGif); 
});

function fetchAndDisplayGif(event) {
    var $body = $('body');
 
    event.preventDefault();
    
    
    var searchQuery = $('#tag').val();
    
   
    var params = { 
        api_key: "dc6zaTOxFJmzC", 
        tag : "Jackson 5", searchQuery, 
    };
    
    var giphyUrl = 'https://api.giphy.com/v1/gifs/random';
    $.ajax({
        url: giphyUrl,
        data: params, 
        
        success: function(response) {
            var riddle = $('#tag2').val()
            if (riddle == '5'){
              
                $("#loading").text('Just one second while we load your gif!');
                                           
                $("#gif").attr("src", response.data.image_url);
                $("#loading").hide();
            } 
            else {$("#nogif").text('No Gif for you!');
            }
            
            // TODO
            // 2. hide the feedback message and display the image
        },
        error: function() {
           
            $("#feedback").text("Sorry, could not load GIF. Try again!");
            setGifLoadedStatus(false);
        }
    });
    
      
}


/**
 * toggles the visibility of UI elements based on whether a GIF is currently loaded.
 * if the GIF is loaded: displays the image and hides the feedback label
 * otherwise: hides the image and displays the feedback label
 */
function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
}

