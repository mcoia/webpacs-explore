var href = window.location.href //gets url
var spliturl = href.split(".org"); //splits url into array with beginning and scope ending
var explore = 'http://explore.searchmobius.org' //new domain name
var scope = spliturl[1].replace(/\/$/, ""); //gets scope information and removes '/' at the end

if (spliturl[0].indexOf("slrlc") != -1 || scope.indexOf(" ") != -1){ //if href matches unscoped url
  var redirectNoscope = explore + "/search~S0&redirected" //new url with no scope
  window.location = redirectNoscope; //add new url to window
}else {}
 if (spliturl[0].indexOf("slrlc") !=-1 && spliturl[1].indexOf("/") != -1){ //if there is scope information
  var redirectWscope = explore + scope + "&redirected" //new url with scope information and redirect
  window.location = redirectWscope;
}

if (scope == undefined || scope == 0){ //scope has something or nothing 
  var newURL = explore //
}else {
  var newURL = explore + scope
}
   
if (href.indexOf("&redirected") != -1 ) {
    
    var redirectMessage = "<p>The domain name slrlc.org is being retired.<br>Please update your bookmarks to <a href='" + newURL + "'>" + newURL + "</a>.</p>"

    $(document).ready(function () {
        $('#alertMessage').html(redirectMessage);
    });  
}