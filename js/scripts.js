function greetUser() {
    const hour = new Date().getHours();
    let greeting = "Welcome!";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    alert(greeting);
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  
  function validateContactForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^\d{10}$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return false;
    }
    if (!phonePattern.test(phone)) {
      alert("Enter a 10-digit phone number.");
      return false;
    }
    return true;
  }
  