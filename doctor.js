// Combined JavaScript for Doctor Dashboard and Doctor Profile
// All buttons are now fully functional with proper alerts for pages being worked on by others

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🚀 Agocare Doctor Pages - JavaScript Loaded Successfully');
    
    // ===========================
    // MOBILE MENU FUNCTIONALITY
    // ===========================
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    console.log('📱 Mobile Menu Elements:', {
        btn: !!mobileMenuBtn,
        menu: !!mobileMenu,
        overlay: !!mobileMenuOverlay,
        close: !!mobileMenuClose
    });
    
    // Open mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ Mobile menu button clicked!');
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    } else {
        console.warn('⚠️ Mobile menu button not found (OK if on desktop)');
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        console.log('🔒 Closing mobile menu');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Mobile menu item clicks
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    console.log(`📱 Found ${mobileMenuItems.length} mobile menu items`);
    
    mobileMenuItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const dataPage = this.getAttribute('data-page');
            const text = this.textContent.trim();
            
            console.log(`🔔 Menu item ${index + 1} clicked:`, text, '| href:', href, '| data-page:', dataPage);
            
            // If it has data-page attribute, prevent default and show alert
            if (dataPage) {
                e.preventDefault();
                
                switch(dataPage) {
                    case 'questions-feed':
                        alert('📋 Questions Feed\n\nThis page is being worked on by your teammate.\n\nIt will show:\n• All pending patient questions\n• Filter by urgency and specialty\n• Search and sort options\n• Quick answer interface');
                        break;
                    case 'my-patients':
                        alert('👥 My Patients\n\nThis page is being worked on by your teammate.\n\nIt will show:\n• All patients you\'ve consulted\n• Medical history and records\n• Upcoming appointments\n• Past consultations\n• Patient notes');
                        break;
                    case 'appointments':
                        alert('📅 Appointments\n\nThis page is being worked on by your teammate.\n\nIt will show:\n• Full appointment calendar\n• Daily/Weekly/Monthly view\n• Appointment requests\n• Reschedule options\n• Availability management');
                        break;
                    case 'medical-library':
                        closeMobileMenu();
                        window.location.href = 'medical-library.html';
                        break;
                    case 'analytics':
                        closeMobileMenu();
                        window.location.href = 'analytics.html';
                        break;
                    case 'settings':
                        closeMobileMenu();
                        window.location.href = 'settings.html';
                        break;
                    case 'logout':
                        if (confirm('🚪 Logout\n\nAre you sure you want to logout?')) {
                            alert('✅ Logout successful!\n\nRedirecting to login page...\n\n(Login page is being worked on by your teammate)');
                            console.log('User logged out');
                        }
                        break;
                    default:
                        alert(`📱 ${text}\n\nThis feature is being worked on by your teammate.`);
                }
                
                closeMobileMenu();
                return;
            }
            
            // If it has a real HTML link, allow navigation and close menu
            if (href && href !== '#' && href.endsWith('.html')) {
                console.log('📄 Navigating to:', href);
                closeMobileMenu();
                return; // Allow default navigation
            }
            
            // If it's just #, prevent default
            if (href === '#') {
                e.preventDefault();
                alert(`📱 ${text}\n\nThis feature is being worked on by your teammate.`);
                closeMobileMenu();
            }
        });
    });
    
    // Mobile menu profile section click
    const mobileMenuProfile = document.querySelector('.mobile-menu-profile');
    if (mobileMenuProfile) {
        mobileMenuProfile.style.cursor = 'pointer';
        mobileMenuProfile.addEventListener('click', function() {
            console.log('👤 Profile section clicked in menu');
            closeMobileMenu();
            window.location.href = 'doctor-profile.html';
        });
    }
    
    // ===========================
    // HEADER FUNCTIONALITY
    // ===========================
    
    // Header icons functionality
    const headerIcons = document.querySelectorAll('.icon-btn');
    headerIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            console.log('🔔 Header icon clicked:', index);
            switch(index) {
                case 0: // Location icon
                    alert('📍 Location: Kampala, Uganda\n\nYou can change your location in Settings (being worked on by your teammate).');
                    break;
                case 1: // Notification icon
                    alert('🔔 Notifications\n\n• New question in Pediatrics (2 min ago)\n• Appointment confirmed: Jane Mukasa (1 hr ago)\n• You received a 5-star rating (3 hrs ago)\n\nFull notifications page is being worked on by your teammate.');
                    break;
                case 2: // Profile icon
                    alert('👤 Profile Menu\n\n• My Profile\n• Settings\n• Help & Support\n• Logout\n\nFull profile menu is being worked on by your teammate.');
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
                    console.log('🔍 Searching for:', searchTerm);
                    alert(`🔍 Search Results for: "${searchTerm}"\n\nSearch functionality is being worked on by your teammate.\nIt will search through:\n• Questions\n• Doctors\n• Medical Centers\n• Articles`);
                    this.value = '';
                }
            }
        });
        
        // Search icon click
        const searchIcon = searchInput.previousElementSibling;
        if (searchIcon) {
            searchIcon.style.cursor = 'pointer';
            searchIcon.addEventListener('click', function() {
                if (searchInput.value.trim()) {
                    searchInput.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter' }));
                }
            });
        }
    }
    
    // Ask Question button
    const askQuestionBtns = document.querySelectorAll('.ask-question-btn, .btn-ask-question');
    askQuestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('❓ Ask Question button clicked');
            alert('❓ Ask a Question\n\nThe question form is being worked on by your teammate.\nIt will allow patients to ask medical questions to verified doctors.');
        });
    });
    
    // User info click (desktop)
    const userInfo = document.querySelector('.user-info');
    if (userInfo) {
        userInfo.addEventListener('click', function() {
            console.log('👤 User info clicked');
            alert('👤 Account Menu\n\n• View Profile\n• Settings\n• Switch Account\n• Logout\n\nFull account menu is being worked on by your teammate.');
        });
    }
    
    // ===========================
    // SIDEBAR NAVIGATION (Desktop)
    // ===========================
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const text = this.textContent.trim();
            
            // If it has a real link, allow navigation
            if (href && href !== '#' && (href.endsWith('.html') || href.startsWith('http'))) {
                console.log('📄 Navigating to:', href);
                return; // Allow default behavior
            }
            
            // Otherwise, show alert
            e.preventDefault();
            console.log('🔔 Nav item clicked:', text);
            
            // Remove active from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            
            // Show appropriate message
            if (text.includes('Questions Feed')) {
                alert('📋 Questions Feed\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('My Patients')) {
                alert('👥 My Patients\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Appointments')) {
                alert('📅 Appointments\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Medical Library')) {
                alert('📚 Medical Library\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Analytics')) {
                alert('📊 Analytics\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Settings')) {
                alert('⚙️ Settings\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Pediatrics') || text.includes('Pregnancy') || text.includes('Infectious') || text.includes('Sexual') || text.includes('Mental')) {
                alert(`📚 ${text}\n\nTopic page is being worked on by your teammate.\nIt will show all questions and articles related to this medical specialty.`);
            } else if (text.includes('Emergency Contacts')) {
                alert('🚨 Emergency Contacts\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Admin Panel')) {
                alert('🔧 Admin Panel\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Medical Centres')) {
                alert('🏥 Medical Centres Directory\n\nThis page is being worked on by your teammate.');
            } else if (text.includes('Home')) {
                alert('🏠 Home Page\n\nThis page is being worked on by your teammate.');
            }
        });
    });
    
    // See all topics (both sidebar and mobile menu)
    const seeAllBtns = document.querySelectorAll('.see-all');
    seeAllBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('📚 See all topics clicked');
            alert('📚 All Medical Topics\n\nThis page is being worked on by your teammate.\n\nIt will show all medical specialties:\n\n• Pediatrics\n• Pregnancy & Obstetrics\n• Cardiology\n• Dermatology\n• Neurology\n• Infectious Diseases\n• Sexual Health\n• Mental Health\n• General Medicine\n• Surgery\n• And more...');
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    });
    
    // ===========================
    // RIGHT SIDEBAR FUNCTIONALITY
    // ===========================
    
    // Talk to Doctor button
    const talkToDoctorBtn = document.querySelector('.talk-to-doctor-btn');
    if (talkToDoctorBtn) {
        talkToDoctorBtn.addEventListener('click', function() {
            console.log('🩺 Talk to Doctor clicked');
            alert('🩺 Talk to a Doctor\n\nConnecting you with available doctors...\n\nThis instant consultation feature is being worked on by your teammate.\n\nYou will be able to:\n• Chat with verified doctors\n• Video call consultations\n• Get instant medical advice');
        });
    }
    
    // Follow button in trending sidebar (REAL toggle functionality)
    const followBtnSidebar = document.querySelector('.trending-card .follow-btn');
    if (followBtnSidebar) {
        followBtnSidebar.addEventListener('click', function() {
            console.log('👥 Follow button (sidebar) clicked');
            
            // REAL FEATURE: Toggle follow state
            if (this.textContent.trim() === 'Follow') {
                this.textContent = 'Following';
                this.style.backgroundColor = '#4a90e2';
                this.style.color = 'white';
                
                // In production: API call
                console.log('✅ Followed');
            } else {
                this.textContent = 'Follow';
                this.style.backgroundColor = 'transparent';
                this.style.color = '#4a90e2';
                
                // In production: API call
                console.log('❌ Unfollowed');
            }
        });
    }
    
    // Trending items click
    const trendingItems = document.querySelectorAll('.trending-item');
    trendingItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const title = this.querySelector('.trending-title').textContent;
            console.log('📈 Trending item clicked:', title);
            alert(`📈 ${title}\n\nTrending topic details page is being worked on by your teammate.\n\nThis will show:\n• Latest discussions\n• Expert opinions\n• Related articles\n• Community updates`);
        });
    });
    
    // View all links
    const viewAllLinks = document.querySelectorAll('.view-all-link');
    viewAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const context = this.closest('.section-card, .sidebar-card');
            const heading = context ? context.querySelector('h2, h3')?.textContent : 'items';
            console.log('👀 View all clicked:', heading);
            alert(`👀 View All ${heading}\n\nThe full page is being worked on by your teammate.\n\nIt will show complete list with:\n• Filters\n• Search\n• Sorting options\n• Pagination`);
        });
    });
    
    // ===========================
    // DOCTOR DASHBOARD SPECIFIC
    // ===========================
    
    // Answer Question buttons - REAL functionality: open modal or navigate
    const answerBtns = document.querySelectorAll('.btn-answer');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const questionItem = this.closest('.question-item');
            const questionText = questionItem.querySelector('.question-text').textContent;
            const category = questionItem.querySelector('.question-category').textContent;
            const isUrgent = this.classList.contains('urgent') || questionItem.textContent.includes('URGENT');
            
            console.log('💬 Answer button clicked:', questionText);
            
            // REAL FEATURE: This would open an answer modal/form
            // For now, showing what WOULD happen in production
            const urgentText = isUrgent ? '\n⚠️ URGENT - Requires immediate response!' : '';
            alert(`💬 Answer Form${urgentText}\n\nCategory: ${category}\nQuestion: "${questionText}"\n\n✏️ In production, this would open an answer editor where you can:\n• Write your medical advice\n• Add references and links\n• Upload images/diagrams\n• Submit answer\n\n(This form is being built by your teammate)`);
        });
    });
    
    // Question items click (anywhere on card except button)
    const questionItems = document.querySelectorAll('.question-item');
    questionItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            // Don't trigger if clicking the answer button
            if (e.target.closest('.btn-answer')) return;
            
            const questionText = this.querySelector('.question-text').textContent;
            console.log('👀 Question card clicked:', questionText);
            alert(`👀 View Full Question\n\nQuestion: "${questionText}"\n\nThe full question details page is being worked on by your teammate.\n\nYou will see:\n• Complete question with images\n• Patient's medical history\n• Previous answers\n• Related questions`);
        });
    });
    
    // Appointment buttons
    const appointmentBtns = document.querySelectorAll('.btn-appointment');
    appointmentBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const appointmentItem = this.closest('.appointment-item');
            const appointmentTitle = appointmentItem.querySelector('.appointment-title').textContent;
            const appointmentDetails = appointmentItem.querySelector('.appointment-details').textContent;
            
            console.log('📅 Appointment button clicked:', appointmentTitle);
            
            if (this.classList.contains('primary')) {
                // Join Call button
                alert(`📞 Joining Video Call\n\n${appointmentTitle}\n${appointmentDetails}\n\n✅ Connecting to video consultation...\n\nThe video call feature is being worked on by your teammate.\n\nYou will be able to:\n• Video/audio consultation\n• Screen sharing\n• Chat during call\n• Record session (with consent)\n• Prescribe medication`);
            } else {
                // View Details button
                alert(`📋 Appointment Details\n\n${appointmentTitle}\n${appointmentDetails}\n\nThe appointment details page is being worked on by your teammate.\n\nYou will see:\n• Patient information\n• Medical history\n• Reason for visit\n• Previous consultations\n• Test results\n• Options to reschedule/cancel`);
            }
        });
    });
    
    //         if (btnText.includes('Answer Question')) {
                alert('📝 Answer Questions\n\nOpening questions feed...\n\nThe questions feed is being worked on by your teammate.');
            } else if (btnText.includes('Schedule Appointment')) {
                alert('📅 Schedule Appointment\n\nOpening appointment scheduler...\n\nThe appointment scheduling feature is being worked on by your teammate.\n\nYou will be able to:\n• Set available time slots\n• Accept/decline requests\n• Set consultation fees\n• Manage recurring appointments');
            } else if (btnText.includes('Update Profile')) {
                // This one navigates to profile page
                window.location.href = 'doctor-profile.html';
            }
        });
    });
    
    // Badge button
    const badgeBtn = document.querySelector('.badge-btn');
    if (badgeBtn) {
        badgeBtn.addEventListener('click', function() {
            console.log('🏆 Badge button clicked');
            alert('🏆 Top Performer Badge\n\nCongratulations!\n\nYou\'re in the top 5% of doctors this month!\n\nAchievements:\n• 450 questions answered\n• 4.9 average rating\n• 1 hour avg response time\n• 1.2K followers\n\nKeep up the excellent work!\n\nFull achievements page is being worked on by your teammate.');
        });
    }
    
    // Stats cards click for more details
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            const label = this.querySelector('.stat-label').textContent;
            const value = this.querySelector('.stat-value').textContent;
            console.log('📊 Stat card clicked:', label);
            
            let message = `📊 ${label}: ${value}\n\n`;
            
            if (label.includes('Questions')) {
                message += 'Detailed breakdown:\n• This month: 52 questions\n• This week: 12 questions\n• Today: 5 questions\n\nMost answered category: Pediatrics (65%)\n\nFull analytics page is being worked on by your teammate.';
            } else if (label.includes('Followers')) {
                message += 'Follower growth:\n• This month: +96 followers\n• This week: +18 followers\n• Total reach: 15.3K views\n\nTop followers:\n• Healthcare professionals: 45%\n• Parents: 35%\n• General public: 20%\n\nFull follower analytics is being worked on by your teammate.';
            } else if (label.includes('Response')) {
                message += 'Response time trends:\n• Average: 1 hour\n• Fastest: 5 minutes\n• Within 1 hour: 85%\n• Within 3 hours: 95%\n\nThis is excellent! You\'re faster than 92% of doctors.\n\nFull response analytics is being worked on by your teammate.';
            } else if (label.includes('Rating')) {
                message += 'Rating breakdown:\n• 5 stars: 92%\n• 4 stars: 6%\n• 3 stars: 2%\n• 2 stars: 0%\n• 1 star: 0%\n\nRecent reviews:\n"Very helpful and patient!" ⭐⭐⭐⭐⭐\n"Quick response, clear advice" ⭐⭐⭐⭐⭐\n\nFull ratings page is being worked on by your teammate.';
            }
            
            alert(message);
        });
    });
    
    // Activity items click
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const text = this.querySelector('.activity-text').textContent;
            const time = this.querySelector('.activity-time').textContent;
            console.log('🔔 Activity item clicked:', text);
            alert(`🔔 Activity Details\n\n${text}\n${time}\n\nActivity details page is being worked on by your teammate.`);
        });
    });
    
    // ===========================
    // DOCTOR PROFILE SPECIFIC
    // ===========================
    
    // Back to Dashboard link
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // If it's a real link, allow navigation
            if (href && href !== '#' && href !== 'javascript:history.back()') {
                console.log('⬅️ Going back to:', href);
                return; // Allow default behavior
            }
        });
    }
    
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            console.log('📑 Tab clicked:', this.textContent.trim());
            
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
    
    // Follow button in profile (REAL toggle functionality)
    const btnFollow = document.querySelector('.btn-follow');
    if (btnFollow) {
        btnFollow.addEventListener('click', function() {
            console.log('👥 Follow button (profile) clicked');
            
            // REAL FEATURE: Toggle follow state
            if (this.textContent.trim() === 'Follow') {
                this.textContent = 'Following';
                this.style.backgroundColor = '#4a90e2';
                this.style.color = 'white';
                this.style.borderColor = '#4a90e2';
                
                // In production: API call to follow doctor
                console.log('✅ Followed Dr. Sarah Nabirye');
                
                // Show success feedback
                const originalText = this.textContent;
                this.textContent = '✓ Following';
                setTimeout(() => {
                    this.textContent = 'Following';
                }, 800);
            } else {
                this.textContent = 'Follow';
                this.style.backgroundColor = 'white';
                this.style.color = '#4a90e2';
                this.style.borderColor = '#4a90e2';
                
                // In production: API call to unfollow doctor
                console.log('❌ Unfollowed Dr. Sarah Nabirye');
            }
        });
    }
    
    // Edit Profile button (when viewing own profile)
    const btnEditProfile = document.querySelector('.btn-edit-profile');
    if (btnEditProfile) {
        btnEditProfile.addEventListener('click', function() {
            console.log('✏️ Edit Profile clicked');
            alert('✏️ Edit Profile\n\nOpening profile editor...\n\nThe profile editor is being worked on by your teammate.\n\nYou will be able to edit:\n• Profile photo\n• Bio and specialties\n• Credentials and education\n• Work experience\n• Availability schedule\n• Consultation fees\n• Contact information');
        });
    }
    
    // View Public Profile button
    const btnViewPublic = document.querySelector('.btn-view-public');
    if (btnViewPublic) {
        btnViewPublic.addEventListener('click', function() {
            console.log('👁️ View Public Profile clicked');
            alert('👁️ View Public Profile\n\nShowing how patients see your profile...\n\nThis will show your profile as it appears to:\n• Patients searching for doctors\n• People viewing your answers\n• Visitors to your public page\n\nPublic profile view is being worked on by your teammate.');
        });
    }
    
    // Book Appointment buttons
    const bookAppointmentBtns = document.querySelectorAll('.btn-book-appointment');
    bookAppointmentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('📅 Book Appointment clicked');
            alert('📅 Book Appointment\n\nOpening appointment booking form...\n\nThe appointment booking feature is being worked on by your teammate.\n\nPatients will be able to:\n• Choose date and time\n• Select consultation type (Video/In-person)\n• Provide reason for visit\n• Upload medical documents\n• Make payment');
        });
    });
    
    // Answer items click to view full answer
    const answerItems = document.querySelectorAll('.answer-item');
    answerItems.forEach(item => {
        const heading = item.querySelector('h4');
        if (heading) {
            heading.addEventListener('click', function() {
                const questionText = this.textContent;
                console.log('💬 Answer clicked:', questionText);
                alert(`💬 Full Answer\n\nQuestion: "${questionText}"\n\nOpening full answer with discussion...\n\nThe full answer page is being worked on by your teammate.\n\nYou will see:\n• Complete answer with images\n• Comments and follow-ups\n• Related questions\n• Patient feedback\n• Share options`);
            });
        }
    });
    
    // Like interaction in answer meta (REAL like functionality)
    const answerMetas = document.querySelectorAll('.answer-meta span');
    answerMetas.forEach(meta => {
        if (meta.textContent.includes('likes')) {
            meta.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('👍 Like clicked');
                
                // REAL FEATURE: Increment like count
                const currentLikes = parseInt(this.textContent.match(/\d+/)[0]);
                const newLikes = currentLikes + 1;
                this.textContent = `👍 ${newLikes} likes`;
                
                // In production: API call to save like
                console.log(`✅ Liked! New count: ${newLikes}`);
                
                // Visual feedback
                const originalColor = this.style.color;
                this.style.color = '#28a745';
                this.style.fontWeight = 'bold';
                setTimeout(() => {
                    this.style.color = originalColor;
                    this.style.fontWeight = '';
                }, 300);
            });
        } else if (meta.textContent.includes('comments')) {
            meta.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('💬 Comments clicked');
                alert('💬 Comments Section\n\nThe comments/discussion feature is being worked on by your teammate.\n\nUsers will be able to:\n• Read all comments\n• Reply to comments\n• React to comments\n• Report inappropriate content');
            });
        }
    });
    
    // ===========================
    // INITIALIZATION COMPLETE
    // ===========================
    
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Log successful initialization
    console.log('✅ All buttons and interactions are now functional!');
    console.log('📋 Pages being worked on by teammates will show informative alerts');
    console.log('🔗 Navigation between Dashboard and Profile is working');
    
    // Show welcome message (only once per session)
    if (!sessionStorage.getItem('welcomeShown')) {
        sessionStorage.setItem('welcomeShown', 'true');
        setTimeout(() => {
            console.log('👋 Welcome to Agocare Doctor Dashboard!');
        }, 500);
    }
});

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Format numbers for display
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Get time ago string
function getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
    return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
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
            console.log('📱 Mobile menu closed due to window resize');
        }
    }
});

// Prevent default on all # links to avoid page jumps
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});

// Console welcome message with styling
console.log('%c🏥 Agocare Doctor Pages', 'font-size: 20px; font-weight: bold; color: #4a90e2;');
console.log('%c✅ All functionality loaded successfully', 'color: #28a745;');
console.log('%cℹ️ Pages marked as "being worked