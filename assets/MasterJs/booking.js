const tabData = {
    "tabs": [
        {
            "id": "car",
            "label": "Car Rentals",
            "icon": "assets/images/car-rental-icon.png",
            "fields": [
              { "label": "Pickup Location", "type": "text", "id": "pickupLocation" },
              { "label": "Drop Location", "type": "text", "id": "dropoffLocation" },
              { "label": "Pickup Date", "type": "date", "id": "pickupDate" },
           
              { 
                "label": "Car Type", 
                "type": "select", 
                "id": "carType", 
                "options": ["Economy", "Compact", "Midsize", "Fullsize", "Luxury", "SUV", "Van", "Convertible"] 
              }
            ]
          },
          {
        "id": "hotel",
        "label": "Hotels",
        "icon": "assets/images/hotel-icon.png",
        "fields": [
          { "label": "Destination", "type": "text", "id": "destination" },
          { "label": "Check in", "type": "date", "id": "checkin" },
          { "label": "Check Out", "type": "date", "id": "checkout" },
          { 
            "label": "Adults", 
            "type": "select", 
            "id": "adults", 
            "options": [1, 2, 3, 4, 5, 6, 7, 8, 9] 
          },
          { 
            "label": "Children", 
            "type": "select", 
            "id": "children", 
            "options": [0, 1, 2, 3, 4, 5, 6, 7, 8] 
          }
        ]
      },
      {
        "id": "flight",
        "label": "Flights",
        "icon": "assets/images/flight-icon.png",
        "fields": [
          { "label": "Departure", "type": "text", "id": "departure" },
          { "label": "Arrival", "type": "text", "id": "arrival" },
          { "label": "Departure Date", "type": "date", "id": "departure-date" },
          { 
            "label": "Adults", 
            "type": "select", 
            "id": "flight-adults", 
            "options": [1, 2, 3, 4, 5, 6, 7, 8, 9] 
          },
          { 
            "label": "Children", 
            "type": "select", 
            "id": "flight-children", 
            "options": [0, 1, 2, 3, 4, 5, 6, 7, 8] 
          },
          {
            "label": "Class",
            "type": "select",
            "id": "flight-class",
            "options": ["Economy", "Premium Economy", "Business", "First"]
          }
        ]
      },
      {
        "id": "trips",
        "label": "Trips",
        "icon": "assets/images/trip-icon.png",
        "fields": [
          { "label": "Destination", "type": "text", "id": "trip-destination" },
          { "label": "Start Date", "type": "date", "id": "trip-start-date" },
          { "label": "End Date", "type": "date", "id": "trip-end-date" },
          { 
            "label": "Travelers", 
            "type": "select", 
            "id": "num-travelers", 
            "options": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
          },
          { 
            "label": "Type", 
            "type": "select", 
            "id": "travel-type", 
            "options": ["Adventure", "Cultural", "Leisure", "Business"] 
          }
        ]
      },
      {
        "id": "cruise",
        "label": "Cruises",
        "icon": "assets/images/cruise-icon.png",
        "fields": [
          { "label": "Departure Port", "type": "text", "id": "departure-port" },
          { "label": "Destination", "type": "text", "id": "cruise-destination" },
          { "label": "Departure Date", "type": "date", "id": "cruise-departure-date" },
          { 
            "label": "Passengers", 
            "type": "select", 
            "id": "num-passengers", 
            "options": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
          },
          {
            "label": "Type",
            "type": "select",
            "id": "cabin-type",
            "options": ["Interior", "Oceanview", "Balcony", "Suite"]
          }
        ]
      },
      {
        "id": "activities",
        "label": "Activities",
        "icon": "assets/images/activity-icon.png",
        "fields": [
          { "label": "Activity Name", "type": "text", "id": "activity-name" },
          { "label": "Location", "type": "text", "id": "activity-location" },
          { "label": "Date", "type": "date", "id": "activity-date" },
          { 
            "label": "Person", 
            "type": "select", 
            "id": "num-participants", 
            "options": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
          },
          {
            "label": "Type",
            "type": "select",
            "id": "activity-type",
            "options": ["Adventure", "Cultural", "Leisure", "Sports", "Wellness"]
          }
        ]
      }
    ]
  };

function generateTabs(tabData) {
    const tabList = document.getElementById('myTab');
    const tabContent = document.getElementById('myTabContent');

    tabData.tabs.forEach((tab, index) => {
        // Generate tab buttons
        const tabButton = document.createElement('li');
        tabButton.classList.add('nav-item');
        tabButton.setAttribute('role', 'presentation');

        const button = document.createElement('button');
        button.classList.add('nav-link');
        if (index === 0) button.classList.add('active');
        button.setAttribute('id', `${tab.id}-tab`);
        button.setAttribute('data-toggle', 'tab');
        button.setAttribute('data-target', `#${tab.id}`);
        button.setAttribute('type', 'button');
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-controls', tab.id);
        button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        button.innerHTML = `<img class="img-fluid d-block" src="${tab.icon}" alt="icon"> ${tab.label}`;

        tabButton.appendChild(button);
        tabList.appendChild(tabButton);

        // Generate tab content
        const tabPane = document.createElement('div');
        tabPane.classList.add('tab-pane', 'fade');
        if (index === 0) tabPane.classList.add('show', 'active');
        tabPane.setAttribute('id', tab.id);
        tabPane.setAttribute('role', 'tabpanel');
        tabPane.setAttribute('aria-labelledby', `${tab.id}-tab`);

        const tabInnerCon = document.createElement('div');
        tabInnerCon.classList.add('tab-inner-con', 'text-left');

        tab.fields.forEach(field => {
            const fieldCon = document.createElement('div');
            fieldCon.classList.add(`${field.id}-con`);

            const label = document.createElement('label');
            label.setAttribute('for', field.id);
            label.textContent = field.label;
            fieldCon.appendChild(label);

            let input;
            if (field.type === 'select') {
                input = document.createElement('select');
                input.classList.add('form-select');
                input.setAttribute('id', field.id);
                field.options.forEach(optionValue => {
                    const option = document.createElement('option');
                    option.setAttribute('value', optionValue);
                    option.textContent = optionValue;
                    input.appendChild(option);
                });
            } else {
                input = document.createElement('input');
                input.setAttribute('type', field.type);
                input.classList.add('form-control');
                input.setAttribute('id', field.id);
            }
            fieldCon.appendChild(input);
            tabInnerCon.appendChild(fieldCon);
        });

        tabPane.appendChild(tabInnerCon);

        // Add search button
        const searchBtn = document.createElement('div');
        searchBtn.classList.add('green-btn', 'd-inline-block');
        const searchLink = document.createElement('a');
        searchLink.setAttribute('href', 'booking.html');
        searchLink.classList.add('d-inline-block');
        searchLink.textContent = 'Search Now';
        searchBtn.appendChild(searchLink);

        tabPane.appendChild(searchBtn);
        tabContent.appendChild(tabPane);
    });
}

generateTabs(tabData);