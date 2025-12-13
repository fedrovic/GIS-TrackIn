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
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const text = this.textContent.trim();
            
            // If it has a real link to another page, allow navigation and close menu
            if (href && href !== '#' && (href.endsWith('.html') || href.startsWith('http'))) {
                console.log('📄 Navigating to:', href);
                closeMobileMenu();
                return; // Allow default behavior
            }
            
            // Otherwise, show alert for pages being worked on by others
            e.preventDefault();
            console.log('🔔 Menu item clicked:', text);
            
            if (text.includes('Questions Feed')) {
                alert('📋 Questions Feed\n\nThis page is being worked on by your teammate.\nIt will show all pending patient questions for doctors to answer.');
            } else if (text.includes('My Patients')) {
                alert('👥 My Patients\n\nThis page is being worked on by your teammate.\nIt will show all patients you\'ve consulted with and their medical history.');
            } else if (text.includes('Appointments')) {
                alert('📅 Appointments\n\nThis page is being worked on by your teammate.\nIt will show your full appointment schedule and allow you to manage bookings.');
            } else if (text.includes('Medical Library')) {
                alert('📚 Medical Library\n\nThis page is being worked on by your teammate.\nIt will contain medical resources, research papers, and reference materials.');
            } else if (text.includes('Analytics')) {
                alert('📊 Analytics\n\nThis page is being worked on by your teammate.\nIt will show detailed performance metrics and statistics.');
            } else if (text.includes('Settings')) {
                alert('⚙️ Settings\n\nThis page is being worked on by your teammate.\nIt will allow you to configure notifications, privacy, and account preferences.');
            } else if (text.includes('Logout')) {
                if (confirm('🚪 Logout\n\nAre you sure you want to logout?')) {
                    alert('✅ Logout successful!\n\nYou will be redirected to the login page (being worked on by your teammate).');
                    console.log('User logged out');
                }
            } else if (text.includes('Emergency Contacts')) {
                alert('🚨 Emergency Contacts\n\nThis page is being worked on by your teammate.\nIt will show emergency medical contacts and hotlines.');
            } else if (text.includes('Admin Panel')) {
                alert('🔧 Admin Panel\n\nThis page is being worked on by your teammate.\nIt will show administrative controls (admin access only).');
            }
            
            closeMobileMenu();
        });
    });
    
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
    
    // See all topics
    const seeAllBtn = document.querySelector('.see-all');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('📚 See all topics clicked');
            alert('📚 All Topics\n\nThe full topics page is being worked on by your teammate.\nIt will show all medical specialties and categories:\n\n• Pediatrics\n• Pregnancy\n• Cardiology\n• Dermatology\n• Neurology\n• And more...');
        });
    }
    
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
    
    // Follow button in trending sidebar
    const followBtnSidebar = document.querySelector('.trending-card .follow-btn');
    if (followBtnSidebar) {
        followBtnSidebar.addEventListener('click', function() {
            console.log('👥 Follow button clicked');
            if (this.textContent.trim() === 'Follow') {
                this.textContent = 'Following';
                this.style.backgroundColor = '#4a90e2';
                this.style.color = 'white';
                alert('✅ You are now following Dr. Sarah Nabirye\n\nYou will receive notifications when they post new answers.');
            } else {
                this.textContent = 'Follow';
                this.style.backgroundColor = 'transparent';
                this.style.color = '#4a90e2';
                alert('❌ You unfollowed Dr. Sarah Nabirye');
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
    
    // Answer Question buttons
    const answerBtns = document.querySelectorAll('.btn-answer');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const questionItem = this.closest('.question-item');
            const questionText = questionItem.querySelector('.question-text').textContent;
            const category = questionItem.querySelector('.question-category').textContent;
            const isUrgent = this.classList.contains('urgent') || questionItem.textContent.includes('URGENT');
            
            console.log('💬 Answer button clicked:', questionText);
            
            const urgentText = isUrgent ? '\n⚠️ URGENT - Patient needs immediate response!' : '';
            alert(`💬 Answer Question${urgentText}\n\nCategory: ${category}\n\nQuestion: "${questionText}"\n\nThe answer form is being worked on by your teammate.\n\nYou will be able to:\n• Write detailed medical advice\n• Attach images/documents\n• Tag related conditions\n• Set follow-up reminders`);
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
    
    // Appointment items click
    const appointmentItems = document.querySelectorAll('.appointment-item');
    appointmentItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            if (e.target.closest('.btn-appointment')) return;
            
            const title = this.querySelector('.appointment-title').textContent;
            console.log('👀 Appointment card clicked:', title);
            alert(`📋 Appointment Details\n\n${title}\n\nClick "View Details" or "Join Call" button for more options.`);
        });
    });
    
    // Quick Action buttons
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            console.log('⚡ Quick action clicked:', btnText);
            
            if (btnText.includes('Answer Question')) {
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
            alert('🏆 Top Performer Badge\n\nCongratulations!\n\nYou\'re in the top 5% of doctors th