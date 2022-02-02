function toggleModal() {
    let body = document.querySelector("body");
    let helpButton = document.querySelector(".modal-toggle");

    let state = (body.dataset.modal =
        body.dataset.modal == "hidden" ? "visible" : "hidden");

    if (state == "visible") {
        let article = document.createElement("article");
        let p = document.createElement("p");
        let a = document.createElement("a");
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
    } else {
        let closingModal = document.querySelector(".modal");
        // helpButton.focus();
        let p = document.querySelector(".modal p")
        p.dataset.state = "hidden"

        setTimeout(()=> {closingModal.remove();},1000)
        helpButton.textContent = "?";
    }
}

export { toggleModal };
