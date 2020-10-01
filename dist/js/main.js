function getHost()
{
 $.get("https://avi-sayen.github.io/Anime/",
   function(url) { 
generateLinks(url);});
}


function generateLinks(hostUrl) {
$.getJSON('http://avi-sayen.github.io/docs/links.json',
{ 
   get_param: 'value' }, function(data) {
   $.each(data, function(index, element) {
   $("#loading-text").hide();
   $('#links').append(
    "<div class='media text-muted pt-3'>",
        "<div class='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>",
             "<strong class='text-gray-dark'>",
                   "<a href='" + hostUrl  + element.url +  "'> " + element.name + "</a>",
              "</strong>",
        "</div>",
    "</div>");
  }); 
});
}

getHost();