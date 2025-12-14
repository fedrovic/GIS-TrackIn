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
    
    console.log('📱 Mobile Menu Elements Check:', {
        btn: !!mobileMenuBtn,
        menu: !!mobileMenu,
        overlay: !!mobileMenuOverlay,
        close: !!mobileMenuClose
    });
    
    // Close mobile menu function
    function closeMobileMenu() {
        console.log('🔒 Closing mobile menu');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Open mobile menu - MULTIPLE METHODS to ensure it works
    if (mobileMenuBtn) {
        // Method 1: addEventListener
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ Hamburger button clicked (addEventListener)!');
            
            if (mobileMenu && mobileMenuOverlay) {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('✅ Menu opened successfully');
            } else {
                console.error('❌ Menu elements not found');
            }
        });
        
        // Method 2: onclick as backup
        mobileMenuBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ Hamburger button clicked (onclick)!');
            
            if (mobileMenu && mobileMenuOverlay) {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('✅ Menu opened successfully');
            }
        };
        
        // Method 3: Touch events for mobile
        mobileMenuBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            console.log('✅ Hamburger touched!');
            
            if (mobileMenu && mobileMenuOverlay) {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        console.log('✅ All click listeners added to hamburger button');
    } else {
        console.error('❌ Mobile menu button not found!');
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
[span_76](start_span)const appointmentBtns = document.querySelectorAll('.btn-appointment');[span_76](end_span)
[span_77](start_span)appointmentBtns.forEach(btn => {[span_77](end_span)
btn.addEventListener('click', function(e) {
e.stopPropagation();

const appointmentItem = this.closest('.appointment-item');
const appointmentTitle = appointmentItem.querySelector('.appointment-title').textContent;
const appointmentDetails = appointmentItem.querySelector('.appointment-details').textContent;

console.log(' Appointment button clicked:', appointmentTitle);

if (this.classList.contains('primary')) {
// Join Call button
alert(` Joining Video Call\n\n${appointmentTitle}\n${appointmentDetails}\n\n Connecting to video consultation...\n\nThe video call feature is being worked on by your teammate.\n\nYou will be able to: \n Video/audio consultation\n Screen sharing\n Chat during call\n Record session (with consent)\n Prescribe medication `);
} else {
// View Details button
[span_78](start_span)alert(` Appointment Details\n\n${appointmentTitle}\n${appointmentDetails}\n\nThe appointment details page is being worked on by your teammate.\n\nYou will see: \n Patient information\n Medical history\n• Reason for visit\n Previous consultations\n Test results\n Options to reschedule/cancel`);[span_78](end_span)
}

});

});

// Appointment items click
[span_79](start_span)const appointmentItems = document.querySelectorAll('.appointment-item');[span_79](end_span)
appointmentItems.forEach(item => {
item.style.cursor = 'pointer';

item.addEventListener('click', function(e) {
if (e.target.closest('.btn-appointment')) return;
const title = this.querySelector('.appointment-title').textContent;
console.log(' Appointment card clicked:', title);
alert(` Appointment Details\n\n${title}\n\nClick "View Details" or "Join Call" button for more options.`);
});

});

// Quick Action buttons
[span_80](start_span)const quickActionBtns = document.querySelectorAll('.quick-action-btn');[span_80](end_span)
[span_81](start_span)quickActionBtns.forEach(btn => {[span_81](end_span)
btn.addEventListener('click', function() {
const btnText = this.textContent.trim();
console.log(' Quick action clicked:', btnText);

[span_82](start_span)if (btnText.includes('Answer Question')) {[span_82](end_span)
[span_83](start_span)alert('📝 Answer Questions\n\nOpening questions feed...\n\nThe questions feed is being worked on by your teammate.');[span_83](end_span)
[span_84](start_span)} else if (btnText.includes('Schedule Appointment')) {[span_84](end_span)
[span_85](start_span)alert('📅 Schedule Appointment\n\nOpening appointment scheduler...\n\nThe appointment scheduling feature is being worked on by your teammate.\n\nYou will be able to:\n• Set available time slots\n• Accept/decline requests\n• Set consultation fees\n• Manage recurring appointments');[span_85](end_span)
[span_86](start_span)} else if (btnText.includes('Update Profile')) {[span_86](end_span)
// This one navigates to profile page
[span_87](start_span)window.location.href = 'doctor-profile.html';[span_87](end_span)
}
});
[span_88](start_span)});[span_88](end_span)

// Badge button
[span_89](start_span)const badgeBtn = document.querySelector('.badge-btn');[span_89](end_span)
[span_90](start_span)if (badgeBtn) {[span_90](end_span)
badgeBtn.addEventListener('click', function() {
console.log('🏆 Badge button clicked');
[span_91](start_span)alert('🏆 Top Performer Badge\n\nCongratulations!\n\nYou\'re in the top 5% of doctors this month!\n\nAchievements:\n• 450 questions answered\n• 4.9 average rating\n• 1 hour avg response time\n• 1.2K followers\n\nKeep up the excellent work!\n\nFull achievements page is being worked on by your teammate.');[span_91](end_span)
});
}

// Stats cards click for more details
[span_92](start_span)const statCards = document.querySelectorAll('.stat-card');[span_92](end_span)
[span_93](start_span)statCards.forEach(card => {[span_93](end_span)
card.addEventListener('click', function() {
const label = this.querySelector('.stat-label').textContent;
const value = this.querySelector('.stat-value').textContent;
console.log('📊 Stat card clicked:', label);

let message = `📊 ${label}: ${value}\n\n`;

if (label.includes('Questions')) {
message += 'Detailed breakdown:\n• This month: 52 questions\n• This week: 12 questions\n• Today: 5 questions\n\nMost answered category: Pediatrics (65%)\n\nFull analytics page is being worked on by your teammate.';
} else if (label.includes('Followers')) {
message += 'Follower growth:\n• This month: +96 followers\n• This week: +18 followers\n• Total reach: 15.3K views\n\nTop followers:\n• Healthcare professionals: 45%\n• Parents: 35%\n• General public: 20%\n\nFull follower analytics is being worked on by your teammate.';
[span_94](start_span)} else if (label.includes('Response')) {[span_94](end_span)
message += 'Response time trends:\n• Average: 1 hour\n• Fastest: 5 minutes\n• Within 1 hour: 85%\n• Within 3 hours: 95%\n\nThis is excellent! [span_95](start_span)You\'re faster than 92% of[span_95](end_span) [span_96](start_span)doctors.\n\nFull response analytics is being worked on by your teammate.';[span_96](end_span)
[span_97](start_span)} else if (label.includes('Rating')) {[span_97](end_span)
message += 'Rating breakdown:\n• 5 stars: 92%\n• 4 stars: 6%\n• 3 stars: 2%\n• 2 stars: 0%\n• 1 star: 0%\n\nRecent reviews:\n"Very helpful and patient!" [span_98](start_span)⭐⭐⭐⭐⭐\n"Quick response, clear advice" ⭐⭐⭐⭐⭐\n\nFull ratings page is being worked on by your teammate.';[span_98](end_span)
}

alert(message);
});
[span_99](start_span)});[span_99](end_span)

// Activity items click
[span_100](start_span)const activityItems = document.querySelectorAll('.activity-item');[span_100](end_span)
[span_101](start_span)activityItems.forEach(item => {[span_101](end_span)
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
[span_102](start_span)const backLink = document.querySelector('.back-link');[span_102](end_span)
[span_103](start_span)if (backLink) {[span_103](end_span)
[span_104](start_span)backLink.addEventListener('click', function(e) {[span_104](end_span)
const href = this.getAttribute('href');
// If it's a real link, allow navigation
if (href && href !== '#' && href !== 'javascript:history.back()') {
console.log('⬅️ Going back to:', href);
return; // Allow default behavior
}
[span_105](start_span)});[span_105](end_span)
}

// Tab switching functionality
[span_106](start_span)const tabBtns = document.querySelectorAll('.tab-btn');[span_106](end_span)
[span_107](start_span)const tabContents = document.querySelectorAll('.tab-content');[span_107](end_span)
[span_108](start_span)tabBtns.forEach((btn, index) => {[span_108](end_span)
btn.addEventListener('click', function() {
console.log('📑 Tab clicked:', this.textContent.trim());

// Remove active class from all tabs
[span_109](start_span)tabBtns.forEach(tab => tab.classList.remove('active'));[span_109](end_span)
[span_110](start_span)tabContents.forEach(content => content.classList.remove('active'));[span_110](end_span)

// Add active class to clicked tab
this.classList.add('active');
if (tabContents[index]) {
tabContents[index].classList.add('active');
}
[span_111](start_span)});[span_111](end_span)
});

// Follow button in profile (REAL toggle functionality)
[span_112](start_span)const btnFollow = document.querySelector('.btn-follow');[span_112](end_span)
[span_113](start_span)if (btnFollow) {[span_113](end_span)
[span_114](start_span)btnFollow.addEventListener('click', function() {[span_114](end_span)
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
[span_115](start_span)this.style.color = '#4a90e2';[span_115](end_span)
this.style.borderColor = '#4a90e2';

// In production: API call to unfollow doctor
[span_116](start_span)console.log('❌ Unfollowed Dr. Sarah Nabirye');[span_116](end_span)
}
});
}

// Edit Profile button (when viewing own profile)
[span_117](start_span)const btnEditProfile = document.querySelector('.btn-edit-profile');[span_117](end_span)
[span_118](start_span)if (btnEditProfile) {[span_118](end_span)
[span_119](start_span)btnEditProfile.addEventListener('click', function() {[span_119](end_span)
[span_120](start_span)console.log('✏️ Edit Profile clicked');[span_120](end_span)

[span_121](start_span)alert('✏️ Edit Profile\n\nOpening profile editor...\n\nThe profile editor is being worked on by your teammate.\n\nYou will be able to edit:\n• Profile photo\n• Bio and specialties\n• Credentials and education\n• Work experience\n• Availability schedule\n• Consultation fees\n• Contact information');[span_121](end_span)
[span_122](start_span)});[span_122](end_span)
}

// View Public Profile button
[span_123](start_span)const btnViewPublic = document.querySelector('.btn-view-public');[span_123](end_span)
[span_124](start_span)if (btnViewPublic) {[span_124](end_span)
[span_125](start_span)btnViewPublic.addEventListener('click', function() {[span_125](end_span)
console.log(' View Public Profile clicked');
[span_126](start_span)alert(' View Public Profile\n\nShowing how patients see your profile...\n\nThis will show your profile as it appears to:\n• Patients searching for doctors\n• People viewing your answers\n• Visitors to your public page\n\nPublic profile view is being worked on by your teammate.');[span_126](end_span)
});
}

// Book Appointment buttons
[span_127](start_span)const bookAppointmentBtns = document.querySelectorAll('.btn-book-appointment');[span_127](end_span)
[span_128](start_span)bookAppointmentBtns.forEach(btn => {[span_128](end_span)
btn.addEventListener('click', function() {
console.log('📅 Book Appointment clicked');
[span_129](start_span)alert('📅 Book Appointment\n\nOpening appointment booking form...\n\nThe appointment booking feature is being worked on by your teammate.\n\nPatients will be able to:\n• Choose date and time\n• Select consultation type (Video/In-person)\n• Provide reason for visit\n• Upload medical documents\n• Make payment');[span_129](end_span)
});
[span_130](start_span)});[span_130](end_span)

// Answer items click to view full answer
[span_131](start_span)const answerItems = document.querySelectorAll('.answer-item');[span_131](end_span)
[span_132](start_span)answerItems.forEach(item => {[span_132](end_span)
[span_133](start_span)const heading = item.querySelector('h4');[span_133](end_span)
[span_134](start_span)if (heading) {[span_134](end_span)
heading.addEventListener('click', function() {
const questionText = this.textContent;
console.log('💬 Answer clicked:', questionText);
alert(`💬 Full Answer\n\nQuestion: "${questionText}"\n\nOpening full answer with discussion...\n\nThe full answer page is being worked on by your teammate.\n\nYou will see:\n• Complete answer with images\n• Comments and follow-ups\n• Related questions\n• Patient feedback\n• Share options`);
});
}
[span_135](start_span)});[span_135](end_span)

// Like interaction in answer meta (REAL like functionality)
[span_136](start_span)const answerMetas = document.querySelectorAll('.answer-meta span');[span_136](end_span)
[span_137](start_span)answerMetas.forEach(meta => {[span_137](end_span)

[span_138](start_span)if (meta.textContent.includes('likes')) {[span_138](end_span)
[span_139](start_span)meta.addEventListener('click', function(e) {[span_139](end_span)
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
[span_140](start_span)});[span_140](end_span)
[span_141](start_span)} else if (meta.textContent.includes('comments')) {[span_141](end_span)
[span_142](start_span)meta.addEventListener('click', function(e) {[span_142](end_span)
e.stopPropagation();
console.log('💬 Comments clicked');
alert('💬 Comments Section\n\nThe comments/discussion feature is being worked on by your teammate.\n\nUsers will be able to:\n• Read all comments\n• Reply to comments\n• React to comments\n• Report inappropriate content');
[span_143](start_span)});[span_143](end_span)
}
});

// ===========================
// INITIALIZATION COMPLETE
// ===========================

// Smooth scrolling
[span_144](start_span)document.documentElement.style.scrollBehavior = 'smooth';[span_144](end_span)
// Log successful initialization
[span_145](start_span)console.log('✅ All buttons and interactions are now functional!');[span_145](end_span)
[span_146](start_span)console.log('📋 Pages being worked on by teammates will show informative alerts');[span_146](end_span)
[span_147](start_span)console.log('🔗 Navigation between Dashboard and Profile is working');[span_147](end_span)
// Show welcome message (only once per session)
[span_148](start_span)if (!sessionStorage.getItem('welcomeShown')) {[span_148](end_span)
[span_149](start_span)sessionStorage.setItem('welcomeShown', 'true');[span_149](end_span)
[span_150](start_span)setTimeout(() => {[span_150](end_span)
[span_151](start_span)console.log('👋 Welcome to Agocare Doctor Dashboard!');[span_151](end_span)
[span_152](start_span)}, 500);[span_152](end_span)
}
});
// ===========================
// UTILITY FUNCTIONS
// ===========================
// Format numbers for display
function formatNumber(num) {
if (num >= 1000000) {
[span_153](start_span)return (num / 1000000).toFixed(1) + 'M';[span_153](end_span)
}
if (num >= 1000) {
[span_154](start_span)return (num / 1000).toFixed(1) + 'K';[span_154](end_span)
}
[span_155](start_span)return num.toString();[span_155](end_span)
}
// Get time ago string
function getTimeAgo(date) {
const now = new Date();
[span_156](start_span)const diff = now - date;[span_156](end_span)
[span_157](start_span)const minutes = Math.floor(diff / 60000);[span_157](end_span)
[span_158](start_span)const hours = Math.floor(diff / 3600000);[span_158](end_span)
[span_159](start_span)const days = Math.floor(diff / 86400000);[span_159](end_span)
[span_160](start_span)if (minutes < 1) return 'Just now';[span_160](end_span)
if (minutes < 60) return `${minutes} minute${minutes > 1 ? [span_161](start_span)'s' : ''} ago`;[span_161](end_span)
if (hours < 24) return `${hours} hour${hours > 1 ? [span_162](start_span)'s' : ''} ago`;[span_162](end_span)
if (days < 7) return `${days} day${days > 1 ? [span_163](start_span)'s' : ''} ago`;[span_163](end_span)
if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? [span_164](start_span)'s' : ''} ago`;[span_164](end_span)
return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? [span_165](start_span)'s' : ''} ago`;[span_165](end_span)
}
// Handle window resize to close mobile menu if open
[span_166](start_span)window.addEventListener('resize', function() {[span_166](end_span)
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
[span_167](start_span)document.addEventListener('click', function(e) {[span_167](end_span)
if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
e.preventDefault();
}
[span_168](start_span)});[span_168](end_span)

// Console welcome message with styling
[span_169](start_span)console.log('%c🏥 Agocare Doctor Pages', 'font-size: 20px; font-weight: bold; color: #4a90e2;');[span_169](end_span)
[span_170](start_span)console.log('%c✅ All functionality loaded successfully', 'color: #28a745;');[span_170](end_span)
[span_171](start_span)console.log('%cℹ️ Pages marked as "being worked on by teammate" will show alerts', 'color: #666;');[span_171](end_span)