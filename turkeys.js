document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);

    const input = document.querySelector("#turkey-input-text");
    const turkeyText = input.value;

    const list = document.querySelector("#turkeys");

    const item = document.createElement('li');
    item.innerText = turkeyText;

    list.appendChild(item);

    input.value = "";
  });

  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; ++i) {
    const li = lis[i];
    li.addEventListener('click', function(event) {
      // The current li
      event.target.style.color = "brown";
    });
    li.addEventListener('dblclick', function(event) {
      // The current li
      event.target.remove();
    });
  }
});