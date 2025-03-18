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
    // Clear localStorage
    localStorage.removeItem('ceylonbuddyUser');
    
    // Redirect to index page
    window.location.href = '/Ceylon-buddy/index.html';
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

// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const userInfo = JSON.parse(localStorage.getItem('ceylonbuddyUser'));
    
    // If login-related elements exist on the page
    const userNameElement = document.querySelector('.user-name');
    const logoutLinkElement = document.querySelector('.logout-link');
    const loginLinks = document.querySelectorAll('.login-link');
    
    if (userInfo && userInfo.loggedIn) {
        // Update UI for logged-in user
        if (userNameElement) {
            userNameElement.textContent = 'Welcome, ' + userInfo.email;
            userNameElement.style.display = 'inline-block';
        }
        if (logoutLinkElement) {
            logoutLinkElement.style.display = 'inline-block';
        }
        if (loginLinks.length > 0) {
            loginLinks.forEach(link => {
                link.style.display = 'none';
            });
        }
    }
});

// Add event listener to logout links
document.addEventListener('DOMContentLoaded', function() {
    const logoutLinks = document.querySelectorAll('a[href="logout.php"]');
    if (logoutLinks.length > 0) {
        logoutLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Call server-side logout first
                fetch('logout.php')
                    .then(() => {
                        // Then handle client-side logout
                        logout();
                    })
                    .catch(error => {
                        console.error('Logout error:', error);
                        // Still attempt client-side logout even if server request fails
                        logout();
                    });
            });
        });
    }
});
