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

/*
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_6_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_7_l_644_970.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_8_l_458_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_9_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_10_l_536_953.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_19_l_537_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_11_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_12_l_664_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_133_l_630_944.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_14_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_15_l_501_890.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_16_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_17_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_18_l_623_830.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_2_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_3_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_4_l_667_1000.jpg
https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Madhya_Pradesh_Landscape_5_l_667_1000.jpg

*/