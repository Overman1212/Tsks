// Function to search through airdrops based on input
function searchTasks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get search input
    const airdrops = document.querySelectorAll('.airdrop'); // Select all airdrop elements

    airdrops.forEach(airdrop => {
        const airdropName = airdrop.querySelector('.airdrop-text').textContent.toLowerCase(); // Get the airdrop name
        // Check if the airdrop name matches the search input
        if (airdropName.includes(searchInput)) {
            airdrop.style.display = ''; // Show the airdrop if it matches
        } else {
            airdrop.style.display = 'none'; // Hide the airdrop if it doesn't match
        }
    });
}

// Function to show task answers for the selected airdrop
function showTasks(taskId) {
    // Hide all task sections
    const taskSections = document.querySelectorAll('.taskSection');
    taskSections.forEach(section => section.style.display = 'none');
    
    // Show the selected task section
    const selectedTaskSection = document.getElementById(taskId);
    if (selectedTaskSection) {
        selectedTaskSection.style.display = 'block';
    }

    // Hide the airdrop list
    document.getElementById('airdropList').style.display = 'none';
}

// Function to go back to the airdrop list from the task section
function goBack() {
    // Hide all task sections
    const taskSections = document.querySelectorAll('.taskSection');
    taskSections.forEach(section => section.style.display = 'none');
    
    // Show the airdrop list again
    document.getElementById('airdropList').style.display = 'block';
}

// Function to copy the answer to the clipboard
function copyAnswer(answerId) {
    const answerText = document.getElementById(answerId).textContent; // Get the answer text
    navigator.clipboard.writeText(answerText) // Copy to clipboard
        .then(() => {
            alert('Answer copied to clipboard!'); // Alert user on success
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}
