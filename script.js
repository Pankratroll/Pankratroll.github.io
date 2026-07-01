function saveToFile() {
    // 1. Get values from the inputs
    const user = document.getElementById('userInput').value;
    const city = document.getElementById('cityInput').value;

    // 2. Format the data
    const content = `User Info: ${user}\nCity: ${city}`;

    // 3. Create a Blob object representing the data
    const blob = new Blob([content], { type: 'text/plain' });

    // 4. Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.txt'; // The name of the file

    // 5. Trigger the download
    document.body.appendChild(link);
    link.click();
    
    // 6. Cleanup
    document.body.removeChild(link);
}
