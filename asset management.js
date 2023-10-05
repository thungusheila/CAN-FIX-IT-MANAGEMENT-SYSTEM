document.addEventListener("DOMContentLoaded", () => {
    const assetList = document.getElementById("asset-list");
    const assetDetails = document.getElementById("asset-details");

    // Sample assets
    const assets = [
        { id: 1, name: "chiller", location: "Ground floor - chiller room", inMaintenance: false },
        { id: 2, name: "Generator", location: "Basement 1 - Generator room", inMaintenance: true },
        { id: 3, name: "water pump", location: " Basement 3 - pump room", inMaintenance: false },
    ];

    // Display asset list
    assets.forEach((asset) => {
        const listItem = document.createElement("li");
        listItem.textContent = asset.name;
        listItem.addEventListener("click", () => {
            displayAssetDetails(asset);
        });
        assetList.appendChild(listItem);
    });

    // Function to display asset details
    function displayAssetDetails(asset) {
        assetDetails.innerHTML = `
            <h3>${asset.name}</h3>
            <p>Location: ${asset.location}</p>
            <p>Status: ${asset.inMaintenance ? "In Maintenance" : "Operational"}</p>
            <button id="maintenance-button">Mark as ${asset.inMaintenance ? "Operational" : "In Maintenance"}</button>
        `;

        const maintenanceButton = document.getElementById("maintenance-button");
        maintenanceButton.addEventListener("click", () => {
            asset.inMaintenance = !asset.inMaintenance;
            displayAssetDetails(asset);
        });
    }
});
