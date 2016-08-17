/**
 * 
 */
document.addEventListener('DOMContentLoaded' ,function() {
	var firstpic = document.querySelector('#firstpicutre');
	var secondpic = document.querySelector('#secondpicture');
	var thirdpic = document.querySelector('#thirdpicture');
	var firstSmall = document.querySelector('#firstBigImg');
	var secondSmall = document.querySelector('#secondBigImg');
	var thirdSmall = document.querySelector('#thirdBigImg');
	var informationBox = document.querySelector('#infoBox').children;
	var checkOne = false;
	var checkTwo = false;
	var checkThree = false;
	var ratedmovies = document.querySelectorAll('.comingsoon');
	
	firstpic.addEventListener('click', function(){
		firstSmall.style.display = "initial";
		informationBox[0].innerHTML = "Ice Age Collision Course";
		informationBox[1].innerHTML = "An epic adventure with Sid and his friends on their quest to save the world from a giant meteor.";
		firstpic.style.top = '-29px';
		secondpic.style.top = '0px';
		thirdpic.style.top = '0px';
		secondSmall.style.display = "none";
		thirdSmall.style.display = "none";
		checkOne = true;
		checkTwo = false;
		checkThree = false;
	},false)
	
	firstpic.addEventListener('mouseover',function() {
		firstpic.style.top = '-29px';
	}, false)
	
	firstpic.addEventListener('mouseout',function() {
		if (!checkOne) {
			firstpic.style.top = '0';
		}
	}, false)
	
	secondpic.addEventListener('click', function(){
		firstSmall.style.display = "none";
		secondSmall.style.display = "initial";
		informationBox[0].innerHTML = "Independence Day: Resurgence";
		informationBox[1].innerHTML = "Two decades after the first Independence Day invasion, Earth is faced with a new extra-Solar threat. But will mankind's new space defenses be enough?";
		firstpic.style.top = '0';
		secondpic.style.top = '-29px';
		thirdpic.style.top = '0px';
		thirdSmall.style.display = "none";
		checkOne = false;
		checkTwo = true;
		checkThree = false;
	
	},false)
	secondpic.addEventListener('mouseover',function() {
		secondpic.style.top = '-29px';
	}, false)
	
	secondpic.addEventListener('mouseout',function() {
		if (!checkTwo) {
			secondpic.style.top = '0';
		}
	}, false)
	
	
	thirdpic.addEventListener('click', function(){
		firstSmall.style.display = "none";
		secondSmall.style.display = "none";
		thirdSmall.style.display = "initial";
		informationBox[0].innerHTML = "Finding Dory";
		informationBox[1].innerHTML = "The friendly but forgetful blue tang fish begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.";
		firstpic.style.top = '0';
		secondpic.style.top = '0';
		thirdpic.style.top = '-29px';
		checkOne = false;
		checkTwo = false;
		checkThree = true;
	},false)

	thirdpic.addEventListener('mouseover',function() {
		thirdpic.style.top = '-29px';
	}, false)
	
	thirdpic.addEventListener('mouseout',function() {
		if (!checkThree) {
			thirdpic.style.top = '0';
		}
	}, false)
	

	
	
	
},false)