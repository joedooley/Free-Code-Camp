$(document).ready(function() {
  var theQuote = "";
  var theAuthor = " ";
  var myTwitter = " @devdesignstampa"
  var tweetUrl = "https://twitter.com/intent/tweet?text="
  var mashapeApi = "https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies";
  
  
  $(".twitter").on("click", function() {
    var twitterUrl = tweetUrl + theQuote + ' ' + theAuthor + myTwitter;
    window.open(twitterUrl, 'twitter');
    return false;
  });
  
  $(".quote").on("click", function buildQuote() {
    var output = $.ajax({
      url: mashapeApi,
      type: 'GET',
      data:{},
      dataType: 'json',
      success: function(data) {
        theQuote = data.quote;
        theAuthor = data.author;
          document.getElementById('quote').innerHTML = theQuote;
          document.getElementById('author').innerHTML = theAuthor;
      },
      error: function(err) { 
        alert(err); 
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "PsX4MoAMtzmshVxBHXYzqc1oIprhp18x6pcjsniOVwp2UQeULv"); 
      }
    });
  });
});