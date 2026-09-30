# Avantika Saree Centre And Garments — Luxury Indian Sarees & Ethnic Haute Couture

A complete, premium frontend-only e-commerce website for **Avantika Saree Centre And Garments** (Flagship Boutique: Thakur Churaha).

---

## ✦ Brand Aesthetics & Design System
- **Color Palette:** Warm ivory and cream background (`#FAF7F2`, `#FDFBF8`), deep royal maroon accents (`#5B121E`, `#3E0B14`), and muted regal gold details (`#C9A75E`, `#B79243`).
- **Typography:**
  - Headings: *Playfair Display* & *Cinzel* (Google Fonts) with editorial serif styling.
  - Body: *Plus Jakarta Sans* for clean, modern readability.
- **Visuals:** High-fashion photography, generous whitespace, subtle borders, soft gold glows, and smooth transitions.

---

## ✦ Key Features & Pages

### 1. Luxury Navbar & Mobile-First Navigation
- **Avantika Saree Centre & Garments** logo with royal insignia and *Thakur Churaha* subtitle.
- **Fixed Mobile Bottom App Bar**: One-thumb navigation on phones (Home, Shop, Search, Wishlist with badge, Bag with badge).
- **Responsive Navigation Drawer**: Full mobile drawer with instant direct-action buttons (Book Bridal Consultation, Call Boutique, Thakur Churaha showroom details).
- **Mobile Filter & Refine Drawer**: Slide-out filter panel on phones with live category, fabric, color, price slider, and occasion filters.
- **Sticky PDP Action Bar**: Floating bottom purchase bar on mobile for instant "Add to Bag" and "Buy Now".
- **iOS & Android Optimization**: 16px inputs (prevents iOS auto-zoom), 44px+ touch targets, `env(safe-area-inset-bottom)` support, and sharp 2-column mobile product cards.

### 2. Editorial Homepage
- **Cinematic Hero Banner:** Featuring luxury saree photography, *"Timeless Indian Elegance"*, and quick CTAs to *"Shop Collection"* & *"Explore Bridal"*.
- **Collection Cards:** Silk Sarees, Bridal Sarees, Organza & Tissue, and Festive Edit.
- **New Arrivals Grid:** Direct access to the newest handcrafted creations.
- **“Woven to Be Remembered” Story Section:** Celebrates the heritage of pit looms, Banaras, Kanchipuram, and the **Avantika Saree Centre & Garments** flagship at **Thakur Churaha**.
- **Bridal Haute Couture Campaign:** Spotlight on wedding trousseaus and private boutique consultations.
- **Customer Testimonials:** Authentic reviews from royal brides and connoisseurs.
- **Instagram Fashion Gallery:** Social snapshots and reels styling tags.
- **VIP Newsletter Salon:** Elegant subscription form with instant feedback.
- **Premium Footer:** Complete navigation, store locator, boutique hours, and customer care.

### 3. Product Listing Page (Catalog)
- Dynamic product grid with instant multi-facet filtering:
  - **Category:** Sarees, Bridal, Lehengas, Suits & Kurtis, Men's Suiting.
  - **Fabric:** Pure Katan Silk, Silk Organza, Tissue & Zari, Velvet Brocade, Raw Silk, Chanderi.
  - **Colour:** Crimson Red, Ivory Cream, Rose Gold, Emerald Green, Ruby Deep Red, Champagne Gold, Peacock Blue, Saffron Orange.
  - **Price Range Slider:** Up to ₹60,000 with real-time feedback.
  - **Occasion:** Bridal & Wedding, Reception Gala, Festive & Diwali, Cocktails & Sangeet, Royal Soiree.
- **Sorting:** Newest Additions, Price: Low to High, Price: High to Low, Most Coveted.
- **Active Filter Chips:** With individual removal and "Reset All".

### 4. Realistic Demo Products Included
- **Crimson Banarasi Silk Saree** — ₹18,500
- **Ivory Organza Bloom** — ₹18,400
- **Rose Gold Tissue Saree** — ₹22,900
- **Emerald Heritage Silk** — ₹24,500
- **Ruby Bridal Weave** — ₹32,000
- **Champagne Zari Saree** — ₹21,800
- **Noor Jahan Zardozi Velvet Lehenga** — ₹48,000
- **Royal Peacock Kanjivaram Brocade** — ₹28,500
- **Maharaja Raw Silk Suiting & Sherwani** — ₹34,500
- **Saffron Chanderi Anarkali Suit Set** — ₹14,200
- **Gulabi Meenakari Georgette Saree** — ₹16,900
- **Marigold Banarasi Katan Silk Saree** — ₹19,800

### 5. Product Detail Page (PDP)
- **High-Resolution Gallery:** Multi-image thumbnail switcher.
- **Hover Zoom Lens:** Magnifies fine silk and zari details smoothly on mouse movement.
- **Pricing & Tags:** Displays price, original price, artisan direct savings, and Silk Mark certification.
- **Interactive Color Swatches & Blouse Silhouette Selectors.**
- **Quantity Selector (+ / -).**
- **Add to Shopping Bag & Buy Now Buttons.**
- **Pincode Delivery Estimator:** Checks Indian 6-digit postal codes and calculates delivery dates.
- **Product Accordion:** Details on craftsmanship, drape specifications, care instructions, and heirloom packaging.
- **“You May Also Like”:** Related pairing recommendations.

### 6. Shopping Bag Drawer
- Slide-over drawer with glass backdrop.
- Product thumbnails, selected options, quantity adjustment, and item removal.
- **Complimentary Shipping Meter:** Live progress bar toward the ₹25,000 white-glove courier threshold.
- Subtotal, GST, and Total calculation.
- One-click route to checkout.

### 7. Visual Demonstration Checkout
- 3-step checkout interface:
  1. Delivery Contact & Shipping Address.
  2. Courier Option (Royal White-Glove vs. Same-Day Metro Courier).
  3. Payment Options UI (UPI / QR, Credit & Debit Cards, Net Banking, and Cash on Delivery).
- **Promo Code:** Test with **`AVANTIKA10`** for a 10% privilege discount.
- **Order Confirmation Modal:** Simulates instant order registration with a unique order number (`AVAN-2026-XXXX`), estimated delivery date, and receipt.

### 8. Bio Information Integration
- Incorporates **Avantika Saree Centre and Garments** (Thakur Churaha):
  - Featured in the announcement bar, brand tagline, storytelling section, flagship boutique locator, consultation booking modal, and footer.
  - Covers **Designer Sarees, Bridal Lehengas, Suits, Kurtis, and Men's Suiting**, highlighting direct artisan wholesale pricing and royal quality.

---

## ✦ How to Run
This is a standalone, frontend-only project with zero dependencies:
1. Double-click `index.html` to open directly in any modern web browser.
2. Or serve via any local static server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
