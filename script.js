// Scroll to section smoothly
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Booking form submission handler
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roomType = document.getElementById("roomType").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (new Date(checkin) >= new Date(checkout)) {
        alert("Check-out date must be after check-in date!");
        return;
    }

    const confirmationMessage = `
        Thank you, ${name}!<br>
        Your booking for a <strong>${roomType}</strong> room is confirmed.<br>
        Check-in: ${checkin} | Check-out: ${checkout}<br>
        A confirmation email has been sent to: ${email}.
    `;

    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;

    // Reset form after submission
    document.getElementById("bookingForm").reset();
});
