// Hardcoded destinations data
const hardcodedDestinations = [
    {
        "id": "tab1",
        "label": "Ujjain",
        "ariaControls": "tab1",
        "selected": true,
        "carouselItems": [
            {
                "location": "Ujjain, Madhya Pradesh",
                "title": "Shree Mahakaleshwar Temple",
                "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/46/95/1d/shri-mahakaleshwar-temple.jpg",
                "link": "https://floobyte.com",
                "bookLink": "https://floobyte.com",
                "visited": "none"
            }
        ]
    },
    // Add other hardcoded destinations here...
];

// Function to fetch dynamic destinations data
async function fetchDestinations() {
    try {
        console.log('Fetching destinations...');
        const response = await fetch('https://script.google.com/macros/s/AKfycbwMY8KrWYktvhpXM_-uTlIPNztjA1O0ot-BkBjy1I1KJVQbQmPwBzZ0Ex7vrQdrL1GE/execs');
        if (response.ok) {
            const data = await response.json();
            console.log('Fetched destinations:', data.destinations);
            return data.destinations;
        } else {
            console.error('Failed to fetch destinations, using hardcoded data');
            return hardcodedDestinations;
        }
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return hardcodedDestinations;
    }
}

// Function to generate tabs dynamically
function generateTabs(destinations) {
    console.log('Generating tabs...');
    const tabList = document.getElementById('myTab1');
    tabList.innerHTML = ''; // Clear existing content
    destinations.forEach(destination => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.setAttribute('role', 'presentation');

        const button = document.createElement('button');
        button.className = `nav-link ${destination.selected ? 'active' : ''}`;
        button.id = `${destination.id}-tab`;
        button.setAttribute('data-toggle', 'tab');
        button.setAttribute('data-target', `#${destination.ariaControls}`);
        button.setAttribute('type', 'button');
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-controls', destination.ariaControls);
        button.setAttribute('aria-selected', destination.selected);
        button.textContent = destination.label;

        li.appendChild(button);
        tabList.appendChild(li);
    });
}

// Function to generate tab content dynamically
function generateTabContent(destinations) {
    console.log('Generating tab content...');
    const tabContentContainer = document.getElementById('myTabContent1');
    tabContentContainer.innerHTML = ''; // Clear existing content
    destinations.forEach((destination, index) => {
        const div = document.createElement('div');
        div.className = `tab-pane fade${index === 0 ? ' show active' : ''}`;
        div.id = destination.id;
        div.setAttribute('role', 'tabpanel');
        div.setAttribute('aria-labelledby', `${destination.id}-tab`);

        const carouselDiv = document.createElement('div');
        carouselDiv.className = 'owl-carousel';
        carouselDiv.id = `${destination.id}-carousel-container`;

        // Generate carousel items
        destination.carouselItems.forEach(item => {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="package-box">
                    <span class="d-block location-span">
                        <i class="fa-solid fa-location-dot"></i> ${item.location}
                    </span>
                    <h6><a href="${item.link}">${item.title}</a></h6>
                    <img class="img-fluid" alt="image" src="${item.imageUrl}">
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
            carouselDiv.appendChild(itemDiv);
        });

        div.appendChild(carouselDiv);
        tabContentContainer.appendChild(div);
    });

    // Initialize Owl Carousel
    initializeOwlCarousel();
}

// Initialize Owl Carousel
function initializeOwlCarousel() {
    console.log('Initializing Owl Carousel...');
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    });
}

// Main function to initialize the tabs and content
async function initialize() {
    const destinations = await fetchDestinations();
    generateTabs(destinations);
    generateTabContent(destinations);
}

// Initialize the tabs and content
initialize();
