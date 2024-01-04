function appendValue(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }


  function allclear() {
    document.getElementById('display').value = '';
  }