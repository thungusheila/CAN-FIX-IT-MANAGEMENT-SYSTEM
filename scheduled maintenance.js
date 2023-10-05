document.addEventListener("DOMContentLoaded", () => {
    const maintenanceTasksList = document.getElementById("maintenance-tasks");

    // Sample preventive maintenance data
    const preventiveMaintenanceData = [
        { asset: "Machine 1", task: "Oil Change", frequency: "Monthly" },
        { asset: "HVAC System", task: "Filter Replacement", frequency: "Quarterly" },
        { asset: "Generator", task: "Belt Inspection", frequency: "Annually" },
        // Add more preventive maintenance tasks here
    ];

    // Function to display preventive maintenance tasks
    function displayMaintenanceTasks() {
        maintenanceTasksList.innerHTML = "";
        preventiveMaintenanceData.forEach((task) => {
            const li = document.createElement("li");
            li.textContent = `Asset: ${task.asset}, Task: ${task.task}, Frequency: ${task.frequency}`;
            maintenanceTasksList.appendChild(li);
        });
    }

    // Initial display of preventive maintenance tasks
    displayMaintenanceTasks();
});
