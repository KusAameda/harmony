/*  */


var checkItem;
var publicationTitle = {
	'en': 'badges HKJC MEMBERS&#39; MAGAZINE<span class="dec"></span>DEC 2020',
	'tc': 'badges 香港賽馬會會員月刊<span class="dec"></span>2020 年 12 月號'
};
//window.addEventListener("load", function(){
	checkItem = setInterval(function(){
		var element =  document.getElementById('copyright-link');
		if (typeof(element) != 'undefined' && element != null)
		{
			clearInterval(checkItem);
			document.getElementById("copyright-link").removeAttribute("href");
			document.getElementById('copyright-link').addEventListener("click", function(e){
				e.preventDefault();
				
				if(currentLang == "en"){
					var newLink = window.location.href.split('/en/');
					window.location.href = newLink[0] + '/tc/index.html';
				}else{
					var newLink = window.location.href.split('/tc/');
					window.location.href = newLink[0] + '/en/index.html';
				}
				//window.location.href=""
			});
			document.getElementById('publication-title').innerHTML = publicationTitle[currentLang];
		}
	}, 100);
	
	window.addEventListener("load", function(){
	var contentZone =  document.getElementById('contentZone');
	if (typeof(contentZone) != 'undefined' && contentZone != null)
	{
		contentZone.classList.add("shown");
		originalResize();
	}
	/* document.getElementById('copyright-link').addEventListener("click", function(e){
		e.preventDefault();
		alert(123);
	}); */
});

var delay = 100;  // Your delay here

function originalResize(){
	var win_w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var win_h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if(win_w > 820){
		if(win_h > 760){
			document.getElementById('logo_img').removeAttribute('style');
			document.getElementById('cover_img').removeAttribute('style');
		}else{
			if(win_h < 480){
				win_h = 480;
			}
			var ratio_logo = 110 / 412;
			var ratio_cover = 302 / 412;
			document.getElementById('logo_img').style.height = parseInt(ratio_logo*(win_h-348))+'px';
			document.getElementById('cover_img').style.height = parseInt(ratio_cover*(win_h-348))+'px';
		}
	}else{
		document.getElementById('logo_img').removeAttribute('style');
		document.getElementById('cover_img').removeAttribute('style');
	}
}

var resizeTaskId = null;

 window.addEventListener('resize', function(){
	 if (resizeTaskId !== null) {
      clearTimeout(resizeTaskId);
    }
	resizeTaskId = setTimeout(function(){
		resizeTaskId = null;
		originalResize();
	}, delay);
 });