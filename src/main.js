import { Entry } from './entry';
import { Blog } from './blog';
import './styles.css';

$(document).ready(function() {
  $('#journal-entry').submit(function(event){
    event.preventDefault();
    var title = $("input#title").val();
    var entry = $("input#entry").val();

    $("#post-title").text(title);
    $("#post-body").text(entry);

    var myBlog = new Blog();
    var myEntry = new Entry( title, entry);
    var count = myEntry.countWords();
    myBlog.addPost(myEntry);
    $('#post-blog').text(myEntry);
    // $('#journal-entry').hide();
    $('#post').show();
    $('#blog').show();
    console.log(myEntry);
    console.log(myBlog);
    console.log(count);

  });
});
