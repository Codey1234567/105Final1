let list = document.getElementById("list");
let addBtn = document.getElementById("add-btn");
let filter1 = document.getElementById("strike");
let filter2 = document.getElementById("notStrike");
let isFiltered1 = false;
let isFiltered2 = false;
let itemList = [];

addBtn.onclick = function() {
    let newItem = prompt("What item do you want to add?");
    addItem(newItem);
}

function addItem(itemText) {
    let item = document.createElement("LI");
    item.innerText = itemText;
    list.appendChild(item);
    item.classList.add("purchase");
    itemList.push(item);
    item.addEventListener("click", function() {
        item.classList.toggle("strikethrough");
        if (item.classList.contains("strikethrough")) {
            item.classList.toggle("purchase");
            item.classList.toggle("notpurchase");
        } else {
            item.classList.toggle("notpurchase");
            item.classList.toggle("purchase");
        }
    })
}

filter1.onclick = function() {
        isFiltered1 = !isFiltered1;
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList[i];
            if (!item.classList.contains("strikethrough")) {
                if (isFiltered1) {
                    item.style.display = "none";
                } else {
                    item.style.display = "block";
                }
            };
        }
    }

filter2.onclick = function() {
    isFiltered2 = !isFiltered2; 

    for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i];
        
        if (item.classList.contains("strikethrough")) {
            if (isFiltered2) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        }
    }
}