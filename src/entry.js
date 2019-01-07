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
  var vowels = 'aeiouAEIOU';
  var vcount = 0;
   for (var x = 0; x < this.entry.length; x++)
   {
     if(vowels.indexOf(this.entry[x]) !== -1)
     {
       vcount +=1;
     }
   }
   return vcount;
}
// 
// Entry.prototype.countVowels = function({
//
//   var vowels = ['a','e','i','o','u']
//   var entry = this.entry.count
// }
