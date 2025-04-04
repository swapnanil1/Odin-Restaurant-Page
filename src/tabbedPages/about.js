export default function renderAbout() {
  const content = document.getElementById("content");

  const headline = document.createElement("h2");
  headline.classList.add("headline");
  headline.textContent = "About Odin Restaurant";
  content.appendChild(headline);
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "We are a passionate team of chefs and food enthusiasts who believe that great food should be accessible to everyone. Our restaurant is a place where you can come to savor the flavors of home-cooked meals, and where you can connect with like-minded people. We use fresh, locally-sourced ingredients to create dishes that are both delicious and healthy. We also offer a range of vegetarian and vegan options, and we are committed to providing a safe and welcoming environment for all our customers.";
  content.appendChild(description);
  const quote = document.createElement("blockquote");
  quote.classList.add("quote");
  quote.textContent =
    '"The secret ingredient is always passion (and maybe a little butter)."';
  content.appendChild(quote);
  const closing = document.createElement("p");
  closing.classList.add("description");
  closing.textContent =
    "We are committed to creating a warm and welcoming atmosphere for all our customers. We believe that great food should be accessible to everyone, and we are here to help you find the flavors that make your heart sing.";
  content.appendChild(closing);
}
