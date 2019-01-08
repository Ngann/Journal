import { Entry } from './entry';
import { Blog } from './blog';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#journal-entry').submit(function(event){
    event.preventDefault();
    var title = $("input#title").val();
    var entry = $("input#entry").val();

    $("#post-title").text(title);
    $("#post-body").text(entry);

    // var vowels = 'aeiouAEIOU';
    var vowels = '[aeiouAEIOU]';
    var consonants = 'bcdfghjklmnpqrstvwxyz';
    // var consonants = '[a-z-[aeiuo]]';
    var myBlog = new Blog();
    var myEntry = new Entry( title, entry);
    myBlog.addPost(myEntry);
    var count = myEntry.countWords();
    var letter = myEntry.countLetters();
    var vowel = myEntry.countString(vowels);
    var consonant = myEntry.countString(consonants);
    $('#post-blog').text(myEntry);
    // $('#journal-entry').hide();
    $('#post').show();
    $('#blog').show();
    console.log(myEntry);
    console.log(myBlog);
    console.log("words", count);
    console.log("letters",letter);
    console.log("vowels", vowel);
    console.log("consonants", consonant);
  });
});
