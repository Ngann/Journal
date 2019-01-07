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

// Entry.prototype.numberOfVowels = function(){
//   var vowels = 'aeiouAEIOU';
//   var vcount = 0;
//    for (var i = 0; i < this.entry.length; i++)
//    {
//      if(vowels.indexOf(this.entry[i]) !== -1)
//      {
//        vcount +=1;
//      }
//    }
//    return vcount;
// }

Entry.prototype.countString = function(vowelOrConst){
  var vcount = 0;
   for (var i = 0; i < this.entry.length; i++)
   {
     if(vowelOrConst.indexOf(this.entry[i]) !== -1)
     {
       vcount +=1;
     }
   }
   return vcount;
}
