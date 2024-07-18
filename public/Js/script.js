let editBtn = document.querySelector("#editbtn");
editBtn.addEventListener("click", function() {
    alert("Edit Successfully");
});
let deleteBtn = document.querySelector("#deleteBtn");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", function() {
            alert("Delete Successfully");
            deleteBtn.remove();
        });
    } else {
        console.log("Delete button not found");
    }