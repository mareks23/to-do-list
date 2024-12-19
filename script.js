const inputField = document.getElementById(`item-text`);
const addButton = document.getElementById(`add-button`);
const itemList = document.getElementById(`item-list`);

addButton.addEventListener(`click`, () => {
    const inputValue = inputField.value;

    if(inputValue === ``){
        alert(`Lūdzu ievadi tekstu`);
        return;
    }

    const listItem = document.createElement(`li`);
    listItem.textContent = inputValue;

    const deleteButton = document.createElement(`button`);
    deleteButton.textContent = `❌`;
    deleteButton.className = `deleteButton`;
    deleteButton.addEventListener(`click`, () => {
        listItem.remove();
    })
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
    inputField.value = ``;
})






    








