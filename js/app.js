/**
 * AVANTIKA SAREE CENTRE AND GARMENTS
 * Application State, Routing, Cart, Wishlist, PDP, Filters & Demo Checkout
 */

// Application State
const AppState = {
  currentView: 'home', // 'home' | 'catalog' | 'pdp' | 'checkout'
  activeProductId: null,
  cart: [
    {
      productId: 'avantika-crimson-banarasi',
      color: 'Crimson Red',
      blouse: 'Unstitched Fabric (Included 0.8m)',
      quantity: 1,
      price: 18500
    }
  ],
  wishlist: ['avantika-rose-gold-tissue', 'avantika-ruby-bridal-weave'],
  filters: {
    category: 'all',
    fabric: [],
    color: [],
    occasion: [],
    maxPrice: 50000,
    sort: 'newest',
    searchQuery: ''
  },
  promoDiscount: 0,
  promoAppliedCode: ''
};

// Format currency in Indian Lakhs/Thousands style (₹ 18,500)
function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initNavigation();
  initDrawers();
  initSearch();
  initCatalogFilters();
  initCheckout();
  renderCurrentView();
  updateCartBadge();
  updateWishlistBadge();
});

// Load state from localStorage if available
function initStorage() {
  try {
    const savedCart = localStorage.getItem('avantika_cart') || localStorage.getItem('vastraa_cart');
    if (savedCart) AppState.cart = JSON.parse(savedCart);
    const savedWishlist = localStorage.getItem('avantika_wishlist') || localStorage.getItem('vastraa_wishlist');
    if (savedWishlist) AppState.wishlist = JSON.parse(savedWishlist);
  } catch (e) {
    console.warn('LocalStorage unavailable or corrupt', e);
  }
}

function saveCart() {
  try {
    localStorage.setItem('avantika_cart', JSON.stringify(AppState.cart));
  } catch (e) {}
  updateCartBadge();
}

function saveWishlist() {
  try {
    localStorage.setItem('avantika_wishlist', JSON.stringify(AppState.wishlist));
  } catch (e) {}
  updateWishlistBadge();
}

// ==========================================================================
// ROUTING / VIEW NAVIGATION
// ==========================================================================

