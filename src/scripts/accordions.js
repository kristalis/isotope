/**
 * Accordions.
 */

const page = document.querySelector("body");

page.addEventListener("click", event => {
  const { target } = event;

  if (!target.classList.contains("accordion__link")) {
    return;
  }

  const accordion = target.parentElement.parentElement;

  const footer = accordion.querySelector(".accordion__footer");

  footer.classList.toggle("accordion__footer--open");

  const text = target.textContent;

  const newText = text === "Read More" ? "Read Less" : "Read More";

  target.textContent = newText;
});
