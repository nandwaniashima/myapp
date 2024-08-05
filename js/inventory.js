document.getElementById('inventory-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value, 10);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if (itemName && itemQuantity >= 0 && itemPrice >= 0) {
        const totalValue = itemQuantity * itemPrice;

        const tableBody = document.querySelector('#inventory-table tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${itemName}</td>
            <td>${itemQuantity}</td>
            <td>$${itemPrice.toFixed(2)}</td>
            <td>$${totalValue.toFixed(2)}</td>
            <td class="actions">
                <button class="edit-btn"><i class="fas fa-edit"></i>Edit</button>
                <button class="delete-btn"><i class="fas fa-trash"></i>Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);

        // Clear form fields
        document.getElementById('inventory-form').reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});
