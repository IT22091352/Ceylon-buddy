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
    
    // Also clear session cookie if possible
    document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Redirect to index page
    window.location.href = 'index.html';
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

// Check access permission
function checkAccess() {
    // If not logged in and not on allowed pages, redirect to index
    if (!isLoggedIn()) {
        const currentPath = window.location.pathname;
        const allowedPaths = ['/index.html', '/login.html', '/register.html', '/'];
        
        if (!allowedPaths.some(path => currentPath.endsWith(path))) {
            window.location.href = 'index.html';
        }
    }
}

// Initialize auth when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateNavMenu();
    checkAccess();
    
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('ceylonbuddyUser') || '{"loggedIn": false}');
    
    // Logout functionality for all logout links
    const logoutLinks = document.querySelectorAll('a[href="logout.php"]');
    
    if (logoutLinks) {
        logoutLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Clear local storage
                localStorage.removeItem('ceylonbuddyUser');
                
                // Redirect to index page
                window.location.href = 'index.html';
            });
        });
    }
    
    // Update UI based on authentication state
    updateAuthUI(user.loggedIn);
});

// Update UI elements based on authentication state
function updateAuthUI(isLoggedIn) {
    const loginLinks = document.querySelectorAll('.login-link');
    const logoutLinks = document.querySelectorAll('a[href="logout.php"]');
    const userNameElements = document.querySelectorAll('.user-name');
    
    if (isLoggedIn) {
        // Hide login links, show user info and logout links
        loginLinks?.forEach(el => el.style.display = 'none');
        logoutLinks?.forEach(el => el.style.display = 'inline-block');
        userNameElements?.forEach(el => {
            el.style.display = 'inline-block';
            // If we have the user's name in storage, show it
            const user = JSON.parse(localStorage.getItem('ceylonbuddyUser'));
            if (user && user.email) {
                el.innerHTML = `<i class="fa fa-user me-2"></i>Welcome, ${user.email.split('@')[0]}`;
            }
        });
    } else {
        // Show login links, hide user info and logout links
        loginLinks?.forEach(el => el.style.display = 'inline-block');
        logoutLinks?.forEach(el => el.style.display = 'none');
        userNameElements?.forEach(el => el.style.display = 'none');
    }
}
