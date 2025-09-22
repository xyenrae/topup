/* ===========================
   INTEGRATED PAYMENT FUNCTIONALITY
   =========================== */

// Initialize the transaction state with diamond prices from HTML
const transactionState = {
    selectedAmount: null,
    selectedAmountPrice: 0,
    selectedMethod: null,
    selectedMethodFee: 0,
    diamondPrices: {
        '60': { current: 16000, original: 16000 },
        '120': { current: 29629, original: 30784 },
        '325': { current: 75240, original: 79000 },
        '660': { current: 150480, original: 158000 },
        '1800': { current: 376200, original: 395000 },
        '3850': { current: 752400, original: 790000 }
    },
    paymentFees: {
        // E-wallet & QRIS - Free admin fees
        'dana': 0,
        'gopay': 0,
        'ovo': 0,
        'shopeepay': 0,
        'linkaja': 0,
        // Virtual Account - Rp 4.000 admin fee
        'bca-va': 4000,
        'mandiri-va': 4000,
        'bni-va': 4000,
        'bri-va': 4000,
        'permata-va': 4000,
        'cimb-va': 4000,
        'danamon-va': 4000,
        'maybank-va': 4000,
        // Convenience Store - Rp 2.500 admin fee
        'alfamart': 2500,
        'indomaret': 2500
    }
};

// Format currency to IDR
function formatIDR(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number).replace('IDR', 'Rp');
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeDiamondSelection();
    initializePaymentMethodSelection();
    initializeOrderButton();
    console.log('Payment system initialized');
});

// Initialize diamond selection functionality
function initializeDiamondSelection() {
    const diamondInputs = document.querySelectorAll('.diamond-input');

    diamondInputs.forEach(input => {
        input.addEventListener('change', function () {
            if (this.checked) {
                const amount = this.value;
                selectDiamond(amount);
            }
        });
    });
}

// Initialize payment method selection functionality
function initializePaymentMethodSelection() {
    const paymentInputs = document.querySelectorAll('.payment-method-input');

    paymentInputs.forEach(input => {
        input.addEventListener('change', function () {
            if (this.checked) {
                const method = this.value;
                selectPaymentMethod(method);
            }
        });
    });
}

// Initialize order button
function initializeOrderButton() {
    const orderButton = document.querySelector('.btn-accent.w-full');
    if (orderButton) {
        orderButton.id = 'orderButton';
        orderButton.addEventListener('click', function (e) {
            e.preventDefault();
            createOrder();
        });
    }
}

// Function to select diamond amount
function selectDiamond(amount) {
    console.log('Selecting diamond amount:', amount);

    // Update transaction state
    transactionState.selectedAmount = amount;
    transactionState.selectedAmountPrice = transactionState.diamondPrices[amount].current;

    // Update all payment method prices
    updateAllPaymentMethodPrices();

    // Update confirmation section
    updateConfirmationSection();

    // Update visual selection
    updateDiamondVisualSelection(amount);
}

