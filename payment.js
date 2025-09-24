// Payment page JavaScript functionality

class PaymentTimer {
    constructor() {
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');

        // Set countdown target (24 hours from now)
        this.targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);

        this.init();
    }

    init() {
        // Start the countdown immediately
        this.updateCountdown();

        // Update every second
        this.interval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetTime - now;

        if (distance < 0) {
            this.handleExpired();
            return;
        }

        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.updateDisplay(hours, minutes, seconds);
    }

    updateDisplay(hours, minutes, seconds) {
        const newHours = this.padZero(hours);
        const newMinutes = this.padZero(minutes);
        const newSeconds = this.padZero(seconds);

        // Add flip animation if value changed
        this.updateWithAnimation(this.hoursElement, newHours);
        this.updateWithAnimation(this.minutesElement, newMinutes);
        this.updateWithAnimation(this.secondsElement, newSeconds);
    }

    updateWithAnimation(element, newValue) {
        if (element && element.textContent !== newValue) {
            element.classList.add('flip');

            setTimeout(() => {
                element.textContent = newValue;
                element.classList.remove('flip');
            }, 150);
        }
    }

    padZero(num) {
        return num < 10 ? '0' + num : num.toString();
    }

    handleExpired() {
        clearInterval(this.interval);

        // Update display to show expired
        if (this.hoursElement) this.hoursElement.textContent = '00';
        if (this.minutesElement) this.minutesElement.textContent = '00';
        if (this.secondsElement) this.secondsElement.textContent = '00';

        // Show expired message
        this.showExpiredMessage();
    }

    showExpiredMessage() {
        const statusBadge = document.querySelector('.badge-warning');
        if (statusBadge) {
            statusBadge.textContent = 'Expired';
            statusBadge.className = 'badge badge-error badge-lg';
        }

        // Show notification
        PaymentPage.showNotification('Waktu pembayaran telah habis!', 'error');
    }
}

class PaymentPage {
    constructor() {
        this.timer = new PaymentTimer();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeTooltips();
        this.checkPaymentStatus();
    }

    setupEventListeners() {
        // Copy order number to clipboard
        const orderNumberElement = document.getElementById('orderNumber');
        if (orderNumberElement) {
            orderNumberElement.addEventListener('click', () => {
                this.copyToClipboard(orderNumberElement.textContent);
            });

            orderNumberElement.style.cursor = 'pointer';
            orderNumberElement.title = 'Klik untuk copy nomor pesanan';
        }

        // Add refresh button
        this.addRefreshButton();

        // Add payment status checker
        this.addStatusChecker();
    }

    copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                PaymentPage.showToast('Nomor pesanan berhasil dicopy!', 'success');
            }).catch(() => {
                this.fallbackCopyTextToClipboard(text);
            });
        } else {
            this.fallbackCopyTextToClipboard(text);
        }
    }

    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            PaymentPage.showToast('Nomor pesanan berhasil dicopy!', 'success');
        } catch (err) {
            PaymentPage.showToast('Gagal copy nomor pesanan', 'error');
        }

        document.body.removeChild(textArea);
    }

    static showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-top toast-end z-50`;
        toast.innerHTML = `
            <div class="alert alert-${type}">
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 3000);
    }

    static showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} fixed top-4 right-4 w-auto max-w-sm z-50 shadow-lg`;
        notification.innerHTML = `
            <div>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    addRefreshButton() {
        const refreshButton = document.createElement('button');
        refreshButton.className = 'btn btn-outline btn-sm mt-4';
        refreshButton.innerHTML = '🔄 Refresh Status';
        refreshButton.onclick = () => this.refreshPaymentStatus();

        // Add to payment instructions card
        const instructionsCard = document.querySelector('.card-body h3');
        if (instructionsCard) {
            const cardBody = instructionsCard.closest('.card-body');
            cardBody.appendChild(refreshButton);
        }
    }

    addStatusChecker() {
        // Simulate payment status checking every 30 seconds
        this.statusInterval = setInterval(() => {
            this.checkPaymentStatus();
        }, 30000);
    }

    refreshPaymentStatus() {
        const refreshBtn = document.querySelector('button[onclick*="refreshPaymentStatus"]');
        if (refreshBtn) {
            refreshBtn.disabled = true;
            refreshBtn.innerHTML = '⏳ Checking...';

            // Simulate API call
            setTimeout(() => {
                refreshBtn.disabled = false;
                refreshBtn.innerHTML = '🔄 Refresh Status';
                PaymentPage.showToast('Status pembayaran telah diperbarui', 'info');
            }, 2000);
        }
    }

    checkPaymentStatus() {
        // Simulate random payment status check
        const random = Math.random();

        if (random > 0.995) { // Very small chance to simulate payment success
            this.updatePaymentStatus('success');
        }
    }

    updatePaymentStatus(status) {
        const statusBadges = document.querySelectorAll('.badge-warning');

        switch (status) {
            case 'success':
                statusBadges.forEach(element => {
                    element.textContent = 'Pembayaran Berhasil';
                    element.className = 'badge badge-success badge-lg';
                });

                // Stop timer
                if (this.timer && this.timer.interval) {
                    clearInterval(this.timer.interval);
                }

                // Stop status checker
                if (this.statusInterval) {
                    clearInterval(this.statusInterval);
                }

                this.showSuccessMessage();
                break;

            case 'failed':
                statusBadges.forEach(element => {
                    element.textContent = 'Pembayaran Gagal';
                    element.className = 'badge badge-error badge-lg';
                });
                break;
        }
    }

    showSuccessMessage() {
        const successModal = document.createElement('div');
        successModal.className = 'modal modal-open';
        successModal.innerHTML = `
            <div class="modal-box">
                <h3 class="font-bold text-lg text-success">🎉 Pembayaran Berhasil!</h3>
                <p class="py-4">Terima kasih! Pembayaran Anda telah berhasil diproses. Token akan segera masuk ke akun game Anda.</p>
                <div class="modal-action">
                    <button class="btn btn-success" onclick="this.closest('.modal').remove()">OK</button>
                </div>
            </div>
        `;

        document.body.appendChild(successModal);

        // Auto close after 8 seconds
        setTimeout(() => {
            if (successModal.parentNode) {
                successModal.remove();
            }
        }, 8000);
    }

    initializeTooltips() {
        // Add hover effects for QR code
        const qrCode = document.querySelector('.w-44');
        if (qrCode) {
            qrCode.addEventListener('mouseenter', () => {
                qrCode.style.transform = 'scale(1.05)';
                qrCode.style.transition = 'transform 0.2s ease';
            });

            qrCode.addEventListener('mouseleave', () => {
                qrCode.style.transform = 'scale(1)';
            });
        }

        // Make order number in transaction info clickable
        const orderElements = document.querySelectorAll('.font-medium');
        orderElements.forEach(element => {
            if (element.textContent.includes('RRQ')) {
                element.style.cursor = 'pointer';
                element.title = 'Klik untuk copy';
                element.addEventListener('click', () => {
                    this.copyToClipboard(element.textContent.replace(' 📋', ''));
                });
            }
        });
    }
}

// Utility functions
window.PaymentUtils = {
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    },

    formatDate: (date) => {
        return new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(new Date(date));
    },

    validateOrderNumber: (orderNumber) => {
        return /^[A-Z]{3}\d{14}$/.test(orderNumber);
    },

    // Simulate payment success (for testing)
    simulatePaymentSuccess: () => {
        if (window.paymentPageInstance) {
            window.paymentPageInstance.updatePaymentStatus('success');
        }
    },

    // Get remaining time
    getRemainingTime: () => {
        if (window.paymentPageInstance && window.paymentPageInstance.timer) {
            const now = new Date().getTime();
            const distance = window.paymentPageInstance.timer.targetTime - now;
            return distance > 0 ? Math.floor(distance / 1000) : 0;
        }
        return 0;
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Payment page initializing...');
    window.paymentPageInstance = new PaymentPage();
    console.log('Payment page loaded successfully');
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden - timer continues in background');
    } else {
        console.log('Page visible - timer active');
    }
});

// Debug functions (can be called from browser console)
window.debug = {
    simulateSuccess: () => PaymentUtils.simulatePaymentSuccess(),
    getRemainingTime: () => PaymentUtils.getRemainingTime(),
    showToast: (msg, type) => PaymentPage.showToast(msg, type || 'info')
};