function navigateTo(viewName, param = null) {
  AppState.currentView = viewName;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update nav active link states
  document.querySelectorAll('.nav-link').forEach(link => {
    const target = link.getAttribute('data-nav');
    if (target === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (viewName === 'pdp' && param) {
    AppState.activeProductId = param;
  } else if (viewName === 'catalog') {
    if (param && param.filterKey && param.filterValue) {
      resetFilters();
      if (param.filterKey === 'category') {
        AppState.filters.category = param.filterValue;
      } else if (param.filterKey === 'fabric') {
        AppState.filters.fabric = [param.filterValue];
      } else if (param.filterKey === 'occasion') {
        AppState.filters.occasion = [param.filterValue];
      }
    }
  }

  renderCurrentView();
  closeMobileMenu();
}

function renderCurrentView() {
  const homeView = document.getElementById('view-home');
  const catalogView = document.getElementById('view-catalog');
  const pdpView = document.getElementById('view-pdp');
  const checkoutView = document.getElementById('view-checkout');

  homeView.style.display = 'none';
  catalogView.style.display = 'none';
  pdpView.style.display = 'none';
  checkoutView.style.display = 'none';

  if (AppState.currentView === 'home') {
    homeView.style.display = 'block';
    renderHomeSections();
  } else if (AppState.currentView === 'catalog') {
    catalogView.style.display = 'block';
    renderCatalogView();
  } else if (AppState.currentView === 'pdp') {
    pdpView.style.display = 'block';
    renderPDPView();
  } else if (AppState.currentView === 'checkout') {
    checkoutView.style.display = 'block';
    renderCheckoutView();
  }

  // Handle Mobile Sticky PDP Bar
  const stickyPDPBar = document.getElementById('mobile-pdp-sticky-bar');
  if (stickyPDPBar) {
    if (AppState.currentView === 'pdp') {
      const activeProd = PRODUCTS_DATA.find(p => p.id === AppState.activeProductId) || PRODUCTS_DATA[0];
      const priceDisplay = document.getElementById('mobile-sticky-pdp-price');
      if (priceDisplay && activeProd) priceDisplay.textContent = formatINR(activeProd.price);
      stickyPDPBar.style.display = 'flex';
    } else {
      stickyPDPBar.style.display = 'none';
    }
  }

  // Update mobile bottom nav active classes
  document.querySelectorAll('.mobile-bottom-item').forEach(item => {
    const navAttr = item.getAttribute('data-nav');
    if (navAttr) {
      if (navAttr === AppState.currentView) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  });
}

// ==========================================================================
// HOME VIEW RENDERING
// ==========================================================================

function renderHomeSections() {
  // Render Featured Collections
  const collectionsContainer = document.getElementById('home-collections-grid');
  if (collectionsContainer) {
    collectionsContainer.innerHTML = COLLECTIONS_DATA.map(col => `
      <div class="collection-card" onclick="navigateTo('catalog', { filterKey: '${col.filterKey}', filterValue: '${col.filterValue}' })">
        <div class="collection-card-img-wrap">
          <img src="${col.image}" alt="${col.name}" class="collection-card-img" loading="lazy" />
        </div>
        <div class="collection-card-gradient"></div>
        <div class="collection-card-content">
          <div class="collection-item-count">${col.count}</div>
          <h3 class="collection-item-title">${col.name}</h3>
          <p class="collection-item-subtitle">${col.subtitle}</p>
          <span class="collection-explore-link">
            Explore Edit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    `).join('');
  }

  // Render New Arrivals Grid (First 6 products that are isNew or featured)
  const newArrivalsGrid = document.getElementById('home-new-arrivals-grid');
  if (newArrivalsGrid) {
    const products = PRODUCTS_DATA.slice(0, 6);
    newArrivalsGrid.innerHTML = products.map(product => renderProductCardHTML(product)).join('');
  }

  // Render Testimonials
  const testimonialsGrid = document.getElementById('home-testimonials-grid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = TESTIMONIALS_DATA.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">“${t.quote}”</p>
        <div class="testimonial-author-row">
          <img src="${t.avatar}" alt="${t.author}" class="testimonial-avatar" loading="lazy" />
          <div class="testimonial-info">
            <h4>${t.author}</h4>
            <p>${t.city} • ${t.event}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Instagram Grid
  const instaGrid = document.getElementById('home-instagram-grid');
  if (instaGrid) {
    instaGrid.innerHTML = INSTAGRAM_POSTS.map(post => `
      <div class="insta-item">
        <img src="${post.image}" alt="Avantika Saree Centre Instagram" class="insta-img" loading="lazy" />
        <div class="insta-overlay">
          <div class="insta-icon">♥</div>
          <div class="insta-likes">${post.likes} likes</div>
          <p style="font-size: 0.65rem; color: #FFF; margin-top: 4px;">${post.tag}</p>
        </div>
      </div>
    `).join('');
  }
}

// Generate HTML for a luxury product card
function renderProductCardHTML(product) {
  const isWishlisted = AppState.wishlist.includes(product.id);
  const secondaryImage = product.images[1] || product.images[0];

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-card-media" onclick="navigateTo('pdp', '${product.id}')">
        <img src="${product.images[0]}" alt="${product.name}" class="product-img-primary" loading="lazy" />
        <img src="${secondaryImage}" alt="${product.name} alternate view" class="product-img-secondary" loading="lazy" />

        <span class="product-badge-tag">${product.tag}</span>

        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                title="Save to Wishlist" 
                onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <div class="card-quick-actions" onclick="event.stopPropagation();">
          <button class="btn-card-quick-add" onclick="quickAddToCart('${product.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add to Bag
          </button>
          <button class="btn-card-quick-view" onclick="navigateTo('pdp', '${product.id}')">
            Details
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <div class="product-meta-top">
          <span class="product-category-label">${product.categoryName}</span>
          <div class="product-color-indicator">
            <span class="color-dot" style="background-color: ${product.colorHex};"></span>
            <span>${product.color}</span>
          </div>
        </div>

        <h3 class="product-card-title" onclick="navigateTo('pdp', '${product.id}')">${product.name}</h3>
        <p class="product-fabric-text">${product.fabric} • ${product.craftsmanship.loom.split(',')[0]}</p>

        <div class="product-price-row">
          <span class="product-price">${formatINR(product.price)}</span>
          ${product.originalPrice ? `<span class="product-original-price">${formatINR(product.originalPrice)}</span>` : ''}
          <span class="product-direct-badge">Artisan Direct</span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// CATALOG VIEW & FILTERING
// ==========================================================================

function initCatalogFilters() {
  // Category tabs / pills
  document.querySelectorAll('[data-filter-cat]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-filter-cat');
      AppState.filters.category = cat;
      document.querySelectorAll('[data-filter-cat]').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      renderCatalogProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.filters.sort = e.target.value;
      renderCatalogProducts();
    });
  }

  // Price slider
  const priceSlider = document.getElementById('price-range-slider');
  const priceDisplay = document.getElementById('price-slider-display');
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      AppState.filters.maxPrice = Number(e.target.value);
      priceDisplay.textContent = formatINR(AppState.filters.maxPrice);
      renderCatalogProducts();
    });
  }

  // Fabric checkboxes
  document.querySelectorAll('input[name="filter-fabric"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selected = Array.from(document.querySelectorAll('input[name="filter-fabric"]:checked'))
        .map(cb => cb.value);
      AppState.filters.fabric = selected;
      renderCatalogProducts();
    });
  });

  // Occasion checkboxes
  document.querySelectorAll('input[name="filter-occasion"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selected = Array.from(document.querySelectorAll('input[name="filter-occasion"]:checked'))
        .map(cb => cb.value);
      AppState.filters.occasion = selected;
      renderCatalogProducts();
    });
  });

  // Color chips
  document.querySelectorAll('.color-swatch-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const colorVal = chip.getAttribute('data-color-name');
      const idx = AppState.filters.color.indexOf(colorVal);
      if (idx > -1) {
        AppState.filters.color.splice(idx, 1);
        chip.classList.remove('active');
      } else {
        AppState.filters.color.push(colorVal);
        chip.classList.add('active');
      }
      renderCatalogProducts();
    });
  });
}

