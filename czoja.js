const popupButton = document.getElementById("popupButton");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const nameForm = document.getElementById("nameForm");
const result = document.getElementById("result");

popupButton.addEventListener("click", () => {
  nameForm.reset();
  result.textContent = "";
  popup.style.display = "block";
});

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  const successPercentage = Math.floor(Math.random() * 101); // Generate a random percentage between 0 and 100
  result.textContent = `${name} Your Today's Luck is: ${successPercentage}%`;
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});