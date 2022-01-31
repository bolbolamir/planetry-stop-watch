function toggleModal() {
    let body = document.querySelector("body");
    let helpButton = document.querySelector(".modal-toggle");

    let state = (body.dataset.modal =
        body.dataset.modal == "hidden" ? "visible" : "hidden");

    if (state == "visible") {
        let article = document.createElement("article");
        let p = document.createElement("p");

        p.textContent =
            "Welcome to my planetry timer! creator : amir-reza-tavakkoli@github";

        article.appendChild(p);
        article.className = "modal";
        body.appendChild(article);
        helpButton.textContent = "❌";
    } else {
        let closingModal = document.querySelector(".modal");

        closingModal = null;
        helpButton.textContent = "?";
    }
}

export { toggleModal };
