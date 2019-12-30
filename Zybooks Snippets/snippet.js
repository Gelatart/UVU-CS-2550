document.querySelector("#submitBtn").addEventListener("click", submitBtnClick);
function isStrongPassword(password) {
   return password.length >= 6 && /\d/.test(password) && password !== "password1";
}
function submitBtnClick() {
   let password = document.querySelector("#password").value;
   if (isStrongPassword(password)) {
  	document.querySelector("#errorMsg").classList.add("hidden");
  	
  	// Remove error-textbox class
  	document.querySelector("#password").classList.remove("error-textbox");
  	
  	for(i = 0; i < document.getElementsByTagName("li").length; i++) {
     	document.getElementsByTagName("li")[i].classList.remove("error");
  	}

   } else {
  	document.querySelector("#errorMsg").classList.remove("hidden");
  	// Add error-textbox class
  	document.querySelector("#password").classList.add("error-textbox");
  	if(password.length < 6) {
    	document.getElementsByTagName("li")[0].classList.add("error");
  	} else {
    	document.getElementsByTagName("li")[0].classList.remove("error");
  	}
  	
  	if(!/\d/.test(password)) {
     	document.getElementsByTagName("li")[1].classList.add("error");
  	} else {
    	document.getElementsByTagName("li")[1].classList.remove("error");
  	}
  	
  	if(password == "password1") {
     	document.getElementsByTagName("li")[2].classList.add("error");
  	} else {
    	document.getElementsByTagName("li")[2].classList.remove("error");
  	}
   }
}

