// INPUT
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let month = document.querySelector("#month");
let date = document.querySelector("#date");
let year = document.querySelector("#year");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");

//LABEL
let label = document.querySelectorAll("label");

// MESSAGE ERROR
let messageError = document.querySelectorAll(".message-error");


// FUNCTION MESSAGE ERROR
function errorMessage(input, index, test) {
  test === undefined;

  if (input.value == "") {
    messageError[index].classList.add("show");
    input.classList.add("error");
    input.classList.add("border-error");

    if (test != undefined) {
      test.classList.add("error-color");
    }
  } else {
    messageError[index].classList.remove("show");
    input.classList.remove("error");
    input.classList.remove("border-error");

    if (test != undefined) {
      test.classList.remove("error-color");
    }
  }
}

document.forms["formulaire"].addEventListener("submit", function (e) {
  e.preventDefault();

  errorMessage(name, 0);

  errorMessage(email, 1);

  errorMessage(month, 2, label[0]);
  errorMessage(date, 2, label[0]);
  errorMessage(year, 2, label[0]);

  errorMessage(hours, 3, label[1]);
  errorMessage(minutes, 3, label[1]);
});
