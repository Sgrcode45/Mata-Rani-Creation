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
    count += Math.ceil(target / 50); // smooth increment
    if(count >= target) count = target;
    priceEl.textContent = `₹${count.toLocaleString()}`;
    if(count >= target) clearInterval(interval);
  }, 30);
});

// Open WhatsApp with pre-filled message
function openWhatsApp(amount) {
  const phone = "918054638065"; // same as given number
  const message = `Hello, I want to book a package of ₹${amount} from Mata Rani Creation.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// Open UPI payment using same phone number
function openUPI(amount) {
  const upiNumber = "8054638065"; // same number
  const name = "Mata Rani Creation";
  const message = `Payment for package ₹${amount}`;

  // UPI link
  const upiLink = `upi://pay?pa=${upiNumber}@upi&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(message)}&am=${amount}&cu=INR`;
  
  window.open(upiLink, "_blank");
}
