/**
 * The form should work as follows:
 * 1.) The user fills out an email address and clicks "Next".
 * 2.) An animation occurs. A checkbox appears on the screen.
 * 3.) When the animation has completed, the button text will change to e.g. "Send to email@example.com".
 * Here's a video:
 * @see challenges/11-6-challenges/11-6-challenges.gif
 *
 * There is a bug in the code. Your task is to fix the bug so that the button
 * does not say "Send to undefined". You will only be change a couple of lines
 * in the code below.
 */

const waitUntilLater = (callback, time = 0) => { <<
    << << < HEAD
    setTimeout(() => {
        callback();
    }, time); ===
    === =
    setTimeout(() => {
        console.log(callback());
    }, time); >>>
    >>> > 7 b35e46fc0bdb1ac9824e28a288f3be60222f0ec
};

const buttonElement = document.querySelector("#button");
const emailElement = document.querySelector("#email");

const getEmailText = () => {
    return emailElement.value;
};

buttonElement.addEventListener("click", () => {
    const hiddenElement = document.querySelector(".hidden");
    if (hiddenElement) {
        hiddenElement.classList.remove("hidden");
        hiddenElement.classList.add("pullDown");
    }

    /**
     * ONLY CHANGE THE NEXT TWO LINES. Fix the bug so that callbacks are used correctly.
     * (You will still need to use the `waitUntilLater` and `getEmailText` functions.)
     */
    // const emailText = waitUntilLater(getEmailText, 500);
    waitUntilLater(() => {
        const emailText = getEmailText();
        // buttonElement.textContent = "Send to " + emailElement.value;
        buttonElement.textContent = "Send to " + emailText;
    }, 500);
});