function resetFilters() {
  AppState.filters = {
    category: 'all',
    fabric: [],
    color: [],
    occasion: [],
    maxPrice: 60000,
    sort: 'newest',
    searchQuery: ''
  };

  // Reset UI controls
  document.querySelectorAll('[data-filter-cat]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter-cat') === 'all');
  });
  document.querySelectorAll('input[name="filter-fabric"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="filter-occasion"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('.color-swatch-chip').forEach(c => c.classList.remove('active'));

  const priceSlider = document.getElementById('price-range-slider');
  const priceDisplay = document.getElementById('price-slider-display');
  if (priceSlider) priceSlider.value = 60000;
  if (priceDisplay) priceDisplay.textContent = formatINR(60000);

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) sortSelect.value = 'newest';

  renderCatalogProducts();
}

function renderCatalogView() {
  // Sync category active button
  document.querySelectorAll('[data-filter-cat]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter-cat') === AppState.filters.category);
  });
  renderCatalogProducts();
}

function renderCatalogProducts() {
  const container = document.getElementById('catalog-products-grid');
  const countDisplay = document.getElementById('catalog-results-count');
  const activeChipsBar = document.getElementById('catalog-active-chips');

  if (!container) return;

  // Filter products
  let filtered = PRODUCTS_DATA.filter(item => {
    // Category
    if (AppState.filters.category !== 'all') {
      if (AppState.filters.category === 'bridal') {
        if (!item.isBridal && item.category !== 'bridal') return false;
      } else if (item.category !== AppState.filters.category) {
        return false;
      }
    }

    // Max Price
    if (item.price > AppState.filters.maxPrice) return false;

    // Fabric
    if (AppState.filters.fabric.length > 0) {
      const matchesFabric = AppState.filters.fabric.some(fab => item.fabric.toLowerCase().includes(fab.toLowerCase()));
      if (!matchesFabric) return false;
    }

    // Color
    if (AppState.filters.color.length > 0) {
      const matchesColor = AppState.filters.color.some(col => item.color.toLowerCase().includes(col.toLowerCase()));
      if (!matchesColor) return false;
    }

    // Occasion
    if (AppState.filters.occasion.length > 0) {
      const matchesOccasion = AppState.filters.occasion.includes(item.occasion);
      if (!matchesOccasion) return false;
    }

    // Search query
    if (AppState.filters.searchQuery) {
      const q = AppState.filters.searchQuery.toLowerCase();
      const match = item.name.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.fabric.toLowerCase().includes(q) ||
                    item.color.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  // Sort
  if (AppState.filters.sort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.filters.sort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.filters.sort === 'popularity') {
    filtered.sort((a, b) => b.reviewCount - a.reviewCount);
  } else {
    // Newest
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  // Update counts
  if (countDisplay) {
    countDisplay.innerHTML = `Showing <strong>${filtered.length}</strong> creations`;
  }

  // Render Active Chips
  if (activeChipsBar) {
    const chips = [];
    if (AppState.filters.category !== 'all') {
      chips.push({ label: `Category: ${AppState.filters.category}`, clear: () => { AppState.filters.category = 'all'; renderCatalogProducts(); } });
    }
    AppState.filters.fabric.forEach(f => {
      chips.push({ label: `Fabric: ${f}`, clear: () => { AppState.filters.fabric = AppState.filters.fabric.filter(x => x !== f); renderCatalogProducts(); } });
    });
    AppState.filters.color.forEach(c => {
      chips.push({ label: `Color: ${c}`, clear: () => { AppState.filters.color = AppState.filters.color.filter(x => x !== c); renderCatalogProducts(); } });
    });
    AppState.filters.occasion.forEach(o => {
      chips.push({ label: `Occasion: ${o}`, clear: () => { AppState.filters.occasion = AppState.filters.occasion.filter(x => x !== o); renderCatalogProducts(); } });
    });
    if (AppState.filters.maxPrice < 60000) {
      chips.push({ label: `Under ${formatINR(AppState.filters.maxPrice)}`, clear: () => { AppState.filters.maxPrice = 60000; renderCatalogProducts(); } });
    }

    if (chips.length > 0) {
      activeChipsBar.innerHTML = chips.map((c, i) => `
        <span class="filter-chip">
          ${c.label}
          <button onclick="clearSpecificChip(${i})">&times;</button>
        </span>
      `).join('') + `
        <button class="btn-reset-filters" style="margin-left: 0.5rem;" onclick="resetFilters()">Clear All Filters</button>
      `;
      window._activeChips = chips;
    } else {
      activeChipsBar.innerHTML = '';
    }

    // Update Mobile Filter Count Badge
    const mobileFilterCountBadge = document.getElementById('mobile-filter-active-count');
    if (mobileFilterCountBadge) {
      if (chips.length > 0) {
        mobileFilterCountBadge.textContent = chips.length;
        mobileFilterCountBadge.style.display = 'inline-flex';
      } else {
        mobileFilterCountBadge.style.display = 'none';
      }
    }
  }

  // Render Grid
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 1rem;">
        <p style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--maroon-900); margin-bottom: 0.75rem;">No creations matched your selection</p>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Try relaxing your filters or explore our full silk catalogue.</p>
        <button class="btn-luxury-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(product => renderProductCardHTML(product)).join('');
  }
}

function clearSpecificChip(index) {
  if (window._activeChips && window._activeChips[index]) {
    window._activeChips[index].clear();
  }
}

// ==========================================================================
// PRODUCT DETAIL PAGE (PDP VIEW)
// ==========================================================================

function renderPDPView() {
  const product = PRODUCTS_DATA.find(p => p.id === AppState.activeProductId) || PRODUCTS_DATA[0];
  const container = document.getElementById('view-pdp');

  if (!container) return;

  const isWishlisted = AppState.wishlist.includes(product.id);

  container.innerHTML = `
    <div class="pdp-section">
      <div class="container">
        <!-- Breadcrumbs -->
        <nav class="pdp-breadcrumbs">
          <a href="#" onclick="event.preventDefault(); navigateTo('home');">Home</a>
          <span>/</span>
          <a href="#" onclick="event.preventDefault(); navigateTo('catalog');">Collections</a>
          <span>/</span>
          <a href="#" onclick="event.preventDefault(); navigateTo('catalog', { filterKey: 'category', filterValue: '${product.category}' });">${product.categoryName}</a>
          <span>/</span>
          <span class="active">${product.name}</span>
        </nav>

        <div class="pdp-main-grid">
          <!-- Gallery with Zoom -->
          <div class="pdp-gallery-wrap">
            <div class="pdp-thumbs-list">
              ${product.images.map((img, idx) => `
                <div class="pdp-thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchPDPMainImage('${img}', this)">
                  <img src="${img}" alt="${product.name} angle ${idx + 1}" class="pdp-thumb-img" />
                </div>
              `).join('')}
            </div>

            <div class="pdp-main-image-viewport" id="pdp-zoom-viewport">
              <img src="${product.images[0]}" alt="${product.name}" class="pdp-main-image" id="pdp-active-img" />
              <div class="pdp-zoom-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                Hover to Zoom
              </div>
            </div>
          </div>

          <!-- Product Details & Ordering -->
          <div class="pdp-info-col">
            <div class="pdp-brand-tag">Avantika Atelier • ${product.badge}</div>
            <h1 class="pdp-title">${product.name}</h1>
            <p class="pdp-tagline">${product.tagline}</p>

            <div class="pdp-rating-row">
              <span class="pdp-stars">★★★★★</span>
              <span class="pdp-review-count">(${product.rating} / 5.0 • ${product.reviewCount} Connoisseur Reviews)</span>
              <span class="pdp-verified-tag">Silk Mark Certified</span>
            </div>

            <!-- Price Breakdown -->
            <div class="pdp-price-box">
              <div style="display: flex; align-items: baseline;">
                <span class="pdp-price-amount">${formatINR(product.price)}</span>
                ${product.originalPrice ? `<span class="pdp-orig-price">${formatINR(product.originalPrice)}</span>` : ''}
                <span class="pdp-discount-tag">Artisan Direct Pricing</span>
              </div>
              <p class="pdp-tax-note">Inclusive of all taxes & insurance. Complimentary White-Glove Handcrafted Packaging.</p>
            </div>

            <!-- Color Swatch Selection -->
            <div class="pdp-section-block">
              <div class="pdp-block-header">
                <span class="pdp-block-title">Shade:</span>
                <span class="pdp-block-selection" id="pdp-selected-color-text">${product.availableColors[0].name}</span>
              </div>
              <div class="pdp-colors-list">
                ${product.availableColors.map((c, idx) => `
                  <div class="pdp-color-option ${idx === 0 ? 'active' : ''}" 
                       onclick="selectPDPColor('${c.name}', this)">
                    <span class="pdp-color-dot" style="background-color: ${c.hex};"></span>
                    <span style="font-size: 0.78rem;">${c.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Blouse / Stitching Selection -->
            <div class="pdp-section-block">
              <div class="pdp-block-header">
                <span class="pdp-block-title">Blouse / Silhouette Option:</span>
                <span class="pdp-block-selection">Includes 0.8m pure silk running fabric</span>
              </div>
              <div class="pdp-blouse-options">
                ${product.blouseOptions.map((opt, idx) => `
                  <label class="pdp-blouse-option ${idx === 0 ? 'active' : ''}">
                    <div style="display: flex; align-items: center;">
                      <input type="radio" name="pdp-blouse-radio" class="pdp-blouse-radio" value="${opt}" ${idx === 0 ? 'checked' : ''} onchange="updateBlouseOption(this)" />
                      <span>${opt}</span>
                    </div>
                  </label>
                `).join('')}
              </div>
            </div>

            <!-- Quantity & Action CTAs -->
            <div class="pdp-cta-row">
              <div class="quantity-control">
                <button class="quantity-btn" onclick="adjustPDPQty(-1)">−</button>
                <input type="number" id="pdp-qty-input" class="quantity-input" value="1" min="1" max="5" readonly />
                <button class="quantity-btn" onclick="adjustPDPQty(1)">+</button>
              </div>

              <button class="btn-add-to-cart" onclick="addPDPToCart('${product.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Add to Shopping Bag
              </button>

              <button class="btn-buy-now" onclick="buyNowPDP('${product.id}')">
                Buy Now
              </button>

              <button class="btn-pdp-wishlist ${isWishlisted ? 'active' : ''}" 
                      title="Save to Wishlist" 
                      onclick="toggleWishlist('${product.id}')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            <!-- Delivery Estimator -->
            <div class="pdp-delivery-box">
              <div class="pdp-delivery-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                Check Pincode Delivery Availability
              </div>
              <div class="pdp-pincode-form">
                <input type="text" id="pdp-pincode-input" class="pdp-pincode-input" placeholder="Enter 6-digit Pincode (e.g. 208001, 110001)" maxlength="6" />
                <button class="btn-pincode-check" onclick="checkDeliveryPincode()">Check</button>
              </div>
              <div id="pdp-pincode-status" class="pincode-result" style="display: none;"></div>
            </div>

            <!-- Accordions (Product Details, Craftsmanship, Care) -->
            <div class="pdp-accordions">
              <div class="accordion-item active">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                  <span>Craftsmanship & Origin Details</span>
                  <span class="icon">+</span>
                </button>
                <div class="accordion-content">
                  <p style="margin-bottom: 0.85rem;">${product.description}</p>
                  <div class="craft-specs-grid">
                    <div class="craft-spec-item">
                      <strong>Loom & Technique</strong>
                      ${product.craftsmanship.loom}
                    </div>
                    <div class="craft-spec-item">
                      <strong>Fabric Warp & Weft</strong>
                      ${product.craftsmanship.weftWarp}
                    </div>
                    <div class="craft-spec-item">
                      <strong>Zari Embellishment</strong>
                      ${product.craftsmanship.zari}
                    </div>
                    <div class="craft-spec-item">
                      <strong>Artisan Weave Time</strong>
                      ${product.craftsmanship.weavingTime}
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                  <span>Drape & Silhouette Specifications</span>
                  <span class="icon">+</span>
                </button>
                <div class="accordion-content">
                  <p>• <strong>Length:</strong> 5.5 meters saree with 0.8 meter matching unstitched blouse piece.</p>
                  <p>• <strong>Fall & Pico:</strong> Complimentary premium satin fall and edge pico hem pre-done.</p>
                  <p>• <strong>Weight:</strong> Approx 780 grams of heirloom heavy silk drape.</p>
                </div>
              </div>

              <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                  <span>Silk Care & Storage Guidance</span>
                  <span class="icon">+</span>
                </button>
                <div class="accordion-content">
                  <p>Pure silk and real zari require gentle custody. Dry clean only with specialized silk preservation. Store folded in a breathable muslin or pure cotton saree bag. Refold along new crease lines every six months.</p>
                </div>
              </div>

              <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                  <span>White-Glove Delivery & Heritage Guarantee</span>
                  <span class="icon">+</span>
                </button>
                <div class="accordion-content">
                  <p>Each saree is delivered in a handcrafted rigid gold-stamped Avantika keepsake chest. Includes official Handloom & Silk Mark authenticity seals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- You May Also Like Section -->
        <div style="margin-top: 5rem; border-top: 1px solid var(--border-subtle); padding-top: 4rem;">
          <div class="section-header" style="text-align: left; margin-bottom: 2rem;">
            <div class="section-pretitle" style="justify-content: flex-start;">Curated Pairings</div>
            <h2 class="section-title">You May Also Like</h2>
          </div>
          <div class="products-grid">
            ${PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 3).map(p => renderProductCardHTML(p)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach Zoom Lens listener
  attachZoomLens();
}

function switchPDPMainImage(src, thumbElement) {
  const mainImg = document.getElementById('pdp-active-img');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.pdp-thumb-item').forEach(t => t.classList.remove('active'));
  if (thumbElement) thumbElement.classList.add('active');
}

function selectPDPColor(colorName, element) {
  document.getElementById('pdp-selected-color-text').textContent = colorName;
  document.querySelectorAll('.pdp-color-option').forEach(opt => opt.classList.remove('active'));
  if (element) element.classList.add('active');
}

function updateBlouseOption(radioElement) {
  document.querySelectorAll('.pdp-blouse-option').forEach(l => l.classList.remove('active'));
  if (radioElement && radioElement.closest('label')) {
    radioElement.closest('label').classList.add('active');
  }
}

function adjustPDPQty(delta) {
  const input = document.getElementById('pdp-qty-input');
  if (!input) return;
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 5) val = 5;
  input.value = val;
}

function attachZoomLens() {
  const viewport = document.getElementById('pdp-zoom-viewport');
  const img = document.getElementById('pdp-active-img');
  if (!viewport || !img) return;

  viewport.addEventListener('mousemove', (e) => {
    const rect = viewport.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = 'scale(2.0)';
  });

  viewport.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1.0)';
  });
}

