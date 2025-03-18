// Client-side authentication check
(function() {
    // Check if user is logged in
    function isLoggedIn() {
        const user = localStorage.getItem('ceylonbuddyUser');
        if (!user) return false;
        
        try {
            const userData = JSON.parse(user);
            
            // Check session timeout (24 hours)
            const loginTime = new Date(userData.loginTime).getTime();
            const currentTime = new Date().getTime();
            const hoursPassed = (currentTime - loginTime) / (1000 * 60 * 60);
            
            return userData.loggedIn && hoursPassed < 24;
        } catch (error) {
            return false;
        }
    }
    
    // Redirect unauthorized users
    if (!isLoggedIn()) {
        // Only redirect if not already on login/index page
        const currentPath = window.location.pathname;
        if (!currentPath.includes('index.html') && 
            !currentPath.includes('login.html') && 
            !currentPath.includes('register.html')) {
            window.location.href = 'index.html';
        }
    }
})();
