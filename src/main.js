// import { Journal } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-entry').submit(function(event){
    event.preventDefault();
    var titleInput = $("input#title").val();
    var entryInput = $("input#entry").val();

    $("#post-title").text(titleInput);
    $("#post-body").text(entryInput);
    $('#journal-entry').hide();
    $('#post').show();
  });
});
