let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readyOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";
    
    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input 
    document.getElementById().readyOnly = true;

    // Calculate elapsed and words per minute (WPM)
    var timeEplased = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count. words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function(word) {
        return word !=="";
    }).length;

    var wpm = 0;// default value
    if(timeEplased !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeEplased) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" 
        + "<p>Words Typed: " + typedWords + "</p>" 
        + "<p>Time Elapsed: " + timeEplased.toFixed(2) + " seconds</p>" 
        + "<p>Words Per Minute (WPM): " + wpm + "</p>";

}