function imageclick(){
	var allimages = document.getElementsByTagName("img")
	var preloadimages = []
	for (var i = 0; i < allimages.length; i++){
		if (allimages[i].getAttribute("data-click")){ //if image carries "data-click" attribute
			preloadimages.push(new Image()) //preload "click" image
			preloadimages[preloadimages.length-1].src=allimages[i].getAttribute("data-click")
			allimages[i].onclick=function(){
				this.src=this.getAttribute("data-click")
			}
			allimages[i].onmouseout=function(){
				this.src=this.getAttribute("data-out")
			}
		} //end if
	} //end for loop
}
