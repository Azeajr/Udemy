const { ipcRenderer } = require("electron")
const items = require('./items')

let showModal = document.getElementById('show-modal'),
    closeModal = document.getElementById('close-modal'),
    modal = document.getElementById('modal'),
    addItem = document.getElementById('add-item'),
    itemUrl = document.getElementById('url')

// Disable & Enable modal button
const toggleModalButton = () => {
    if (addItem.disabled === true) {
        addItem.disabled = false
        addItem.style.opacity = 1
        addItem.innerText = 'Add Item'
        closeModal.style.display = 'inline'
    } else {
        addItem.disabled = true
        addItem.style.opacity = 0.5
        addItem.innerText = 'Adding...'
        closeModal.style.display = 'none'
    }
}

showModal.addEventListener('click', e => {
    modal.style.display = 'flex'
    itemUrl.focus()
})
closeModal.addEventListener('click', e => {
    modal.style.display = 'none'
})

addItem.addEventListener('click', e => {

    if (itemUrl.value) {
        ipcRenderer.send('new-item', itemUrl.value)

        // Disable buttons
        toggleModalButton()
    }
})

ipcRenderer.on('new-item-success', (e, newItem) => {
    // Add new item to "items" node
    items.addItem(newItem)

    // Enable buttons
    toggleModalButton();

    // Hide modal and clear value
    modal.style.display = 'none'
    itemUrl.value = ''

})

itemUrl.addEventListener('keyup', e => {
    if(e.key === 'Enter') addItem.click()
})