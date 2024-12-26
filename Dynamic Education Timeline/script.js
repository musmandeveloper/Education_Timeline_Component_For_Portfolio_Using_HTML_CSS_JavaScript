



const edu_data = [
    {
        year: 'Feb 2024 - Mar 2024',
        title: 'Web Design',
        organization: 'COMSATS University Islamabad, Wah Campus',
        description: 'Details about education 1. Details about education 1. Details about education 1. Details about education 1. Details about education 1.'
    },
    {
        year: 'Feb 2024 - Mar 2024',
        title: 'FSc Pre-Eng',
        organization: 'FG Degree College For Men, Wah Cantt',
        description: 'Details about education 2. Details about education 2.Details about education 2. Details about education 2. Details about education 2.'
    },
    {
        year: 'Feb 2016 - Mar 2018',
        title: 'Matric Science (Biology)',
        organization: 'FG Public High School, Taxila Cantt',
        description: 'Details about education 3. Details about education 3. Details about education 3. Details about education 3. Details about education 3.'
    }
];

const edu_timeline = document.getElementById('edu-timeline');
const edu_cards = document.getElementById('edu-cards');

// Render nodes and cards
edu_data.forEach((item, index) => {
    const edu_node = document.createElement('div');
    edu_node.classList.add('edu-node');
    edu_node.setAttribute('data-index', index);
    edu_timeline.appendChild(edu_node);

    const edu_card = document.createElement('div');
    edu_card.classList.add('edu-card');
    edu_card.setAttribute('data-index', index);
    edu_card.innerHTML = 
    `
        <h5>${item.year}</h5>
        <h3>${item.title}</h3>
        <h4>${item.organization}</h4>
        <p>${item.description}</p>
    `;
    edu_cards.appendChild(edu_card);
});

const edu_nodes = document.querySelectorAll('.edu-node');
const edu_cardElements = document.querySelectorAll('.edu-card');

let edu_activeIndex = 0;
let edu_timelineAnimated = false;

// Function to set active node and card
function edu_setActive(index) {
    edu_nodes.forEach((node, i) => {
        node.classList.toggle('edu-active', i === index);
    });
    edu_cardElements.forEach((card, i) => {
        card.classList.toggle('edu-active', i === index);
    });
}

// Function to set hover node and card
function edu_setHover(index) {
    edu_nodes.forEach((node, i) => {
        node.classList.toggle('edu-hover', i === index);
    });
    edu_cardElements.forEach((card, i) => {
        card.classList.toggle('edu-hover', i === index);
    });
}

// Function to calculate and set gap between nodes
function edu_setNodeGap() {
    const edu_card = document.querySelector('.edu-card'); // Select the first element with the class "edu-card"
    const edu_cardHeight = edu_card.offsetHeight; // Get the height (including padding and border)
    const edu_gap = edu_cardHeight + 18; // Adding 20px to the height of the card container
    edu_timeline.style.gap = `${edu_gap}px`; // Dynamically setting the gap
}

// Initial animation when timeline enters viewport
function edu_animateTimeline() {
    if (!edu_timelineAnimated && edu_timeline.getBoundingClientRect().top < window.innerHeight) {
        edu_timelineAnimated = true;
        function edu_animateNodes() {
            if (edu_activeIndex < edu_nodes.length) {
                edu_setActive(edu_activeIndex);
                // Deactivate the current node and card after the 1000ms interval
                setTimeout(() => {
                    edu_setActive(-1); // Pass -1 to deactivate all nodes/cards
                }, 1000);
                edu_activeIndex++;
                setTimeout(edu_animateNodes, 1000);
            }
        }
        edu_animateNodes();
    }
}

// Add scroll event to trigger animation
window.addEventListener('scroll', edu_animateTimeline);

// Call the animation and gap setting when the page loads
window.addEventListener('load', () => {
    edu_setNodeGap(); // Set the gap when the page loads
    edu_animateTimeline(); // Trigger the initial animation
});

// Add click event for Node
edu_nodes.forEach((node) => {
    node.addEventListener('click', () => {
        const index = parseInt(node.getAttribute('data-index'));
        edu_setActive(index);
    });
});

// Add click event for Card
edu_cardElements.forEach((card) => {
    card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-index'));
        edu_setActive(index);
    });
});

// Add hover events for Node
edu_nodes.forEach((node) => {
    node.addEventListener('mouseenter', () => {
        const index = parseInt(node.getAttribute('data-index'));
        edu_setHover(index);
    });
    node.addEventListener('mouseleave', () => {
        edu_setHover(-1); // Remove hover effect when mouse leaves
    });
});

// Add hover events for Card
edu_cardElements.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        const index = parseInt(card.getAttribute('data-index'));
        edu_setHover(index);
    });
    card.addEventListener('mouseleave', () => {
        edu_setHover(-1); // Remove hover effect when mouse leaves
    });
});












