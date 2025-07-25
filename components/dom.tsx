async function main() {
    console.log(`Running main function.`);
    fetch('/message')
        .then((resp) => resp.text())
        .then((text) => {
            const h1 = document.getElementById('heading');
            if (h1) {
                h1.textContent = text;
            }
        });

    const button = document.getElementById("button");
    if (button) {
        button.addEventListener("click", () => {
            fetch('/random')
                .then((resp) => resp.text())
                .then((text) => {
                    const random = document.getElementById('random');
                    if (random) {
                        random.textContent = text;
                    }
                });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log(`DOM fully loaded and parsed.`);
    main();
});