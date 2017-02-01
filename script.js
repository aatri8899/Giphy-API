$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        var query = $("#query").val();
        console.log(query);
        $.ajax({
            // This is the URL of the API
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
        }).done(function(response) { // the .done function happens after the API response is returned
            console.log(response);

            // this is the jQuery way to create
            // a new image element
            var image = $('<img>');
            console.log(image);
            // when we create a new element,
            // jQuery returns an array. So we
            // need to look for the first item
            // in the image array

            $("#results").empty();

            
            console.log(response.data.length);
            for (var i = 0; i < response.data.length; i++) {
                console.log(i);
                var image2 = $('<img>');
                image2[0].src = response.data[i].images.fixed_width_downsampled.url;
                $("#results").append(image2);
            }

        });
    });
});
