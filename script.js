document.addEventListener("DOMContentLoaded", function() {

    // =====================
    // INDEX PAGE: Envelope Redirect
    // =====================
    const envelope = document.getElementById("envelope");
    if(envelope){
        envelope.addEventListener("click", () => {
            window.location.href = "note.html"; // redirect to note page
        });
    }

    // =====================
    // NOTE PAGE: Continue Button
    // =====================
    const continueBtn = document.getElementById("continueBtn");
    if(continueBtn){
        continueBtn.addEventListener("click", () => {
            window.location.href = "valentine.html"; // go to Valentine page
        });
    }

    // =====================
    // VALENTINE PAGE
    // =====================
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const errorBox = document.getElementById("errorBox");
    const fallingContainer = document.querySelector(".falling-container");
    const valentineContent = document.getElementById("valentineContent");
    const overlay = document.getElementById("overlay");
    const nextBtn = document.getElementById("nextBtn");

    if(noBtn){
        // Make "No" button dodge
        noBtn.addEventListener("mouseenter", () => {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    if(yesBtn){
        yesBtn.addEventListener("click", () => {

            // Falling hearts animation
            for(let i=0;i<50;i++){
                const element = document.createElement("div");
                element.classList.add("falling");
                element.innerHTML = Math.random()>0.5?"🌹":"💜";
                element.style.left = Math.random()*100 + "vw";
                element.style.animationDuration = (2+Math.random()*3)+"s";
                fallingContainer.appendChild(element);
                setTimeout(()=>element.remove(),5000);
            }

            // Blur page + show overlay after 4s
            setTimeout(()=>{
                if(valentineContent) valentineContent.classList.add("blur");
                if(overlay) overlay.classList.add("show");
            },4000);

            // Show Next button after 6s
            setTimeout(()=>{
                if(nextBtn) nextBtn.style.display="inline-block";
            },6000);
        });
    }

    if(nextBtn){
        nextBtn.addEventListener("click", ()=>{
            window.location.href="final.html";
        });
    }

    // =====================
    // FINAL PAGE: Music Controls
    // =====================
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggleBtn");

    if(music){
        // Try autoplay
        music.play().catch(()=>console.log("Autoplay blocked."));
    }

    if(musicBtn && music){
        musicBtn.addEventListener("click", ()=>{
            if(music.paused){
                music.play();
                musicBtn.textContent="⏸ Pause";
            } else {
                music.pause();
                musicBtn.textContent="▶️ Play";
            }
        });
    }

});
