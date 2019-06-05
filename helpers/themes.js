function setTheme(name){
	var links = document.getElementsByTagName("link");

	for (var i=0; i<links.length; i++){

		var lname = links[i].getAttribute("title");

		if (lname){

			if (lname === name){
				links[i].disabled = false;
			} else {
				links[i].disabled = true;
			}
		}
	}
	//remove old css
	var theme = webix.storage.local.get("theme");
	if (theme)
		webix.html.removeCss(document.body, "theme-"+theme);
	//add new css
	webix.html.addCss(document.body, "theme-"+name);
	webix.storage.local.put("theme", name);
};