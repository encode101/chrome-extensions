// JavaScript Document

jQuery(function(){
	// Note: There's no need to call webkitNotifications.checkPermission().
// Extensions that declare the notifications permission are always
// allowed create notifications.

// Create a simple text notification:
var notification = webkitNotifications.createNotification(
  'icon.png',  // icon url - can be relative
  'Hello!',  // notification title
  'Your Message To +91-9545600524, Just Got Delivered'  // notification body text
);

// Then show the notification.
	setInterval(function(){
		notification.show();
	},2000);

})