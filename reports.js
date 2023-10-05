document.addEventListener("DOMContentLoaded", () => {
    const scheduledReportsList = document.getElementById("scheduled-reports");

    // Sample scheduled reports data
    const scheduledReportsData = [
        { name: "Monthly Maintenance Report", frequency: "Monthly" },
        { name: "Energy Consumption Report", frequency: "Quarterly" },
        { name: "Occupancy Report", frequency: "Annually" },
        // Add more scheduled reports here
    ];

    // Function to display scheduled reports
    function displayScheduledReports() {
        scheduledReportsList.innerHTML = "";
        scheduledReportsData.forEach((report) => {
            const li = document.createElement("li");
            li.textContent = `Report Name: ${report.name}, Frequency: ${report.frequency}`;
            scheduledReportsList.appendChild(li);
        });
    }

    // Initial display of scheduled reports
    displayScheduledReports();
});
