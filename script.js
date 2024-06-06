// // Assuming you have an input field with ID 'userInput' and a button with ID 'submitButton'
// document.getElementById('submitButton').addEventListener('click', function() {
//     var userInput = document.getElementById('userInput').value;
//     // Make the API call to the Zoho Creator function
//     ZOHO.CREATOR.API.executeFunction("Speech_Functions.testAPIinvokeurl", { input_text: userInput })
//         .then(function(response) {
//             console.log(response); // Handle the response as needed
//         })
//         .catch(function(error) {
//             console.error(error); // Handle the error as needed
//         });
// });

// // Example usage
// const promptText = "This is a test prompt text";
// triggerZohoFunction(promptText);

// function triggerZohoFunction(promptText) {
//     ZOHO.CREATOR.API.executeFunction("Speech_Functions.testAPIinvokeurl", { input_text: promptText })
//         .then(function(response) {
//             console.log(response); // Handle the response as needed
//         })
//         .catch(function(error) {
//             console.error(error); // Handle the error as needed
//         });
// }
