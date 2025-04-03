document.addEventListener('DOMContentLoaded', function () {
    
    const apiKey = 'AlzaSybEiPUHZZljvmQu4qNOZvVBDrNBg-tbw2i'; // Replace with your GoMaps API key
    const apiUrl = 'https://maps.gomaps.pro/maps/api/place/queryautocomplete/json';

    const addressInput = document.getElementById('addressInput');
    const suggestionsDiv = document.getElementById('suggestions');
    const errorMessageDiv = document.getElementById('error-message');

    addressInput.addEventListener('input', function () {
        const query = addressInput.value;

    if (query.length >= 3) { // Start querying when the user types at least 3 characters
    fetch(`${apiUrl}?input=${encodeURIComponent(query)}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
    const suggestions = data.predictions || [];
    suggestionsDiv.innerHTML = ''; // Clear previous suggestions
    errorMessageDiv.classList.add('hidden'); // Hide error message

    if (suggestions.length > 0) {
    suggestions.forEach(suggestion => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item', 'p-2', 'cursor-pointer', 'hover:bg-gray-100');
    div.textContent = suggestion.description;
                            
    div.addEventListener('click', () => {
    addressInput.value = suggestion.description;
    suggestionsDiv.innerHTML = ''; // Clear suggestions on select
                                
                                // Open Google Maps with the selected location
    const location = suggestion.description;
    window.open(`https://www.google.com/maps?q=${encodeURIComponent(location)}`, '_blank');
});
                            
    suggestionsDiv.appendChild(div);
    
});

} 
else {suggestionsDiv.innerHTML = '<div class="suggestion-item p-2">No results found</div>';
                    
}
})

.catch(error => {

console.error('Error:', error);
errorMessageDiv.classList.remove('hidden'); // Show error message if API fails
suggestionsDiv.innerHTML = ''; // Clear previous suggestions
});
}
 
else {
        suggestionsDiv.innerHTML = ''; // Clear suggestions if input is short
        errorMessageDiv.classList.add('hidden'); // Hide error message if query is too short
        }
   
});

});


//Close tag

const loginfrm = document.getElementById("pickup-form");
const popup = document.getElementById("pickup");
const close = document.getElementById("close-pickup");

// Listen for the "submit" event on the form
loginfrm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    popup.style.display = "flex"; // Show the popup
});

// Close the popup when the "close" button is clicked
close.addEventListener("click", function() {
    popup.style.display = "none"; // Hide the popup
});