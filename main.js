const inputs = document.querySelectorAll(".control input");

function actualizar() {
  const suffix = this.dataset.unidad || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", actualizar));
inputs.forEach((input) => input.addEventListener("mousemove", actualizar));
