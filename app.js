var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getYouTubeData(searchTerm, callback) {
  var query = {
    part: "snippet",
    key: "AIzaSyC4454ERtY26uudb6dEFAVw2Zmlt5j_M6s",
    q: searchTerm,
    maxResults: 10
  };
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}

function displayData(data) {
  var resultElement = '<p>No Results</p>';
  if (data.items) {
    resultElement = data.items.map(function(item) {
      return '<a href="https://www.youtube.com/watch?v=M1djO19aSFQ" class="iframe" data-featherlight="iframe"><img src="' + item.snippet.thumbnails.medium.url + '" class="thumbnail"/></a>';
    });
  }
  $('.js-search-results').html(resultElement);
}

$(function eventHandlers() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault;
    var userSubmit = $(event.currentTarget).find('.js-query').val();
    getYouTubeData(userSubmit, displayData);
  });
  // $('.iframe').featherlight($('.thumbnail'));

});
/*
Tasks:
  - Accept a user search term
  - Get JSON from the YouTube API based on the user search term
  - Display the thumbnail image of the returned videos

How to get video pics:
    - <img src="'+ thumbnail.url+ '">
*/
// https://www.googleapis.com/youtube/v3/search/?part=snippet&q=dog&key=AIzaSyC4454ERtY26uudb6dEFAVw2Zmlt5j_M6s
