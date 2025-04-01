export default function renderContact() {
  const content = document.getElementById("content");

  // Create main contact section
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");

  // Add headline
  const headline = document.createElement("h2");
  headline.classList.add("headline");
  headline.textContent = "Contact Us";
  contactSection.appendChild(headline);

  // Add contact information
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const address = document.createElement("div");
  address.classList.add("contact-item");
  address.innerHTML = `
        <h3>Visit Us</h3>
        <p>123 Heritage Street</p>
        <p>Foodie District</p>
        <p>Kolkata, WB 700013</p>
    `;

  const hours = document.createElement("div");
  hours.classList.add("contact-item");
  hours.innerHTML = `
        <h3>Hours</h3>
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday: 10:00 AM - 11:00 PM</p>
        <p>Sunday: 10:00 AM - 9:00 PM</p>
    `;

  const phone = document.createElement("div");
  phone.classList.add("contact-item");
  phone.innerHTML = `
        <h3>Get in Touch</h3>
        <p>Phone: +91 1234567890</p>
        <p>Email: info@odinrestaurant.com</p>
    `;

  // Add contact form
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.innerHTML = `
        <h3>Send us a Message</h3>
        <div class="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required>
        </div>
        <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
    `;

  // Add event listener to form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (This is just a demo)");
    form.reset();
  });

  // Append all elements
  contactInfo.appendChild(address);
  contactInfo.appendChild(hours);
  contactInfo.appendChild(phone);
  contactSection.appendChild(contactInfo);
  contactSection.appendChild(form);

  // Add to main content
  content.appendChild(contactSection);
}
