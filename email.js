// contact-form.js

// Afișează câmpul website când checkbox-ul e bifat
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("hasWebsite");
    const websiteField = document.getElementById("websiteField");
  
    checkbox.addEventListener("change", function () {
      websiteField.style.display = this.checked ? "block" : "none";
    });
  });
  
  function sendMail(event) {
    event.preventDefault(); // Previne refresh-ul
  
    const parms = {
      nume: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      telefon: document.getElementById("phone").value,
      are_website: document.getElementById("hasWebsite").checked ? "Da" : "Nu",
      website_link: document.getElementById("websiteUrl").value || "Nu are",
      mesaj: document.getElementById("message").value,
    };
  
    console.log("Trimitem formular:", parms);
  
    emailjs.send("service_6vch1mn", "template_7hxy0g7", parms).then(
      function (response) {
        showNotification("Mesajul a fost trimis cu succes!", true);
        console.log("SUCCESS!", response);
        document.getElementById("contactForm").reset();
        document.getElementById("websiteField").style.display = "none";
      },
      function (error) {
        showNotification("Eroare la trimiterea mesajului!", false);
        console.error("FAILED...", error);
      }
    );
  }
  
  function showNotification(message, success = true) {
    const notification = document.getElementById("notification");
    notification.innerText = message;
    notification.style.backgroundColor = success
      ? "rgba(0, 150, 0, 0.8)"
      : "rgba(200, 0, 0, 0.8)";
    notification.style.color = "#fff";
  
    notification.classList.remove("hidden");
    notification.classList.add("show");
  
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.classList.add("hidden");
      }, 500); // delay pentru tranziție
    }, 3500); // Afișează 3.5 secunde
  }
  
  