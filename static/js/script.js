document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const errorMessage = document.getElementById("error-message");

  const radioLabels = document.querySelectorAll(".radio-label");

  radioLabels.forEach((radioLabel) => {
    const radioInput = radioLabel.querySelector("input[type=radio]");

    radioLabel.addEventListener("click", function () {
      radioLabels.forEach((label) => {
        label.classList.remove("peer-checked");
      });

      this.classList.add("peer-checked");
      errorMessage.innerText = "";
      radioInput.checked = true; // Check the radio input when label is clicked
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedOption = document.querySelector(".radio-label.peer-checked");

    if (!selectedOption) {
      errorMessage.innerText = "Please select a valid input";
      return;
    }

    var formData = new FormData(this);
    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.error) {
          // Display error message
          errorMessage.innerText = data.error;
        } else {
          // Update score and points
          var bot = "";
          if (data.bot == 1)
            bot = "Stone";
          else if (data.bot == 2)
            bot = "Paper";
          else if (data.bot == 3)
            bot = "Scissors";

          document.getElementById("message").innerText = data.score + "\nThe AI chose " + bot + ".";
          document.getElementById("conditional-points").innerText = data.points;
          // Clear error message
          errorMessage.innerText = "";
          // Clear selection
          selectedOption.classList.remove("peer-checked");
        }
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});
