export function Entry(title,entry){
  this.title = title;
  this.entry = entry;
}

Entry.prototype.countWords = function(){
  return this.entry.split(" ").length;
}

Entry.prototype.countLetters = function(){
  this.entry = this.entry.replace(/\s+/g,'');
  return this.entry.length;
}

Entry.prototype.numberOfVowels = function(){
  for (i = 0; i < this.entry.length(); i++)
  {
  if (this.entry.charAt(i) == 'a' || this.entry.charAt(i) == 'e' || this.entry.charAt(i) == 'i'
          || this.entry.charAt(i) == 'o' || this.entry.charAt(i) == 'u')
  }
}

// Entry.prototype.countVowels = function({

//   var vowels = ['a','e','i','o','u']
//   var entry = this.entry.count
// }
