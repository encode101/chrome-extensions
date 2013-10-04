// JavaScript Document

jQuery(function(){
	
// Create a simple text notification:
	var notification = webkitNotifications.createNotification(
	  'img/icon.png',  // icon url - can be relative
	  'Hello!',  // notification title
	  'Your Message To +91-9545600524, Just Got Delivered'  // notification body text
	);
	notification.show();
	chrome.browserAction.setBadgeText({text:"5",image:"img/icon.png"});
})