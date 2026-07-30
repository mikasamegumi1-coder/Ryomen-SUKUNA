const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

button.addEventListener("click", () => {

    const link = input.value.trim();

    if(link === ""){
        alert("Masukkan link produk Shopee terlebih dahulu!");
        return;
    }

    button.innerHTML = "⏳ SUMMONING...";
    button.disabled = true;

    setTimeout(() => {

        alert("Ryomen Sukuna telah menerima perintah!\n\nAnalisis akan segera dimulai.");

        button.innerHTML = "👑 SUMMON";
        button.disabled = false;

    },2000);

});
