const textAreaElem = document.querySelector("textarea");
const buttonElem = document.querySelector('button');

buttonElem.addEventListener("click", () => {
    const value = new SpeechSynthesisUtterance(textAreaElem.value);
    window.speechSynthesis.speak(value)
})