const row = document.querySelector(".row");

function printColour({target}) {
    if (target.closest(".span")) return;

    if (target.children[1].checked) return;

    if (target.closest(".column")) {
        const currentColour = target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
        target.children[0].textContent = currentColour;
    }
}

row.addEventListener("click", printColour);