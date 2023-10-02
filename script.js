//your JS code here. If required.
 const inputs = document.querySelectorAll('.code');
 for (let i = 0; i < inputs.length; i++) {
	 inputs[i].addEventListener('input', function() {
		 if (this.value.length === this.maxLength) {
            inputs[i + 1].focus();
          }
		  });
	  inputs[i].addEventListener('keydown', function(event) {
          if (event.keyCode === 8 && this.value.length === 0) {
            inputs[i - 1].focus();
          }
        });
      }