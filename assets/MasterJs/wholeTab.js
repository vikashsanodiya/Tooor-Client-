async function fetchDestinations() {
    try {
        // console.log('Fetching data from URL...');
        const response = await fetch('https://script.google.com/macros/s/AKfycbwBbqBbSOEElls8tXGS4vZTHQyz0h8EBB_XJ9zpD1MjD2wtp5bwKYtpL34RgNkWZops/exec');

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const destinations = await response.json();
        // console.log('Destinations:', destinations);
        return destinations;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function createTabs() {
    const destinations = await fetchDestinations();
    // console.log('Destinations:', destinations);

    const tabsContainer = document.getElementById('myTab1');
    const tabContentContainer = document.getElementById('myTabContent1');

    if (destinations.length === 0) {
        // console.log('No destinations found.');
        return;
    }

    destinations.forEach((dest, index) => {
        // Create Tab
        const tabItem = document.createElement('li');
        tabItem.className = 'nav-item';
        tabItem.setAttribute('role', 'presentation');

        const tabButton = document.createElement('button');
        tabButton.className = `nav-link ${index === 0 ? 'active' : ''}`;
        tabButton.id = `${dest.id}-tab`;
        tabButton.setAttribute('data-toggle', 'tab');
        tabButton.setAttribute('data-target', `#${dest.id}`);
        tabButton.setAttribute('type', 'button');
        tabButton.setAttribute('role', 'tab');
        tabButton.setAttribute('aria-controls', dest.id);
        tabButton.setAttribute('aria-selected', index === 0);
        tabButton.textContent = dest.label;
        tabButton.addEventListener('click', () => {
            // console.log(`Tab clicked: ${dest.label}`);
            document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(c => c.classList.remove('show', 'active'));
            tabButton.classList.add('active');
            document.getElementById(dest.id).classList.add('show', 'active');
        });
        tabItem.appendChild(tabButton);
        tabsContainer.appendChild(tabItem);

        // Create Tab Pane
        const tabPane = document.createElement('div');
        tabPane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
        tabPane.id = dest.id;
        tabPane.setAttribute('role', 'tabpanel');
        tabPane.setAttribute('aria-labelledby', `${dest.id}-tab`);

        const carousel = document.createElement('div');
        carousel.className = 'owl-carousel';

        dest.carouselItems.forEach(item => {
            // console.log('Carousel Item:', item);
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            const packageBox = document.createElement('div');
            packageBox.className = 'package-box';

            const locationSpan = document.createElement('span');
            locationSpan.className = 'd-block location-span';
            locationSpan.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.location || 'N/A'}`;
            packageBox.appendChild(locationSpan);

            const title = document.createElement('h6');
            const titleLink = document.createElement('a');
            titleLink.href = item.link || '#'; // Default link if not provided
            titleLink.textContent = item.title || 'No Title';
            title.appendChild(titleLink);
            packageBox.appendChild(title);

            const image = document.createElement('img');
            image.className = 'img-fluid';
            image.src = item.imageUrl || 'path/to/default-image.jpg'; // Default image if not provided
            image.alt = item.title || 'No Title';
            packageBox.appendChild(image);

            const infoList = document.createElement('ul');
            infoList.className = 'list-unstyled d-flex align-items-center justify-content-between';

            // const activitiesItem = document.createElement('li');
            // activitiesItem.innerHTML = `<i class="fa-solid fa-bicycle"></i> ${item.activities || 'N/A'}`;
            // infoList.appendChild(activitiesItem);

            // const placesItem = document.createElement('li');
            // placesItem.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.places || 'N/A'}`;
            // infoList.appendChild(placesItem);

            // const durationItem = document.createElement('li');
            // durationItem.innerHTML = `<i class="fa-solid fa-clock"></i> ${item.duration || 'N/A'}`;
            // infoList.appendChild(durationItem);

            packageBox.appendChild(infoList);

            // const priceDiv = document.createElement('div');
            // priceDiv.className = 'price';
            // priceDiv.innerHTML = `<small>Price</small>${item.price || 'N/A'}`;
            // packageBox.appendChild(priceDiv);

            const pkgBtnCon = document.createElement('div');
            pkgBtnCon.className = 'pkg-btn-con d-flex align-items-center justify-content-between';

            const greyBtn = document.createElement('div');
            greyBtn.className = 'grey-btn d-inline-block';

            const bookLink = document.createElement('a');
            bookLink.href = item.bookLink || '#'; // Default link if not provided
            bookLink.className = 'd-inline-block';
            bookLink.textContent = 'Book Now';
            greyBtn.appendChild(bookLink);

            pkgBtnCon.appendChild(greyBtn);
            packageBox.appendChild(pkgBtnCon);

            itemDiv.appendChild(packageBox);
            carousel.appendChild(itemDiv);
        });

        tabPane.appendChild(carousel);
        tabContentContainer.appendChild(tabPane);

        // Initialize carousel for the current tab
        $(`#${dest.id} .owl-carousel`).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createTabs();
});