function toggleAccordion(button) {
  const item = button.closest('.accordion-item');
  if (item) {
    item.classList.toggle('active');
  }
}

function checkDeliveryPincode() {
  const input = document.getElementById('pdp-pincode-input');
  const status = document.getElementById('pdp-pincode-status');
  if (!input || !status) return;

  const pin = input.value.trim();
  if (pin.length !== 6 || isNaN(pin)) {
    status.style.display = 'block';
    status.style.color = '#C62828';
    status.innerHTML = '⚠ Please enter a valid 6-digit Indian Postal Code.';
    return;
  }

  // Delivery calculation simulation
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 3);
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const dateStr = deliveryDate.toLocaleDateString('en-IN', options);

  status.style.display = 'block';
  status.style.color = '#2E7D32';
  status.innerHTML = `✓ Available! Estimated White-Glove Delivery by <strong>${dateStr}</strong>. Direct dispatch from our boutique.`;
}

// ==========================================================================
// CART DRAWER & OPERATIONS
// ==========================================================================

function initDrawers() {
  // Drawer close buttons
  document.querySelectorAll('.btn-drawer-close').forEach(btn => {
    btn.addEventListener('click', closeAllDrawers);
  });

  const overlay = document.getElementById('drawer-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeAllDrawers);
  }

  // Cart open trigger
  const cartTrigger = document.getElementById('btn-open-cart');
  if (cartTrigger) {
    cartTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  }

  // Mobile menu open trigger
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      document.getElementById('mobile-nav-drawer').classList.add('active');
      document.getElementById('drawer-overlay').classList.add('active');
    });
  }
}

