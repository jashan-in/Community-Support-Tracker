document.getElementById("volunteer-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const charity = document.getElementById("charity").value.trim();
    const hours = parseFloat(document.getElementById("hours").value);
    const date = document.getElementById("date").value;
    const rating = parseInt(document.getElementById("rating").value);
  
    if (!charity || isNaN(hours) || hours <= 0 || !date || isNaN(rating) || rating < 1 || rating > 5) {
      alert("Please fill out every details correctly.");
      return;
    }
  
    const volunteerData = {
      charity,
      hours,
      date,
      rating,
    };
  
    console.log("Volunteer Hours Submitted", volunteerData);
    alert("Volunteer hours submitted successfully!");
    document.getElementById("volunteer-form").reset();
  });
  