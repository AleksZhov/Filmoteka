const inputRef = document.querySelector('.header_input');
const value = inputRef.addEventListener('input', serchValue);

export function serchValue(event) {
  console.log(event.target.value);
}
