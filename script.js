//your JS code here. If required.
let input = document.getElementsByClassName('code');
for(let i=0; i< input.length; i++){
		input[i].addEventListener('keyup', (event) =>{
	
			let currentElement = event.target ;
          if(event.key === "Backspace"){
			    let prevElement = currentElement.previousElementSibling;
			  if(prevElement){
					 prevElement.focus();
				 }
			  return;
		  }
			let code = event.key.charCodeAt(0);
			if(48 <= code && code<=57) {
				// if input is num we will target next element
			let nextElement  = currentElement.nextElementSibling;
				if(nextElement) {
					nextElement.focus();
				}
				
			}
			else{
					console.log(event.target.value);
					event.target.value = "";
				}
			})
		}