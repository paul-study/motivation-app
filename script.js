// ===== QUOTES DATABASE =====
const quotesDatabase = [
    // Success Quotes
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "success" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "success" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "success" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "success" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "success" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "success" },
    
    // Motivation Quotes
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "motivation" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "motivation" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "motivation" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "motivation" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", category: "motivation" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "motivation" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", category: "motivation" },
    
    // Persistence Quotes
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett", category: "persistence" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", category: "persistence" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", category: "persistence" },
    { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "persistence" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison", category: "persistence" },
    { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas Edison", category: "persistence" },
    
    // Wisdom Quotes
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "wisdom" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "wisdom" },
    { text: "The mind is everything. What you think you become.", author: "Buddha", category: "wisdom" },
    { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix", category: "wisdom" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", category: "wisdom" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", category: "wisdom" },
    
    // Courage Quotes
    { text: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.", author: "Franklin D. Roosevelt", category: "courage" },
    { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt", category: "courage" },
    { text: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain", category: "courage" },
    { text: "Life shrinks or expands in proportion to one's courage.", author: "Anaïs Nin", category: "courage" },
    { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings", category: "courage" },
    
    // Dreams Quotes
    { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", category: "dreams" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan", category: "dreams" },
    { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey", category: "dreams" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "dreams" },
    { text: "A dream doesn't become reality through magic; it takes sweat, determination and hard work.", author: "Colin Powell", category: "dreams" },
    { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau", category: "dreams" },
    { text: "The future belongs to those who prepare for it today.", author: "Malcolm X", category: "dreams" },
    { text: "Dreams are the touchstones of our characters.", author: "Henry David Thoreau", category: "dreams" },
    
    // Leadership Quotes
    { text: "A leader is one who knows the way, goes the way, and shows the way.", author: "John C. Maxwell", category: "leadership" },
    { text: "Leadership is not about being in charge. It's about taking care of those in your charge.", author: "Simon Sinek", category: "leadership" },
    { text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.", author: "Ronald Reagan", category: "leadership" },
    { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt", category: "leadership" },
    { text: "Leadership is the capacity to translate vision into reality.", author: "Warren Bennis", category: "leadership" },
    
    // Growth Quotes
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", category: "growth" },
    { text: "Change is the end result of all true learning.", author: "Leo Buscaglia", category: "growth" },
    { text: "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.", author: "Mandy Hale", category: "growth" },
    { text: "We cannot become what we want by remaining what we are.", author: "Max DePree", category: "growth" },
    { text: "If you want something you've never had, you must be willing to do something you've never done.", author: "Thomas Jefferson", category: "growth" },
    { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll", category: "growth" },
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Display initial quote
    getNewQuote();
    
    // Load saved tasks
    loadTasks();
    
    // Load favorites
    loadFavorites();
    
    // Load timer stats
    loadTimerStats();
    
    // Create background particles
    createParticles();
    
    // Initialize animations CSS (one time)
    initializeAnimations();
    
    // Add smooth scroll behavior to navigation links
    setupNavigation();
    
    // Allow Enter key to add tasks
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Allow Enter key for search
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchQuotes();
        }
    });
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
}

// ===== KEYBOARD SHORTCUTS =====
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Don't trigger shortcuts when typing in input fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        // Ctrl/Cmd + N: New Quote
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            getNewQuote();
            showNotification('New quote loaded! (Ctrl/Cmd+N)', 'info');
        }
        
        // Ctrl/Cmd + F: Focus on search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
            showNotification('Search quotes (Ctrl/Cmd+F)', 'info');
        }
        
        // Ctrl/Cmd + T: Focus on task input
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            document.getElementById('taskInput').focus();
            showNotification('Add new task (Ctrl/Cmd+T)', 'info');
        }
        
        // Space: Start/Pause timer
        if (e.key === ' ') {
            e.preventDefault();
            timerRunning ? pauseTimer() : startTimer();
        }
        
        // R: Reset timer
        if (e.key === 'r' || e.key === 'R') {
            e.preventDefault();
            resetTimer();
        }
        
        // L: Toggle favorite on current quote
        if (e.key === 'l' || e.key === 'L') {
            e.preventDefault();
            toggleFavoriteQuote();
        }
        
        // ?: Show keyboard shortcuts help
        if (e.key === '?') {
            e.preventDefault();
            showKeyboardShortcutsHelp();
        }
    });
}

function showKeyboardShortcutsHelp() {
    const helpMessage = `
        <div style="text-align: left; padding: 1rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary);">⌨️ Keyboard Shortcuts</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 0.5rem;"><strong>Ctrl/Cmd+N</strong> - New quote</li>
                <li style="margin-bottom: 0.5rem;"><strong>Ctrl/Cmd+F</strong> - Search quotes</li>
                <li style="margin-bottom: 0.5rem;"><strong>Ctrl/Cmd+T</strong> - Add task</li>
                <li style="margin-bottom: 0.5rem;"><strong>Space</strong> - Start/Pause timer</li>
                <li style="margin-bottom: 0.5rem;"><strong>R</strong> - Reset timer</li>
                <li style="margin-bottom: 0.5rem;"><strong>L</strong> - Toggle favorite quote</li>
                <li style="margin-bottom: 0.5rem;"><strong>?</strong> - Show this help</li>
            </ul>
        </div>
    `;
    
    const helpModal = document.createElement('div');
    helpModal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-tertiary);
        border: 2px solid var(--accent-primary);
        border-radius: 20px;
        padding: 2rem;
        z-index: 10001;
        box-shadow: var(--shadow-lg);
        max-width: 500px;
    `;
    helpModal.innerHTML = helpMessage;
    
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10000;
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(helpModal);
    
    const closeModal = () => {
        if (overlay && overlay.parentNode) {
            overlay.remove();
        }
        if (helpModal && helpModal.parentNode) {
            helpModal.remove();
        }
    };
    
    overlay.addEventListener('click', closeModal);
    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) closeModal();
    });
    
    // Close with Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Initialize all animations once during page load
function initializeAnimations() {
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            @keyframes confettiAnim {
                0% {
                    transform: translate(-50%, -50%) translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(
                        calc(-50% + var(--tx)),
                        calc(-50% + var(--ty))
                    ) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== BACKGROUND PARTICLES =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add CSS animation for particles
    if (!document.getElementById('particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0.2;
                }
                25% {
                    transform: translateY(-100px) translateX(50px);
                    opacity: 0.5;
                }
                50% {
                    transform: translateY(-200px) translateX(-50px);
                    opacity: 0.8;
                }
                75% {
                    transform: translateY(-100px) translateX(-100px);
                    opacity: 0.5;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== NAVIGATION =====
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== QUOTES FUNCTIONALITY =====
function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotesDatabase.length);
    currentQuote = quotesDatabase[randomIndex];
    
    const quoteText = document.getElementById('mainQuote');
    const quoteAuthor = document.getElementById('mainAuthor');
    
    // Add fade animation
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = currentQuote.text;
        quoteAuthor.textContent = `- ${currentQuote.author}`;
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
        
        // Update favorite button state
        updateFavoriteButton();
    }, 300);
}

function searchQuotes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (!searchTerm.trim()) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Please enter a search term</p>';
        return;
    }
    
    const results = quotesDatabase.filter(quote => 
        quote.text.toLowerCase().includes(searchTerm) || 
        quote.author.toLowerCase().includes(searchTerm) ||
        quote.category.toLowerCase().includes(searchTerm)
    );
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No quotes found. Try a different search term.</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(quote => `
        <div class="search-result-item">
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem; font-style: italic;">"${quote.text}"</p>
            <p style="color: var(--accent-primary); font-weight: 600;">- ${quote.author}</p>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
                Category: ${quote.category.charAt(0).toUpperCase() + quote.category.slice(1)}
            </p>
        </div>
    `).join('');
}

function filterQuotes(category) {
    const filteredQuotes = quotesDatabase.filter(quote => quote.category === category);
    const filteredContainer = document.getElementById('filteredQuotes');
    
    filteredContainer.innerHTML = `
        <h3 style="text-align: center; color: var(--accent-primary); margin-bottom: 1.5rem; font-size: 1.8rem;">
            ${category.charAt(0).toUpperCase() + category.slice(1)} Quotes
        </h3>
        ${filteredQuotes.map(quote => `
            <div class="quote-card">
                <p style="font-size: 1.3rem; margin-bottom: 1rem; font-style: italic;">"${quote.text}"</p>
                <p style="color: var(--accent-primary); font-weight: 600; text-align: right;">- ${quote.author}</p>
            </div>
        `).join('')}
    `;
    
    // Scroll to filtered results
    filteredContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== TASKS FUNCTIONALITY =====
let tasks = [];
let completedTasks = [];

// ===== TIMER FUNCTIONALITY =====
let timerInterval = null;
let timerSeconds = 25 * 60; // Default 25 minutes
let timerDuration = 25 * 60;
let timerRunning = false;
let timerStats = {
    sessionsCompleted: 0,
    totalFocusTime: 0,
    dailyStreak: 0,
    lastActiveDate: null
};

// Settings
let soundEnabled = true;
let audioContext = null; // Reusable audio context

// ===== FAVORITES FUNCTIONALITY =====
let currentQuote = null;
let favoriteQuotes = [];

function loadTasks() {
    // Load from localStorage if available
    const savedTasks = localStorage.getItem('motivationAppTasks');
    const savedCompleted = localStorage.getItem('motivationAppCompleted');
    
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    if (savedCompleted) {
        completedTasks = JSON.parse(savedCompleted);
    }
    
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('motivationAppTasks', JSON.stringify(tasks));
    localStorage.setItem('motivationAppCompleted', JSON.stringify(completedTasks));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (!taskText) {
        taskInput.style.borderColor = 'var(--danger)';
        setTimeout(() => {
            taskInput.style.borderColor = 'var(--border-color)';
        }, 1000);
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    tasks.push(task);
    taskInput.value = '';
    
    saveTasks();
    renderTasks();
}

function toggleTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
        const task = tasks.splice(taskIndex, 1)[0];
        task.completed = true;
        completedTasks.unshift(task);
        
        saveTasks();
        renderTasks();
        
        // Show celebration animation
        showCelebration();
    }
}

function deleteTask(taskId, isCompleted = false) {
    if (isCompleted) {
        completedTasks = completedTasks.filter(t => t.id !== taskId);
    } else {
        tasks = tasks.filter(t => t.id !== taskId);
    }
    
    saveTasks();
    renderTasks();
}

function restoreTask(taskId) {
    const taskIndex = completedTasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
        const task = completedTasks.splice(taskIndex, 1)[0];
        task.completed = false;
        tasks.push(task);
        
        saveTasks();
        renderTasks();
    }
}

// ===== FAVORITES FUNCTIONALITY =====
function loadFavorites() {
    const saved = localStorage.getItem('motivationAppFavorites');
    if (saved) {
        favoriteQuotes = JSON.parse(saved);
    }
}

function saveFavorites() {
    localStorage.setItem('motivationAppFavorites', JSON.stringify(favoriteQuotes));
}

function toggleFavoriteQuote() {
    if (!currentQuote) return;
    
    const index = favoriteQuotes.findIndex(q => 
        q.text === currentQuote.text && q.author === currentQuote.author
    );
    
    if (index !== -1) {
        favoriteQuotes.splice(index, 1);
        showNotification('Removed from favorites', 'info');
    } else {
        favoriteQuotes.push(currentQuote);
        showNotification('Added to favorites! ❤️', 'success');
    }
    
    saveFavorites();
    updateFavoriteButton();
}

function updateFavoriteButton() {
    if (!currentQuote) return;
    
    const isFavorite = favoriteQuotes.some(q => 
        q.text === currentQuote.text && q.author === currentQuote.author
    );
    
    const icon = document.getElementById('favoriteIcon');
    if (icon) {
        icon.textContent = isFavorite ? '❤️' : '🤍';
    }
}

function showFavoriteQuotes() {
    const filteredContainer = document.getElementById('filteredQuotes');
    
    if (favoriteQuotes.length === 0) {
        filteredContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.5rem; margin-bottom: 1rem;">No favorite quotes yet!</p>
                <p>Click the heart button on quotes you love to save them here.</p>
            </div>
        `;
        filteredContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }
    
    filteredContainer.innerHTML = `
        <h3 style="text-align: center; color: var(--accent-primary); margin-bottom: 1.5rem; font-size: 1.8rem;">
            ❤️ Your Favorite Quotes
        </h3>
        ${favoriteQuotes.map(quote => `
            <div class="quote-card">
                <p style="font-size: 1.3rem; margin-bottom: 1rem; font-style: italic;">"${quote.text}"</p>
                <p style="color: var(--accent-primary); font-weight: 600; text-align: right;">- ${quote.author}</p>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem; text-align: right;">
                    ${quote.category.charAt(0).toUpperCase() + quote.category.slice(1)}
                </p>
            </div>
        `).join('')}
    `;
    
    filteredContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== TIMER FUNCTIONALITY =====
