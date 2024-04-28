function addToCart(button) {
    // Accessing the product details from the button's data attributes
    var productName = button.getAttribute("data-product-name");
    var price = parseFloat(button.getAttribute("data-price"));

    // Create a new table row
    var newRow = document.createElement("tr");

    // Create cells for each column
    var removeCell = document.createElement("td");
    var imageCell = document.createElement("td");
    var productCell = document.createElement("td");
    var priceCell = document.createElement("td");
    var quantityCell = document.createElement("td");
    var subtotalCell = document.createElement("td");

    // Create remove button and set onclick event to remove the row
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
    removeButton.onclick = function() {
        newRow.remove();
        calculateSubtotal();
    };
    removeCell.appendChild(removeButton);

    // Add image cell
    var image = document.createElement("img");
    image.src = button.getAttribute("data-image-src");
    image.alt = "Product Image";
    imageCell.appendChild(image);

    // Add product name to the product cell
    productCell.textContent = productName;

    // Add price to the price cell
    priceCell.textContent = price;

    // Add input field for quantity
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1; // Default quantity
    quantityInput.min = 1; // Minimum quantity allowed
    quantityInput.onchange = function() {
        updateSubtotal(newRow, quantityInput.value, price);
    };
    quantityCell.appendChild(quantityInput);

    // Add subtotal cell
    subtotalCell.textContent = price; // Default value, will be updated dynamically

    // Append cells to the row
    newRow.appendChild(removeCell);
    newRow.appendChild(imageCell);
    newRow.appendChild(productCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(quantityCell);
    newRow.appendChild(subtotalCell);

    // Append row to the cart table
    document.querySelector("#cart tbody").appendChild(newRow);

    // Calculate and update subtotal
    calculateSubtotal();

    // Update total amount
    updateTotalAmount(); // Add this line
}


// Function to update subtotal based on quantity change
function updateSubtotal(row, quantity, price) {
    var subtotal = quantity * price;
    row.querySelector("td:nth-child(6)").textContent = subtotal;
    calculateSubtotal();
}

// Function to calculate subtotal
function calculateSubtotal() {
    var subtotal = 0;
    var rows = document.querySelectorAll("#cart tbody tr");
    rows.forEach(function(row) {
        subtotal += parseFloat(row.querySelector("td:nth-child(6)").textContent);
    });
    document.querySelector("#subtotal").textContent = "Subtotal: ₹" + subtotal;
}
// Function to update total amount


// Function to update total amount
// Function to calculate subtotal
// Function to calculate subtotal
function calculateSubtotal() {
    var subtotal = 0;
    var rows = document.querySelectorAll("#cart tbody tr");
    rows.forEach(function(row) {
        var subtotalCell = row.querySelector("td:nth-child(6)");
        if (subtotalCell) {
            subtotal += parseFloat(subtotalCell.textContent || 0);
        }
    });
    document.querySelector("#subtotal").textContent = "Subtotal: ₹" + subtotal;
}


// Function to update total amount based on subtotal change
function updateTotalAmount() {
    var totalAmount = 0;
    var rows = document.querySelectorAll("#cart tbody tr");
    rows.forEach(function(row) {
        totalAmount += parseFloat(row.querySelector("td:nth-child(6)").textContent);
    });
    document.querySelector("#totalAmount").textContent = "Total Amount: ₹" + totalAmount;
}

// Function to handle payment
function makePayment() {
    alert("Payment successful!");
    // Remove all items from the cart
    var cartBody = document.querySelector("#cart tbody");
    cartBody.innerHTML = "";
    // Recalculate subtotal to update total amount
    calculateSubtotal();
}




