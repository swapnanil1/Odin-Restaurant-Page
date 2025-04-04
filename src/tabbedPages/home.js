import interiorImageSrc from "../images/interior.jpeg";
import partner1LogoSrc from "../images/partners/leafEat.jpeg";
import partner2LogoSrc from "../images/partners/swadDelights.jpeg";
import partner3LogoSrc from "../images/partners/bharatBhojan.jpeg";
import partner4LogoSrc from "../images/partners/prithviPantry.jpeg";
const partnerLogoSources = [
  partner1LogoSrc,
  partner2LogoSrc,
  partner3LogoSrc,
  partner4LogoSrc,
];

import reviewManImageSrc from "../images/reviews/reviewMan.jpeg";
import reviewWomanImageSrc from "../images/reviews/reviewWomen.jpeg";
const reviewProfileImageSources = [reviewManImageSrc, reviewWomanImageSrc];

function getReviewerNameByIndex(index) {
  if (index === 0) {
    return "Swapnanil";
  }
  if (index === 1) {
    return "Ditipriya";
  }
  return "Anonymous";
}

function getReviewCommentByIndex(index) {
  if (index === 0) {
    return "Fresh incredible flavors! Everything we ordered was cooked to perfection and tasted unbelievably fresh. You can tell they use high-quality ingredients. A must-try!";
  }
  if (index === 1) {
    return "Wow! Seriously impressed with the food here. Every dish was perfectly seasoned and beautifully presented. The chicken biriyani was the best I've had in a long time.";
  }
  return "No comment provided.";
}

export default function renderHomepage() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  const introSection = document.createElement("section");
  introSection.classList.add("intro-section");

  const introImage = document.createElement("img");
  introImage.src = interiorImageSrc;
  introImage.alt = "Restaurant interior";
  introSection.appendChild(introImage);

  const introHeading = document.createElement("h1");
  introHeading.classList.add("section-heading", "intro-heading-text");
  introHeading.textContent = `"Experience Culinary Delight at Odin Restaurant!"`;
  introSection.appendChild(introHeading);

  contentContainer.appendChild(introSection);

  const partnersSection = document.createElement("section");
  partnersSection.classList.add("partners-section");

  const partnersHeading = document.createElement("h3");
  partnersHeading.classList.add("section-heading");
  partnersHeading.textContent = "Our Partners";
  partnersSection.appendChild(partnersHeading);

  const partnersLogoContainer = document.createElement("div");
  partnersLogoContainer.classList.add("partners-logo-container");

  partnerLogoSources.forEach((logoSrc, index) => {
    const partnerLogo = document.createElement("img");
    partnerLogo.src = logoSrc;
    partnerLogo.alt = `Partner logo ${index + 1}`;
    partnersLogoContainer.appendChild(partnerLogo);
  });
  partnersSection.appendChild(partnersLogoContainer);

  contentContainer.appendChild(partnersSection);

  const reviewsSection = document.createElement("section");
  reviewsSection.classList.add("reviews-section");

  const reviewsHeading = document.createElement("h3");
  reviewsHeading.classList.add("section-heading");
  reviewsHeading.textContent = "Reviews";
  reviewsSection.appendChild(reviewsHeading);

  const reviewsListContainer = document.createElement("div");
  reviewsListContainer.classList.add("reviews-list-container");

  for (let index = 0; index < reviewProfileImageSources.length; index++) {
    const reviewCard = document.createElement("article");
    reviewCard.classList.add("review-card");

    const reviewerProfile = document.createElement("div");
    reviewerProfile.classList.add("reviewer-profile");

    const reviewerImage = document.createElement("img");
    reviewerImage.src = reviewProfileImageSources[index];
    reviewerImage.classList.add("reviewer-image");
    reviewerImage.alt = `Reviewer ${getReviewerNameByIndex(index)}`;
    reviewerProfile.appendChild(reviewerImage);

    const reviewerName = document.createElement("span");
    reviewerName.classList.add("reviewer-name");
    reviewerName.textContent = getReviewerNameByIndex(index);
    reviewerProfile.appendChild(reviewerName);

    reviewCard.appendChild(reviewerProfile);

    const reviewContent = document.createElement("div");
    reviewContent.classList.add("review-content");

    const reviewCommentText = document.createElement("span");
    reviewCommentText.classList.add("review-comment");
    reviewCommentText.textContent = getReviewCommentByIndex(index);
    reviewContent.appendChild(reviewCommentText);

    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars-container");
    const totalStars = 5;
    for (let starNum = 0; starNum < totalStars; starNum++) {
      const starIcon = document.createElement("span");
      starIcon.classList.add("fa", "fa-star", "checked");
      starsContainer.appendChild(starIcon);
    }
    reviewContent.appendChild(starsContainer);

    reviewCard.appendChild(reviewContent);

    reviewsListContainer.appendChild(reviewCard);
  }
  reviewsSection.appendChild(reviewsListContainer);

  contentContainer.appendChild(reviewsSection);
}
