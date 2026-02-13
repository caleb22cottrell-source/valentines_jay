document.addEventListener("DOMContentLoaded", function() {

    // ===========================
    // FIRST PAGE – ENVELOPE CLICK
    // ===========================
    const envelope = document.querySelector(".envelope-wrapper");
    if (envelope) {
        envelope.addEventListener("click", function() {
            // Navigate to Valentine page
            window.location.href = "valentine.html"; // update with your Valentine page filename
        });
    }

    // ===========================
    // VALENTINE PAGE LOGIC
    // ===========================
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const errorBox = document.getElementById("errorBox");
    const fallingContainer = document.querySelector(".falling-container");
    const valentineContent = document.getElementById("valentineContent");
    const overlay = document.getElementById("overlay");
    const nextBtn = document.getElementById("nextBtn");

    if (yesBtn) {
        yesBtn.addEventListener("click", function() {

            // Falling hearts animation
            for (let i = 0; i < 50; i++) {
                const element = document.createElement("div");
                element.classList.add("falling");
                element.innerHTML = Math.random() > 0.5 ? "🌹" : "💜";
                element.style.left = Math.random() * 100 + "vw";
                element.style.animationDuration = (2 + Math.random() * 3) + "s";
                fallingContainer.appendChild(element);

                setTimeout(() => element.remove(), 5000);
            }

            // Blur page + show overlay after 4s
            setTimeout(() => {
                if (valentineContent) valentineContent.classList.add("blur");
                if (overlay) overlay.classList.add("show");
            }, 4000);
        });
    }

    if (noBtn) {
        // "No" button dodge effect
        noBtn.addEventListener("mouseenter", function() {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });

        // Show error box if clicked
        noBtn.addEventListener("click", function() {
            if (errorBox) errorBox.style.display = "block";
        });
    }

    if (nextBtn) {
        // Next button navigates to final page
        nextBtn.addEventListener("click", function() {
            window.location.href = "final.html"; // update with your final page filename
        });
    }

    // ===========================
    // FINAL PAGE – MUSIC LOGIC
    // ===========================
    const music = document.getElementById("bgMusic");
    const musicToggleBtn = document.getElementById("musicToggleBtn");

    if (music) {
        // Autoplay (should work because user clicked Next on Valentine page)
        music.play().catch(() => {
            console.log("Autoplay blocked. Click the button to play music.");
        });
    }

    if (musicToggleBtn) {
        musicToggleBtn.addEventListener("click", function() {
            if (music.paused) {
                music.play();
                musicToggleBtn.textContent = "⏸ Pause";
            } else {
                music.pause();
                musicToggleBtn.textContent = "▶️ Play";
            }
        });
    }

});

