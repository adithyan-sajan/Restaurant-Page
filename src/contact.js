export function createReviewsSection() {
    const reviewsSection = document.createElement("div");
    reviewsSection.classList.add("reviews-section", "about", "menu");

    const reviewsHeader = document.createElement("h2");
    reviewsHeader.textContent = "Customer Reviews";
    reviewsSection.appendChild(reviewsHeader);

    const reviewsList = document.createElement("ul");

    const reviewsData = [
        {
            name: "Aishwarya Nair",
            rating: "⭐⭐⭐⭐⭐",
            comment: "Excellent food and service! The Kerala Vegetable Curry was delicious.",
        },
        {
            name: "Rajesh Kumar",
            rating: "⭐⭐⭐⭐",
            comment: "Good ambiance and tasty biryani. Will definitely visit again.",
        },
        {
            name: "Sneha Menon",
            rating: "⭐⭐⭐⭐⭐",
            comment: "Loved the Masala Chai! A perfect spot for a quick bite.",
        },
        {
            name: "George Mathew",
            rating: "⭐⭐⭐",
            comment: "The service was a bit slow, but the food was decent.",
        },
    ];

    reviewsData.forEach((review) => {
        const reviewItem = document.createElement("li");
        reviewItem.classList.add("review-item");

        const nameElement = document.createElement("strong");
        nameElement.textContent = review.name;

        const ratingElement = document.createElement("span");
        ratingElement.classList.add("rating");
        ratingElement.textContent = review.rating;

        const commentElement = document.createElement("p");
        commentElement.textContent = review.comment;

        reviewItem.appendChild(nameElement);
        reviewItem.appendChild(document.createTextNode(` - `)); // Add a separator
        reviewItem.appendChild(ratingElement);
        reviewItem.appendChild(commentElement);

        reviewsList.appendChild(reviewItem);
    });

    reviewsSection.appendChild(reviewsList);
    return reviewsSection;
}

export function createContactInfoSection() {
    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.classList.add("contact-info", "about");

    const contactInfoHeader = document.createElement("h2");
    contactInfoHeader.textContent = "Contact Information";
    contactInfoDiv.appendChild(contactInfoHeader);

    const addressParagraph = document.createElement("p");
    addressParagraph.innerHTML = `<strong>Address:</strong> Near [Your Landmark], Ottapalam, Kerala, India`;
    contactInfoDiv.appendChild(addressParagraph);

    const phoneParagraph = document.createElement("p");
    phoneParagraph.innerHTML = `<strong>Phone:</strong> +91 [Your Phone Number]`;
    contactInfoDiv.appendChild(phoneParagraph);

    const emailParagraph = document.createElement("p");
    emailParagraph.innerHTML = `<strong>Email:</strong> [Your Email Address]`;
    contactInfoDiv.appendChild(emailParagraph);

    return contactInfoDiv;
}

export default function (rootEl) {
    const reviewsSection = createReviewsSection();
    const contactInfoSection = createContactInfoSection();

    rootEl.appendChild(reviewsSection);
    rootEl.appendChild(contactInfoSection);
}