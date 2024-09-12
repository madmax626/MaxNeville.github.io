const beforeBtn = document.getElementById("before-btn");
const afterBtn = document.getElementById("after-btn");
const beforePhoto = document.getElementById("before-photo");
const afterPhoto = document.getElementById("after-photo");


beforeBtn.addEventListener("click", () => {
    beforePhoto.style.display = "block";
    afterPhoto.style.display = "none";
    beforeBtn.classList.add("active");
    afterBtn.classList.remove("active");
});

afterBtn.addEventListener("click", () => {
    beforePhoto.style.display = "none";
    afterPhoto.style.display = "block";
    afterBtn.classList.add("active");
    beforeBtn.classList.remove("active");
});

// Set initial state for Before/After section (Defaults)
beforePhoto.style.display = "block";
afterPhoto.style.display = "none";


