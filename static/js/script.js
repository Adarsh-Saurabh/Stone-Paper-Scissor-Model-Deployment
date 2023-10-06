function validateForm() {
    var radioButtons = document.getElementsByName("value");
    var selected = false;
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selected = true;
        break;
      }
    }
    if (!selected) {
      document.getElementById("error-message").innerText = "Please select a valid input.";
      return false;
    }
    return true;
  }