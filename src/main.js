import { journal } from './journal';
import { pingPong } from './pingpong';
import './styles.css';

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#journal-entry-form').submit(function(event){
    event.preventDefault();
    // The event.preventDefault() method stops the default action of an element from happening. For example: Prevent a submit button from submitting a form. Prevent a link from following the URL
    var titleInput = $("input#title").val();
    var entryInput = $("input#entry").val();

    $(".post-title").append(titleInput);
    $(".post-body").append(entryInput);
    $("#post").show();
  });
});
