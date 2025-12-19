// Sertifikaya tıklayınca modal aç
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".cert").forEach(cert => {
    cert.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = cert.dataset.cert;
    });
});

// Kapatma tuşu
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Modal arka plana tıklayınca kapanır
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
