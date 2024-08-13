// Define destinations for tabs
const destinations = [
    { id: 'tab1', label: 'Ujjain', ariaControls: 'tab1', selected: true },
    { id: 'tab2', label: 'Jabalpur', ariaControls: 'tab2', selected: false },
    { id: 'tab3', label: 'Indore', ariaControls: 'tab3', selected: false },
    { id: 'tab4', label: 'Bhopal', ariaControls: 'tab4', selected: false },
];

// Function to generate tabs dynamically
function generateTabs() {
    const tabList = document.getElementById('myTab1');
    destinations.forEach((destination, index) => {
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

// Call the function to generate tabs
generateTabs();
