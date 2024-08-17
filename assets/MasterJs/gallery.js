document.addEventListener("DOMContentLoaded", function () {
    const galleryData = {
        "gallery": [
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_indore_tv_destination_img_2_l_873_1310.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Explore the Beauty of Indore",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_indore_tv_destination_img_3_l_831_1251.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Discover Hidden Gems in Indore",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_indore_tv_destination_img_4_l_712_1067.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "A Journey through Indore's Historic Sites",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_indore_tv_destination_img_5_l_672_1009.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "The Culinary Delights of Indore",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_indore_tv_destination_img_6_l_1350_2025.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Indore: Where Tradition Meets Modernity",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_indore_tv_destination_img_8_l_777_1036.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Indore's Bustling Markets",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_indore_tv_destination_img_9_l_682_1022.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Indore's Rich Cultural Heritage",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_indore_destination_landscape_12_l_703_931.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Indore's Scenic Landscapes",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/indoredestimages/mmt/activities/m_Rajwada_Palace_1_l_750_1000.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Visit the Majestic Rajwada Palace",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Ujjain_tv_destination_img_2_l_791_1055.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Explore the Spiritual City of Ujjain",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Ujjain_tv_destination_img_3_l_813_1222.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "The Sacred Temples of Ujjain",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Ujjain_tv_destination_img_4_l_727_1091.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "A Pilgrimage to Ujjain",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Ujjain_tv_destination_img_5_l_663_1177.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Ujjain: A Journey through Time",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/ujjain/mmt/destination/m_Ujjain_l_638_956.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "The Holy Riverfront of Ujjain",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/ujjain/mmt/activities/m_activities_ujjain_bhartrihari_caves_l_443_591.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Exploring Bhartrihari Caves",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/ujjain/mmt/activities/m_Maharishi%20Sandipani%20Ashram-4_l_335_446.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Maharishi Sandipani Ashram",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/ujjain/mmt/activities/m_activities_ujjain_jantar_mantar_l_480_640.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Visit Jantar Mantar, Ujjain",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/ujjain/mmt/activities/m_activities_ujjain_kalidas_palace_l_350_622.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Kalidas Palace: A Historical Gem",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/img/mmt/activities/m_Mahakaleshwar_jyotirlinga_ujjain_img4_p_956_720.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Mahakaleshwar Jyotirlinga: Ujjain's Spiritual Heart",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/img/mmt/activities/m_Mahakaleshwar_jyotirlinga_ujjain_img1_p_1090_818.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Experience the Divinity at Mahakaleshwar",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/img/mmt/activities/m_Mahakaleshwar_jyotirlinga_ujjain_img6_p_1449_1087.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Mahakaleshwar: A Spiritual Journey",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Bhopal_tv_destination_img_2_l_930_1396.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Discover Bhopal's Rich History",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Bhopal_tv_destination_img_3_l_713_1287.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "The Architectural Wonders of Bhopal",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Bhopal_tv_destination_img_4_l_851_1276.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Bhopal: A Blend of Tradition and Modernity",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Bhopal_tv_destination_img_5_l_842_1263.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Bhopal's Bustling Markets",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Bhopal_tv_destination_img_6_l_1047_1569.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Bhopal: Where History Meets Modernity",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Jabalpur_tv_destination_img_2_l_866_1318.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Explore the Natural Beauty of Jabalpur",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Jabalpur_tv_destination_img_3_l_919_1379.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Jabalpur: A Gateway to Nature",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Jabalpur_tv_destination_img_4_l_985_1476.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Jabalpur's Scenic Landscapes",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Jabalpur_tv_destination_img_5_l_927_1237.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "The Enchanting Beauty of Jabalpur",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Jabalpur_tv_destination_img_6_l_1150_1731.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "A Journey through Jabalpur's Wilderness",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Khajuraho_tv_destination_img_2_l_667_1000.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "The Magnificent Temples of Khajuraho",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Khajuraho_tv_destination_img_3_l_670_1000.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Khajuraho: An Architectural Marvel",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Khajuraho_tv_destination_img_4_l_664_1000.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "A Visit to Khajuraho",
            "link": "single-blog.html"
          },
          {
            "imageSrc": "https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Khajuraho_tv_destination_img_5_l_660_1000.jpg",
            "date": "June 6, 2016",
            "author": "John Smith",
            "title": "Khajuraho's Hidden Treasures",
            "link": "single-blog.html"
          }
        ]
      };

    function generateGallery(galleryData) {
        const galleryContainer = document.getElementById('gallery-container');

        galleryData.gallery.forEach((item, index) => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-lg-4', 'col-md-4', 'col-sm-6');
            if (index === galleryData.gallery.length - 1) {
                colDiv.classList.add('last-con');
            }

            const articleBox = document.createElement('div');
            articleBox.classList.add('article-box', 'position-relative');

            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.classList.add('img-fluid');
            img.setAttribute('src', item.imageSrc);
            img.setAttribute('alt', 'img');
            figure.appendChild(img);

            const bottomLeftDiv = document.createElement('div');
            bottomLeftDiv.classList.add('bottom-left');

            const span = document.createElement('span');
            span.classList.add('d-block', 'text-white');
            span.textContent = `${item.date} • ${item.author}`;

            const a = document.createElement('a');
            a.setAttribute('href', item.link);
            const h6 = document.createElement('h6');
            h6.classList.add('text-white');
            h6.innerHTML = item.title.replace(" ", "<br>");

            a.appendChild(h6);
            // bottomLeftDiv.appendChild(span);
            bottomLeftDiv.appendChild(a);

            articleBox.appendChild(figure);
            articleBox.appendChild(bottomLeftDiv);

            colDiv.appendChild(articleBox);
            galleryContainer.appendChild(colDiv);
        });
    }

    generateGallery(galleryData);
});
