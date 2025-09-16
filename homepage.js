// Banner data array
const banners = [
    { alt: 'Game Banner 1', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp' },
    { alt: 'Game Banner 2', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp' },
    { alt: 'Game Banner 3', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp' },
    { alt: 'Game Banner 4', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp' },
    { alt: 'Game Banner 5', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp' }
];

// Payment methods data array
const paymentMethods = [
    { name: 'QRIS', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg', fallbackGradient: 'from-red-500 to-blue-500' },
    { name: 'DANA', image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg', fallbackColor: 'bg-blue-600' },
    { name: 'GOPAY', image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg', fallbackColor: 'bg-green-500' },
    { name: 'SHOPEEPAY', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHj-wu5hTMSbYu_uFO2r_5xpvJoYYxgT0kQ&s', fallbackColor: 'bg-orange-500' }
];

// Game data array
const games = [
    { name: 'Free Fire', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Mobile Legends', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'PUBG Mobile', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F779%2F01JXF7Y4GEEBR4SREKM9TJPMNV.webp' },
    { name: 'Genshin Impact', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Clash of Clans', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Valorant', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Call of Duty', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Arena of Valor', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'League of Legends', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Roblox', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Honkai Impact', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' },
    { name: 'Steam Wallet', image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png' }
];

// News data array
const newsData = [
    {
        id: 1,
        title: '🔥 Event Spesial Double Diamond Free Fire!',
        excerpt: 'Dapatkan diamond gratis dengan top up minimal 100 diamond! Event terbatas sampai akhir bulan ini. Jangan sampai terlewat kesempatan emas ini!',
        category: 'promo',
        categoryText: 'PROMO',
        date: '2 jam yang lalu',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp',
        readTime: '2 min'
    },
    {
        id: 2,
        title: '🎮 Update Mobile Legends Patch Terbaru',
        excerpt: 'Hero baru Ixia telah hadir! Plus skin epic gratis untuk semua player. Update sekarang dan rasakan pengalaman gaming yang lebih seru!',
        category: 'update',
        categoryText: 'UPDATE',
        date: '5 jam yang lalu',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp',
        readTime: '3 min'
    },
    {
        id: 3,
        title: '⚡ Tips Pro Player PUBG Mobile Season 24',
        excerpt: 'Strategi terbaik untuk rank up lebih cepat di season baru. Dari weapon combo hingga rotasi map yang efektif untuk dominasi match!',
        category: 'tips',
        categoryText: 'TIPS',
        date: '1 hari yang lalu',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp',
        readTime: '5 min'
    },
    {
        id: 4,
        title: '🏆 Tournament Valorant Cup 2024',
        excerpt: 'Daftarkan tim kamu sekarang! Total hadiah 100 juta rupiah untuk juara. Registration dibuka sampai minggu depan!',
        category: 'event',
        categoryText: 'EVENT',
        date: '1 hari yang lalu',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp',
        readTime: '4 min'
    },
    {
        id: 5,
        title: '💎 Genshin Impact - Kazuha Banner Return!',
        excerpt: 'Kazuha kembali hadir dengan rate up! Plus event farming primogems gratis. Perfect timing untuk F2P players!',
        category: 'promo',
        categoryText: 'PROMO',
        date: '2 hari yang lalu',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp',
        readTime: '3 min'
    },
    {
        id: 6,
        title: '🚀 Cara Top Up Cepat Tanpa Ribet',
        excerpt: 'Guide lengkap top up game favorit dalam hitungan detik. Dari QRIS sampai e-wallet, semua ada disini!',
        category: 'tips',
        categoryText: 'TIPS',
        date: '3 hari yang lalu',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fbanner%2F891%2F01K4VF7SEF8QH2M1S98V84ME92.webp',
        readTime: '6 min'
    }
];

// Function to generate professional copyright section
function generateCopyright() {
    const container = document.getElementById('copyrightContainer');
    if (!container) {
        console.log('Copyright container not found!');
        return;
    }
    
    const currentYear = new Date().getFullYear();
    const foundingYear = 2020;
    const yearRange = foundingYear === currentYear ? currentYear : `${foundingYear}-${currentYear}`;
    
    // Calculate years of operation
    const yearsInOperation = currentYear - foundingYear + 1;
    
    container.innerHTML = `
        <div class="copyright-container">
            <div class="copyright-text">
                © <span class="copyright-year">${yearRange}</span> 
                <span class="copyright-brand">BUBBLE SHOP</span>
                <span class="copyright-separator">|</span>
                Semua hak cipta dilindungi
                <span class="copyright-separator">|</span>
                <span class="copyright-badge">Terpercaya ${yearsInOperation} Tahun</span>
            </div>
        </div>
    `;
    
    console.log(`Copyright generated for year ${currentYear}, ${yearsInOperation} years in operation`);
}

// Function to generate banner slides with skeleton loading
function generateBannerSlides() {
    const container = document.querySelector('.bannerSwiper .swiper-wrapper');
    
    banners.forEach((banner, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        // Start with skeleton
        slide.innerHTML = `
            <div class="relative aspect-[2/1] rounded-2xl overflow-hidden group">
                ${createSkeleton('banner')}
            </div>
        `;
        
        container.appendChild(slide);
        
        // Load actual image after delay
        setTimeout(() => {
            const img = new Image();
            img.onload = function() {
                slide.innerHTML = `
                    <div class="relative aspect-[2/1] rounded-2xl overflow-hidden group">
                        <img src="${banner.image}" alt="${banner.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 loading-fade-in">
                    </div>
                `;
            };
            img.onerror = function() {
                // Show error state
                slide.innerHTML = `
                    <div class="relative aspect-[2/1] rounded-2xl overflow-hidden group bg-slate-700 flex items-center justify-center">
                        <div class="text-center text-slate-400">
                            <i data-lucide="image-off" class="w-12 h-12 mx-auto mb-2"></i>
                            <p class="text-sm">Failed to load banner</p>
                        </div>
                    </div>
                `;
                // Re-initialize Lucide icons for the error icon
                lucide.createIcons();
            };
            img.src = banner.image;
        }, index * 200); // Stagger banner loading
    });
}

// Function to generate payment methods
function generatePaymentMethods() {
    const container = document.getElementById('paymentMethodsContainer');
    if (!container) {
        console.log('Main payment methods container not found!');
        return;
    }
    
    console.log('Generating main payment methods...');
    
    paymentMethods.forEach((payment, index) => {
        console.log(`Creating main payment method ${index + 1}: ${payment.name}`);
        
        const paymentDiv = document.createElement('div');
        paymentDiv.className = 'bg-white rounded-lg p-3 flex items-center justify-center hover:scale-105 transition-transform shadow-sm h-12';
        
        const fallbackClass = payment.fallbackGradient ? 
            `bg-gradient-to-r ${payment.fallbackGradient}` : 
            payment.fallbackColor;
        
        paymentDiv.innerHTML = `
            <img src="${payment.image}" alt="${payment.name}" class="h-12 w-auto object-contain" 
                 onerror="console.log('Main image failed to load: ${payment.name}'); this.style.display='none'; this.nextElementSibling.style.display='flex'" 
                 onload="console.log('Main image loaded successfully: ${payment.name}')">
            <div class="hidden w-full h-full items-center justify-center ${fallbackClass} text-white text-sm font-bold rounded">
                ${payment.name}
            </div>
        `;
        
        container.appendChild(paymentDiv);
    });
}

// Function to generate footer payment methods
function generateFooterPaymentMethods() {
    const container = document.getElementById('footerPaymentMethodsContainer');
    if (!container) {
        console.log('Footer payment methods container not found!');
        return;
    }
    
    console.log('Generating footer payment methods...');
    
    paymentMethods.forEach((payment, index) => {
        console.log(`Creating payment method ${index + 1}: ${payment.name}`);
        
        const paymentDiv = document.createElement('div');
        paymentDiv.className = 'bg-white rounded-lg p-2 flex items-center justify-center hover:scale-105 transition-transform shadow-sm h-10';
        
        const fallbackClass = payment.fallbackGradient ? 
            `bg-gradient-to-r ${payment.fallbackGradient}` : 
            payment.fallbackColor;
        
        paymentDiv.innerHTML = `
            <img src="${payment.image}" alt="${payment.name}" class="h-8 w-auto object-contain" 
                 onerror="console.log('Image failed to load: ${payment.name}'); this.style.display='none'; this.nextElementSibling.style.display='flex'" 
                 onload="console.log('Image loaded successfully: ${payment.name}')">
            <div class="hidden w-full h-full items-center justify-center ${fallbackClass} text-white text-xs font-bold rounded">
                ${payment.name}
            </div>
        `;
        
        container.appendChild(paymentDiv);
    });
}

// Function to create skeleton placeholder
function createSkeleton(type) {
    if (type === 'game-card') {
        return `
            <div class="game-card-skeleton">
                <div class="skeleton skeleton-image"></div>
                <div class="skeleton skeleton-title"></div>
            </div>
        `;
    } else if (type === 'banner') {
        return `
            <div class="banner-skeleton skeleton">
                <div class="skeleton-overlay"></div>
            </div>
        `;
    } else if (type === 'news-card') {
        return `
            <div class="news-card-skeleton">
                <div class="skeleton skeleton-news-image"></div>
                <div class="skeleton-news-content">
                    <div class="skeleton skeleton-news-title"></div>
                    <div class="skeleton skeleton-news-excerpt"></div>
                    <div class="skeleton-news-meta">
                        <div class="skeleton skeleton-news-category"></div>
                        <div class="skeleton skeleton-news-date"></div>
                    </div>
                </div>
            </div>
        `;
    }
    return '';
}

// Function to generate game cards with skeleton loading
function generateGameCards() {
    const container = document.getElementById('gameCardsContainer');
    
    // First, show skeleton loaders
    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card glass-dark rounded-xl transition-all duration-300 ripple group relative';
        gameCard.innerHTML = createSkeleton('game-card');
        container.appendChild(gameCard);
        
        // Load actual content after a slight delay to simulate loading
        setTimeout(() => {
            const img = new Image();
            img.onload = function() {
                gameCard.innerHTML = `
                    <div class="relative overflow-hidden aspect-square">
                        <img src="${game.image}" alt="${game.name}" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110 loading-fade-in">
                    </div>
                    <div class="sm:p-2 bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-sm border-t border-white/10 relative -mt-2 clip-path-slant">
                        <div class="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                        <p class="py-2 text-white transition-all duration-300 relative inline-block font-semibold text-xs sm:text-sm text-center w-full drop-shadow-sm leading-tight loading-fade-in">${game.name}</p>
                        <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 transition-all duration-400 group-hover:w-full rounded-sm shadow-sm shadow-purple-400/80"></div>
                    </div>
                `;
            };
            img.onerror = function() {
                // Show error state or fallback
                gameCard.innerHTML = `
                    <div class="relative overflow-hidden aspect-square bg-slate-700 flex items-center justify-center">
                        <i data-lucide="image-off" class="w-6 h-6 sm:w-8 sm:h-8 text-slate-500"></i>
                    </div>
                    <div class="p-3 sm:p-4 bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-sm border-t border-white/10 relative -mt-2 text-center">
                        <h3 class="text-white font-semibold text-xs sm:text-sm leading-tight">${game.name}</h3>
                    </div>
                `;
                // Re-initialize Lucide icons for the error icon
                lucide.createIcons();
            };
            img.src = game.image;
        }, index * 150); // Stagger loading for better visual effect
    });
}

// Function to generate news cards with skeleton loading
function generateNewsCards() {
    const container = document.getElementById('newsCardsContainer');
    if (!container) {
        console.log('News cards container not found!');
        return;
    }
    
    // Show only first 3 news for homepage
    const featuredNews = newsData.slice(0, 3);
    
    // First, show skeleton loaders
    featuredNews.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card glass-dark rounded-xl transition-all duration-300 ripple group relative';
        newsCard.innerHTML = createSkeleton('news-card');
        container.appendChild(newsCard);
        
        // Load actual content after a slight delay to simulate loading
        setTimeout(() => {
            const img = new Image();
            img.onload = function() {
                newsCard.innerHTML = `
                    <div class="news-card-image relative overflow-hidden aspect-video">
                        <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110 loading-fade-in">
                        <div class="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20">
                            📚 ${news.readTime}
                        </div>
                    </div>
                    <div class="p-3 lg:p-5 bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-sm border-t border-white/10 relative flex-1 flex flex-col">
                        <div class="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                        <h3 class="text-white transition-all duration-300 relative block font-semibold text-xs lg:text-lg mb-2 lg:mb-3 leading-tight hover:text-orange-300 hover:drop-shadow-sm loading-fade-in line-clamp-2">${news.title}</h3>
                        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 lg:mb-4 flex-1 line-clamp-2 lg:line-clamp-3 loading-fade-in">${news.excerpt}</p>
                        <div class="flex items-center justify-start text-xs text-slate-400 loading-fade-in">
                            <div class="flex items-center gap-1">
                                <i data-lucide="clock" class="w-3 h-3"></i>
                                <span class="text-xs">${news.date}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                // Re-initialize Lucide icons for the clock icon
                lucide.createIcons();
                
                // Add click event to navigate to full article
                newsCard.addEventListener('click', function() {
                    // Add click animation
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                        // Navigate to news detail page
                        window.location.href = `news-detail.html?id=${news.id}`;
                    }, 150);
                });
            };
            img.onerror = function() {
                // Show error state or fallback
                newsCard.innerHTML = `
                    <div class="relative overflow-hidden aspect-video bg-slate-700 flex items-center justify-center">
                        <i data-lucide="image-off" class="w-6 h-6 lg:w-12 lg:h-12 text-slate-500"></i>
                    </div>
                    <div class="p-3 lg:p-5 bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-sm border-t border-white/10 relative flex-1 flex flex-col">
                        <h3 class="text-white font-semibold text-xs lg:text-lg mb-2 lg:mb-3 leading-tight line-clamp-2">${news.title}</h3>
                        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 lg:mb-4 flex-1 line-clamp-2 lg:line-clamp-3">${news.excerpt}</p>
                        <div class="flex items-center justify-start text-xs text-slate-400">
                            <div class="flex items-center gap-1">
                                <i data-lucide="clock" class="w-3 h-3"></i>
                                <span class="text-xs">${news.date}</span>
                            </div>
                        </div>
                    </div>
                `;
                // Re-initialize Lucide icons for the error and clock icons
                lucide.createIcons();
            };
            img.src = news.image;
        }, index * 200); // Stagger loading for better visual effect
    });
}

// Initialize Swiper
function initializeSwiper() {
    const swiper = new Swiper('.bannerSwiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
                centeredSlides: true,
            },
            1024: {
                slidesPerView: 1.6,
                spaceBetween: 40,
                centeredSlides: true,
            },
            1280: {
                slidesPerView: 1.8,
                spaceBetween: 50,
                centeredSlides: true,
            },
        },
        on: {
            init: function() {
                // Smooth transition setup
                this.el.style.overflow = 'visible';
            }
        }
    });
}

// Add interactive search functionality
function initializeSearchFunctionality() {
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        input.addEventListener('focus', function() {
            // Smooth focus effect without scaling
            this.style.transform = 'translateY(-1px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = '';
        });
        
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.classList.add('text-purple-300');
            } else {
                this.classList.remove('text-purple-300');
            }
        });
    });
}

// Add click effects to game cards
function initializeGameCardInteractions() {
    document.addEventListener('click', function(e) {
        const gameCard = e.target.closest('.game-card');
        if (gameCard) {
            // Get game name from the card
            const gameTitleElement = gameCard.querySelector('.text-white.font-semibold');
            if (gameTitleElement) {
                const gameName = gameTitleElement.textContent.trim();
                
                // Add click animation
                gameCard.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    gameCard.style.transform = '';
                    // Navigate to detail page with the correct game name
                    window.location.href = `detail.html?game=${encodeURIComponent(gameName)}`;
                }, 150);
            }
        }
    });
}

// Smooth scroll for better UX
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Main initialization function
function initializeApp() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Generate all dynamic content first
    generateBannerSlides();
    generateGameCards();
    generateNewsCards();
    generatePaymentMethods();
    generateFooterPaymentMethods();
    generateCopyright();
    
    // Initialize interactive features
    initializeSwiper();
    initializeSearchFunctionality();
    initializeGameCardInteractions();
    initializeSmoothScroll();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);