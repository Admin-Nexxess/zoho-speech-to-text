document.addEventListener('DOMContentLoaded', function() {
    const startRecordBtn = document.getElementById('start-record-btn');
    const resultText = document.getElementById('result-text');
    const successMessage = document.getElementById('success-message');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Your browser does not support Speech Recognition.');
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        resultText.value = transcript;
        // Call the Zoho function to create the record
        callZohoFunction(transcript);
    };

    recognition.onerror = (event) => {
        console.error(event.error);
    };

    startRecordBtn.addEventListener('click', () => {
        recognition.start();
    });

    function callZohoFunction(text) {
        const parentWindow = window.parent;
        parentWindow.ZOHO.CREATOR.API.executeFunction("Speech_Functions.testAPIinvokeurl", {input_text: text})
            .then(function(response) {
                console.log("Function executed successfully: ", response);
                // Display the success message
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000); // Hide the message after 3 seconds
            })
            .catch(function(error) {
                console.error("Error executing function: ", error);
            });
    }
});
