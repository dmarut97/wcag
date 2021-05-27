(function($){
	$(document).ready(function(){
    ustaw_kontrast();
    setFontSize();
    ustaw_czcionke();
    
		var czcionka = getCookie("czcionka");
    console.log(czcionka);
		
		if(WHReadCookie('cookies_accepted') != 'T') {
			document.getElementById('cookies-message-container').style.display = "block";
		}
  });	
})(jQuery);

function setActiveStyleSheet(title) {
  title = (typeof title == 'object' || title == 'null' || title == false) ? 'defaultContrast' : title;
  var cookie_temp = getCookie("kontrast");
  $('#contrast-style').attr('href','assets/css/'+cookie_temp+'.css');
     
}

function setFontSize(){
	var czcionka = readCookie("czcionka");
	if(czcionka) {
		$("html").css('font-size', czcionka ,'!important');
	}
	else {
		document.getElementsByTagName("html")[0].style.fontSize = "18px";
	}
}

function ustaw_kontrast() {
  
  $('#defaultContrast').on('click',function() { 
    Cookies.set("kontrast", this.id, { expires: 365, path: '/' });
     setActiveStyleSheet(this.id);
      if(wcag_l10n_set.custom_style_active){ 
        $('body').addClass('custom-style-active'); 
      } return false; });
	$('#whiteBlackContrast').on('click',function() {
     Cookies.set("kontrast", this.id, { expires: 365, path: '/' });
      setActiveStyleSheet(this.id);
       $('body').removeClass('custom-style-active');
        return false; });
	$('#blackYellowContrast').on('click',function() { 
    Cookies.set("kontrast", this.id, { expires: 365, path: '/' });
     setActiveStyleSheet(this.id); 
     $('body').removeClass('custom-style-active');
      return false; });
	$('#yellowBlackContrast').on('click',function() { 
    Cookies.set("kontrast", this.id, { expires: 365, path: '/' });
     setActiveStyleSheet(this.id); $('body').removeClass('custom-style-active'); 
     return false; });
}

function ustaw_czcionke() {	
	$('#defaultFont').click(function() {
		$("html").css('font-size', '18px','!important');
		Cookies.set("czcionka", $("html").css('font-size'), { expires: 365 });
		return false;
	});
	$('#bigFont').click(function() {
		if ( parseInt($("html").css('fontSize')) < 22 ) {
			$("html").css('font-size', parseInt($("html").css('fontSize')) + 2);
		}		
		Cookies.set("czcionka", $("html").css('font-size'), { expires: 365 });
		setFontSize();
		return false;
	});
	$('#smallFont').click(function() {
		if ( parseInt($("html").css('fontSize')) >= 16 ) {
			$("html").css('font-size', parseInt($("html").css('fontSize')) - 2);
		}
		Cookies.set("czcionka", $("html").css('font-size'), { expires: 365 });
		setFontSize();
		return false;
	});
}


function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "expires="+date.toGMTString();
  }
  else expires = "";
  
  document.cookie = name+"="+value+expires+"; path=/";
  

  
}

function readCookie(name) {
  
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return false;
}

function WHCreateCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}

function WHReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function WHCloseCookiesWindow() {
    WHCreateCookie('cookies_accepted', 'T', 365);
    document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
}

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function getCookie(name)
{
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}