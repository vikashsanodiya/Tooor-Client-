const testimonialData = {
    "testimonials": [
        {
            "name": "Amit Sharma",
            "company": "company.com",
            "quote": "Traveling with this agency was an amazing experience. Their attention to detail and personalized service made our trip to Madhya Pradesh unforgettable.",
            "image": "assets/images/review-person1.png"
        },
        {
            "name": "Priya Patel",
            "company": "company.com",
            "quote": "I highly recommend this travel agency for their exceptional service and in-depth knowledge of Madhya Pradesh. Every moment was well-planned and enjoyable.",
            "image": "assets/images/review-person2.png"
        },
        {
            "name": "Rajeev Kumar",
            "company": "company.com",
            "quote": "The trip was perfectly organized, with excellent support throughout. Madhya Pradesh is beautiful, and this agency made sure we experienced it to the fullest.",
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
             
            </div>
        `;

        carousel.appendChild(item);
    });
}

// Call the function to generate testimonials
generateTestimonials(testimonialData);