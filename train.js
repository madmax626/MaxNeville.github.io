const isolationistBtn = document.getElementById("isolationist-btn");
const functionalBtn = document.getElementById("functional-btn");
const isolationistTable = document.getElementById("isolationist-table");
const functionalTable = document.getElementById("functional-table");
const isolationistBottom = document.getElementById("isolationist-bottom");
const functionalBottom = document.getElementById("functional-bottom");

isolationistBtn.addEventListener("click", () => {
    isolationistTable.classList.add("active");
    functionalTable.classList.remove("active");
    isolationistBottom.classList.add("active");
    functionalBottom.classList.remove("active");
    isolationistBtn.classList.add("active");
    functionalBtn.classList.remove("active");
});

functionalBtn.addEventListener("click", () => {
    functionalTable.classList.add("active");
    isolationistTable.classList.remove("active");
    functionalBottom.classList.add("active");
    isolationistBottom.classList.remove("active");
    functionalBtn.classList.add("active");
    isolationistBtn.classList.remove("active");
});


isolationistTable.classList.remove("active");
functionalTable.classList.add("active");
isolationistBottom.classList.remove("active");
functionalBottom.classList.add("active");
functionalBtn.classList.add("active");
isolationistBtn.classList.remove("active");


beforeBtn.classList.add("active");
afterBtn.classList.remove("active");
