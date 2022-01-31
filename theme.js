function toggleTheme() {
    let body = document.querySelector("body");
    return (body.dataset.theme =
        body.dataset.theme == "dark" ? "light" : "dark");
}

function setPreferedTheme() {
    let preferedTheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    preferedTheme.addEventListener("change", toggle);
    function toggle(e) {
        let body = document.querySelector("body");
        if (preferedTheme.matches) {
            body.dataset.theme == "dark" ? "Already dark" : toggleTheme();
        } else {
            body.dataset.theme == "dark" ? toggleTheme() : "Already light";
        }
    }
    toggle();
}
export { setPreferedTheme, toggleTheme };
