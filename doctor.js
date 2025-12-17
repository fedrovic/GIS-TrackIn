// ===========================
// MOBILE MENU FUNCTIONALITY
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    // Open mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
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

    // Close menu when clicking on a menu item (except logout)
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const page = this.getAttribute('data-page');
            if (page === 'logout') {
                e.preventDefault();
                handleLogout();
            } else if (!this.href || this.href.includes('#')) {
                e.preventDefault();
                // If it's a placeholder link, don't close menu
            } else {
                // If it's a real link, close the menu after a short delay
                setTimeout(closeMobileMenu, 100);
            }
        });
    });

    // Handle desktop nav items with data-page attribute
    const desktopNavItems = document.querySelectorAll('.nav-item[data-page]');
    desktopNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page === 'logout') {
                handleLogout();
            }
        });
    });
});

// ===========================
// TAB FUNCTIONALITY (Profile Page)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
});

// ===========================
// NAVIGATION FUNCTIONS
// ===========================

function navigateTo(page) {
    const pageUrls = {
        'dashboard': 'doctor-dashboard.html',
        'questions-feed': 'questions-feed.html',
        'my-patients': 'my-patients.html',
        'appointments': 'appointments.html',
        'medical-library': 'medical-library.html',
        'analytics': 'analytics.html',
        'settings': 'settings.html',
        'profile': 'doctor-profile.html'
    };

    if (pageUrls[page]) {
        window.location.href = pageUrls[page];
    } else {
        console.error('Page not found:', page);
    }
}

// ===========================
// LOGOUT FUNCTIONALITY
// ===========================

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        // In production, you would:
        // 1. Clear session/tokens
        // 2. Call logout API
        // 3. Redirect to login page
        
        alert('👋 Logging out...\n\nIn production, this would:\n• Clear your session\n• Invalidate tokens\n• Redirect to login page');
        
        // For demo, redirect to home page
        // window.location.href = 'index.html';
        
        console.log('User logged out');
    }
}

// ===========================
// SEARCH FUNCTIONALITY
// ===========================

// Header search bar
const headerSearchInput = document.querySelector('.search-bar input');
if (headerSearchInput) {
    headerSearchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 2) {
            console.log('Searching for:', searchTerm);
            // In production, implement search functionality
        }
    });

    headerSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = e.target.value;
            if (searchTerm.trim()) {
                alert(`🔍 Searching for: "${searchTerm}"\n\nIn production, this would show search results.`);
            }
        }
    });
}

// ===========================
// ASK QUESTION BUTTON
// ===========================

const askQuestionBtns = document.querySelectorAll('.ask-question-btn');
askQuestionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        openQuestionForm();
    });
});

function openQuestionForm() {
    alert('❓ Ask a Question\n\nIn production, this would open a form where you can:\n• Select a category\n• Write your question\n• Add images/attachments\n• Set urgency level\n• Submit to doctors');
}

// ===========================
// ICON BUTTON FUNCTIONALITY
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const iconButtons = document.querySelectorAll('.icon-btn');
    
    iconButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.textContent.trim();
            
            switch(icon) {
                case '📍':
                    alert('📍 Location Services\n\nSet your location to:\n• Find nearby doctors\n• Get local health updates\n• Emergency services');
                    break;
                case '🔔':
                    showNotifications();
                    break;
                case '👤':
                    window.location.href = 'doctor-profile.html';
                    break;
                default:
                    console.log('Icon clicked:', icon);
            }
        });
    });
});

function showNotifications() {
    alert('🔔 Notifications\n\nYou have:\n• 3 new questions\n• 2 appointment reminders\n• 1 patient message\n\nIn production, this would show a dropdown with all notifications.');
}

// ===========================
// DASHBOARD SPECIFIC FUNCTIONS
// ===========================

function answerQuestion(id) {
    alert(`📝 Opening Answer Form\n\nQuestion ID: ${id}\n\nIn production, this would open a form where you can:\n• Write your detailed answer\n• Add references or resources\n• Recommend follow-up actions\n• Submit your response`);
}

function viewAppointment(id) {
    alert(`📋 Appointment Details\n\nAppointment ID: ${id}\n\nIn production, this would show:\n• Patient information\n• Appointment type\n• Medical history\n• Previous notes\n• Start video call option`);
}

function joinVideoCall(id) {
    alert(`📹 Starting Video Call\n\nAppointment ID: ${id}\n\nIn production, this would:\n• Launch video call interface\n• Connect with patient\n• Enable screen sharing\n• Record session (with consent)`);
}

function viewDetails(id) {
    alert(`📄 Viewing Details\n\nAppointment ID: ${id}\n\nIn production, this would show detailed information about the appointment.`);
}

// ===========================
// PROFILE PAGE FUNCTIONS
// ===========================

function editProfile() {
    alert('✏️ Edit Profile\n\nIn production, this would open a form to:\n• Update bio and credentials\n• Change profile picture\n• Update specialties\n• Modify contact information');
}

function viewPublicProfile() {
    alert('👁️ Public Profile View\n\nThis is how patients see your profile.\n\nIn production, this would show your public-facing profile page.');
}

function bookAppointment() {
    alert('📅 Book Appointment\n\nIn production, patients would:\n• Select available time slot\n• Choose consultation type\n• Provide reason for visit\n• Confirm booking');
}

// ===========================
// QUICK ACTIONS (Sidebar)
// ===========================

function postUpdate() {
    alert('📢 Post Update\n\nShare health tips, announcements, or educational content with your followers.');
}

function scheduleAppointment() {
    alert('📅 Schedule Appointment\n\nQuickly add a new appointment to your calendar.');
}

function viewMessages() {
    alert('💬 Messages\n\nView and respond to patient messages.\n\n• 5 unread messages\n• 12 total conversations');
}

