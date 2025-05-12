const addItemBtn = document.getElementById('add-item-btn');
const addItemModal = document.getElementById('add-item-modal');
const addItemNameInput = document.getElementById('add-item-name'); 
const addItemAmountInput = document.getElementById('add-item-amount'); 
const itemDiv = document.getElementById('items');


function toggleModal() {
    addItemModal.classList.toggle('invisible')    
}

function addItem() {
    const amount = addItemAmountInput.value;
    const name = addItemNameInput.value;
    
    let delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.innerText = '🗑️'
    delBtn.classList.add('del-item-btn');
    
    let table = document.createElement('table')
    let row = table.insertRow(0);
    
    let cellItemName = row.insertCell(0) 
    cellItemName.innerText = name;
    
    let cellItemAmount = row.insertCell(-1)
    cellItemAmount.innerText = amount;
    
    let cellDelBtn = row.insertCell(-1) 
    cellDelBtn.appendChild(delBtn);
    
    itemDiv.appendChild(table);
    
}

function delItem() {
    const deleteButton = event.target;
    if (deleteButton.classList.contains('del-item-btn')) {
        const table = deleteButton.closest('table');
        if (table) {
            table.remove();
        }
    }
}


addItemBtn.addEventListener('click', addItem);
itemDiv.addEventListener('click', delItem);