function openCartDrawer() {
  closeAllDrawers();
  renderCartDrawerContent();
  document.getElementById('cart-drawer').classList.add('active');
  document.getElementById('drawer-overlay').classList.add('active');
}

function closeAllDrawers() {
  document.getElementById('cart-drawer').classList.remove('active');
  document.getElementById('mobile-nav-drawer').classList.remove('active');
  document.getElementById('drawer-overlay').classList.remove('active');
}

function closeMobileMenu() {
  document.getElementById('mobile-nav-drawer').classList.remove('active');
  document.getElementById('drawer-overlay').classList.remove('active');
}

function addPDPToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const colorText = document.getElementById('pdp-selected-color-text')?.textContent || product.color;
  const selectedBlouseRadio = document.querySelector('input[name="pdp-blouse-radio"]:checked');
  const blouseVal = selectedBlouseRadio ? selectedBlouseRadio.value : product.blouseOptions[0];
  const qty = parseInt(document.getElementById('pdp-qty-input')?.value || 1);

  // Check if identical item already in cart
  const existingItem = AppState.cart.find(item => 
    item.productId === productId && item.color === colorText && item.blouse === blouseVal
  );

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    AppState.cart.push({
      productId: productId,
      color: colorText,
      blouse: blouseVal,
      quantity: qty,
      price: product.price
    });
  }

  saveCart();
  showToast(`Added “${product.name}” to your bag`);
  openCartDrawer();
}

function quickAddToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingItem = AppState.cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    AppState.cart.push({
      productId: productId,
      color: product.color,
      blouse: product.blouseOptions[0],
      quantity: 1,
      price: product.price
    });
  }

  saveCart();
  showToast(`Added “${product.name}” to your bag`);
  openCartDrawer();
}

function buyNowPDP(productId) {
  addPDPToCart(productId);
  closeAllDrawers();
  navigateTo('checkout');
}

function updateCartItemQty(index, delta) {
  if (!AppState.cart[index]) return;
  AppState.cart[index].quantity += delta;
  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
  }
  saveCart();
  renderCartDrawerContent();
  if (AppState.currentView === 'checkout') renderCheckoutView();
}

function removeCartItem(index) {
  AppState.cart.splice(index, 1);
  saveCart();
  renderCartDrawerContent();
  if (AppState.currentView === 'checkout') renderCheckoutView();
  showToast("Item removed from bag");
}

function renderCartDrawerContent() {
  const container = document.getElementById('cart-drawer-items-list');
  const subtotalDisplay = document.getElementById('cart-subtotal-val');
  const totalDisplay = document.getElementById('cart-total-val');
  const shippingMeterText = document.getElementById('shipping-meter-text');
  const shippingProgressBar = document.getElementById('shipping-meter-progress');

  if (!container) return;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">❦</div>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--maroon-900); margin-bottom: 0.5rem;">Your Shopping Bag is Empty</h4>
        <p style="font-size: 0.8rem; margin-bottom: 1.5rem;">Discover handloom masterworks and regal bridal weaves.</p>
        <button class="btn-luxury-primary" onclick="closeAllDrawers(); navigateTo('catalog');">
          Explore Creations
        </button>
      </div>
    `;
    if (subtotalDisplay) subtotalDisplay.textContent = formatINR(0);
    if (totalDisplay) totalDisplay.textContent = formatINR(0);
    if (shippingProgressBar) shippingProgressBar.style.width = '0%';
    if (shippingMeterText) shippingMeterText.textContent = "Add ₹25,000 for Complimentary White-Glove Courier";
    return;
  }

  let subtotal = 0;

  container.innerHTML = AppState.cart.map((item, idx) => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId) || {
      name: 'Regal Saree',
      images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80']
    };
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${product.images[0]}" alt="${product.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${product.name}</h4>
          <p class="cart-item-meta">${item.color} • ${item.blouse.split('(')[0]}</p>
          <div class="cart-item-price">${formatINR(item.price)}</div>
          <div class="cart-item-actions">
            <div class="cart-qty-mini">
              <button onclick="updateCartItemQty(${idx}, -1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="updateCartItemQty(${idx}, 1)">+</button>
            </div>
            <button class="btn-cart-remove" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Shipping progress calculation (Threshold: ₹25,000)
  const threshold = 25000;
  const progress = Math.min(100, Math.round((subtotal / threshold) * 100));

  if (shippingProgressBar) shippingProgressBar.style.width = `${progress}%`;
  if (shippingMeterText) {
    if (subtotal >= threshold) {
      shippingMeterText.innerHTML = `✨ <strong>Complimentary White-Glove Courier</strong> Unlocked!`;
    } else {
      const remaining = threshold - subtotal;
      shippingMeterText.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more for Complimentary Insured Courier`;
    }
  }

  if (subtotalDisplay) subtotalDisplay.textContent = formatINR(subtotal);
  if (totalDisplay) totalDisplay.textContent = formatINR(subtotal);
}

function updateCartBadge() {
  const badge = document.getElementById('nav-cart-badge');
  const mobileBadge = document.getElementById('mobile-cart-badge');
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = totalCount;
    badge.classList.add('badge-bounce');
    setTimeout(() => badge.classList.remove('badge-bounce'), 350);
  }
  if (mobileBadge) {
    mobileBadge.textContent = totalCount;
  }
}

// ==========================================================================
// WISHLIST OPERATIONS
// ==========================================================================

function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`);
  } else {
    AppState.wishlist.push(productId);
    showToast(`Saved “${product?.name || 'Item'}” to Wishlist`);
  }

  saveWishlist();

  // Re-render current view to reflect heart state
  if (AppState.currentView === 'home') renderHomeSections();
  else if (AppState.currentView === 'catalog') renderCatalogProducts();
  else if (AppState.currentView === 'pdp') renderPDPView();
}

function updateWishlistBadge() {
  const badge = document.getElementById('nav-wishlist-badge');
  const mobileBadge = document.getElementById('mobile-wishlist-badge');
  if (badge) badge.textContent = AppState.wishlist.length;
  if (mobileBadge) mobileBadge.textContent = AppState.wishlist.length;
}

// ==========================================================================
// SEARCH OVERLAY
// ==========================================================================

function initSearch() {
  const searchBtn = document.getElementById('btn-open-search');
  const searchModal = document.getElementById('search-modal');
  const closeSearchBtn = document.getElementById('btn-close-search');
  const searchInput = document.getElementById('search-main-input');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('active');
      setTimeout(() => searchInput?.focus(), 100);
    });
  }

  if (closeSearchBtn && searchModal) {
    closeSearchBtn.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      renderSearchResults(q);
    });
  }

  // Search tag pills
  document.querySelectorAll('.search-tag-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const term = pill.getAttribute('data-tag-term');
      if (searchInput) {
        searchInput.value = term;
        renderSearchResults(term.toLowerCase());
      }
    });
  });
}

function renderSearchResults(query) {
  const container = document.getElementById('search-results-grid');
  if (!container) return;

  if (!query) {
    container.innerHTML = '';
    return;
  }

  const results = PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.categoryName.toLowerCase().includes(query) ||
    p.fabric.toLowerCase().includes(query) ||
    p.color.toLowerCase().includes(query) ||
    p.occasion.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; color: var(--gold-200); padding: 3rem 0;">
        <p style="font-family: var(--font-serif); font-size: 1.25rem;">No creations found matching “${query}”</p>
        <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.8;">Try searching for “Banarasi”, “Bridal”, “Organza”, or “Tissue”.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(product => `
    <div class="product-card" onclick="document.getElementById('search-modal').classList.remove('active'); navigateTo('pdp', '${product.id}');">
      <div class="product-card-media">
        <img src="${product.images[0]}" alt="${product.name}" class="product-img-primary" />
        <span class="product-badge-tag">${product.tag}</span>
      </div>
      <div class="product-card-body">
        <div class="product-meta-top">
          <span class="product-category-label">${product.categoryName}</span>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${product.color}</span>
        </div>
        <h4 class="product-card-title">${product.name}</h4>
        <div class="product-price-row">
          <span class="product-price">${formatINR(product.price)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// CHECKOUT PAGE (VISUAL DEMO ONLY)
// ==========================================================================

function initCheckout() {
  // Demo checkout form submit
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      triggerDemoOrderSuccess();
    });
  }

  // Payment method tab switching
  document.querySelectorAll('.payment-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabTarget = e.currentTarget.getAttribute('data-payment-tab');
      document.querySelectorAll('.payment-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.payment-tab-panel').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      document.getElementById(`payment-panel-${tabTarget}`)?.classList.add('active');
    });
  });
}

