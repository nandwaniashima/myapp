// Ensure jsPDF is available
const { jsPDF } = window.jspdf;

function generateInvoice() {
    const invoiceNumber = document.getElementById('invoice-number').value;
    const date = document.getElementById('date').value;
    const companyName = document.getElementById('company-name').value;
    const companyAddress = document.getElementById('company-address').value;
    const clientName = document.getElementById('client-name').value;
    const clientAddress = document.getElementById('client-address').value;
    const itemDescription = document.getElementById('item-description').value;
    const itemQuantity = parseFloat(document.getElementById('item-quantity').value);
    const itemPrice = parseFloat(document.getElementById('item-price').value);
    const totalPrice = itemQuantity * itemPrice;

    const invoiceContent = `
        Invoice Number: ${invoiceNumber}
        Date: ${date}
        
        Company Details:
        Name: ${companyName}
        Address: ${companyAddress}
        
        Client Details:
        Name: ${clientName}
        Address: ${clientAddress}
        
        Item Details:
        Description: ${itemDescription}
        Quantity: ${itemQuantity}
        Price per Item: $${itemPrice.toFixed(2)}
        Total Price: $${totalPrice.toFixed(2)}
    `;

    document.getElementById('invoice-preview').innerText = invoiceContent;
    document.getElementById('download-btn').style.display = 'block';
}

function downloadPDF() {
    const doc = new jsPDF();
    const invoiceContent = document.getElementById('invoice-preview').innerText;
    
    // Add content to PDF
    doc.text(invoiceContent, 10, 10);
    
    // Save the PDF
    doc.save('invoice.pdf');
}
