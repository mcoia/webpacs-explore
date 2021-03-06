
var href = window.location.href
var org = ".org"
var domainLength = href.indexOf(org) + org.length
var notDomain = href.substring(domainLength)
var searchmobius = 'http://explore.searchmobius.org'

if (notDomain == "/") {
  var redirectUrl = searchmobius  + "/search~S0&redirected"  
}else {
  var r =  /\W$/
  if (r.test(notDomain) == true){
    notDomain = notDomain.slice(0,-1);
  }
  redirectUrl = searchmobius + notDomain + "&redirected"
}

if(href.indexOf("slrlc.org") != -1 ){
    var oldDomain = "slrlc.org"
    window.location = redirectUrl;
}else{}

var s = /searchscope=\d*/
var t = /~S\d*/
if (href.match(s)){
  var searchscope = href.match(s)
  var scope = searchscope[0].substring(12);
}else if (href.match(t)){
  var tilde = href.match(t)
  var scope = tilde[0].substring(2);
}else {
  var scope;
}

if (scope == undefined || scope == 0){
  var newURL = searchmobius
}else {
  var newURL = searchmobius + "/search~S" + scope
}

if (href.indexOf("&redirected") != -1 ) {
    
    var redirectMessage = "<p>The domain name slrlc.org is being retired.<br>Please update your bookmarks to <a href='" + newURL + "'>" + newURL + "</a>.</p>"

    $(document).ready(function () {
        $('#alertMessage').html(redirectMessage);
    });  
}