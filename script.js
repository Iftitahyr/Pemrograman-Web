// Function to display the clicked button value on the screen
function show(value) {
    document.getElementById("screen").value += value;
  }
  
  // Function to clear the calculator screen completely
  function wipe() {
    document.getElementById("screen").value = "";
  }
  
  // Function to remove the last character from the display screen
  function backspace() {
    const screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
  }
  
  // Function to calculate the result and display it on the screen
  function calc() {
    try {
      const screen = document.getElementById("screen");
      screen.value = eval(screen.value);
    } catch (error) {
      document.getElementById("screen").value = "Error";
    }
  }
  