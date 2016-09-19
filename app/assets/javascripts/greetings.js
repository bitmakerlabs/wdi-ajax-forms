// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {


  $('#greeting-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: "/greetings",
      method: "post",
      dataType: "html",
      data: $(this).serialize()
    }).done(function(returnedData) {
      $('#greeting-list').prepend(returnedData);
    });
  });


});