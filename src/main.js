import { JournalEntry } from './journal';
// import { Blog } from './blog';
import './styles.css';

$(document).ready(function() {
  $('#journal-entry').submit(function(event){
    event.preventDefault();
    var title = $("input#title").val();
    var entry = $("input#entry").val();

    $("#post-title").text(title);
    $("#post-body").text(entry);

    var testEntry = new JournalEntry( title, entry);
    $('#post-blog').text(testEntry);
    $('#journal-entry').hide();
    $('#post').show();
    $('#blog').show();
    console.log(testEntry);

  });
});
