

$(document).ready(function() {
    // register our function as the "callback" to be triggered by the form's submission event
    $("#form-gif-request").submit(fetchAndDisplayGif); // in other words, when the form is submitted, fetchAndDisplayGif() will be executed
});


/**
 * sends an asynchronous request to Giphy.com aksing for a random GIF using the 
 * user's search term (along with "jackson 5")
 * 
 * upon receiving a response from Giphy, updates the DOM to display the new GIF
 */
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
            } 
            else {$("#nogif").text('No Gif for you!');
            }
            
            // TODO
            // 1. set the source attribute of our image to the image_url of the GIF
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

