const jsonData = {
    "carouselItems": [
        {
            "imageSrc": "assets/images/destination-img1.jpg",
            "altText": "image",
            "location": "Pune, MH",
            "link": "destinations.html",
            "title": "Enjoy the beauty of the Rialto Bridge"
        },
        {
            "imageSrc": "assets/images/destination-img2.jpg",
            "altText": "image",
            "location": "Goa, GA",
            "link": "destinations.html",
            "title": "Relax at the stunning beaches of Goa"
        },
        {
            "imageSrc": "assets/images/destination-img3.jpg",
            "altText": "image",
            "location": "Shimla, HP",
            "link": "destinations.html",
            "title": "Experience the tranquility of the Himalayas"
        }
    ]
};

// Function to generate carousel items
function generateCarouselItems(data) {
    const container = document.getElementById('lucky-carousel-container');
    data.carouselItems.forEach(item => {
        const itemHtml = `
            <div class="item">
                <div class="destination-box position-relative">
                    <figure><img src="${item.imageSrc}" alt="${item.altText}" class="img-fluid"></figure>
                    <div class="bottom-con">
                        <span class="d-block text-uppercase">${item.location}</span>
                        <a href="${item.link}">
                            <h4>${item.title}</h4>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

// Initialize Owl Carousel and generate items
$(document).ready(function(){
    generateCarouselItems(jsonData);
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });
});