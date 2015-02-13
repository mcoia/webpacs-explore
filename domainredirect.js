var href = window.location.href
var org = ".org:2082"
var domainLength = href.indexOf(org) + org.length
var notDomain = href.substring(domainLength)
var explore = 'http://explore.searchmobius.org'
	if (notDomain == "/") {
		var redirectUrl = explore + "/search~S0&redirected"
	}else {
	var r = /\W$/g
		if (r.test(notDomain) == true){
			notDomain = notDomain.slice(0,-1);
		}
		redirectUrl = explore + notDomain + "&redirected"
	}
window.location = redirectUrl;
	if(href.indexOf("slrlc.org:2082") != -1 ){
		var oldDomain = "slrlc.org:2082"
		window.location = redirectUrl;
	}else{}
if (href.indexOf("&redirected") != -1 ) {
var redirectMessage = "<p>You've been redirected from slrlc.org. Starting in June of 2012, those addresses will no longer work.</p><p>Please update your bookmarks to <a href='http://explore.searchmobius.org'>http://explore.searchmobius.org</a>.</p>"
	$(document).ready(function () {
		$('#alertMessage').html(redirectMessage);
	});
}