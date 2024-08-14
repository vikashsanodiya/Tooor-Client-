const data = {
    "destinations": [
        {
           
            "image": "assets/images/destination-img1.jpg",
            "location": "Venezia, Italy",
            "title": "Enjoy the beauty of the Rialto Bridge",
        },
        {
            
            "image": "assets/images/destination-img3.jpg",
            "location": "Rio de Janeiro, Brazil",
            "title": "Enjoy the beauty of the Brazil City",
        }
        // Add more destinations as needed
    ]
};

// Function to generate HTML content
function generateDestinations(data) {
    const carousel = document.getElementById('destinations-carousel');
    let content = '';

    data.destinations.forEach(destination => {
        content += `
            <div class="item">
                <div class="destination-box position-relative">
                   
                    <figure><img src="${destination.image}" alt="image" class="img-fluid"></figure>
                    <div class="bottom-con">
                        <span class="d-block text-uppercase">${destination.location}</span>
                        <a href="destinations.html">
                            <h4>${destination.title}</h4>
                        </a>
                        <span class="d-inline-block star-con">
                           
                        </span>
                    </div>
                </div>
            </div>
        `;
    });

    carousel.innerHTML = content;
}

// Call the function to generate content
generateDestinations(data);