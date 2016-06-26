$(document).ready(function(){

	var sugarCookieCount = function() {
		sugarCount = Cookies.get("sugar");
		$(".sugar-count").html(sugarCount);
	};

	var chocolateCookieCount = function() {
		chocolateCount = Cookies.get("chocolate");
		$(".chocolate-count").html(chocolateCount);
	};

	var lemonCookieCount = function() {
		lemonCount = Cookies.get("lemon");
		$(".lemon-count").html(lemonCount);
	};

	var cookieCheck = function(callback) {

		if(Cookies.get("sugar") == null || Cookies.get("sugar") == NaN) {
			Cookies.set("sugar", 0);
			sugarCookieCount();
		} else {
			sugarCookieCount();
		};

		if(Cookies.get("chocolate") == null || Cookies.get("chocolate") == NaN) {
			Cookies.set("chocolate", 0);
			chocolateCookieCount();
		} else {
			chocolateCookieCount();
		};

		if(Cookies.get("lemon") == null || Cookies.get("lemon") == NaN) {
			Cookies.set("lemon", 0);
			lemonCookieCount();
		} else {
			lemonCookieCount();
		};
		callback();

	;}

	var blankFunction = function() {

	};

	var cookieClear = function(callback) {
		Cookies.expire("sugar");
		Cookies.expire("chocolate");
		Cookies.expire("lemon");
		callback();
	}

	var cookieReset = function() {
		sugarCookieCount();
		chocolateCookieCount();
		lemonCookieCount();
	};

	$(".sugar").on("click", function(){
		s = parseInt(Cookies.get("sugar"));
		Cookies.set("sugar", s + 1);
		sugarCookieCount();
	});

	$(".chocolate").on("click", function(){
		c = parseInt(Cookies.get("chocolate"));
		Cookies.set("chocolate", c + 1);
		chocolateCookieCount();
	});

	$(".lemon").on("click", function(){
		l = parseInt(Cookies.get("lemon"));
		Cookies.set("lemon", l + 1);
		lemonCookieCount();
	});

	$(".clear").on("click", function(){
		// cookieClear;
		// cookieCheck;
		// cookieReset;
		cookieClear(function(){
			cookieCheck(function(){
				cookieReset();
			});
		});
	});

	cookieCheck(blankFunction);

});