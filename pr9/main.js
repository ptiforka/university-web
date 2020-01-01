function toggleCheckbox() {
  alert("text");
}

function onLeave() {
  console.log(document.getElementById("js-leave-id").value);
}

function showFrom(element) {
  let form = document.getElementById("myForm");
  form.style.display = element.checked ? "block" : "none";
}
