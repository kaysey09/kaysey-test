var pics = [
"kaysey/tip form k 2nd.png",
"kaysey/bear.png",
"kaysey/logo k.png",
"kaysey/mori lookalkie.png",
"kaysey/myAvatar.png",
"kaysey/rose.png",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function() {
	if (counter == 6){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
	})