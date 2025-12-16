// Agocare Doctor Dashboard - Production JavaScript
// Author: Your Name
// Last Updated: December 2024

document.addEventListener('DOMContentLoaded', function() {
    console.log('🏥 Agocare Doctor Dashboard Initialized');
    
    // ===========================
    // TOAST NOTIFICATION SYSTEM
    // ===========================
    function showToast(message, type = 'info', duration = 3000) {
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        
        toast.innerHTML = `
            <span style="font-size: 20px;">${icons[type]}</span>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
    
    // ===========================
    // MOBILE MENU FUNCTIONALITY
    // ===========================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    function closeMobileMenu() {
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function openMobileMenu() {
        if (mobileMenu && mobileMenuOverlay) {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMobileMenu();
        });
        
        mobileMenuBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            openMobileMenu();
        }, { passive: false });
        
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu?.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.classList.contains('active')) {
                mobileMenuBtn?.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenuBtn?.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    if (mobileMenu) {
        observer.observe(mobileMenu, { attributes: true, attributeFilter: ['class'] });
    }
    
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const dataPage = this.getAttribute('data-page');
            
            if (dataPage) {
                e.preventDefault();
                closeMobileMenu();
                showToast('This feature is coming soon!', 'info');
                return;
            }
            
            if (href && href !== '#' && href.endsWith('.html')) {
                closeMobileMenu();
                return;
            }
            
            if (href === '#') {
                e.preventDefault();
                closeMobileMenu();
                showToast('Feature under development', 'info');
            }
        });
    });
    
    // ===========================
    // HEADER FUNCTIONALITY
    // ===========================
    const headerIcons = document.querySelectorAll('.icon-btn');
    headerIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            switch(index) {
                case 0:
                    showToast('📍 Location: Kampala, Uganda', 'info');
                    break;
                case 1:
                    showToast('🔔 You have 3 new notifications', 'info');
                    break;
                case 2:
                    window.location.href = 'doctor-profile.html';
                    break;
            }
        });
    });
    
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    console.log('🔍 Searching:', query);
                    showToast(`Searching for "${query}"...`, 'info');
                    this.value = '';
                }
            }
        });
    }
    
    const askQuestionBtns = document.querySelectorAll('.ask-question-btn, .btn-ask-question');
    askQuestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showToast('Question form opening...', 'info');
        });
    });
    
    const userInfo = document.querySelector('.user-info');
    if (userInfo) {
        userInfo.addEventListener('click', function() {
            window.location.href = 'doctor-profile.html';
        });
    }
    
    // ===========================
    // NAVIGATION
    // ===========================
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href !== '#' && href.endsWith('.html')) {
                return;
            }
            
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            showToast('Navigating...', 'info');
        });
    });
    
    // ===========================
    // DASHBOARD SPECIFIC
    // ===========================
    const answerBtns = document.querySelectorAll('.btn-answer');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const questionText = this.closest('.question-item')
                ?.querySelector('.question-text')?.textContent;
            console.log('💬 Opening answer form for:', questionText);
            showToast('Loading answer form...', 'info');
        });
    });
    
    const questionItems = document.querySelectorAll('.question-item');
    questionItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            if (e.target.closest('.btn-answer')) return;
            const questionText = this.querySelector('.question-text')?.textContent;
            console.log('👀 Viewing question:', questionText);
            showToast('Loading question details...', 'info');
        });
    });
    
    const appointmentBtns = document.querySelectorAll('.btn-appointment');
    appointmentBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.classList.contains('primary')) {
                showToast('Connecting to video call...', 'info');
            } else {
                showToast('Loading appointment details...', 'info');
            }
        });
    });
    
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            const label = this.querySelector('.stat-label')?.textContent;
            console.log('📊 Viewing detailed stats for:', label);
        });
    });
    
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            if (btnText.includes('Update Profile')) {
                window.location.href = 'doctor-profile.html';
            } else {
                showToast('Loading...', 'info');
            }
        });
    });
    
    // ===========================
    // PROFILE PAGE
    // ===========================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            tabContents[index]?.classList.add('active');
        });
    });
    
    const followButtons = document.querySelectorAll('.follow-btn, .btn-follow');
    followButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const isFollowing = this.textContent.trim() === 'Following';
            if (isFollowing) {
                this.textContent = 'Follow';
                this.style.backgroundColor = 'transparent';
                this.style.color = '#4a90e2';
                showToast('Unfollowed successfully', 'info');
            } else {
                this.textContent = 'Following';
                this.style.backgroundColor = '#4a90e2';
                this.style.color = 'white';
                showToast('Following successfully', 'success');
            }
        });
    });
    
    // ===========================
    // UTILITIES
    // ===========================
    window.formatNumber = function(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };
    
    window.getTimeAgo = function(date) {
        const diff = new Date() - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        if (days < 30) return `${Math.floor(days / 7)}w ago`;
        return `${Math.floor(days / 30)}mo ago`;
    };
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) closeMobileMenu();
    });
    
    document.documentElement.style.scrollBehavior = 'smooth';
    
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
    });
    
    console.log('✅ Agocare initialized successfully');
});

// ===========================
// GLOBAL SAVE SETTINGS
// ===========================
async function saveSettings() {
    const saveBtn = document.querySelector('.btn-save-settings');
    if (!saveBtn) return;
    
    saveBtn.disabled = true;
    saveBtn.innerHTML = '⏳ Saving...';
    saveBtn.style.opacity = '0.7';
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    saveBtn.disabled = false;
    saveBtn.innerHTML = '✅ Saved!';
    saveBtn.style.opacity = '1';
    saveBtn.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
        saveBtn.innerHTML = '💾 Save Settings';
    }, 2000);
}
    // Show success toast
    const event = new CustomEvent('showToast', { 
        detail: { message: 'Settings saved successfully!', type: 'success' } 
    });
    document.dispatchEvent(event);
}

// Listen for toast events
document.addEventListener('showToast', function(e) {
    const { message, type } = e.detail;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    toast.innerHTML = `<span style="font-size: 20px;">${icons[type]}</span><span>${message}</span>`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
});