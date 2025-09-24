document.addEventListener('DOMContentLoaded', () => {

    // ===== Hitung countdown 2 hari dari sekarang =====
    const twoDaysFromNow = Math.floor(Date.now() / 1000) + (86400 * 2) + 1;

    // ===== Setup FlipDown =====
    const flipdown = new FlipDown(twoDaysFromNow)
        .start()
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });

    // ===== Tampilkan versi FlipDown =====
    const ver = document.getElementById('ver');
    if (ver) ver.innerText = flipdown.version;

    // ===== Ambil tema dari localStorage atau default =====
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // ===== Tombol toggle tema (jika ada tombol) =====
    const toggleButton = document.getElementById('toggleTheme');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // ===== Fungsi untuk set tema =====
    function setTheme(theme) {
        // Update atribut HTML
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update FlipDown
        const flipdownEl = document.getElementById('flipdown');
        if (!flipdownEl) return;

        if (theme === 'dark') {
            flipdownEl.classList.add('flipdown__theme-dark');
            flipdownEl.classList.remove('flipdown__theme-light');
        } else {
            flipdownEl.classList.add('flipdown__theme-light');
            flipdownEl.classList.remove('flipdown__theme-dark');
        }
    }

});