function loadTimerStats() {
    const saved = localStorage.getItem('motivationAppTimerStats');
    if (saved) {
        timerStats = JSON.parse(saved);
        
        // Check if it's a new day
        const today = new Date().toDateString();
        if (timerStats.lastActiveDate !== today) {
            // Reset daily stats but maintain streak
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (timerStats.lastActiveDate === yesterday.toDateString()) {
                // Continue streak
                timerStats.dailyStreak++;
            } else if (timerStats.lastActiveDate !== null) {
                // Streak broken
                timerStats.dailyStreak = 0;
            }
            
            timerStats.sessionsCompleted = 0;
            timerStats.totalFocusTime = 0;
        }
    }
    
    // Load sound preference
    const soundPref = localStorage.getItem('motivationAppSoundEnabled');
    if (soundPref !== null) {
        soundEnabled = soundPref === 'true';
        document.getElementById('soundToggle').checked = soundEnabled;
    }
    
    updateTimerStatsDisplay();
}

function saveTimerStats() {
    timerStats.lastActiveDate = new Date().toDateString();
    localStorage.setItem('motivationAppTimerStats', JSON.stringify(timerStats));
    updateTimerStatsDisplay();
}

function updateTimerStatsDisplay() {
    document.getElementById('sessionsCompleted').textContent = timerStats.sessionsCompleted;
    document.getElementById('totalFocusTime').textContent = timerStats.totalFocusTime;
    document.getElementById('dailyStreak').textContent = timerStats.dailyStreak;
}

