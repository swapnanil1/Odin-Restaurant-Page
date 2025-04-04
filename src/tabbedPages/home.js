import interior from "../images/interior.jpeg";
import partner1 from "../images/partners/leafEat.jpeg";
import partner2 from "../images/partners/swadDelights.jpeg";
import partner3 from "../images/partners/bharatBhojan.jpeg";
import partner4 from "../images/partners/prithviPantry.jpeg";
const partnersArray = [partner1, partner2, partner3, partner4];
import review1 from "../images/reviews/reviewMan.jpeg";
import review2 from "../images/reviews/reviewWomen.jpeg";
const reviewArray = [review1, review2];
function provideName(i) {
  if (i == 0) {
    return "Swapnanil";
  }
  if (i == 1) {
    return "Ditipriya";
  }
}
function provideComment(i) {
  if (i == 0) {
    return "Fresh incredible flavors! Everything we ordered was cooked to perfection and tasted unbelievably fresh. You can tell they use high-quality ingredients. A must-try!";
  }
  if (i == 1) {
    return "Wow! Seriously impressed with the food here. Every dish was perfectly seasoned and beautifully presented. The chicken biriyani was the best I've had in a long time. ";
  }
}
export default function renderHomepage() {
  const content = document.getElementById("content");

  // render section 1
  const section1 = document.createElement("section");
  section1.classList.add("home-section-1");
  const section1Image = document.createElement("img");
  const section1Heading = document.createElement("h1");
  const article = document.createElement("article");
  section1Image.src = interior;
  section1.appendChild(section1Image);
  section1Heading.classList.add("heading");
  section1Heading.textContent = `"Experience Culinary Delight at Odin Restaurant!"`;
  section1.appendChild(section1Heading);
  content.appendChild(section1);

  // render section 2
  const section2 = document.createElement("section");
  section2.classList.add("home-section-2");
  const section2Heading = document.createElement("h3");
  section2Heading.classList.add("heading");
  section2Heading.textContent = "Our Partners";
  section2.appendChild(section2Heading);
  const partnersContainer = document.createElement("div");
  partnersContainer.classList.add("partnersContainer");
  partnersArray.forEach((partner) => {
    const partnerslogo = document.createElement("img");
    partnerslogo.src = partner;
    partnersContainer.appendChild(partnerslogo);
  });
  section2.appendChild(partnersContainer);
  content.appendChild(section2);

  // render section 3
  const section3 = document.createElement("section");
  section3.classList.add("home-section-3");
  const section3Heading = document.createElement("h3");
  section3Heading.classList.add("heading");
  section3Heading.textContent = "Reviews";
  section3.appendChild(section3Heading);
  const reviewsContainer = document.createElement("div");
  reviewsContainer.classList.add("reviewsContainer");
  const reviewsCounter = reviewArray.length;
  for (let index = 0; index < reviewsCounter; index++) {
    // creating 2 profileBox inside reviewcontainer for 2 people for now
    const profileBox = document.createElement("article");
    profileBox.classList.add("profileBox");
    // each profilebox has a reviewBox and reviewData
    const reviewBox = document.createElement("article");
    reviewBox.classList.add("reviewBox");
    const profileImage = document.createElement("img");
    profileImage.src = reviewArray[index];
    profileImage.classList.add("profileImage");
    reviewBox.appendChild(profileImage);
    const profileName = document.createElement("span");
    profileName.classList.add("profileName");
    profileName.textContent = provideName(index);
    reviewBox.appendChild(profileName);
    profileBox.appendChild(reviewBox);
    const reviewData = document.createElement("article");
    reviewData.classList.add("reviewData");
    const reviewComment = document.createElement("span");
    reviewComment.classList.add("reviewComment");
    reviewComment.textContent = provideComment(index);
    reviewData.appendChild(reviewComment);
    const reviewStar = document.createElement("div");
    reviewStar.classList.add("stars");
    let starCount = 5;
    while (true) {
      if (starCount <= 0) break;
      const star = document.createElement("span");
      star.classList.add("fa", "fa-star", "checked");
      reviewStar.appendChild(star);
      starCount--;
    }
    reviewData.appendChild(reviewStar);
    profileBox.appendChild(reviewData);
    reviewsContainer.appendChild(profileBox);
  }
  section3.appendChild(reviewsContainer);
  content.appendChild(section3);
}
