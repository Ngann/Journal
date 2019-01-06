export function Blog(){
  this.blogs =[];
}

Blog.prototype.addPost = function (entry) {
  this.blogs.push(entry);
}
