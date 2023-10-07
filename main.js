document.addEventListener("DOMContentLoaded", function(){

    const buttonProfile = document.getElementById('btn-profile');
    const buttonLink = document.getElementById('btn-links');
    const buttonPreview = document.getElementById('btn-preview');

    

    buttonProfile.addEventListener('click', async() => {
        buttonProfile.classList.add("active")
        buttonLink.classList.add("active")
        buttonPreview.classList.remove("active")
        buttonPreview.textContent = "Preview"
    });

    buttonLink.addEventListener('click', async() => {
        buttonProfile.classList.remove("active")
        buttonLink.classList.remove("active")
        buttonPreview.classList.remove("active")
        buttonPreview.textContent = "Preview"
    });

    buttonPreview.addEventListener('click', async() => {
        buttonProfile.classList.remove("active")
        buttonLink.classList.add("active")
        buttonPreview.classList.add("active")
        buttonPreview.textContent = "Share link"
    })

});