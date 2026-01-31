

// Smooth scroll to contact when clicking CTA button in hero
document.getElementById("ctaBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Animated Pricing Counters
const prices = document.querySelectorAll(".price");
prices.forEach(priceEl => {
  const target = parseInt(priceEl.getAttribute("data-price"));
  let count = 0;
  const interval = setInterval(() => {
    count += Math.ceil(target / 50);
    if(count >= target) count = target;
    priceEl.textContent = `₹${count.toLocaleString()}`;
    if(count >= target) clearInterval(interval);
  }, 30);
});

// Open WhatsApp with pre-filled message
function openWhatsApp(amount) {
  const phone = "918054638065"; 
  const message = `Hello, I want to book a package of ₹${amount} from Mata Rani Creation.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// Open UPI payment for pricing cards (mobile only)
function openUPI(amount) {
  const upiNumber = "6280732691";
  const name = "Mata Rani Creation";
  const message = `Payment for package ₹${amount}`;
  const upiLink = `upi://pay?pa=${upiNumber}@upi&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(message)}&cu=INR`;
  window.location.href = upiLink;
}

// Show UPI QR Code (Payment Section)
function showUPIQr() {
  const upiNumber = "6280732691";
  const upiLink = `upi://pay?pa=${upiNumber}@upi&pn=Mata Rani Creation&cu=INR`;
  const qrImg = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${encodeURIComponent(upiLink)}`;
  document.getElementById("upiQrImg").src = qrImg;
  document.getElementById("upiPopup").style.display = "flex";
}

// Close QR popup
function closeUPIQr() {
  document.getElementById("upiPopup").style.display = "none";
}





// Open UPI payment for pricing cards
function openUPI(amount) {
  const upiNumber = "6280732691"; // Your UPI number
  const name = "Mata Rani Creation";
  const message = `Payment for package ₹${amount}`;

  // UPI URL
  const upiLink = `upi://pay?pa=${upiNumber}@upi&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(message)}&am=${amount}&cu=INR`;

  // Redirect to UPI app
  window.location.href = upiLink;
}
