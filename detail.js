// Game Detail Data Arrays
const gameDetails = {
    'Free Fire': {
        id: 'free-fire',
        name: 'Free Fire',
        description: 'Battle royale game terpopuler dengan aksi 10 menit yang intens! Survive jadi yang terakhir dengan strategi dan skill terbaik. Grafik HD dan gameplay yang smooth bikin pengalaman gaming makin epic! 🔥',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png',
        rating: 4.5,
        players: '100M+',
        category: 'Battle Royale',
        developer: 'Garena',
        badges: ['🔥 Trending', '⚡ Fast Match', '🏆 Esports'],
        inputFields: [
            {
                id: 'player_id',
                label: 'Player ID',
                placeholder: 'Masukkan Player ID kamu',
                help: 'Temukan Player ID di bagian profil game'
            }
        ],
        packages: [
            { id: 1, diamonds: 70, bonus: '+5 Bonus', price: 10000, originalPrice: 12000, discount: '17%', popular: false },
            { id: 2, diamonds: 140, bonus: '+10 Bonus', price: 20000, originalPrice: 25000, discount: '20%', popular: false },
            { id: 3, diamonds: 355, bonus: '+30 Bonus', price: 50000, originalPrice: 65000, discount: '23%', popular: true },
            { id: 4, diamonds: 720, bonus: '+70 Bonus', price: 100000, originalPrice: 130000, discount: '23%', popular: false },
            { id: 5, diamonds: 1450, bonus: '+150 Bonus', price: 200000, originalPrice: 260000, discount: '23%', popular: false },
            { id: 6, diamonds: 2180, bonus: '+230 Bonus', price: 300000, originalPrice: 390000, discount: '23%', popular: false }
        ]
    },
    'Mobile Legends': {
        id: 'mobile-legends',
        name: 'Mobile Legends: Bang Bang',
        description: 'MOBA game terfavorit dengan pertarungan 5v5 yang epic! Pilih hero favoritmu dan dominasi Land of Dawn. Dengan lebih dari 100 hero unik, strategi tanpa batas! Join ranked dan naik ke Mythical Glory! 🏰⚔️',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png',
        rating: 4.3,
        players: '50M+',
        category: 'MOBA',
        developer: 'Moonton',
        badges: ['👑 Popular', '🎯 Strategy', '🌟 Esports'],
        inputFields: [
            {
                id: 'user_id',
                label: 'User ID',
                placeholder: 'Masukkan User ID kamu',
                help: 'User ID bisa ditemukan di profile game'
            },
            {
                id: 'zone_id',
                label: 'Zone ID',
                placeholder: 'Masukkan Zone ID kamu',
                help: 'Zone ID berada di sebelah User ID dengan format (XXXX)'
            }
        ],
        packages: [
            { id: 1, diamonds: 86, bonus: '+0 Bonus', price: 15000, originalPrice: 18000, discount: '17%', popular: false },
            { id: 2, diamonds: 172, bonus: '+0 Bonus', price: 30000, originalPrice: 36000, discount: '17%', popular: false },
            { id: 3, diamonds: 344, bonus: '+32 Bonus', price: 60000, originalPrice: 72000, discount: '17%', popular: true },
            { id: 4, diamonds: 706, bonus: '+74 Bonus', price: 120000, originalPrice: 144000, discount: '17%', popular: false },
            { id: 5, diamonds: 1412, bonus: '+148 Bonus', price: 240000, originalPrice: 288000, discount: '17%', popular: false },
            { id: 6, diamonds: 2195, bonus: '+244 Bonus', price: 370000, originalPrice: 444000, discount: '17%', popular: false }
        ]
    },
    'PUBG Mobile': {
        id: 'pubg-mobile',
        name: 'PUBG Mobile',
        description: 'Battle royale realistis dengan grafik console-quality di mobile! Drop ke Erangel, Sanhok, atau Livik dan jadilah Last Man Standing. Senjata real-world dan gameplay tactical yang bikin adrenalin pump! 🪂🎯',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F779%2F01JXF7Y4GEEBR4SREKM9TJPMNV.webp',
        rating: 4.4,
        players: '75M+',
        category: 'Battle Royale',
        developer: 'Tencent Games',
        badges: ['🎮 Realistic', '🌍 Global', '📱 Mobile Optimized'],
        inputFields: [
            {
                id: 'character_id',
                label: 'Character ID',
                placeholder: 'Masukkan Character ID kamu',
                help: 'Character ID bisa dilihat di bagian profile character'
            }
        ],
        packages: [
            { id: 1, uc: 60, bonus: '+0 Bonus', price: 15000, originalPrice: 18000, discount: '17%', popular: false },
            { id: 2, uc: 125, bonus: '+0 Bonus', price: 30000, originalPrice: 36000, discount: '17%', popular: false },
            { id: 3, uc: 325, bonus: '+25 Bonus', price: 75000, originalPrice: 90000, discount: '17%', popular: true },
            { id: 4, uc: 660, bonus: '+60 Bonus', price: 150000, originalPrice: 180000, discount: '17%', popular: false },
            { id: 5, uc: 1800, bonus: '+200 Bonus', price: 400000, originalPrice: 480000, discount: '17%', popular: false },
            { id: 6, uc: 3850, bonus: '+450 Bonus', price: 800000, originalPrice: 960000, discount: '17%', popular: false }
        ]
    },
    'Genshin Impact': {
        id: 'genshin-impact',
        name: 'Genshin Impact',
        description: 'Open-world action RPG dengan dunia Teyvat yang breathtaking! Jelajahi 7 negara, kumpulkan karakter 5-star, dan rasakan pertarungan elemental yang epic. Grafik anime-style yang stunning dan soundtrack yang memorable! ✨🗡️',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png',
        rating: 4.6,
        players: '30M+',
        category: 'Action RPG',
        developer: 'miHoYo',
        badges: ['🌟 Premium', '🎨 Anime Style', '🌍 Open World'],
        inputFields: [
            {
                id: 'uid',
                label: 'UID',
                placeholder: 'Masukkan UID kamu',
                help: 'UID bisa ditemukan di menu Paimon > Settings'
            },
            {
                id: 'server',
                label: 'Server',
                type: 'select',
                options: [
                    { value: 'asia', label: 'Asia' },
                    { value: 'america', label: 'America' },
                    { value: 'europe', label: 'Europe' },
                    { value: 'sar', label: 'TW/HK/MO' }
                ],
                help: 'Pilih server sesuai dengan akun game kamu'
            }
        ],
        packages: [
            { id: 1, genesis: 60, bonus: '+0 Bonus', price: 15000, originalPrice: 16000, discount: '6%', popular: false },
            { id: 2, genesis: 300, bonus: '+30 Bonus', price: 75000, originalPrice: 80000, discount: '6%', popular: false },
            { id: 3, genesis: 980, bonus: '+110 Bonus', price: 250000, originalPrice: 265000, discount: '6%', popular: true },
            { id: 4, genesis: 1980, bonus: '+260 Bonus', price: 500000, originalPrice: 530000, discount: '6%', popular: false },
            { id: 5, genesis: 3280, bonus: '+600 Bonus', price: 800000, originalPrice: 850000, discount: '6%', popular: false },
            { id: 6, genesis: 6480, bonus: '+1600 Bonus', price: 1600000, originalPrice: 1700000, discount: '6%', popular: false }
        ]
    },
    'Valorant': {
        id: 'valorant',
        name: 'Valorant',
        description: 'FPS tactical shooter yang butuh skill dan strategi tinggi! 5v5 competitive dengan agent abilities yang unik. Aim precision meets strategy dalam setiap round. Naik rank dari Iron sampai Radiant! 🎯🔫',
        image: 'https://assets.rrqtopup.com/live%2Fasset%2Fgame%2F563%2F01JPM9WDFHAVGMRX83AMM5EPVJ.png',
        rating: 4.2,
        players: '25M+',
        category: 'FPS',
        developer: 'Riot Games',
        badges: ['🎯 Competitive', '⚡ Tactical', '🏆 Esports'],
        inputFields: [
            {
                id: 'riot_id',
                label: 'Riot ID',
                placeholder: 'Username#TAG',
                help: 'Format: Username#TAG (contoh: Player#1234)'
            }
        ],
        packages: [
            { id: 1, vp: 525, bonus: '+0 Bonus', price: 50000, originalPrice: 55000, discount: '9%', popular: false },
            { id: 2, vp: 1075, bonus: '+0 Bonus', price: 100000, originalPrice: 110000, discount: '9%', popular: false },
            { id: 3, vp: 2200, bonus: '+150 Bonus', price: 200000, originalPrice: 220000, discount: '9%', popular: true },
            { id: 4, vp: 3650, bonus: '+350 Bonus', price: 330000, originalPrice: 365000, discount: '10%', popular: false },
            { id: 5, vp: 5350, bonus: '+600 Bonus', price: 480000, originalPrice: 535000, discount: '10%', popular: false },
            { id: 6, vp: 11000, bonus: '+1500 Bonus', price: 1000000, originalPrice: 1100000, discount: '9%', popular: false }
        ]
    }
};

