/* ===========================
   NAVBAR FUNCTIONALITY
   =========================== */

// Dropdown Toggle with Icon Animation
function toggleDropdown(button) {
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  const dropdown = button.closest('.dropdown');
  
  // Toggle icons
  if (hamburgerIcon.classList.contains('hidden')) {
    // Currently showing X, switch to hamburger and close dropdown
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    // Force close the dropdown by removing focus
    button.blur();
    dropdown.removeAttribute('open');
  } else {
    // Currently showing hamburger, switch to X
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
}

// Close dropdown when clicking outside
function closeDropdown() {
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  
  // Reset to hamburger icon
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

// Mobile Search Toggle with Icon Animation
function toggleMobileSearch(button) {
  const searchBar = document.getElementById('mobileSearchBar');
  const searchIcon = document.getElementById('searchIcon');
  const searchCloseIcon = document.getElementById('searchCloseIcon');
  
  if (searchBar.classList.contains('hidden')) {
    // Show search bar and switch to X icon
    searchBar.classList.remove('hidden');
    searchIcon.classList.add('hidden');
    searchCloseIcon.classList.remove('hidden');
    // Focus on the search input when opened
    const searchInput = searchBar.querySelector('input');
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 100);
    }
  } else {
    // Hide search bar and switch back to search icon
    searchBar.classList.add('hidden');
    searchIcon.classList.remove('hidden');
    searchCloseIcon.classList.add('hidden');
  }
}

// Close mobile search when clicking outside
function closeMobileSearch() {
  const searchBar = document.getElementById('mobileSearchBar');
  const searchIcon = document.getElementById('searchIcon');
  const searchCloseIcon = document.getElementById('searchCloseIcon');
  
  searchBar.classList.add('hidden');
  searchIcon.classList.remove('hidden');
  searchCloseIcon.classList.add('hidden');
}

/* ===========================
   CAROUSEL FUNCTIONALITY
   =========================== */

let currentSlide = 1;
let carouselInterval;

// Update carousel indicators
function updateCarouselIndicators() {
  for (let i = 1; i <= 3; i++) {
    const indicator = document.getElementById(`dot${i}`);
    if (indicator) {
      if (i === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    }
  }
}

// Navigate to specific slide
function goToSlide(slideNumber) {
  if (slideNumber >= 1 && slideNumber <= 3) {
    currentSlide = slideNumber;
    const targetSlide = document.getElementById(`slide${slideNumber}`);
    if (targetSlide) {
      // Use CSS-based transition instead of scrollIntoView to prevent page jumping
      const carousel = document.getElementById('heroCarousel');
      if (carousel) {
        const slideWidth = targetSlide.offsetWidth;
        const scrollPosition = (slideNumber - 1) * slideWidth;
        carousel.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
    updateCarouselIndicators();
  }
}

// Next slide
function nextSlide() {
  const next = currentSlide === 3 ? 1 : currentSlide + 1;
  goToSlide(next);
}

// Previous slide
function prevSlide() {
  const prev = currentSlide === 1 ? 3 : currentSlide - 1;
  goToSlide(prev);
}

// Start auto carousel
function startCarousel() {
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
}

// Stop auto carousel
function stopCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

// Initialize carousel
function initCarousel() {
  // Set initial active indicator
  updateCarouselIndicators();
  
  // Add click listeners to navigation indicators
  for (let i = 1; i <= 3; i++) {
    const indicator = document.getElementById(`dot${i}`);
    if (indicator) {
      indicator.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(i);
        stopCarousel();
        setTimeout(startCarousel, 10000); // Restart auto-scroll after 10 seconds
      });
    }
  }
  
  // Add hover pause functionality
  const carousel = document.getElementById('heroCarousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
  }
  
  // Start auto-scrolling
  startCarousel();
}

// Search Functionality
function handleSearch(searchInput) {
  const query = searchInput.value.trim();
  if (query) {
    console.log('Searching for:', query);
    // Add your search logic here
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousel
  initCarousel();
  
  // Desktop search
  const desktopSearchInput = document.querySelector('.navbar-center input');
  const desktopSearchButton = document.querySelector('.navbar-center .btn');
  
  if (desktopSearchInput && desktopSearchButton) {
    desktopSearchButton.addEventListener('click', () => handleSearch(desktopSearchInput));
    desktopSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearch(desktopSearchInput);
      }
    });
  }
  
  // Mobile search in search bar
  const mobileSearchInput = document.querySelector('#mobileSearchBar input');
  
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearch(mobileSearchInput);
      }
    });
  }
  
  // Add dropdown event listeners
  const hamburgerButton = document.getElementById('hamburgerButton');
  const dropdown = hamburgerButton?.closest('.dropdown');
  
  if (dropdown) {
    // Listen for dropdown state changes
    dropdown.addEventListener('focusout', function(e) {
      // Check if focus is moving outside the dropdown
      setTimeout(() => {
        if (!dropdown.contains(document.activeElement)) {
          closeDropdown();
        }
      }, 100);
    });
  }
});

// Close components when clicking outside
document.addEventListener('click', function(event) {
  const mobileSearchBar = document.getElementById('mobileSearchBar');
  const searchButton = document.getElementById('searchButton');
  const hamburgerButton = document.getElementById('hamburgerButton');
  const dropdown = hamburgerButton?.closest('.dropdown');
  
  // Close mobile search when clicking outside
  if (mobileSearchBar && !mobileSearchBar.contains(event.target) && !searchButton.contains(event.target) && !mobileSearchBar.classList.contains('hidden')) {
    closeMobileSearch();
  }
  
  // Reset hamburger icon when dropdown closes (DaisyUI handles the dropdown visibility)
  if (dropdown && !dropdown.contains(event.target)) {
    // Check if dropdown is closed and reset icon
    setTimeout(() => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      if (dropdownContent && !dropdownContent.matches(':focus-within')) {
        closeDropdown();
      }
    }, 100);
  }
});

// Navbar scroll shadow
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 10) {
    navbar.classList.add('shadow-md');
  } else {
    navbar.classList.remove('shadow-md');
  }
});