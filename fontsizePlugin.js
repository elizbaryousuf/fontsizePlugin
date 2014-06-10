/*
###Yazar:Elizbar Yusuf
###Veb Sayt:http://elizbar.info
###Proje: fontsizePlugin.js
*/
(function($) {
	$.fn.fontsizePlugin = function(set) {
		var deg={
			plus:$("#plus"),//varsayilan nesneler
			minus:$("#minus")
			};
					
		var set = $.extend(deg,set);

		return this.each(function(){
			//deyisenler yaradilir
			var deg = 15;//varsayilan deger
			var p = $(this);
			var plus = set.plus;//artirma
			var minus = set.minus;//azaltma
	
			plus.click(function(){//artirmaya vurunca
				if(deg!=40){//eger deg deyiseni 40 beraber deyilse
					deg++;//deg i artir
					}
				p.stop().animate({//ve animasyonlu sekilde yazi boyutunu artir
					"font-size":deg
					},100);
				return false;//# yox et
			});
	
			minus.click(function(){//azaltmaya vurunca
				if(deg!=10){//eger deg deyiseni 10 beraber deyilse
					deg--;//deg i azalt
				}
				p.stop().animate({//ve animasyonlu sekilde yazi boyutunu azalt
					"font-size":deg
					},100);
	
			return false;//# yox et
	});

});
}
})(jQuery);
