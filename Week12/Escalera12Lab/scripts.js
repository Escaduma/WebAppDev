console.log("Linked");

// Select the form and result section
const form = document.getElementById("contactForm");
const result = document.getElementById("info");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const phone=document.getElementById("phone").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>Your info has been saved</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;
});


// =====================================================================================
// What does event.preventDefault() actually prevent? 
// It prevents the page to refresh every time the button is clicked

// What does .value return?
// It helps to allow the user insert text without a problem

// Why use template literals (`${}`) instead of string concatenation?
// Because with this the information can be displayed in the html page instead the console

// =====================================================================================