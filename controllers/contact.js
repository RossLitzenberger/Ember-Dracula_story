Blogger.ContactController = Ember.Controller.extend({
	messageSent: false,
	actions:{
		sendMessage: function(){
			var message = prompt('send the message');
			this.set('messageSent', true);
			this.set('confirmationNumber', Math.round(Math.random() * 100000));
		}
	}
});