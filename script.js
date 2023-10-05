document.addEventListener("DOMContentLoaded", () => {
    // Simulated asset management functionality
    const assetManagementSection = document.querySelector(".management-section:nth-child(1)");
    assetManagementSection.addEventListener("click", () => {
        window.open("asset management.html", "_blank");
    });

    // Simulated work order management functionality
    const workOrderManagementSection = document.querySelector(".management-section:nth-child(2)");
    workOrderManagementSection.addEventListener("click", () => {
        window.open("work management.html", "_blank");
    });

    // Simulated service contract management functionality
    const serviceContractManagementSection = document.querySelector(".management-section:nth-child(3)");
    serviceContractManagementSection.addEventListener("click", () => {
        window.open("service contract management.html", "_blank");
    });
});
