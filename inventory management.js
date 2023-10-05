document.addEventListener("DOMContentLoaded", () => {
    const inventoryItemsList = document.getElementById("inventory-items");
    const lowStockItemsList = document.getElementById("low-stock-items");

    // Sample inventory data (you can replace this with actual data from a database)
    const inventoryData = [
        { name: "Brake Fluid", quantity: 20 },
        { name: "1/4 Pipe", quantity: 5 },
        { name: "Sockets", quantity: 10 },
        // Add more inventory items here
    ];

    // Function to display inventory items
    function displayInventory() {
        inventoryItemsList.innerHTML = "";
        inventoryData.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} (Quantity: ${item.quantity})`;
            inventoryItemsList.appendChild(li);

            // Check if the item is low on stock
            if (item.quantity < 10) {
                const lowStockLi = document.createElement("li");
                lowStockLi.textContent = `${item.name} (Quantity: ${item.quantity})`;
                lowStockItemsList.appendChild(lowStockLi);
            }
        });
    }

    // Initial display of inventory
    displayInventory();
});
