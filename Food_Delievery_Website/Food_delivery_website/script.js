// ZaykaBox Multi-Page Interactive Script

const fallbackRestaurants = [
  {
    id: "masala-mint",
    name: "Masala Mint",
    cuisine: "Indian",
    rating: 4.8,
    deliveryTime: 28,
    openNow: true,
    isVeg: false,
    costForTwo: 500,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    dishes: [
      { id: "paneer-tikka", name: "Paneer Tikka", price: 199, isVeg: true, category: "Starters", desc: "Spiced paneer cubes grilled to perfection in clay oven.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=150&q=80" },
      { id: "veg-samosa", name: "Veg Samosa (2 pcs)", price: 99, isVeg: true, category: "Starters", desc: "Crispy fried pastry filled with spiced potato and peas.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=150&q=80" },
      { id: "masala-dosa", name: "Masala Dosa", price: 149, isVeg: true, category: "Breakfast", desc: "Crisp rice crepe stuffed with spiced mashed potato.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=150&q=80" },
      { id: "chole-bhature", name: "Chole Bhature", price: 179, isVeg: true, category: "Breakfast", desc: "Fluffy fried bread served with spicy chickpea curry.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=150&q=80" },
      { id: "butter-naan", name: "Butter Naan", price: 49, isVeg: true, category: "Sides", desc: "Soft leavened clay-oven bread loaded with butter.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=150&q=80" },
      { id: "jeera-rice", name: "Jeera Rice Bowl", price: 119, isVeg: true, category: "Sides", desc: "Aromatic basmati rice cooked with cumin seeds.", image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=150&q=80" },
      { id: "mango-lassi", name: "Mango Lassi", price: 89, isVeg: true, category: "Drinks", desc: "Traditional sweet yogurt drink blended with mango.", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=150&q=80" },
      { id: "masala-chai", name: "Premium Masala Chai", price: 39, isVeg: true, category: "Drinks", desc: "Hot brewed tea with milk and exotic Indian spices.", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  {
    id: "urban-wok",
    name: "Urban Wok",
    cuisine: "Chinese",
    rating: 4.5,
    deliveryTime: 22,
    openNow: true,
    isVeg: false,
    costForTwo: 400,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    dishes: [
      { id: "spring-rolls", name: "Spring Rolls (4 pcs)", price: 129, isVeg: true, category: "Starters", desc: "Crispy fried rolls packed with fresh julienned vegetables.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80" },
      { id: "chicken-dimsums", name: "Steamed Chicken Dimsums", price: 199, isVeg: false, category: "Starters", desc: "Soft dumplings stuffed with seasoned minced chicken.", image: "https://images.unsplash.com/photo-1496116211217-41af8963457b?auto=format&fit=crop&w=150&q=80" },
      { id: "congee-bowl", name: "Egg Congee Bowl", price: 119, isVeg: false, category: "Breakfast", desc: "Hearty, comforting savory rice porridge with green onions.", image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=150&q=80" },
      { id: "hakka-noodles", name: "Hakka Noodles", price: 169, isVeg: true, category: "Sides", desc: "Wok-tossed noodles with colorful farm-fresh vegetables.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=150&q=80" },
      { id: "veg-fried-rice", name: "Veg Fried Rice", price: 159, isVeg: true, category: "Sides", desc: "Classic wok-fried rice with garlic and assorted veggies.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=150&q=80" },
      { id: "jasmine-tea", name: "Hot Jasmine Tea", price: 79, isVeg: true, category: "Drinks", desc: "Soothing fragrant tea brewed from natural jasmine blossoms.", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=150&q=80" },
      { id: "iced-lemon-tea", name: "Iced Lemon Tea", price: 89, isVeg: true, category: "Drinks", desc: "Chilled black tea with fresh lemon slices and mint.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  {
    id: "slice-studio",
    name: "Slice Studio",
    cuisine: "Italian",
    rating: 4.4,
    deliveryTime: 34,
    openNow: false,
    isVeg: true,
    costForTwo: 600,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    dishes: [
      { id: "garlic-bread", name: "Cheesy Garlic Bread", price: 119, isVeg: true, category: "Starters", desc: "Toasted baguette slices with fresh garlic butter and mozzarella.", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=150&q=80" },
      { id: "bruschetta", name: "Tomato Bruschetta", price: 149, isVeg: true, category: "Starters", desc: "Grilled sourdough topped with diced tomatoes, garlic, and basil.", image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=150&q=80" },
      { id: "avocado-toast", name: "Avocado Sourdough Toast", price: 219, isVeg: true, category: "Breakfast", desc: "Smashed avocado, sea salt, cherry tomatoes on toasted crusty bread.", image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" },
      { id: "french-fries", name: "Salted French Fries", price: 109, isVeg: true, category: "Sides", desc: "Golden fried potato batons sprinkled with natural sea salt.", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=150&q=80" },
      { id: "margherita", name: "Classic Margherita Pizza", price: 229, isVeg: true, category: "Sides", desc: "Hand-stretched crust, premium tomato sauce, fresh mozzarella, basil.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80" },
      { id: "espresso", name: "Espresso Shot", price: 69, isVeg: true, category: "Drinks", desc: "Rich and intense shot of premium roasted Arabica coffee.", image: "https://images.unsplash.com/photo-1510707572719-dd7c18943e0f?auto=format&fit=crop&w=150&q=80" },
      { id: "aperol-spritz", name: "Aperol Spritz (Mocktail)", price: 149, isVeg: true, category: "Drinks", desc: "Sparkling non-alcoholic citrus mocktail with fresh orange.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  {
    id: "tokyo-tray",
    name: "Tokyo Tray",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: 38,
    openNow: true,
    isVeg: false,
    costForTwo: 800,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
    dishes: [
      { id: "edamame", name: "Salted Edamame Bowls", price: 149, isVeg: true, category: "Starters", desc: "Steamed green soybeans in pod, sprinkled with coarse sea salt.", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=150&q=80" },
      { id: "gyoza", name: "Pan-Seared Pork Gyoza", price: 189, isVeg: false, category: "Starters", desc: "Japanese style fried dumplings stuffed with spiced pork.", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=150&q=80" },
      { id: "miso-soup", name: "Traditional Miso Soup", price: 99, isVeg: false, category: "Breakfast", desc: "Warm dashi stock mixed with miso paste, seaweed, and tofu cubes.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=150&q=80" },
      { id: "seaweed-salad", name: "Chilled Seaweed Salad", price: 139, isVeg: true, category: "Sides", desc: "Sweet, crunchy sesame-marinated green wakame salad.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=150&q=80" },
      { id: "salmon-sushi", name: "Salmon Sushi Set (6 pcs)", price: 399, isVeg: false, category: "Sides", desc: "Fresh salmon slices over premium vinegared sushi rice.", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=150&q=80" },
      { id: "matcha-latte", name: "Matcha Latte Green Milk", price: 119, isVeg: true, category: "Drinks", desc: "Finely ground organic green tea whisked into creamy milk.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  {
    id: "burger-bay",
    name: "Burger Bay",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: 20,
    openNow: true,
    isVeg: false,
    costForTwo: 350,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    dishes: [
      { id: "onion-rings", name: "Crispy Onion Rings", price: 99, isVeg: true, category: "Starters", desc: "Battered and deep-fried sweet white onion slices.", image: "https://images.unsplash.com/photo-1639024471283-2bc7b3c6a267?auto=format&fit=crop&w=150&q=80" },
      { id: "chicken-wings", name: "BBQ Glazed Chicken Wings", price: 189, isVeg: false, category: "Starters", desc: "Tender chicken wings tossed in rich smoked barbecue sauce.", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=150&q=80" },
      { id: "pancakes", name: "Maple Syrup Pancakes", price: 149, isVeg: true, category: "Breakfast", desc: "Fluffy buttermilk pancakes topped with sweet Canadian maple syrup.", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=150&q=80" },
      { id: "classic-burger", name: "Classic Cheese Burger", price: 199, isVeg: false, category: "Sides", desc: "Juicy beef/chicken patty with melted cheddar, lettuce, onions.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80" },
      { id: "chocolate-shake", name: "Thick Chocolate Shake", price: 129, isVeg: true, category: "Drinks", desc: "Double chocolate blended with cold creamy milk and cream.", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  {
    id: "green-fork",
    name: "Green Fork",
    cuisine: "Healthy",
    rating: 4.9,
    deliveryTime: 26,
    openNow: true,
    isVeg: true,
    costForTwo: 450,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    dishes: [
      { id: "hummus-pita", name: "Hummus & Warm Pita", price: 149, isVeg: true, category: "Starters", desc: "Smooth chickpeas blend with tahini and olive oil, served with pita.", image: "https://images.unsplash.com/photo-1577906096429-f73df2c3a273?auto=format&fit=crop&w=150&q=80" },
      { id: "quinoa-porridge", name: "Nutty Quinoa Porridge", price: 169, isVeg: true, category: "Breakfast", desc: "Cooked quinoa in almond milk, berries, honey and toasted almonds.", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=150&q=80" },
      { id: "quinoa-salad", name: "Quinoa Power Salad", price: 239, isVeg: true, category: "Sides", desc: "Quinoa, kale, organic cucumber, cherry tomato and lime vinaigrette.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" },
      { id: "green-detox", name: "Celery & Spinach Detox", price: 139, isVeg: true, category: "Drinks", desc: "Cold-pressed celery, cucumber, green apple, spinach and mint juice.", image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&w=150&q=80" }
    ]
  }
];

const state = {
  restaurants: [...fallbackRestaurants],
  filteredRestaurants: [...fallbackRestaurants],
  cart: new Map(JSON.parse(sessionStorage.getItem('zaykaBoxCart')) || []),
  search: "",
  sortMode: "topRated", // topRated, costLowToHigh
  vegOnly: false
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  highlightActiveRoute();
  bindGlobalEvents();
  updateCartCount();

  const path = window.location.pathname;

  if (path.includes("restaurants.html")) {
    initRestaurantsPage();
  } else if (path.includes("menu.html")) {
    initMenuPage();
  } else if (path.includes("checkout.html")) {
    initCheckoutPage();
  } else if (path.includes("track.html")) {
    initTrackPage();
  } else if (path.includes("login.html")) {
    initLoginPage();
  } else if (path.includes("offers.html")) {
    initOffersPage();
  } else {
    // Default homepage
    initHomePage();
  }
  
  initAnimations();
}

// Global active path route highlighting
function highlightActiveRoute() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-menu a.nav-link");
  
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    
    // Normalize path matches (e.g. index.html vs root /)
    const isRoot = (path === "/" || path === "" || path.endsWith("/"));
    const isHome = isRoot || path.includes("index.html");
    
    if (href === "index.html" && isHome) {
      link.classList.add("active");
    } else if (href !== "index.html" && path.includes(href)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function bindGlobalEvents() {
  // Sticky glassmorphism header scroll transition
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Theme button locks Dark Luxury aesthetic
  const themeToggle = document.querySelector("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      showToast("✨ ZaykaBox Luxury Edition: Locked in Premium Dark theme.");
    });
  }

  // Mobile navbar menu toggle
  const menuToggle = document.querySelector("#menuToggle");
  const navMenu = document.querySelector("#navMenu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Cart FAB redirect
  const fab = document.querySelector("#cartFab");
  if (fab) {
    fab.addEventListener("click", () => {
      window.location.href = "checkout.html";
    });
  }
}

function initHomePage() {
  const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#searchInput");

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = encodeURIComponent(searchInput.value.trim());
      window.location.href = `restaurants.html?q=${query}`;
    });
  }
}

function initRestaurantsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get('q');
  if (q) {
    state.search = q.toLowerCase();
    const input = document.getElementById('searchInput');
    if (input) input.value = q;
  }

  const sortBtnTopRated = document.getElementById("sortTopRated");
  const sortBtnCost = document.getElementById("sortCost");
  const vegOnlyToggle = document.getElementById("vegOnlyToggle");

  if (sortBtnTopRated) sortBtnTopRated.addEventListener("click", () => {
    state.sortMode = "topRated";
    sortBtnTopRated.classList.add('active');
    if (sortBtnCost) sortBtnCost.classList.remove('active');
    applyFilters();
  });

  if (sortBtnCost) sortBtnCost.addEventListener("click", () => {
    state.sortMode = "costLowToHigh";
    sortBtnCost.classList.add('active');
    if (sortBtnTopRated) sortBtnTopRated.classList.remove('active');
    applyFilters();
  });

  if (vegOnlyToggle) vegOnlyToggle.addEventListener("change", (e) => {
    state.vegOnly = e.target.checked;
    applyFilters();
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.addEventListener("input", (e) => {
    state.search = e.target.value.toLowerCase();
    applyFilters();
  });

  applyFilters();
}

function applyFilters() {
  state.filteredRestaurants = state.restaurants.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(state.search) || r.cuisine.toLowerCase().includes(state.search);
    const matchesVeg = !state.vegOnly || r.isVeg;
    return matchesSearch && matchesVeg;
  });

  if (state.sortMode === "topRated") {
    state.filteredRestaurants.sort((a, b) => b.rating - a.rating);
  } else if (state.sortMode === "costLowToHigh") {
    state.filteredRestaurants.sort((a, b) => a.costForTwo - b.costForTwo);
  }

  renderRestaurants();
}

function renderRestaurants() {
  const grid = document.getElementById("restaurantGrid");
  const heading = document.getElementById("resultHeading");
  if (!grid) return;

  heading.textContent = `${state.filteredRestaurants.length} restaurants found`;
  grid.innerHTML = "";

  if (state.filteredRestaurants.length === 0) {
    grid.innerHTML = '<div class="empty-state">No kitchens match your filter choices.</div>';
    return;
  }

  state.filteredRestaurants.forEach(r => {
    const card = document.createElement("article");
    card.className = "restaurant-card animate-on-scroll is-visible";
    card.innerHTML = `
      <figure style="cursor:pointer;" onclick="window.location.href='menu.html?id=${r.id}'">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <span class="badge" style="background:var(--accent);color:#fff;">Flat 20% OFF</span>
      </figure>
      <div class="card-body">
        <h3 style="cursor:pointer; margin:0 0 6px 0;" onclick="window.location.href='menu.html?id=${r.id}'">${r.name}</h3>
        <div class="meta" style="margin-bottom:10px;">
          <span>${r.cuisine} ${r.isVeg ? '<span style="color:var(--good); font-weight:700;">• Veg Only</span>' : ''}</span>
          <span><strong style="color:var(--gold)">${r.rating}★</strong> · ${r.deliveryTime} min</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <p style="margin:0; font-size:0.88rem; font-weight:bold; color:var(--muted)">₹${r.costForTwo} for two</p>
          <a href="menu.html?id=${r.id}" style="color:var(--accent-2); font-weight:bold; font-size:0.85rem; text-decoration:none; display:flex; align-items:center; gap:2px;">View Menu →</a>
        </div>
      </div>
    `;
    grid.append(card);
  });
}

// Menu rendering with split panels
function initMenuPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || 'masala-mint';
  const restaurant = state.restaurants.find(r => r.id === id);
  
  if (!restaurant) {
    document.getElementById("menuListingPanel").innerHTML = '<div style="padding:40px;text-align:center;"><h2>Kitchen not found</h2><a href="restaurants.html" class="cta-button">Browse kitchens</a></div>';
    return;
  }

  // Update left sticky preview panel details
  const nameEl = document.getElementById("restaurantName");
  if (nameEl) nameEl.textContent = restaurant.name;
  
  const metaEl = document.getElementById("restaurantMeta");
  if (metaEl) metaEl.textContent = `${restaurant.cuisine} · ${restaurant.rating}★ · ${restaurant.deliveryTime} min · ₹${restaurant.costForTwo} for two`;
  
  const imgEl = document.getElementById("restaurantImage");
  if (imgEl) imgEl.src = restaurant.image;

  // Render right panel category lists
  const listingPanel = document.getElementById("menuListingPanel");
  if (!listingPanel) return;
  listingPanel.innerHTML = '';

  const categories = ["Starters", "Breakfast", "Sides", "Drinks"];
  
  categories.forEach(cat => {
    const catDishes = restaurant.dishes.filter(d => d.category === cat);
    if (catDishes.length === 0) return;

    const catBlock = document.createElement("div");
    catBlock.className = "category-block";
    catBlock.id = `cat-${cat.toLowerCase()}`;
    
    const catHeading = document.createElement("h2");
    catHeading.textContent = cat;
    catBlock.appendChild(catHeading);

    catDishes.forEach(dish => {
      const key = `${restaurant.id}-${dish.id}`;
      const qty = state.cart.get(key)?.quantity || 0;

      const itemCard = document.createElement("div");
      itemCard.className = "menu-item-row";
      
      const thumbUrl = dish.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80";

      itemCard.innerHTML = `
        <img class="menu-item-img" src="${thumbUrl}" alt="${dish.name}" loading="lazy">
        <div class="menu-item-details">
          <div class="menu-item-top">
            <span class="menu-item-title">${dish.name} ${dish.isVeg ? '<span style="color:var(--good); font-size: 0.8rem; font-weight:bold;">🥬 VEG</span>' : '<span style="color:var(--accent); font-size: 0.8rem; font-weight:bold;">🍗 NON-VEG</span>'}</span>
            <span class="menu-item-dashed-line"></span>
            <span class="menu-item-price-tag">₹${dish.price}</span>
          </div>
          <p class="menu-item-desc">${dish.desc}</p>
          
          <div class="quantity-row" style="margin-top: 14px; max-width: 130px;">
            <div class="qty-controls" id="ctrl-${dish.id}">
              ${qty > 0 ? `
                <button type="button" class="qty-btn" onclick="changeQuantity('${restaurant.id}', '${dish.id}', -1)" style="padding:4px 10px; border-radius:6px; font-weight:800; border:none; cursor:pointer;">−</button>
                <span class="qty-count" style="font-weight:800; min-width: 16px; text-align:center;">${qty}</span>
                <button type="button" class="qty-btn" onclick="changeQuantity('${restaurant.id}', '${dish.id}', 1)" style="padding:4px 10px; border-radius:6px; font-weight:800; border:none; cursor:pointer;">+</button>
              ` : `
                <button type="button" class="qty-btn add-btn" onclick="changeQuantity('${restaurant.id}', '${dish.id}', 1)" style="min-width:75px; background:var(--accent); color:#fff; border:none; padding:6px 14px; border-radius:24px; font-weight:800; cursor:pointer;">ADD</button>
              `}
            </div>
          </div>
        </div>
      `;
      catBlock.appendChild(itemCard);
    });

    listingPanel.appendChild(catBlock);
  });

  // Link bottom floating pill nav triggers
  const links = document.querySelectorAll(".floating-pill-nav a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          links.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  });
}

window.changeQuantity = (restaurantId, dishId, delta) => {
  const restaurant = state.restaurants.find(r => r.id === restaurantId);
  const dish = restaurant?.dishes.find(d => d.id === dishId);
  if (!restaurant || !dish) return;

  const key = `${restaurantId}-${dishId}`;
  const existing = state.cart.get(key);
  let newQty = (existing?.quantity || 0) + delta;

  if (newQty <= 0) {
    state.cart.delete(key);
  } else {
    state.cart.set(key, { ...dish, key, restaurant: restaurant.name, quantity: newQty });
  }

  sessionStorage.setItem('zaykaBoxCart', JSON.stringify([...state.cart]));
  
  if (delta > 0) pulseFab();
  updateCartCount();

  if (window.location.pathname.includes("menu.html")) {
    initMenuPage();
  } else if (window.location.pathname.includes("checkout.html")) {
    renderCheckoutSummary();
  }
};

function pulseFab() {
  const fab = document.getElementById("cartFab");
  if (!fab) return;
  fab.classList.remove("jiggle");
  void fab.offsetWidth; 
  fab.classList.add("jiggle");
}

function updateCartCount() {
  const totalItems = [...state.cart.values()].reduce((sum, item) => sum + item.quantity, 0);
  const counts = document.querySelectorAll(".cart-count");
  counts.forEach(el => el.textContent = totalItems);
  
  const pillCheckoutBtn = document.getElementById("pillCheckoutBtn");
  if (pillCheckoutBtn) {
    if (totalItems === 0) {
      pillCheckoutBtn.style.opacity = "0.5";
      pillCheckoutBtn.style.pointerEvents = "none";
    } else {
      pillCheckoutBtn.style.opacity = "1";
      pillCheckoutBtn.style.pointerEvents = "auto";
    }
  }
}

function initCheckoutPage() {
  renderCheckoutSummary();

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (state.cart.size === 0) {
        showToast("Your cart is empty!");
        return;
      }
      
      // Store checkout details temporarily in session for tracking page
      const details = {
        name: document.getElementById("customerName").value.trim(),
        phone: document.getElementById("customerPhone").value.trim(),
        address: document.getElementById("customerAddress").value.trim(),
        total: document.getElementById("grandTotal").textContent
      };
      sessionStorage.setItem("zaykaBoxActiveOrder", JSON.stringify(details));

      state.cart.clear();
      sessionStorage.setItem('zaykaBoxCart', '[]');
      updateCartCount();
      
      showToast("Order placed successfully! Redirecting to tracking map...", 2000);
      setTimeout(() => {
        window.location.href = "track.html?status=active";
      }, 1500);
    });
  }
}

function renderCheckoutSummary() {
  const itemsContainer = document.getElementById("checkoutItems");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("taxAmount");
  const deliveryEl = document.getElementById("deliveryFee");
  const totalEl = document.getElementById("grandTotal");

  if (!itemsContainer) return;

  if (state.cart.size === 0) {
    itemsContainer.innerHTML = '<div class="empty-state">Your basket is empty.</div>';
    subtotalEl.textContent = "₹0";
    taxEl.textContent = "₹0";
    deliveryEl.textContent = "₹0";
    totalEl.textContent = "₹0";
    return;
  }

  itemsContainer.innerHTML = "";
  let subtotal = 0;

  state.cart.forEach(item => {
    subtotal += item.price * item.quantity;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.style = "display:flex; justify-content:space-between; margin-bottom:12px; align-items:center;";
    
    // Extract actual restaurant ID and dish ID from key
    const parts = item.key.split('-');
    const restId = parts[0];
    const dishId = parts.slice(1).join('-');

    div.innerHTML = `
      <div>
        <h3 style="margin:0;font-size:0.95rem; font-weight:bold;">${item.name}</h3>
        <small style="color:var(--muted)">${item.restaurant}</small>
      </div>
      <div style="display:flex; gap:12px; align-items:center;">
        <button onclick="changeQuantity('${restId}', '${dishId}', -1)" style="padding:4px 10px; border-radius:4px; border:1px solid var(--line); background:var(--surface-2); font-weight:bold; cursor:pointer;">-</button>
        <span style="font-weight:bold;">${item.quantity}</span>
        <button onclick="changeQuantity('${restId}', '${dishId}', 1)" style="padding:4px 10px; border-radius:4px; border:1px solid var(--line); background:var(--surface-2); font-weight:bold; cursor:pointer;">+</button>
        <span style="font-weight:bold; min-width:70px; text-align:right;">₹${item.price * item.quantity}</span>
      </div>
    `;
    itemsContainer.appendChild(div);
  });

  const tax = Math.round(subtotal * 0.05);
  const delivery = 40;
  const grandTotal = subtotal + tax + delivery;

  subtotalEl.textContent = "₹" + subtotal;
  taxEl.textContent = "₹" + tax;
  deliveryEl.textContent = "₹" + delivery;
  totalEl.textContent = "₹" + grandTotal;
}

// Cinematic Login Verification with shaking effect
function initLoginPage() {
  const loginForm = document.getElementById("loginForm");
  const loginCard = document.getElementById("loginCard");
  
  if (loginForm && loginCard) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("emailInput").value.trim();
      const password = document.getElementById("passwordInput").value.trim();
      
      if (!email || !password) {
        // Shaking keyframe animation triggers
        loginCard.classList.remove("shake-login-card");
        void loginCard.offsetWidth; // force redraw
        loginCard.classList.add("shake-login-card");
        
        // Remove shake class after animation completes
        setTimeout(() => {
          loginCard.classList.remove("shake-login-card");
        }, 500);
        
        showToast("Please fill in email and password!");
      } else {
        // Success
        showToast("Login Successful! Redirecting...", 2000);
        sessionStorage.setItem("zaykaBoxUser", email);
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      }
    });
  }
}

// Live Track Order Timeline & Map centering
function initTrackPage() {
  const orderDetails = JSON.parse(sessionStorage.getItem("zaykaBoxActiveOrder"));
  const trackHeading = document.getElementById("trackHeading");
  const trackAddress = document.getElementById("trackAddress");
  const trackAmount = document.getElementById("trackAmount");
  
  if (orderDetails) {
    if (trackHeading) trackHeading.textContent = `Tracking Order for ${orderDetails.name}`;
    if (trackAddress) trackAddress.textContent = orderDetails.address;
    if (trackAmount) trackAmount.textContent = orderDetails.total;
  } else {
    // If no active order, mock a default order
    if (trackHeading) trackHeading.textContent = `Tracking Simulated Order ZB-9023`;
    if (trackAddress) trackAddress.textContent = "Connaught Place Radial Road, New Delhi, India";
    if (trackAmount) trackAmount.textContent = "₹480";
  }

  // Animate delivery milestones
  const steps = document.querySelectorAll(".tracking-timeline-item");
  let currentStep = 0;
  
  function advanceTimeline() {
    if (currentStep < steps.length) {
      steps.forEach((step, idx) => {
        if (idx < currentStep) {
          step.classList.remove("active");
          step.classList.add("completed");
        } else if (idx === currentStep) {
          step.classList.add("active");
          step.classList.remove("completed");
        } else {
          step.classList.remove("active", "completed");
        }
      });
      currentStep++;
      setTimeout(advanceTimeline, 6000); // Progress steps every 6 seconds
    }
  }
  
  advanceTimeline();
}

// Offers Page Flip Logic
function initOffersPage() {
  document.querySelectorAll(".coupon-card").forEach(card => {
    card.addEventListener("click", () => {
      // Show mini modal or copy code toast
      const code = card.querySelector(".coupon-code");
      if (code) {
        navigator.clipboard.writeText(code.textContent);
        showToast(`Promo code "${code.textContent}" copied to clipboard!`);
      }
    });
  });
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll, .restaurant-card').forEach(el => {
    observer.observe(el);
  });
}

// Global Custom Toast Notification
function showToast(message, duration = 3000) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth; 
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}