function renderCheckoutView() {
  const itemsContainer = document.getElementById('checkout-items-list');
  const subtotalDisplay = document.getElementById('checkout-subtotal');
  const discountDisplay = document.getElementById('checkout-discount');
  const totalDisplay = document.getElementById('checkout-total');
  const emptyNote = document.getElementById('checkout-empty-notice');
  const checkoutGrid = document.getElementById('checkout-main-grid');

  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    if (emptyNote) emptyNote.style.display = 'block';
    if (checkoutGrid) checkoutGrid.style.display = 'none';
    return;
  } else {
    if (emptyNote) emptyNote.style.display = 'none';
    if (checkoutGrid) checkoutGrid.style.display = 'grid';
  }

  let subtotal = 0;

  itemsContainer.innerHTML = AppState.cart.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId) || {
      name: 'Luxury Saree',
      images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80']
    };
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="order-summary-item">
        <img src="${product.images[0]}" alt="${product.name}" class="order-summary-img" />
        <div style="flex: 1;">
          <h5 style="font-family: var(--font-serif); font-size: 0.9rem; color: var(--maroon-900); margin-bottom: 2px;">${product.name}</h5>
          <p style="font-size: 0.72rem; color: var(--text-light); margin-bottom: 4px;">Qty: ${item.quantity} • ${item.color}</p>
          <div style="font-weight: 600; font-size: 0.85rem; color: var(--maroon-800);">${formatINR(itemTotal)}</div>
        </div>
      </div>
    `;
  }).join('');

  const discountAmount = Math.round((subtotal * AppState.promoDiscount) / 100);
  const total = subtotal - discountAmount;

  if (subtotalDisplay) subtotalDisplay.textContent = formatINR(subtotal);
  if (discountDisplay) discountDisplay.textContent = discountAmount > 0 ? `-${formatINR(discountAmount)}` : '₹0';
  if (totalDisplay) totalDisplay.textContent = formatINR(total);
}

function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  const note = document.getElementById('promo-code-feedback');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'AVANTIKA10' || code === 'VASTRAA10') {
    AppState.promoDiscount = 10;
    AppState.promoAppliedCode = 'AVANTIKA10';
    if (note) {
      note.style.display = 'block';
      note.style.color = '#2E7D32';
      note.innerHTML = '✓ Royal Privilege Coupon Applied! 10% demo discount active.';
    }
    renderCheckoutView();
    showToast("10% Privilege Discount Applied");
  } else {
    if (note) {
      note.style.display = 'block';
      note.style.color = '#C62828';
      note.innerHTML = '⚠ Invalid promo code. Try "AVANTIKA10" for 10% privilege discount.';
    }
  }
}

function triggerDemoOrderSuccess() {
  const orderNum = 'AVAN-2026-' + Math.floor(1000 + Math.random() * 9000);
  const modal = document.getElementById('order-success-modal');
  const orderNumDisplay = document.getElementById('modal-order-number');
  const orderDateDisplay = document.getElementById('modal-order-date');
  const orderTotalDisplay = document.getElementById('modal-order-total');

  // Compute total
  let subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = Math.round((subtotal * AppState.promoDiscount) / 100);
  let total = subtotal - discountAmount;

  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 3);

  if (orderNumDisplay) orderNumDisplay.textContent = orderNum;
  if (orderDateDisplay) orderDateDisplay.textContent = deliveryDate.toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' });
  if (orderTotalDisplay) orderTotalDisplay.textContent = formatINR(total);

  if (modal) modal.classList.add('active');

  // Clear cart
  AppState.cart = [];
  saveCart();
}

function closeOrderModal() {
  const modal = document.getElementById('order-success-modal');
  if (modal) modal.classList.remove('active');
  navigateTo('home');
}

// ==========================================================================
// TOAST NOTIFICATIONS & GLOBAL HELPERS
// ==========================================================================

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--gold-400); font-size: 1.1rem;">❦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function initNavigation() {
  // Sticky Navbar shadow on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Nav Links event listeners
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-nav');
      const paramVal = el.getAttribute('data-nav-param');
      if (paramVal) {
        navigateTo(target, { filterKey: 'category', filterValue: paramVal });
      } else {
        navigateTo(target);
      }
    });
  });

  // Newsletter submit
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Welcome to Avantika Saree Centre VIP Circle.");
      newsletterForm.reset();
    });
  }
}
