/**
 * @version $Id$ $Rev: 202541 $ $Date: 2013-02-08 21:48:24 +0000 (Fri, 08 Feb 2013) $
 */
//This sets the document.domain value which allows for communication between frames in the same second level domain
//for example: a page hosted by subdomain1.example.com would be able to communicate with an iframe with src
//subdomain2.example.com

//This file should be placed in the screens directory of the mill server

//read second level domain from a cookie created by Encore.

//cookie scripts from http://www.quirksmode.org

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

(function() {
    var encoreDomainCookieValue = readCookie('III_ENCORE_PATRON');
    document.domain = encoreDomainCookieValue;
})();




