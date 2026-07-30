// =====================================
// RYOMEN SUKUNA
// KING OF CURSES ANALYTICS
// Version 2.0
// =====================================

const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

const statusText = document.querySelector(".status-text");
const progress = document.querySelector(".progress-fill");

const winningScore = document.getElementById("winningScore");
const aiInsight = document.getElementById("aiInsight");

// Delay
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Animasi angka Winning Score
function animateScore(start, end, duration){

    let startTime = null;

    function animation(currentTime){

        if(!startTime){
            startTime = currentTime;
        }

        const progressTime =
        Math.min((currentTime - startTime) / duration, 1);

        const value =
        start + (end - start) * progressTime;

        winningScore.innerHTML =
        value.toFixed(1) + "%";

        if(progressTime < 1){
            requestAnimationFrame(animation);
        }

    }

    requestAnimationFrame(animation);

}
// =====================================
// Efek mengetik AI Insight
// =====================================

async function typeWriter(text){

    aiInsight.innerHTML = "";

    for(const huruf of text){

        aiInsight.innerHTML += huruf;

        await sleep(20);

    }

}

// =====================================
// Jalankan proses analisis
// =====================================

async function runAnalysis(){

    const link = input.value.trim();

    if(link === ""){

        alert("Masukkan link produk Shopee terlebih dahulu!");

        return;

    }

    button.disabled = true;
    button.innerHTML = "⏳ SUMMONING...";

    const steps = [

        {
            status:"🟡 Status : Summoning...",
            progress:10
        },

        {
            status:"🟠 Status : Reading Shopee Link...",
            progress:30
        },

        {
            status:"🔍 Status : Searching Content...",
            progress:55
        },

        {
            status:"🧠 Status : AI Analyzing...",
            progress:80
        },

        {
            status:"🟢 Status : Analysis Complete",
            progress:100
        }

    ];
// =====================================
// Jalankan setiap proses
// =====================================

    for(const step of steps){

        statusText.innerHTML = step.status;

        progress.style.width = step.progress + "%";

        await sleep(900);

    }

    // Animasi Winning Score
    animateScore(
        92.4,
        95.8,
        1200
    );

    // AI Insight
    await typeWriter(

        "Produk ini memiliki peluang tinggi karena memiliki potensi engagement yang bagus. Gunakan hook yang kuat dalam 3 detik pertama, tampilkan manfaat produk dengan jelas, dan gunakan CTA yang tegas agar peluang konversi semakin tinggi."

    );

    button.disabled = false;

    button.innerHTML = "👑 SUMMON";

    alert("👑 Sukuna has finished the analysis.");

}
// =====================================
// Tombol SUMMON
// =====================================

button.addEventListener("click", () => {

    runAnalysis();

});

// =====================================
// Dashboard Ready
// =====================================

window.addEventListener("load", () => {

    progress.style.width = "0%";

    statusText.innerHTML = "⚪ Status : Waiting...";

    if (winningScore) {
        winningScore.innerHTML = "92.4%";
    }

    if (aiInsight) {
        aiInsight.innerHTML = "Waiting for AI analysis...";
    }

});
