// Chart initialization
document.addEventListener('DOMContentLoaded', function() {
    initChart();
    initNavigation();
    initInteractions();
});

// Initialize revenue chart
function initChart() {
    const canvas = document.getElementById('revenueChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth;
    const height = 300;
    canvas.width = width;
    canvas.height = height;
    
    // Chart data
    const data = [
        { month: 'Jan', value: 32000 },
        { month: 'Feb', value: 35000 },
        { month: 'Mar', value: 38000 },
        { month: 'Apr', value: 42000 },
        { month: 'May', value: 41000 },
        { month: 'Jun', value: 45231 }
    ];
    
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue;
    
    // Draw grid
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
    }
    
    // Draw line
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    
    data.forEach((point, index) => {
        const x = padding.left + (chartWidth / (data.length - 1)) * index;
        const y = padding.top + chartHeight - ((point.value - minValue) / range) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    
    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.01)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(padding.left, height - padding.bottom);
    
    data.forEach((point, index) => {
        const x = padding.left + (chartWidth / (data.length - 1)) * index;
        const y = padding.top + chartHeight - ((point.value - minValue) / range) * chartHeight;
        ctx.lineTo(x, y);
    });
    
    ctx.lineTo(width - padding.right, height - padding.bottom);
    ctx.closePath();
    ctx.fill();
    
    // Draw points
    ctx.fillStyle = '#6366f1';
    data.forEach((point, index) => {
        const x = padding.left + (chartWidth / (data.length - 1)) * index;
        const y = padding.top + chartHeight - ((point.value - minValue) / range) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
        glowGradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
        glowGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#6366f1';
    });
    
    // Draw labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    data.forEach((point, index) => {
        const x = padding.left + (chartWidth / (data.length - 1)) * index;
        ctx.fillText(point.month, x, height - padding.bottom + 10);
    });
    
    // Draw value labels
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = 0; i <= 5; i++) {
        const value = minValue + (range / 5) * (5 - i);
        const y = padding.top + (chartHeight / 5) * i;
        ctx.fillText(formatCurrency(value), padding.left - 10, y);
    }
}

function formatCurrency(value) {
    return '$' + Math.round(value / 1000) + 'k';
}

// Navigation handling
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update page title based on section
            const section = this.getAttribute('data-section');
            const pageTitle = document.querySelector('.page-title');
            if (pageTitle) {
                const titles = {
                    dashboard: 'Dashboard',
                    projects: 'Projects',
                    analytics: 'Analytics',
                    settings: 'Settings'
                };
                pageTitle.textContent = titles[section] || 'Dashboard';
            }
        });
    });
}

// Interactive elements
function initInteractions() {
    // Quick action buttons
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            console.log(`Action clicked: ${action}`);
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(99, 102, 241, 0.3);
                width: 0;
                height: 0;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Stat cards animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add CSS animation for ripple
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: translate(-50%, -50%) scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Handle window resize for chart
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initChart();
    }, 250);
});