function earnBadge() {
    alert('🏆 Earn Badges\n\nComplete activities to earn badges:\n• Answer 100 questions - Gold Badge\n• Maintain 4.8+ rating - Excellence Badge\n• 50 video consultations - Video Expert');
}

// ===========================
// QUESTIONS FEED FUNCTIONS
// ===========================

function filterQuestions(category) {
    console.log('Filtering questions by:', category);
    alert(`Showing questions in: ${category}`);
}

function viewAnswer(id) {
    alert(`👁️ Viewing Your Answer\n\nAnswer ID: ${id}\n\nIn production, this would show:\n• Your full answer\n• Patient responses\n• Comments and engagement\n• Edit/update options`);
}

// ===========================
// PATIENTS PAGE FUNCTIONS
// ===========================

function viewPatientDetails(id) {
    alert(`👤 Opening Patient Record\n\nPatient ID: ${id}\n\nIn production, this would show:\n• Complete medical history\n• Previous consultations\n• Test results\n• Prescriptions\n• Treatment plans\n• Appointment history`);
}

function contactPatient(id) {
    alert(`📱 Contact Patient\n\nPatient ID: ${id}\n\nContact options:\n• Send Message\n• Schedule Call\n• Send Reminder\n• Request Follow-up`);
}

function addNewPatient() {
    alert(`➕ Add New Patient\n\nIn production, this would open a form to:\n• Register new patient\n• Enter personal details\n• Add medical history\n• Set up first appointment`);
}

function scheduleFollowup() {
    alert(`📅 Schedule Follow-up\n\nThis would allow you to:\n• Select patient\n• Choose date and time\n• Set reminder\n• Send notification`);
}

function exportRecords() {
    alert(`📄 Export Patient Records\n\nExport options:\n• Export all records (CSV/PDF)\n• Export selected patients\n• Generate reports\n• Download summary`);
}

// ===========================
// APPOINTMENTS PAGE FUNCTIONS
// ===========================

function createAppointment() {
    alert(`➕ Create New Appointment\n\nThis would open a form to:\n• Select patient\n• Choose date and time\n• Set appointment type\n• Add notes\n• Send confirmation`);
}

function rescheduleAppointment(id) {
    alert(`🔄 Reschedule Appointment\n\nAppointment ID: ${id}\n\nOptions:\n• Select new date\n• Choose new time\n• Notify patient\n• Update calendar`);
}

function cancelAppointment(id) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        alert(`❌ Appointment Cancelled\n\nAppointment ID: ${id}\n\nActions taken:\n• Patient notified\n• Slot freed\n• Calendar updated`);
    }
}

function showDayView(day) {
    alert(`📅 Day View\n\nShowing appointments for December ${day}, 2024\n\nIn production, this would display all appointments for that day.`);
}

function previousMonth() {
    alert('← Previous Month\n\nNavigating to November 2024');
    // In production: update calendar grid
}

function nextMonth() {
    alert('→ Next Month\n\nNavigating to January 2025');
    // In production: update calendar grid
}

function switchView(view) {
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    alert(`Switching to ${view.charAt(0).toUpperCase() + view.slice(1)} View`);
    // In production: change calendar display
}

function viewAvailability() {
    alert(`📅 Set Availability\n\nThis would allow you to:\n• Set working hours\n• Block time slots\n• Set recurring availability\n• Manage breaks`);
}

function exportSchedule() {
    alert(`📄 Export Schedule\n\nExport options:\n• Weekly schedule (PDF)\n• Monthly calendar (CSV)\n• Appointment list\n• Custom date range`);
}

// ===========================
// SETTINGS PAGE FUNCTIONS
// ===========================

function saveSettings() {
    // Get all checkbox values
    const settings = {
        emailNotif: document.getElementById('emailNotif')?.checked,
        pushNotif: document.getElementById('pushNotif')?.checked,
        smsNotif: document.getElementById('smsNotif')?.checked,
        profileVisible: document.getElementById('profileVisible')?.checked,
        onlineStatus: document.getElementById('onlineStatus')?.checked,
        acceptPatients: document.getElementById('acceptPatients')?.checked,
        autoReply: document.getElementById('autoReply')?.checked,
        twoFactor: document.getElementById('twoFactor')?.checked
    };

    console.log('Settings saved:', settings);
    
    alert('✅ Settings Saved Successfully!\n\nYour preferences have been updated.');
    
    // In production: Send to API
    // await fetch('/api/settings', { method: 'POST', body: JSON.stringify(settings) });
}

// ===========================
// ANALYTICS PAGE FUNCTIONS
// ===========================

function updateAnalytics(period) {
    console.log('Updating analytics for period:', period);
    alert(`Updating analytics view for: ${period}`);
    // In production: Fetch new data and update charts
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Format time
function formatTime(time) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(time).toLocaleTimeString('en-US', options);
}

// Show toast notification
function showToast(message, type = 'info') {
    // In production, implement a proper toast notification system
    console.log(`Toast [${type}]:`, message);
}

// Confirm action
function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

// ===========================
// KEYBOARD SHORTCUTS
// ===========================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        if (mobileMenu?.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay?.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ===========================
// INITIALIZE ON LOAD
// ===========================

window.addEventListener('load', function() {
    console.log('Doctor Dashboard loaded successfully');
    
    // Initialize any charts or data visualizations
    // initializeCharts();
    
    // Load user preferences
    // loadUserPreferences();
    
    // Check for notifications
    // checkNotifications();
});

// ===========================
// RESPONSIVE HELPER
// ===========================

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle responsive adjustments
        const isMobile = window.innerWidth <= 768;
        console.log('Screen size:', isMobile ? 'Mobile' : 'Desktop');
    }, 250);
});

console.log('doctor.js loaded successfully ✅');