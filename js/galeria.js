document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
