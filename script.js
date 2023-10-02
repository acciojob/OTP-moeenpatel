 const inputs = document.querySelectorAll('.code');
    
    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        
        if (value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else if (value.length === 0 && index > 0) {
          inputs[index - 1].focus();
        }
      });
      
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });