function dis(ddd) {
  document.getElementById("input").value =
    document.getElementById("input").value + ddd;
}
function clearfunction() {
  document.getElementById("input").value = "";
}
function calculate() {
  var userinput = document.getElementById("input").value;
  var result = eval(userinput);

  document.getElementById("input").value = result;
}