// Function to update visual selection for diamond cards
function updateDiamondVisualSelection(selectedAmount) {
    const diamondCards = document.querySelectorAll('.diamond-card');
    diamondCards.forEach(card => {
        const input = card.parentNode.querySelector('.diamond-input');
        if (input && input.value === selectedAmount) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

// Function to update all payment method prices
function updateAllPaymentMethodPrices() {
    const basePrice = transactionState.selectedAmountPrice;

    if (!basePrice) return;

    // Update price for each payment method
    const paymentCards = document.querySelectorAll('.payment-method-card');
    paymentCards.forEach(card => {
        const input = card.parentNode.querySelector('.payment-method-input');
        if (input) {
            const method = input.value;
            const fee = transactionState.paymentFees[method] || 0;
            const totalPrice = basePrice + fee;

            // Find or create price element
            let priceElement = card.querySelector('.payment-method-price');
            if (priceElement) {
                priceElement.textContent = formatIDR(totalPrice);
            }
        }
    });

    console.log('Updated all payment method prices with base price:', basePrice);
}

// Function to select payment method
function selectPaymentMethod(method) {
    console.log('Selecting payment method:', method);

    // Update transaction state
    transactionState.selectedMethod = method;
    transactionState.selectedMethodFee = transactionState.paymentFees[method] || 0;

    // Update confirmation section
    updateConfirmationSection();

    // Update visual selection
    updatePaymentVisualSelection(method);
}

// Function to update visual selection for payment methods
function updatePaymentVisualSelection(selectedMethod) {
    const paymentCards = document.querySelectorAll('.payment-method-card');
    paymentCards.forEach(card => {
        const input = card.parentNode.querySelector('.payment-method-input');
        if (input && input.value === selectedMethod) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

// Function to update confirmation section
function updateConfirmationSection() {
    const basePrice = transactionState.selectedAmountPrice;
    const adminFee = transactionState.selectedMethodFee;
    const totalPrice = basePrice + adminFee;

    console.log('Updating confirmation:', { basePrice, adminFee, totalPrice });

    // Update base price
    const basePriceElement = document.getElementById('basePrice');
    if (basePriceElement) {
        basePriceElement.textContent = basePrice ? formatIDR(basePrice) : '-';
    }

    // Update admin fee
    const adminFeeElement = document.getElementById('adminFee');
    if (adminFeeElement) {
        adminFeeElement.textContent = adminFee ? formatIDR(adminFee) : 'Gratis';
    }

    // Update total payment
    const totalPaymentElement = document.getElementById('totalPayment');
    if (totalPaymentElement) {
        totalPaymentElement.textContent = basePrice ? formatIDR(totalPrice) : '-';
    }

    // Update order button state
    updateOrderButtonState();
}

// Function to update order button state
function updateOrderButtonState() {
    const orderButton = document.getElementById('orderButton');
    if (orderButton) {
        const canOrder = transactionState.selectedAmount && transactionState.selectedMethod;
        orderButton.disabled = !canOrder;

        if (canOrder) {
            orderButton.classList.remove('opacity-50', 'cursor-not-allowed');
            orderButton.textContent = 'Buat Pesanan';
        } else {
            orderButton.classList.add('opacity-50', 'cursor-not-allowed');
            orderButton.textContent = 'Pilih Diamond & Payment Method';
        }
    }
}

// Function to create order
function createOrder() {
    if (!transactionState.selectedAmount || !transactionState.selectedMethod) {
        alert('Silakan pilih jumlah diamond dan metode pembayaran terlebih dahulu!');
        return;
    }

    const orderData = {
        diamond: {
            amount: transactionState.selectedAmount,
            price: transactionState.selectedAmountPrice
        },
        payment: {
            method: transactionState.selectedMethod,
            fee: transactionState.selectedMethodFee
        },
        total: transactionState.selectedAmountPrice + transactionState.selectedMethodFee
    };

    console.log('Creating order with data:', orderData);

    // Here you would typically send the order to your backend
    alert(`Pesanan berhasil dibuat!\n\nDiamond: ${orderData.diamond.amount} UC\nMetode: ${transactionState.selectedMethod}\nTotal: ${formatIDR(orderData.total)}`);
}

// Add CSS for selected states
const style = document.createElement('style');
style.textContent = `
    .diamond-card.selected {
        border: 2px solid var(--color-primary);
        background: rgba(16, 185, 129, 0.1);
    }
    
    .diamond-card.selected .check-indicator {
        opacity: 1;
        border: 2px solid var(--color-primary);
    }
    
    .payment-method-card.selected {
        border: 2px solid var(--color-primary);
        background: rgba(16, 185, 129, 0.1);
    }
    
    .payment-method-card.selected .payment-method-check-indicator {
        opacity: 1;
        border: 2px solid var(--color-primary);
    }
    
    .check-indicator, .payment-method-check-indicator {
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    
    .btn:disabled {
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

console.log('Payment system script loaded successfully');