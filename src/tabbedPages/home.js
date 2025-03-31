function homepage() {
  const content = document.getElementById("content");
  const headline = document.createElement("h2");
  headline.classList.add("headline");
  headline.textContent = "Experience Culinary Delight at Odin Restaurant!";
  content.appendChild(headline);
  const quote = document.createElement("blockquote");
  quote.classList.add("quote");
  quote.textContent =
    '"The secret ingredient is always passion (and maybe a little butter)."';
  content.appendChild(quote);
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "Welcome to a place where flavor comes alive! We pour our hearts into every dish, using the finest ingredients to create food that doesn't just taste good, but feels good too. Join us for an unforgettable dining experience in a warm and inviting atmosphere. You'll wonder why you didn't come sooner!";
  content.appendChild(description);
}
export default homepage;
