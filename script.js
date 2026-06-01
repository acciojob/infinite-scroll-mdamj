//your code here!
const list = document.getElementById("infi-list");
let count = 1;

// Add items function
function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${count++}`;
        list.appendChild(li);
    }
}

addItems(10);
list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItems(2);
    }
});
