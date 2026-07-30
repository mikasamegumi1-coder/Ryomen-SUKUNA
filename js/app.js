const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

const statusText = document.querySelector(".status-text");
const progress = document.querySelector(".progress-fill");

button.addEventListener("click", () => {

    const link = input.value.trim();

    if(link === ""){
        alert("Masukkan link produk Shopee terlebih dahulu!");
        return;
    }

    button.disabled = true;
    button.innerHTML = "⏳ SUMMONING...";

    progress.style.width = "20%";
    statusText.innerHTML = "🟡 Status : Summoning...";

    setTimeout(()=>{
        progress.style.width = "45%";
        statusText.innerHTML = "🔴 Status : Searching Content...";
    },1200);

    setTimeout(()=>{
        progress.style.width = "75%";
        statusText.innerHTML = "🔵 Status : AI Analyzing...";
    },2500);

    setTimeout(()=>{
        progress.style.width = "100%";
        statusText.innerHTML = "🟢 Status : Analysis Complete";

        button.disabled = false;
        button.innerHTML = "👑 SUMMON";

    },4000);

});
