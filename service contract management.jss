document.addEventListener("DOMContentLoaded", () => {
    const contractList = document.getElementById("contract-list");
    const contractDetails = document.getElementById("contract-details");

    // Sample service contracts
    const serviceContracts = [
        { id: 1, name: "HVAC Maintenance", vendor: "ABC Services", startDate: "2023-01-15", endDate: "2023-12-31", active: true },
        { id: 2, name: "Security System Monitoring", vendor: "XYZ Security", startDate: "2023-02-20", endDate: "2024-02-20", active: false },
        { id: 3, name: "Elevator Maintenance", vendor: "Elevator Pros", startDate: "2022-11-01", endDate: "2023-11-01", active: true },
    ];

    // Display service contract list
    serviceContracts.forEach((contract) => {
        const listItem = document.createElement("li");
        listItem.textContent = contract.name;
        listItem.addEventListener("click", () => {
            displayContractDetails(contract);
        });
        contractList.appendChild(listItem);
    });

    // Function to display contract details
    function displayContractDetails(contract) {
        contractDetails.innerHTML = `
            <h3>${contract.name}</h3>
            <p>Vendor: ${contract.vendor}</p>
            <p>Start Date: ${contract.startDate}</p>
            <p>End Date: ${contract.endDate}</p>
            <p>Status: ${contract.active ? "Active" : "Expired"}</p>
            <button id="status-button">${contract.active ? "Deactivate" : "Activate"}</button>
        `;

        const statusButton = document.getElementById("status-button");
        statusButton.addEventListener("click", () => {
            contract.active = !contract.active;
            displayContractDetails(contract);
        });
    }
});
