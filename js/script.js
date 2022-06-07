new SimpleLightbox({ elements: ".container-galerie a" });
new SimpleLightbox({ elements: ".orar-imagini a" });

AOS.init({
  duration: 900,
  offset: 100,
  once: true,
});

function mobile() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className = "navbar mobile";
  } else {
    x.className = "navbar";
  }
}

// Servicii de email: Sursa - https://www.emailjs.com/
emailjs.init("user_9WduNVBHbBYvIEoUmi6oG");
function send() {
  if (document.getElementById("formular").checkValidity() == false) {
    document.getElementById("formular").reportValidity();
    return;
  }

  var date = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value,
    mesaj: document.getElementById("mesaj").value,
  };

  emailjs.send("service_r8rzxjq", "template_fspqsii", date).then(
    function (raspuns) {
      alert("Mesajul a fost transmis.");
      document.getElementById("formular").reset();
    },
    function (error) {
      alert("Eroare la transmitere. Contactati programatorul.");
    }
  );
}
// Sursa - https://www.emailjs.com/
