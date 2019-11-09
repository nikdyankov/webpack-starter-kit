function component() {
  const element = document.createElement("div");

  element.innerHTML = "Welcome";

  return element;
}

document.body.appendChild(component());
