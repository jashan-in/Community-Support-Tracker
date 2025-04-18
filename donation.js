// Author: Jashanpreet Singh
// Date: 2025-04-14
// Description: Javascript file for donation tracker component.

document.getElementById("donation-form").addEventListener("submit", function (e) {
    e.preventDefualt();
  
    const charity = document.getElementById("charity").value;
    const amount = parseInt(document.getElementById("amount").value); 
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();
  
    if (charity === "" || amount == 0 || !date) {
      alert("Fill all fields");
      return;
    }
  
    const donationData = {
      charity: charity,
      amount: amount,
      date: date,
      message: message,
    };
  
    console.log("Submitted!", donationData);
    alert("Done!");
    document.getElementById("donation-form").reset;
  });
  