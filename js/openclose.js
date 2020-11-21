// NUMBER PEOPLE
$(document).ready(function () {
  const minus = $("#minus");
  const plus = $("#plus");
  const input = $(".quantity__input");

  minus.click(function (e) {
    e.preventDefault();

    let value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });

  plus.click(function (e) {
    e.preventDefault();
    let value = input.val();
    value++;
    input.val(value);
  });
});



let select = document.querySelector(".custom-select-wrapper")

// SELECT AM-PM
  select.addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
      .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}
