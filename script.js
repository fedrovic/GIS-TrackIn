// Home Page JavaScript Functionality

// Function to open Question Form
function openQuestionForm() {
    alert('Opening Question Form... (This will link to question-form.html)');
    // Later: window.location.href = 'question-form.html';
}

// Function to open Post Form
function openPostForm() {
    alert('Opening Post Form... (This will link to post-form.html)');
    // Later: window.location.href = 'post-form.html';
}

// Navigation items functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the text content of the clicked item
            const itemText = this.textContent.trim();
            
            // Handle navigation based on clicked item
            switch(itemText) {
                case 'Home':
                    console.log('Already on Home page');
                    break;
                case 'Medical Centres':
                    console.log('Navigate to Medical Centres');
                    // Later: window.location.href = 'medical-centers.html';
                    break;
                case 'My Dashboard':
                    console.log('Navigate to Dashboard');
                    // Later: window.location.href = 'patient-dashboard.html';
                    break;
                case 'Admin Panel':
                    console.log('Navigate to Admin Panel');
                    // Later: window.location.href = 'admin-dashboard.html';
                    break;
                default:
                    console.log('Navigate to topic:', itemText);
            }
        });
    });
    
    // Action buttons functionality
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const btnText = this.textContent.trim();
            
            if (btnText.includes('Discuss')) {
                console.log('Opening discussion...');
            } else if (btnText.includes('👍')) {
                // Toggle like
                const count = parseInt(btnText.match(/\d+/)?.[0] || 0);
                this.textContent = `👍 ${count + 1}`;
                console.log('Post liked');
            } else if (btnText.includes('🔖')) {
                console.log('Post saved');
                this.textContent = '✅';
                setTimeout(() => {
                    this.textContent = '🔖';
                }, 1000);
            }
        });
    });
    
    // Report button functionality
    const reportButtons = document.querySelectorAll('.report-btn');
    reportButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const confirm = window.confirm('Are you sure you want to report this content?');
            if (confirm) {
                console.log('Content reported');
                alert('Thank you for your report. Our team will review this content.');
            }
        });
    });
    
    // Follow button functionality
    const followBtn = document.querySelector('.follow-btn');
    if (followBtn) {
        followBtn.addEventListener('click', function() {
            if (this.textContent === 'Follow') {
                this.textContent = 'Following';
                this.style.backgroundColor = '#4a90e2';
                this.style.color = 'white';
            } else {
                this.textContent = 'Follow';
                this.style.backgroundColor = 'transparent';
                this.style.color = '#4a90e2';
            }
        });
    }
    
    // Talk to Doctor button functionality
    const talkToDoctorBtn = document.querySelector('.talk-to-doctor-btn');
    if (talkToDoctorBtn) {
        talkToDoctorBtn.addEventListener('click', function() {
            alert('Connecting you to available doctors...');
            console.log('Opening doctor consultation interface');
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    console.log('Searching for:', searchTerm);
                    alert(`Searching for: ${searchTerm}`);
                    // Later: window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
    
    // Header icons functionality
    const headerIcons = document.querySelectorAll('.icon-btn');
    headerIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            switch(index) {
                case 0: // Location icon
                    alert('Location: Kampala, Uganda');
                    break;
                case 1: // Notification icon
                    alert('You have 3 new notifications');
                    break;
                case 2: // Profile icon
                    console.log('Opening profile menu');
                    alert('Profile menu');
                    break;
            }
        });
    });
    
    // See all topics functionality
    const seeAllBtn = document.querySelector('.see-all');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', function() {
            console.log('Showing all topics');
            alert('Showing all topics...');
        });
    }
    
    // Post card click functionality (to view full post)
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on buttons
            if (e.target.tagName === 'BUTTON') {
                return;
            }
            console.log('Opening full post view');
        });
    });
    
    // Smooth scroll for page
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Handle user info click
document.querySelector('.user-info')?.addEventListener('click', function() {
    console.log('Opening user menu');
    alert('User Menu:\n- My Profile\n- Settings\n- Logout');
});