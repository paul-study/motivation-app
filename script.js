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
    
    // Create background particles
    createParticles();
    
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
    const quote = quotesDatabase[randomIndex];
    
    const quoteText = document.getElementById('mainQuote');
    const quoteAuthor = document.getElementById('mainAuthor');
    
    // Add fade animation
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `- ${quote.author}`;
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
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

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');
    
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
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            animation: confetti ${Math.random() * 2 + 1}s ease-out forwards;
            z-index: 9999;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
    
    // Add confetti animation if not exists
    if (!document.getElementById('confetti-animation')) {
        const style = document.createElement('style');
        style.id = 'confetti-animation';
        style.textContent = `
            @keyframes confetti {
                0% {
                    transform: translate(-50%, -50%) translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(
                        calc(-50% + ${Math.random() * 400 - 200}px),
                        calc(-50% + ${Math.random() * 400 - 200}px)
                    ) rotate(${Math.random() * 720}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== UTILITY FUNCTIONS =====
// Add smooth transitions for all elements
document.querySelectorAll('*').forEach(el => {
    el.style.transition = el.style.transition || 'all 0.3s ease';
});

console.log('🚀 MotivateMe App Loaded Successfully!');
console.log('✨ Total Quotes Available:', quotesDatabase.length);
