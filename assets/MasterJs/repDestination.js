const data = {
    "destinations": [
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_6_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Witness the Majestic Landscapes of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_7_l_644_970.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Explore the Natural Wonders of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_8_l_458_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Discover the Untouched Beauty of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_9_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Experience the Serenity of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_10_l_536_953.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Madhya Pradesh: A Landscape Photographer's Dream"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_19_l_537_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Explore the Scenic Beauty of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_11_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Madhya Pradesh: Nature's Untamed Beauty"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_12_l_664_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Discover the Hidden Gems of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_133_l_630_944.jpg",
            "location": "Madhya Pradesh, India",
            "title": "A Journey through Madhya Pradesh's Landscapes"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_14_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Experience the Tranquility of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_15_l_501_890.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Madhya Pradesh: A Land of Contrasts"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_16_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Explore the Diverse Landscapes of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_17_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Discover the Wonders of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_18_l_623_830.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Madhya Pradesh: A Haven for Nature Lovers"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_2_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "A Walk through Madhya Pradesh's Natural Beauty"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_3_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Madhya Pradesh: Nature's Canvas"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_4_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Explore the Enchanting Landscapes of Madhya Pradesh"
        },
        {
            "image": "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_5_l_667_1000.jpg",
            "location": "Madhya Pradesh, India",
            "title": "Madhya Pradesh: A Paradise for Travelers"
        }
    ]
}
;

// Function to generate HTML content
function generateDestinations(data) {
    const carousel = document.getElementById('rep-destinations-carousel');
    let content = '';
    
    const len = data.destinations.length;
    const halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        const startDest = data.destinations[i];
        const endDest = data.destinations[len - 1 - i];

        content += `
            <div class="item">
                <div class="destination-box position-relative">
                    <figure><img src="${startDest.image}" alt="${startDest.title}" class="img-fluid"></figure>
                    <div class="bottom-con">
                        <span class="d-block text-uppercase">${startDest.location}</span>
                        <a href="destinations.html">
                            <h4>${startDest.title}</h4>
                        </a>
                        <span class="d-inline-block star-con"></span>
                    </div>
                </div>
                
                <div class="destination-box position-relative">
                    <figure><img src="${endDest.image}" alt="${endDest.title}" class="img-fluid"></figure>
                    <div class="bottom-con">
                        <span class="d-block text-uppercase">${endDest.location}</span>
                        <a href="destinations.html">
                            <h4>${endDest.title}</h4>
                        </a>
                        <span class="d-inline-block star-con"></span>
                    </div>
                </div>
            </div>
        `;
    }

    // If there's an odd number of destinations, handle the middle one
    if (len % 2 !== 0) {
        const middleDest = data.destinations[halfLen];
        content += `
            <div class="item">
                <div class="destination-box position-relative">
                    <figure><img src="${middleDest.image}" alt="${middleDest.title}" class="img-fluid"></figure>
                    <div class="bottom-con">
                        <span class="d-block text-uppercase">${middleDest.location}</span>
                        <a href="destinations.html">
                            <h4>${middleDest.title}</h4>
                        </a>
                        <span class="d-inline-block star-con"></span>
                    </div>
                </div>
            </div>
        `;
    }

    carousel.innerHTML = content;
}

// Call the function to generate content
generateDestinations(data);