// Payment methods for order summary
const paymentMethods = [
    { id: 'dana', name: 'DANA', fee: 0, icon: 'wallet' },
    { id: 'gopay', name: 'GoPay', fee: 0, icon: 'smartphone' },
    { id: 'ovo', name: 'OVO', fee: 1500, icon: 'credit-card' },
    { id: 'qris', name: 'QRIS', fee: 0, icon: 'qr-code' },
    { id: 'bank', name: 'Transfer Bank', fee: 2500, icon: 'building-2' }
];

// Footer payment methods data
const footerPaymentMethods = [
    { name: 'QRIS', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg', fallbackGradient: 'from-red-500 to-blue-500' },
    { name: 'DANA', image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg', fallbackColor: 'bg-blue-600' },
    { name: 'GOPAY', image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg', fallbackColor: 'bg-green-500' },
    { name: 'SHOPEEPAY', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHj-wu5hTMSbYu_uFO2r_5xpvJoYYxgT0kQ&s', fallbackColor: 'bg-orange-500' }
];

// Global state management
let currentGame = null;
let selectedPackage = null;
let selectedPayment = null;
let formData = {};

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatNumber(number) {
    return new Intl.NumberFormat('id-ID').format(number);
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Generate star rating HTML based on numeric rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="inline-block text-yellow-400">⭐</span>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<span class="relative inline-block"><span class="absolute top-0 left-0 w-1/2 overflow-hidden text-yellow-400">⭐</span><span class="text-slate-500 opacity-40">☆</span></span>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="inline-block text-slate-500 opacity-40">☆</span>';
    }
    
    return starsHTML;
}

// Game detail header generation
function generateGameDetailHeader() {
    const container = document.getElementById('gameDetailHeader');
    if (!container || !currentGame) return;

    const game = gameDetails[currentGame];
    const starsHTML = generateStarRating(game.rating);

    container.innerHTML = `
        <div class="game-detail-header">
            <div class="game-detail-image">
                <img src="${game.image}" alt="${game.name}" 
                     onerror="this.src='https://via.placeholder.com/300x300/1e293b/64748b?text=Game+Image'"
                     class="loading-fade-in">
            </div>
            <div class="game-detail-info">
                <h1 class="loading-fade-in">${game.name}</h1>
                <p class="game-description loading-fade-in">${game.description}</p>
                
                <div class="game-stats loading-fade-in">
                    <div class="stat-item">
                        <span class="stat-value">${game.rating}</span>
                        <span class="stat-label">Rating</span>
                        <div class="flex items-center justify-center gap-0.5 mt-1 text-sm md:text-base">${starsHTML}</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${game.players}</span>
                        <span class="stat-label">Players</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${game.category}</span>
                        <span class="stat-label">Genre</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${game.developer}</span>
                        <span class="stat-label">Developer</span>
                    </div>
                </div>

                <div class="game-badges loading-fade-in">
                    ${game.badges.map(badge => `<span class="game-badge">${badge}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Top-up packages generation
function generateTopupPackages() {
    const container = document.getElementById('topupPackages');
    if (!container || !currentGame) return;

    const game = gameDetails[currentGame];
    const currencyKey = Object.keys(game.packages[0]).find(key => 
        !['id', 'bonus', 'price', 'originalPrice', 'discount', 'popular'].includes(key)
    );

    container.innerHTML = game.packages.map(pkg => `
        <div class="package-card ${pkg.popular ? 'relative' : ''}" 
             data-package-id="${pkg.id}" 
             onclick="selectPackage(${pkg.id})">
            
            <div class="package-badges">
                ${pkg.popular ? `
                    <div class="popular-badge">
                        <svg class="fire-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C12.74 2 13.44 2.16 14.09 2.45C14.65 3.6 15.5 4.58 16.55 5.3C17.14 6.8 17 8.5 16.2 9.9C15.93 10.4 15.82 11 15.93 11.58C16.32 13.25 17.77 14.5 19.5 14.5C19.66 14.5 19.82 14.5 19.97 14.47C19.99 14.64 20 14.82 20 15C20 18.87 16.87 22 13 22H11C7.13 22 4 18.87 4 15C4 11.13 7.13 8 11 8H12C12 6.62 12 4.39 12 2Z"/>
                        </svg>
                    </div>
                ` : '<div></div>'}
                ${pkg.discount ? `<div class="package-discount">-${pkg.discount}</div>` : '<div></div>'}
            </div>
            
            <div class="package-content">
                <div class="package-header">
                    <div class="package-amount">${formatNumber(pkg[currencyKey])} ${currencyKey.toUpperCase()}</div>
                </div>
                
                ${pkg.bonus !== '+0 Bonus' ? `<div class="package-bonus">${pkg.bonus}</div>` : ''}
                
                <div class="package-price-section">
                    <div class="package-price">${formatCurrency(pkg.price)}</div>
                    ${pkg.discount ? `<div class="package-original-price">${formatCurrency(pkg.originalPrice)}</div>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Game input form generation
function generateGameInputForm() {
    const container = document.getElementById('gameInputForm');
    if (!container || !currentGame) return;

    const game = gameDetails[currentGame];

    container.innerHTML = `
        <form id="gameForm" class="space-y-4">
            ${game.inputFields.map(field => {
                if (field.type === 'select') {
                    return `
                        <div class="form-group">
                            <label for="${field.id}" class="form-label">${field.label}</label>
                            <select id="${field.id}" class="form-input" required onchange="updateFormData('${field.id}', this.value)">
                                <option value="">Pilih ${field.label}</option>
                                ${field.options.map(option => 
                                    `<option value="${option.value}">${option.label}</option>`
                                ).join('')}
                            </select>
                            <p class="form-help">${field.help}</p>
                        </div>
                    `;
                } else {
                    return `
                        <div class="form-group">
                            <label for="${field.id}" class="form-label">${field.label}</label>
                            <input type="text" 
                                   id="${field.id}" 
                                   class="form-input" 
                                   placeholder="${field.placeholder}" 
                                   required
                                   oninput="updateFormData('${field.id}', this.value)">
                            <p class="form-help">${field.help}</p>
                        </div>
                    `;
                }
            }).join('')}
            
            <div class="form-group">
                <label for="email" class="form-label">Email (Opsional)</label>
                <input type="email" 
                       id="email" 
                       class="form-input" 
                       placeholder="email@example.com"
                       oninput="updateFormData('email', this.value)">
                <p class="form-help">Email untuk menerima konfirmasi pesanan</p>
            </div>

            <div class="form-group">
                <label for="whatsapp" class="form-label">WhatsApp (Opsional)</label>
                <input type="tel" 
                       id="whatsapp" 
                       class="form-input" 
                       placeholder="08123456789"
                       oninput="updateFormData('whatsapp', this.value)">
                <p class="form-help">Nomor WhatsApp untuk notifikasi status pesanan</p>
            </div>
        </form>
    `;
}

// Order summary generation
function generateOrderSummary() {
    const container = document.getElementById('orderSummary');
    if (!container) return;

    if (!selectedPackage) {
        container.innerHTML = `
            <div class="text-center text-slate-400 py-8">
                <i data-lucide="package" class="w-12 h-12 mx-auto mb-4 opacity-50"></i>
                <p class="text-lg font-medium mb-2">Pilih Paket Top Up</p>
                <p class="text-sm">Silakan pilih paket top up yang diinginkan</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    const game = gameDetails[currentGame];
    const package = game.packages.find(pkg => pkg.id === selectedPackage);
    const currencyKey = Object.keys(package).find(key => 
        !['id', 'bonus', 'price', 'originalPrice', 'discount', 'popular'].includes(key)
    );

    const subtotal = package.price;
    const adminFee = selectedPayment ? paymentMethods.find(p => p.id === selectedPayment)?.fee || 0 : 0;
    const total = subtotal + adminFee;

    container.innerHTML = `
        <div class="space-y-4">
            <!-- Selected Package -->
            <div class="order-item">
                <div>
                    <div class="font-medium text-white">${game.name}</div>
                    <div class="text-sm text-slate-400">${formatNumber(package[currencyKey])} ${currencyKey.toUpperCase()} ${package.bonus !== '+0 Bonus' ? `(${package.bonus})` : ''}</div>
                </div>
                <div class="text-right">
                    <div class="font-medium">${formatCurrency(package.price)}</div>
                    ${package.discount ? `<div class="text-xs text-slate-400 line-through">${formatCurrency(package.originalPrice)}</div>` : ''}
                </div>
            </div>

            <!-- Payment Method Selection -->
            <div class="border-t border-slate-700 pt-4">
                <h4 class="font-medium text-white mb-3">💳 Pilih Metode Pembayaran</h4>
                <div class="space-y-2">
                    ${paymentMethods.map(payment => `
                        <label class="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-700/50 transition-all ${selectedPayment === payment.id ? 'ring-2 ring-purple-500 bg-purple-500/10' : ''}" 
                               onclick="selectPayment('${payment.id}')">
                            <input type="radio" 
                                   name="payment" 
                                   value="${payment.id}" 
                                   class="sr-only"
                                   ${selectedPayment === payment.id ? 'checked' : ''}>
                            <i data-lucide="${payment.icon}" class="w-5 h-5 text-purple-400"></i>
                            <div class="flex-1">
                                <div class="font-medium text-white">${payment.name}</div>
                                ${payment.fee > 0 ? `<div class="text-xs text-slate-400">Biaya admin: ${formatCurrency(payment.fee)}</div>` : '<div class="text-xs text-green-400">Gratis biaya admin</div>'}
                            </div>
                            ${selectedPayment === payment.id ? '<i data-lucide="check" class="w-5 h-5 text-green-400"></i>' : ''}
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Price Breakdown -->
            <div class="border-t border-slate-700 pt-4 space-y-2">
                <div class="order-item">
                    <span class="text-slate-400">Subtotal</span>
                    <span>${formatCurrency(subtotal)}</span>
                </div>
                ${adminFee > 0 ? `
                    <div class="order-item">
                        <span class="text-slate-400">Biaya Admin</span>
                        <span>${formatCurrency(adminFee)}</span>
                    </div>
                ` : ''}
            </div>

            <!-- Total -->
            <div class="order-total">
                <div class="order-item">
                    <span class="font-bold text-lg">Total Pembayaran</span>
                    <span class="font-bold text-xl text-green-400">${formatCurrency(total)}</span>
                </div>
            </div>

            <!-- Purchase Button -->
            <button class="purchase-button ${!selectedPayment || !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}" 
                    onclick="processPurchase()"
                    ${!selectedPayment || !isFormValid() ? 'disabled' : ''}>
                <i data-lucide="shopping-cart" class="w-5 h-5 mr-2"></i>
                Beli Sekarang
            </button>

            ${!isFormValid() || !selectedPayment ? `
                <div class="flex items-center gap-2 p-3 md:p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-sm md:text-base backdrop-blur-sm">
                    <i data-lucide="alert-triangle" class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"></i>
                    <span>${!isFormValid() ? 'Mohon lengkapi data akun game' : 'Pilih metode pembayaran'}</span>
                </div>
            ` : ''}
        </div>
    `;

    lucide.createIcons();
}

// Interactive functions
function selectPackage(packageId) {
    selectedPackage = packageId;
    
    // Update visual selection
    document.querySelectorAll('.package-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-package-id="${packageId}"]`).classList.add('selected');
    
    // Regenerate order summary
    generateOrderSummary();
}

function selectPayment(paymentId) {
    selectedPayment = paymentId;
    generateOrderSummary();
}

function updateFormData(fieldId, value) {
    formData[fieldId] = value;
    generateOrderSummary();
}

function isFormValid() {
    if (!currentGame) return false;
    
    const game = gameDetails[currentGame];
    const requiredFields = game.inputFields.filter(field => field.required !== false);
    
    return requiredFields.every(field => {
        const value = formData[field.id];
        return value && value.trim().length > 0;
    });
}

function processPurchase() {
    if (!selectedPackage || !selectedPayment || !isFormValid()) {
        showAlert('Mohon lengkapi semua data yang diperlukan', 'error');
        return;
    }

    // Show loading state
    const button = document.querySelector('.purchase-button');
    const originalText = button.innerHTML;
    button.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 mr-2 animate-spin"></i>Memproses...';
    button.disabled = true;

    // Simulate processing
    setTimeout(() => {
        const game = gameDetails[currentGame];
        const package = game.packages.find(pkg => pkg.id === selectedPackage);
        const payment = paymentMethods.find(p => p.id === selectedPayment);
        const total = package.price + (payment.fee || 0);

        // Create order summary
        const orderData = {
            orderId: 'BBS' + Date.now(),
            game: game.name,
            package: package,
            payment: payment.name,
            total: total,
            formData: formData,
            timestamp: new Date().toISOString()
        };

        // Store order data (in real app, this would be sent to server)
        localStorage.setItem('lastOrder', JSON.stringify(orderData));

        // Show success message
        showAlert(`Pesanan berhasil dibuat! Order ID: ${orderData.orderId}`, 'success');
        
        // Reset form after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);

    }, 2000);
}

function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());

    const alertDiv = document.createElement('div');
    alertDiv.className = `fixed top-24 right-4 z-50 max-w-sm flex items-center gap-2 p-3 md:p-4 rounded-xl backdrop-blur-sm text-sm md:text-base ${
        type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' :
        type === 'error' ? 'bg-red-500/10 border border-red-500/30 text-red-400' :
        'bg-blue-500/10 border border-blue-500/30 text-blue-400'
    }`;
    alertDiv.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : 'info'}" class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(alertDiv);
    lucide.createIcons();

    // Auto remove after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Copyright generation (similar to homepage)
function generateCopyright() {
    const container = document.getElementById('copyrightContainer');
    if (!container) return;
    
    const currentYear = new Date().getFullYear();
    const foundingYear = 2020;
    const yearRange = foundingYear === currentYear ? currentYear : `${foundingYear}-${currentYear}`;
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
}

// Footer payment methods (reuse from homepage)
function generateFooterPaymentMethods() {
    const container = document.getElementById('footerPaymentMethodsContainer');
    if (!container) return;
    
    footerPaymentMethods.forEach((payment, index) => {
        const paymentDiv = document.createElement('div');
        paymentDiv.className = 'bg-white rounded-lg p-2 flex items-center justify-center hover:scale-105 transition-transform shadow-sm h-10';
        
        const fallbackClass = payment.fallbackGradient ? 
            `bg-gradient-to-r ${payment.fallbackGradient}` : 
            payment.fallbackColor;
        
        paymentDiv.innerHTML = `
            <img src="${payment.image}" alt="${payment.name}" class="h-8 w-auto object-contain" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="hidden w-full h-full items-center justify-center ${fallbackClass} text-white text-xs font-bold rounded">
                ${payment.name}
            </div>
        `;
        
        container.appendChild(paymentDiv);
    });
}

// Initialize app
function initializeDetailApp() {
    // Get game from URL parameter
    currentGame = getUrlParameter('game') || 'Free Fire';
    
    // Validate game exists
    if (!gameDetails[currentGame]) {
        currentGame = 'Free Fire'; // fallback
    }
    
    // Generate all content
    generateGameDetailHeader();
    generateTopupPackages();
    generateGameInputForm();
    generateOrderSummary();
    generateCopyright();
    generateFooterPaymentMethods();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Update page title
    document.title = `${gameDetails[currentGame].name} - BUBBLE SHOP`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDetailApp);