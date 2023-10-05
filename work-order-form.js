document.addEventListener("DOMContentLoaded", () => {
    const workOrderForm = document.getElementById("work-order-form");
    const workOrderList = document.getElementById("work-order-list");

    // Function to add a work order to the list
    //function addWorkOrderToList(workOrder) {
        const listItem = document.createElement("li");
        listItem.textContent = `${workOrder.title} (Priority: ${workOrder.priority})`;
        workOrderList.appendChild(listItem);//
    

    // Event listener for form submission
    workOrderForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect user input from the form
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const priority = document.getElementById("priority").value;

        // Create a work order object
        const workOrder = {
            title,
            description,
            priority,
        };

        // Add the work order to the list
       // addWorkOrderToList(workOrder);//

        // Clear the form
      //  workOrderForm.reset();//
    });
});
