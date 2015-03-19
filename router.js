Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('post', {path: ':post_id'});
  this.resource('new-post');
  this.resource('about');
  this.resource('recent-comments');
  this.resource('contact', function() {
    this.resource('email');
    this.resource('phone');
  });
});