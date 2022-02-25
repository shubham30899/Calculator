function clearScreen() {
    document.getElementById("show").value = "";
   }
   function display(input) {
    document.getElementById("show").value += input;
   }
   function calculate() {
    var p = document.getElementById("show").value;
    var q = eval(p);
    document.getElementById("show").value = q;
   }
