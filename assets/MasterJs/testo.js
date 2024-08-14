
    // Sample JSON data
    const data = {
        "testimonials": [
            {
                "image": "assets/images/review-person1.png",
                "quote": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
                "name": "Kieran Wallace",
                "company": "company.com"
            },
            {
                "image": "assets/images/review-person2.png",
                "quote": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
                "name": "Zachary Chapman",
                "company": "company.com"
            },
            {
                "image": "assets/images/review-person3.png",
                "quote": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
                "name": "Abigail Dawson",
                "company": "company.com"
            }
        ]
    };

    // Function to generate HTML content
    function generateTestimonials(data) {
        const carousel = document.getElementById('lucky-testimonial-carousel');
        let content = '';

        data.testimonials.forEach(testimonial => {
            content += `
                <div class="item">
                    <div class="review-box position-relative">
                        <div class="quote-tag position-absolute"><i class="fa-solid fa-quote-right"></i></div>
                        <figure>
                            <img src="${testimonial.image}" alt="icon" class="img-fluid">
                        </figure>
                        <p>${testimonial.quote}</p>
                        <h4 class="reviewer">${testimonial.name}</h4>
                        <span class="d-block">${testimonial.company}</span>
                    </div>
                </div>
            `;
        });

        carousel.innerHTML = content;
    }

    // Call the function to generate content
    generateTestimonials(data);
