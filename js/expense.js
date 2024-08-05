document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseDate = document.getElementById('expense-date').value;
    const receiptFile = document.getElementById('receipt-upload').files[0];

    if (expenseName && expenseAmount >= 0 && expenseDate) {
        const tableBody = document.querySelector('#expense-table tbody');
        const newRow = document.createElement('tr');

        const receiptURL = receiptFile ? URL.createObjectURL(receiptFile) : '';

        newRow.innerHTML = `
            <td>${expenseName}</td>
            <td>$${expenseAmount.toFixed(2)}</td>
            <td>${new Date(expenseDate).toLocaleDateString()}</td>
            <td>${receiptFile ? `<a href="${receiptURL}" target="_blank"><i class="fas fa-file-image"></i> View Receipt</a>` : 'No Receipt'}</td>
            <td class="actions">
                <button class="edit-btn"><i class="fas fa-edit"></i>Edit</button>
                <button class="delete-btn"><i class="fas fa-trash"></i>Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);

        // Clear form fields
        document.getElementById('expense-form').reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});

