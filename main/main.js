document.getElementById('uploadArtLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'upload.html';
});

document.getElementById('profileLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'profile.html';
});

const loadPage = (page) => {
    contentArea.classList.remove('show'); // Reset fade effect
    setTimeout(() => {
        contentArea.innerHTML = pages[page] || pages['home'];
        contentArea.classList.add('show'); // Trigger fade effect
    }, 100); // Delay to allow smooth transition
};

document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    // Page content data
    const pages = {
        home: `<h2>Discover Art</h2><div class="art-grid"><div class="art-item">Artwork 1</div><div class="art-item">Artwork 2</div><div class="art-item">Artwork 3</div><div class="art-item">Artwork 4</div></div>`,
        explore: `<h2>Explore Art</h2><p>Explore various forms of art shared by the community.</p>`,
        profile: `<h2>Your Profile</h2><p>Edit your profile information here.</p><button onclick="editProfile()">Edit Profile</button>`,
        upload: `<h2>Upload Your Art</h2><p>Share your art with the world by uploading it here.</p><form><label>Title:</label><input type="text"><br><label>File:</label><input type="file"><br><button type="submit">Upload</button></form>`
    };

    // Load page content based on selected link
    const loadPage = (page) => {
        contentArea.innerHTML = pages[page] || pages['home'];
    };

    // Set initial content
    loadPage('home');

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Sample data to simulate art items or categories
    const artItems = [
        { title: 'Landscape Painting', category: 'Landscape' },
        { title: 'Abstract Artwork', category: 'Abstract' },
        { title: 'Portrait of a Woman', category: 'Portrait' },
        { title: 'Digital Landscape', category: 'Digital Art' },
        { title: 'Nature Photography', category: 'Photography' },
    ];

    const searchBar = document.querySelector('.search-bar input');
    const contentArea = document.getElementById('content-area');

    // Function to update the content area based on search input
    function updateContent(searchTerm) {
        contentArea.innerHTML = ''; // Clear current content

        // Filter art items based on search term
        const filteredItems = artItems.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredItems.length > 0) {
            // Display filtered items
            filteredItems.forEach(item => {
                const artDiv = document.createElement('div');
                artDiv.classList.add('art-item');
                artDiv.innerText = `${item.title} - Category: ${item.category}`;
                contentArea.appendChild(artDiv);
            });
        } else {
            // Display message if no results found
            contentArea.innerHTML = '<p>No art found for this search term.</p>';
        }
    }

    // Add event listener for search input
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        updateContent(searchTerm);
    });
});

// main.js
document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    if (username) {
        document.querySelector(".profile-username").textContent = username; // Replace 'clsrn' text
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username") || "Guest";
    const userEmail = localStorage.getItem("userEmail") || "user@example.com";
    
    document.querySelector(".profile-username").textContent = username;
    document.querySelector(".profile-id").textContent = userEmail;
});

document.getElementById("profileToggleBtn").addEventListener("click", function () {
    const profileSection = document.getElementById("profileSection");
    // 현재 display 상태를 확인하여 토글
    profileSection.style.display = profileSection.style.display === "none" || profileSection.style.display === "" ? "block" : "none";
});

