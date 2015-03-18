Blogger.AboutController = Ember.Controller.extend({
	isPictureShowing: false,
	actions: {
		showRealName: function(){
			alert('Dracule is fictional, but was inspired by the 15th-century Romanian general and Wallachian Prince Vlad III the Impaler.');
		},
		showPicture: function(){
			this.set('isPictureShowing', true);
		},
		hidePicture: function(){
			this.set('isPictureShowing', false);
		}
	}
});