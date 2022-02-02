function toggleModal() {
    let body = document.querySelector("body");
    let helpButton = document.querySelector(".modal-toggle");

            let interactives = document.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );

    let state = (body.dataset.modal =
        body.dataset.modal == "hidden" ? "visible" : "hidden");

    if (state == "visible") {
        let article = document.createElement("article");
        let p = document.createElement("p");
        let a = document.createElement("a");
        article.ariaModal = true
        article.ariaRoleDescription = "modal";
        a.href = "https://github.com/amir-reza-tavakkoli";
        p.textContent = "Welcome to my planetry timer! creator : ";
        a.textContent = "Amir-Reza-Tavakkoli";
        p.dataset.state = "hidden"
        setTimeout(() => {p.dataset.state = "visible"},0)
        p.appendChild(a);
        article.appendChild(p);
        article.className = "modal";
        body.appendChild(article);
        helpButton.textContent = "❌";
        a.focus()

        let modalInteractives = document.querySelectorAll(
            ".modal a,.modal button:not([disabled]) "
        );
        for (const iterator of interactives) {

            iterator.tabIndex = -1
        }
        for (const iterator of modalInteractives) {
            iterator.tabIndex = 0
        }

        helpButton.tabIndex = 1

    } else {
        let closingModal = document.querySelector(".modal");
        // helpButton.focus();
        let p = document.querySelector(".modal p")
        p.dataset.state = "hidden"

        setTimeout(()=> {closingModal.remove();},1000)
        helpButton.textContent = "?";
                for (const iterator of interactives) {
                    iterator.tabIndex = 0;
                }
    }
}

export { toggleModal };
