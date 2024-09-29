const jabalpurCarouselItems = [
    {
        location: "Bhedaghat, Madhya Pradesh",
        title: "Dhuandhar Falls",
        imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/ad/79/3d.jpg",
        link: "destinations.html",
        bookLink: "booking.html",
        visited: "visited /Person"
    },
    {
        location: "Jabalpur, Madhya Pradesh",
        title: "Marble Rocks",
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/de/ec/04/marble-rocks-at-bhedaghat.jpg",
        link: "destinations.html",
        bookLink: "booking.html",
        visited: "visited /day"
    }
    // Add more items as needed
];

// Generate the Carousel Items for Jabalpur
function generateJabalpurCarouselItems() {
    const container = document.getElementById('jbp-carousel-container');
    jabalpurCarouselItems.forEach(item => {
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <div class="package-box">
                <span class="d-block location-span">
                    <i class="fa-solid fa-location-dot"></i> ${item.location}
                </span>
                <h6><a href="${item.link}">${item.title}</a></h6>
                <img class="img-fluid" alt="image" src="${item.imgUrl}">
                <div class="pkg-btn-con d-flex align-items-center justify-content-between">
                    <span class="person d-inline-block p-0 m-0">
                        <span class="price d-inline-block p-0 m-0">${item.visited}</span>
                    </span>
                    <div class="grey-btn d-inline-block">
                        <a href="${item.bookLink}" class="d-inline-block">Book Now</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

// Call the Function to Generate the Jabalpur Items
generateJabalpurCarouselItems();
