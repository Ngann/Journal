export function Blog(){
  this.blogs =[];
}

Blog.prototype.addJournal = function (journal) {
  this.order.push(journal);
}
