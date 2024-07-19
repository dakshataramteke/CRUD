let editBtn = document.querySelector("#editbtn");
if (editBtn) {
editBtn.addEventListener("click", function() {
    alert("Edit Successfully");
});
}
let deleteBtn = document.querySelectorAll("#deleteBtn");
for (dltBtn of deleteBtn) {
    console.log(dltBtn);
    if (dltBtn) {
        dltBtn.addEventListener("click", function() {
            alert("Delete Successfully");
            deleteBtn.remove();
        });
    } else {
        console.log("Delete button not found");
    }  
}