
// DOM nodes
let items = document.getElementById('items')

exports.addItem = item => {
    // Create a new DOM node
    let itemNode = document.createElement('div')

    // Assign "read-item" class
    itemNode.setAttribute('class', 'read-item')

    // Add inner HTML
    itemNode.innerHTML = `<img scr="${item.screenshot}"><h2>${item.title}</h2>`

    //Append new node to "items"
    items.appendChild(itemNode)
}