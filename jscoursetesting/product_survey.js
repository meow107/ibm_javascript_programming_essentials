
const submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission and page reload
    submitFeedback();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitFeedback();
    }
});

function submitFeedback() {
    const userName = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const desgination = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    if (feedback.trim() === '') {
        alert('Thank you for your valuable feedback');
        return;
    }
    // Simulate sending feedback to the server
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    document.getElementById('feedbackText').value = '';

    document.getElementById('userName').innerHTML = userName;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = desgination;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
}