function setTimerPreset(minutes) {
    if (timerRunning) {
        pauseTimer();
    }
    timerSeconds = minutes * 60;
    timerDuration = minutes * 60;
    updateTimerDisplay();
}

function startTimer() {
    if (timerRunning) return;
    
    timerRunning = true;
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'inline-flex';
    
    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
        } else {
            // Timer completed
            completeTimerSession();
        }
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('startBtn').style.display = 'inline-flex';
    document.getElementById('pauseBtn').style.display = 'none';
}

function resetTimer() {
    pauseTimer();
    timerSeconds = timerDuration;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update progress circle
    const progress = ((timerDuration - timerSeconds) / timerDuration) * 565.48; // 2 * PI * 90
    const progressBar = document.getElementById('timerProgressBar');
    if (progressBar) {
        progressBar.style.strokeDashoffset = 565.48 - progress;
    }
}

function completeTimerSession() {
    pauseTimer();
    
    // Update stats
    const minutesCompleted = Math.floor(timerDuration / 60);
    timerStats.sessionsCompleted++;
    timerStats.totalFocusTime += minutesCompleted;
    saveTimerStats();
    
    // Play sound if enabled
    if (soundEnabled) {
        playCompletionSound();
    }
    
    // Show celebration
    showNotification(`🎉 Focus session complete! You focused for ${minutesCompleted} minutes!`, 'success');
    showCelebration();
    
    // Reset timer
    timerSeconds = timerDuration;
    updateTimerDisplay();
}

