const { ipcRenderer } = require("electron")

let showModal = document.getElementById('show-modal'),
    closeModal = document.getElementById('close-modal'),
    modal = document.getElementById('modal'),
    addItem = document.getElementById('add-item'),
    itemUrl = document.getElementById('url')

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
    }
})

itemUrl.addEventListener('keyup', e => {
    if(e.key === 'Enter') addItem.click()
})