const testimonialData = {
    "testimonials": [
        {
            "name": "Radhe Shyam",
            "company": "company.com",
            "quote": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempori ncididunt ut labore et dolore magna aliqua.",
            "image": "assets/images/review-person1.png"
        },
        {
            "name": "Pankaj Rajput",
            "company": "company.com",
            "quote": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempori ncididunt ut labore et dolore magna aliqua.",
            "image": "assets/images/review-person2.png"
        },
        {
            "name": "Shekar Jaiswal",
            "company": "company.com",
            "quote": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempori ncididunt ut labore et dolore magna aliqua.",
            "image": "assets/images/review-person3.png"
        }
    ]
};

// Function to generate testimonial items
function generateTestimonials(testimonialData) {
    const carousel = document.getElementById('testimonial-carousel');

    testimonialData.testimonials.forEach(testimonial => {
        const item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML = `
            <div class="review-box position-relative">
                <div class="quote-tag position-absolute"><i class="fa-solid fa-quote-right"></i></div>
                <figure>
                    <img src="${testimonial.image}" alt="icon" class="img-fluid">
                </figure>
                <p>${testimonial.quote}</p>
                <h4 class="reviewer">${testimonial.name}</h4>
                <span class="d-block">${testimonial.company}</span>
            </div>
        `;

        carousel.appendChild(item);
    });
}

// Call the function to generate testimonials
generateTestimonials(testimonialData);