export function Entry(title,entry){
  this.title = title;
  this.entry = entry;
}

Entry.prototype.countWords = function(){
  return this.entry.split(" ").length;
}