// ===== SOUND FUNCTIONALITY =====
function toggleSound() {
    soundEnabled = document.getElementById('soundToggle').checked;
    localStorage.setItem('motivationAppSoundEnabled', soundEnabled);
    showNotification(soundEnabled ? '🔔 Sound enabled' : '🔕 Sound disabled', 'info');
}

function playCompletionSound() {
    // Create a simple completion sound using Web Audio API
    try {
        // Initialize audio context if not already created
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Create oscillators for a pleasant notification sound
        const playTone = (frequency, duration, delay = 0) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            }, delay);
        };
        
        // Play a pleasant three-tone notification
        playTone(523.25, 0.15, 0);      // C5
        playTone(659.25, 0.15, 150);    // E5
        playTone(783.99, 0.3, 300);     // G5
    } catch (e) {
        console.log('Audio not available:', e);
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : type === 'info' ? 'var(--accent-primary)' : 'var(--warning)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

// Add notification animations
if (!document.getElementById('notification-animations')) {
    const style = document.createElement('style');
    style.id = 'notification-animations';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== UPDATE TASK STATS =====
function updateTaskStats() {
    const totalActive = tasks.length;
    const totalCompleted = completedTasks.length;
    const total = totalActive + totalCompleted;
    const rate = total > 0 ? Math.round((totalCompleted / total) * 100) : 0;
    
    document.getElementById('totalTasksCount').textContent = totalActive;
    document.getElementById('completedTasksCount').textContent = totalCompleted;
    document.getElementById('completionRate').textContent = rate + '%';
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');
    
    // Update stats
    updateTaskStats();
    
    // Render active tasks
    if (tasks.length === 0) {
        taskList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No active tasks. Add one above!</p>';
    } else {
        taskList.innerHTML = tasks.map(task => `
            <li class="task-item" data-id="${task.id}">
                <div class="task-content">
                    <input type="checkbox" class="task-checkbox" onclick="toggleTask(${task.id})" />
                    <span class="task-text">${task.text}</span>
                </div>
                <div class="task-actions">
                    <button class="task-btn delete-btn" onclick="deleteTask(${task.id})" title="Delete">🗑️</button>
                </div>
            </li>
        `).join('');
    }
    
    // Render completed tasks
    if (completedTasks.length === 0) {
        completedList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No completed tasks yet!</p>';
    } else {
        completedList.innerHTML = completedTasks.map(task => `
            <li class="task-item completed" data-id="${task.id}">
                <div class="task-content">
                    <span class="task-text" style="text-decoration: line-through; opacity: 0.7;">${task.text}</span>
                </div>
                <div class="task-actions">
                    <button class="task-btn" onclick="restoreTask(${task.id})" title="Restore">↩️</button>
                    <button class="task-btn delete-btn" onclick="deleteTask(${task.id}, true)" title="Delete">🗑️</button>
                </div>
            </li>
        `).join('');
    }
}

function showCelebration() {
    // Create celebration confetti effect
    const colors = ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const tx = Math.random() * 400 - 200;
        const ty = Math.random() * 400 - 200;
        
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            --tx: ${tx}px;
            --ty: ${ty}px;
            animation: confettiAnim ${Math.random() * 2 + 1}s ease-out forwards;
            z-index: 9999;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// ===== UTILITY FUNCTIONS =====
console.log('🚀 MotivateMe App Loaded Successfully!');
console.log('✨ Total Quotes Available:', quotesDatabase.length);
