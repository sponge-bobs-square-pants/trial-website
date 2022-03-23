

 // nav-bar scroll script

window.onscroll = function() {scrolling()};

function scrollReduction(add1, add2) {
	const array = document.querySelectorAll("a");
	array.forEach(element => {
		element.className = "";
		element.classList.add(add1);
		element.classList.add(add2);
	});
} 

function scrollTop(){
	document.body.scrollTop;
}
function scrolling() {
 	if ((scrollTop() > 0 && scrollTop()< 790) || (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 790)) {
	scrollReduction("nav-bar", "nav-bar:hover");
 	 }
	else if ((scrollTop() >= 790 && scrollTop() < 1590) || (document.documentElement.scrollTop >= 790 && document.documentElement.scrollTop < 1590)) {
	scrollReduction("scroll", "scroll:hover");
  	}
	else if ((scrollTop() >= 1590 && scrollTop() < 2420) || (document.documentElement.scrollTop >= 1590 && document.documentElement.scrollTop < 2420)) {
 	scrollReduction("scroll1580", "scroll1580:hover");
	}
	else if ((scrollTop() >= 2420 && scrollTop() < 3160) || (document.documentElement.scrollTop >= 2420 && document.documentElement.scrollTop < 3160)) {
		scrollReduction("scroll", "scroll:hover")
	}
	else if (scrollTop() >= 3160 || document.documentElement.scrollTop >=3160){
		scrollReduction("scroll1580", "scroll1580:hover");
	}

}