document.addEventListener("DOMContentLoaded", function () {
    let giftBox = document.getElementById("giftBox");
    let surpriseCard = document.getElementById("surpriseCard");

    // Cek apakah ini halaman surprise.html
    if (giftBox) {
        giftBox.addEventListener("click", function () {
            document.querySelector(".lid").style.transform = "rotateX(-180deg)";
            setTimeout(() => {
                surpriseCard.classList.remove("hidden");
            }, 500);
        });
    }
});

// Fungsi untuk verifikasi nama di index.html
function verifyName() {
    let nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput.toLowerCase() === "devin") {
        window.location.href = "surprise.html";
    } else {
        alert("Hmmm, sepertinya ini bukan untukmu! 😜");
    }
}
function goToSurprise() {
    window.location.href = "surprise.html";
}

function openGift() {
    let lid = document.querySelector(".lid");
    let surpriseCard = document.getElementById("surpriseCard");

    lid.style.transform = "rotateX(150deg)";
    setTimeout(() => {
        surpriseCard.classList.remove("hidden");
    }, 500);
}
