// Combined JavaScript for Doctor Dashboard and Doctor Profile

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // MOBILE MENU FUNCTIONALITY
    // ===========================
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    // Open mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Mobile menu item clicks
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // If it's a link with href, allow navigation
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                closeMobileMenu();
            } else {
                e.preventDefault();
                console.log('Menu item clicked:', this.textContent.trim());
            }
        });
    });
    
    // ===========================
    // SHARED FUNCTIONALITY
    // ===========================
    
    // Navigation items functionality (Desktop sidebar)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // If it's not a link with href, handle it
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                const itemText = this.textContent.trim();
                console.log('Navigating to:', itemText);
            }
        });
    });
    
    // Header icons functionality
    const headerIcons = document.querySelectorAll('.icon-btn');
    headerIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            switch(index) {
                case 0: // Location
                    alert('Location: Kampala, Uganda');
                    break;
                case 1: // Notifications
                    alert('You have 3 new notifications');
                    break;
                case 2: // Profile
                    alert('Profile menu');
                    break;
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    console.log('Searching for:', searchTerm);
                    alert(`Searching for: ${searchTerm}`);
                }
            }
        });
    }
    
    // Ask Question button
    const askQuestionBtn = document.querySelector('.ask-question-btn');
    if (askQuestionBtn) {
        askQuestionBtn.addEventListener('click', function() {
            console.log('Opening question form');
            alert('Opening Question Form...');
            // window.location.href = 'question-form.html';
        });
    }
    
    // User info click
    const userInfo = document.querySelector('.user-info');
    if (userInfo) {
        userInfo.addEventListener('click', function() {
            console.log('Opening user menu');
            alert('User Menu:\n- My Profile\n- Settings\n- Logout');
        });
    }
    
    // See all topics
    const seeAllBtn = document.querySelector('.see-all');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', function() {
            console.log('Showing all topics');
            alert('Showing all topics...');
        });
    }
    
    // Talk to Doctor button
    const talkToDoctorBtn = document.querySelector('.talk-to-doctor-btn');
    if (talkToDoctorBtn) {
        talkToDoctorBtn.addEventListener('click', function() {
            alert('Connecting you to available doctors...');
        });
    }
    
    // Follow button in sidebar
    const followBtnSidebar = document.querySelector('.follow-btn');
    if (followBtnSidebar) {
        followBtnSidebar.addEventListener('click', function() {
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
    
    // View all links
    const viewAllLinks = document.querySelectorAll('.view-all-link');
    viewAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View all clicked');
            alert('Loading more items...');
        });
    });
    
    // ===========================
    // DOCTOR DASHBOARD SPECIFIC
    // ===========================
    
    // Answer Question buttons
    const answerBtns = document.querySelectorAll('.btn-answer');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const questionText = this.closest('.question-item').querySelector('.question-text').textContent;
            console.log('Answering question:', questionText);
            alert(`Opening answer form for:\n"${questionText}"`);
            // window.location.href = 'answer-question.html';
        });
    });
    
    // Appointment buttons
    const appointmentBtns = document.querySelectorAll('.btn-appointment');
    appointmentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const appointmentTitle = this.closest('.appointment-item').querySelector('.appointment-title').textContent;
            
            if (this.classList.contains('primary')) {
                console.log('Joining call for:', appointmentTitle);
                alert(`Joining video call for:\n${appointmentTitle}`);
            } else {
                console.log('Viewing details for:', appointmentTitle);
                alert(`Viewing details for:\n${appointmentTitle}`);
            }
        });
    });
    
    // Quick Action buttons
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            console.log('Quick action:', btnText);
            
            if (btnText.includes('Answer Question')) {
                alert('Opening questions to answer...');
            } else if (btnText.includes('Schedule Appointment')) {
                alert('Opening appointment scheduler...');
            } else if (btnText.includes('Update Profile')) {
                // Navigate to profile
                window.location.href = 'doctor-profile.html';
            }
        });
    });
    
    // Badge button
    const badgeBtn = document.querySelector('.badge-btn');
    if (badgeBtn) {
        badgeBtn.addEventListener('click', function() {
            console.log('Viewing badge');
            alert('🏆 Top Performer Badge\n\nYou\'re in the top 5% of doctors this month!\n\nKeep up the excellent work!');
        });
    }
    
    // Stats cards click for more details
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            const label = this.querySelector('.stat-label').textContent;
            console.log('Viewing stats for:', label);
            alert(`Viewing detailed analytics for:\n${label}`);
        });
    });
    
    // ===========================
    // DOCTOR PROFILE SPECIFIC
    // ===========================
    
    // Back to Feed link
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            // If using javascript:history.back(), it will work automatically
            // No need to prevent default
            console.log('Going back to previous page');
        });
    }
    
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            if (tabContents[index]) {
                tabContents[index].classList.add('active');
            }
        });
    });
    
    // Follow button in profile
    const btnFollow = document.querySelector('.btn-follow');
    if (btnFollow) {
        btnFollow.addEventListener('click', function() {
            if (this.textContent === 'Follow') {
                this.textContent = 'Following';
                this.style.backgroundColor = '#4a90e2';
                this.style.color = 'white';
                alert('You are now following Dr. Sarah Nabirye');
            } else {
                this.textContent = 'Follow';
                this.style.backgroundColor = 'white';
                this.style.color = '#4a90e2';
                this.style.borderColor = '#4a90e2';
                alert('You unfollowed Dr. Sarah Nabirye');
            }
        });
    }
    
    // Ask Question button in profile
    const btnAskQuestion = document.querySelector('.btn-ask-question');
    if (btnAskQuestion) {
        btnAskQuestion.addEventListener('click', function() {
            console.log('Opening question form for Dr. Sarah Nabirye');
            alert('Opening question form...\nYour question will be directed to Dr. Sarah Nabirye');
            // window.location.href = 'question-form.html?doctor=sarah-nabirye';
        });
    }
    
    // Book Appointment buttons
    const bookAppointmentBtns = document.querySelectorAll('.btn-book-appointment');
    bookAppointmentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Booking appointment with Dr. Sarah Nabirye');
            alert('Opening appointment booking form...\nBook a consultation with Dr. Sarah Nabirye');
            // window.location.href = 'book-appointment.html?doctor=sarah-nabirye';
        });
    });
    
    // Answer items click to view full answer
    const answerItems = document.querySelectorAll('.answer-item');
    answerItems.forEach(item => {
        const heading = item.querySelector('h4');
        if (heading) {
            heading.addEventListener('click', function() {
                console.log('Viewing full answer');
                alert('Opening full answer and discussion...');
            });
        }
    });
    
    // Like interaction in answer meta
    const answerMetas = document.querySelectorAll('.answer-meta span');
    answerMetas.forEach(meta => {
        if (meta.textContent.includes('likes')) {
            meta.addEventListener('click', function() {
                console.log('Like clicked');
                const currentLikes = parseInt(this.textContent.match(/\d+/)[0]);
                this.textContent = `👍 ${currentLikes + 1} likes`;
            });
        }
    });
    
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('Doctor pages JavaScript initialized successfully');
});

// Utility function to format numbers
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Utility function to get time ago
function getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
}

// Handle window resize to close mobile menu if open
window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});