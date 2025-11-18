// Retro GUI interactions
document.addEventListener('DOMContentLoaded', function() {
    initRetroGUI();
});

function initRetroGUI() {
    // Start button
    const startButton = document.querySelector('.start-button');
    const startMenu = document.querySelector('.start-menu');
    
    startButton.addEventListener('click', function(e) {
        e.stopPropagation();
        startMenu.classList.toggle('visible');
    });
    
    // Close start menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!startButton.contains(e.target) && !startMenu.contains(e.target)) {
            startMenu.classList.remove('visible');
        }
    });
    
    // Window dragging
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        const titlebar = window.querySelector('.window-titlebar');
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        
        titlebar.addEventListener('mousedown', function(e) {
            isDragging = true;
            initialX = e.clientX - window.offsetLeft;
            initialY = e.clientY - window.offsetTop;
            window.classList.add('active');
            
            // Bring window to front
            windows.forEach(w => {
                if (w !== window) w.style.zIndex = '100';
            });
            window.style.zIndex = '200';
        });
        
        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                
                window.style.left = currentX + 'px';
                window.style.top = currentY + 'px';
            }
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
    });
    
    // Window controls
    const closeButtons = document.querySelectorAll('.window-btn.close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const window = this.closest('.window');
            window.style.display = 'none';
        });
    });
    
    const minimizeButtons = document.querySelectorAll('.window-btn.minimize');
    minimizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const window = this.closest('.window');
            window.style.display = 'none';
        });
    });
    
    // Desktop icon selection
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    desktopIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            if (e.detail === 2) {
                // Double click - open window
                const existingWindow = document.querySelector('.window');
                if (existingWindow) {
                    existingWindow.style.display = 'flex';
                    existingWindow.classList.add('active');
                }
            } else {
                // Single click - select
                desktopIcons.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
    });
    
    // Content icon interactions
    const contentIcons = document.querySelectorAll('.content-icon');
    contentIcons.forEach(icon => {
        icon.addEventListener('dblclick', function() {
            alert('Opening ' + this.querySelector('.icon-label').textContent);
        });
    });
}

