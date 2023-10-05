document.addEventListener("DOMContentLoaded", () => {
    const createWorkOrderButton = document.getElementById("create-work-order");
    const workOrderList = document.getElementById("work-order-list");
    const workOrderModal = document.getElementById("work-order-modal");
    const fullWorkOrderDetails = document.getElementById("full-work-order-details");
    
    // Sample array of work orders
    const workOrders = [
        {
            id: 1,
            title: "HVAC Repair",
            description: "Fix air conditioning unit in office A1",
            priority: "High",
            asset: "AC Unit 101",
            location: "Office A1",
            scheduledDate: "2023-09-25",
            assignedTo: "John Doe",
            status: "Assigned"
        },
        {
            id: 2,
            title: "Lighting Maintenance",
            description: "Replace bulbs in the lobby",
            priority: "Medium",
            asset: "Light Fixture 201",
            location: "Lobby",
            scheduledDate: "2023-09-28",
            assignedTo: "Jane Smith",
            status: "Assigned"
        },
        {
            id: 3,
            title: "Plumbing Inspection",
            description: "Check plumbing system in the restrooms",
            priority: "Low",
            asset: "Plumbing System",
            location: "Restrooms",
            scheduledDate: "2023-10-02",
            assignedTo: "Ella Johnson",
            status: "Assigned"
        }
    ];

   //createWorkOrderButton.addEventListener("click", () => {//
        // Add your logic for creating work orders here
        // You can push a new work order to the "workOrders" array

        // For example:
        // const newWorkOrder = {
        //     id: workOrders.length + 1,
        //     title: "Sample Work Order " + (workOrders.length + 1),
        //     // Add other details here...
       
       // workOrders.push(newWorkOrder);//

        // Refresh the work order list
       /// displayWorkOrders();//
   //});//

    // Function to display work orders in the list
    // Function to display work orders in the list
    function displayWorkOrders() {
        workOrderList.innerHTML = ""; // Clear the list
        workOrders.forEach((workOrder) => {
            const listItem = document.createElement("li");
            listItem.textContent = workOrder.title + " (Assigned to: " + workOrder.assignedTo + ")";
            listItem.classList.add("work-order-item"); // Add a CSS class for styling
            listItem.addEventListener("click", () => {
                // Show the full work order details in the modal
                displayFullWorkOrderDetails(workOrder);
            });
            workOrderList.appendChild(listItem);
        });
    }
    // Function to display full work order details in the modal
    function displayFullWorkOrderDetails(workOrder) {
        fullWorkOrderDetails.innerHTML = `
            <p><strong>Title:</strong> ${workOrder.title}</p>
            <p><strong>Description:</strong> ${workOrder.description}</p>
            <p><strong>Priority:</strong> ${workOrder.priority}</p>
            <p><strong>Asset:</strong> ${workOrder.asset}</p>
            <p><strong>Location:</strong> ${workOrder.location}</p>
            <p><strong>Scheduled Date:</strong> ${workOrder.scheduledDate}</p>
            <p><strong>Assigned To:</strong> ${workOrder.assignedTo}</p>
            <p><strong>Status:</strong> ${workOrder.status}</p>
            `;
            // Show the modal
        workOrderModal.style.display = "block";
    }

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", () => {
        workOrderModal.style.display = "none";
    });

    // Initial display of work orders
    displayWorkOrders();
});
