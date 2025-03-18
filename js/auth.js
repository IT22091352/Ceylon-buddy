/**
 * Client-side authentication for Ceylon Buddy
 * This is a demo implementation for static hosting on Netlify
 * In production, use a secure backend authentication service
 */

// Check if user is logged in
function isLoggedIn() {
    const user = localStorage.getItem('ceylonbuddyUser');
    if (!user) return false;
    
    try {
        const userData = JSON.parse(user);
        // Simple session timeout (24 hours)
        const loginTime = new Date(userData.loginTime).getTime();
        const currentTime = new Date().getTime();
        const hoursPassed = (currentTime - loginTime) / (1000 * 60 * 60);
        
        return userData.loggedIn && hoursPassed < 24;
    } catch (error) {
        return false;
    }
}

// Get current user info
function getCurrentUser() {
    if (!isLoggedIn()) return null;
    try {
        return JSON.parse(localStorage.getItem('ceylonbuddyUser'));
    } catch (error) {
        return null;
    }
}

// Logout function
function logout() {
    localStorage.removeItem('ceylonbuddyUser');
    window.location.href = 'home.html';
}

// Update nav menu based on login status
function updateNavMenu() {
    const loggedIn = isLoggedIn();
    const loginElements = document.querySelectorAll('.login-link');
    const logoutElements = document.querySelectorAll('.logout-link');
    const userNameElements = document.querySelectorAll('.user-name');
    
    loginElements.forEach(el => {
        el.style.display = loggedIn ? 'none' : 'inline-block';
    });
    
    logoutElements.forEach(el => {
        el.style.display = loggedIn ? 'inline-block' : 'none';
        el.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    });
    
    if (loggedIn) {
        const user = getCurrentUser();
        userNameElements.forEach(el => {
            el.textContent = user.email;
            el.style.display = 'inline-block';
        });
    } else {
        userNameElements.forEach(el => {
            el.style.display = 'none';
        });
    }
}

// Initialize auth when DOM is loaded
document.addEventListener('DOMContentLoaded', updateNavMenu);
