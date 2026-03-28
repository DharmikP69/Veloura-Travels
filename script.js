const packages = [
  {
    id: 1,
    name: "Thailand — Island Escape",
    region: "asia",
    regionLabel: "Asia",
    image: "image/thailand.jpg",
    desc: "Experience the best of Thailand — pristine beaches, vibrant Bangkok nights, and serene temples in Chiang Mai.",
    price: "₹65,000",
    days: "7 Days / 6 Nights",
    departure: "Mumbai / Delhi",
    includes: ["Return flights", "5-star hotel accommodation", "Phi Phi Islands boat tour", "Bangkok city tour", "Daily breakfast & select dinners", "Travel insurance"]
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    region: "asia",
    regionLabel: "Asia",
    image: "image/bali.jpg",
    desc: "Discover Bali's terraced rice fields, ancient temples, surf beaches, and legendary hospitality.",
    price: "₹58,000",
    days: "6 Days / 5 Nights",
    departure: "Mumbai",
    includes: ["Return flights", "Villa accommodation", "Ubud cultural tour", "Mount Batur sunrise trek", "Seminyak beach day", "Daily breakfast"]
  },
  {
    id: 3,
    name: "Malaysia Explorer",
    region: "asia",
    regionLabel: "Asia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=700&q=80",
    desc: "From the Twin Towers of Kuala Lumpur to the rainforests of Borneo — Malaysia has it all.",
    price: "₹52,000",
    days: "6 Days / 5 Nights",
    departure: "Delhi / Bangalore",
    includes: ["Return flights", "4-star hotel", "Petronas Towers visit", "Batu Caves tour", "Genting Highlands", "Airport transfers"]
  },
  {
    id: 4,
    name: "Dubai Luxury",
    region: "middle-east",
    regionLabel: "Middle East",
    image: "image/dubai.jpg",
    desc: "The ultimate Dubai experience — Burj Khalifa, desert safari, gold souk, and world-class dining.",
    price: "₹75,000",
    days: "5 Days / 4 Nights",
    departure: "Any Indian city",
    includes: ["Return flights", "5-star hotel", "Burj Khalifa At the Top", "Desert Safari with BBQ", "Dhow cruise dinner", "City tour", "Travel insurance"]
  },
  {
    id: 5,
    name: "Abu Dhabi Heritage",
    region: "middle-east",
    regionLabel: "Middle East",
    image: "image/abudhabi.jpg",
    desc: "Explore the cultural heart of the UAE — Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and Ferrari World.",
    price: "₹68,000",
    days: "5 Days / 4 Nights",
    departure: "Mumbai / Delhi",
    includes: ["Return flights", "Luxury hotel", "Sheikh Zayed Mosque tour", "Ferrari World tickets", "Louvre Abu Dhabi", "Heritage village visit"]
  },
  {
    id: 9,
    name: "Qatar — Doha Luxury",
    region: "middle-east",
    regionLabel: "Middle East",
    image: "image/doha.jpg",
    desc: "Discover Doha's futuristic skyline, the stunning Museum of Islamic Art, Souq Waqif, and desert adventures.",
    price: "₹72,000",
    days: "5 Days / 4 Nights",
    departure: "Mumbai / Delhi",
    includes: ["Return flights", "5-star hotel", "Museum of Islamic Art", "Souq Waqif tour", "Desert safari with camel ride", "Katara Cultural Village", "Travel insurance"]
  },
  {
    id: 6,
    name: "Paris, France",
    region: "europe",
    regionLabel: "Europe",
    image: "image/paris.jpg",
    desc: "The Eiffel Tower, the Louvre, Montmartre's cobblestone streets, and the finest cuisine in the world.",
    price: "₹1,20,000",
    days: "7 Days / 6 Nights",
    departure: "Mumbai / Delhi",
    includes: ["Return flights", "4-star hotel near Champs-Élysées", "Eiffel Tower visit", "Louvre Museum", "Seine River cruise", "Versailles day trip", "Schengen visa assistance"]
  },
  {
    id: 7,
    name: "Europe Grand Tour",
    region: "europe",
    regionLabel: "Europe",
    image: "image/europe.jpg",
    desc: "8 iconic cities in 14 days — Paris, Amsterdam, Brussels, Rome, Florence, Venice, Zurich, and London.",
    price: "₹2,10,000",
    days: "14 Days / 13 Nights",
    departure: "Mumbai / Delhi",
    includes: ["Return flights", "Central hotels in each city", "Intercity trains/coach", "Professional tour guide", "Daily breakfast", "All entry tickets", "Schengen visa assistance"]
  },
  {
    id: 8,
    name: "Rome & Amalfi",
    region: "europe",
    regionLabel: "Europe",
    image: "image/rome.jpg",
    desc: "Ancient Rome meets the stunning turquoise cliffs of the Amalfi Coast in this unforgettable Italian escape.",
    price: "₹1,40,000",
    days: "9 Days / 8 Nights",
    departure: "Mumbai",
    includes: ["Return flights", "Boutique hotels", "Colosseum & Vatican tour", "Amalfi Coast boat tour", "Positano & Ravello visit", "Cooking class in Rome", "Schengen visa assistance"]
  }
];

function renderCards(containerId, data, limit) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  const items = limit ? data.slice(0, limit) : data;
  items.forEach(pkg => {
    grid.innerHTML += `
      <div class="col-md-4 col-sm-6 mb-4 pkg-item" data-region="${pkg.region}">
        <div class="pkg-card">
          <div class="pkg-card-img-wrap">
            <img src="${pkg.image}" alt="${pkg.name}">
            <span class="pkg-region-badge">${pkg.regionLabel}</span>
          </div>
          <div class="pkg-card-body">
            <h5>${pkg.name}</h5>
            <p>${pkg.desc.substring(0, 90)}...</p>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="pkg-price">${pkg.price}</span>
                <small> /person</small>
              </div>
              <button class="btn-pkg" onclick="openModal(${pkg.id})">View Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const region = this.dataset.region;
      const filtered = region === 'all' ? packages : packages.filter(p => p.region === region);
      renderCards('dest-pkg-grid', filtered, null);
    });
  });

  renderCards('home-pkg-grid', packages, 3);
  renderCards('dest-pkg-grid', packages, null);
});

function openModal(id) {
  const pkg = packages.find(p => p.id === id);
  document.getElementById('modal-img').src = pkg.image;
  document.getElementById('modal-region').textContent = pkg.regionLabel;
  document.getElementById('modal-name').textContent = pkg.name;
  document.getElementById('modal-days').textContent = pkg.days;
  document.getElementById('modal-dep').textContent = 'Departs from ' + pkg.departure;
  document.getElementById('modal-price').textContent = pkg.price + ' per person';
  document.getElementById('modal-desc').textContent = pkg.desc;
  const ul = document.getElementById('modal-includes');
  ul.innerHTML = pkg.includes.map(i => `<li>${i}</li>`).join('');
  document.getElementById('pkgModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('pkgModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('pkgModal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });
  }
});

function submitBooking() {
  let valid = true;
  const fields = [
    { id: 'b-name', err: 'err-name', check: v => v.trim().length >= 2 },
    { id: 'b-email', err: 'err-email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'b-phone', err: 'err-phone', check: v => /^[6-9]\d{9}$/.test(v.trim()) },
    { id: 'b-dest', err: 'err-dest', check: v => v !== '' },
    { id: 'b-date', err: 'err-date', check: v => { if (!v) return false; return new Date(v) > new Date(); } }
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    const err = document.getElementById(f.err);
    if (!el || !err) return;
    if (f.check(el.value)) {
      el.classList.remove('error');
      err.style.display = 'none';
    } else {
      el.classList.add('error');
      err.style.display = 'block';
      valid = false;
    }
  });

  if (valid) {
    document.getElementById('form-success').style.display = 'block';
    ['b-name', 'b-email', 'b-phone', 'b-dest', 'b-date', 'b-travellers', 'b-msg'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.tagName === 'SELECT' ? el.selectedIndex = 0 : (el.value = '');
    });
  }
}

let selectedRating = 0;

document.addEventListener('DOMContentLoaded', function () {
  const starContainer = document.getElementById('star-rating');
  if (!starContainer) return;

  const stars = starContainer.querySelectorAll('.star-btn');

  stars.forEach(star => {
    star.addEventListener('mouseenter', function () {
      const val = parseInt(this.dataset.value);
      stars.forEach(s => {
        s.classList.toggle('hovered', parseInt(s.dataset.value) <= val);
      });
    });

    star.addEventListener('mouseleave', function () {
      stars.forEach(s => s.classList.remove('hovered'));
    });

    star.addEventListener('click', function () {
      selectedRating = parseInt(this.dataset.value);
      stars.forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.value) <= selectedRating);
      });
    });
  });
});

function submitReview() {
  const name = document.getElementById('r-name');
  const city = document.getElementById('r-city');
  const message = document.getElementById('r-message');
  const successMsg = document.getElementById('review-success');

  if (!name || !city || !message) return;

  let valid = true;

  [name, city, message].forEach(el => {
    if (el.value.trim().length < 2) {
      el.classList.add('error');
      valid = false;
    } else {
      el.classList.remove('error');
    }
  });

  if (selectedRating === 0) {
    valid = false;
    const starContainer = document.getElementById('star-rating');
    starContainer.style.outline = '2px solid #dc3545';
    starContainer.style.outlineOffset = '4px';
    setTimeout(() => { starContainer.style.outline = 'none'; }, 2000);
  }

  if (!valid) return;

  const starsHtml = '★'.repeat(selectedRating) + '<span style="color:#ddd;">' + '★'.repeat(5 - selectedRating) + '</span>';

  const reviewHtml = `
    <div class="col-md-4 mb-4" style="animation: fadeUp 0.5s ease both;">
      <div class="testimonial-card">
        <div class="stars">${starsHtml}</div>
        <p>${message.value.trim()}</p>
        <span class="testi-author">${name.value.trim()}</span>
        <span class="testi-loc d-block">${city.value.trim()}</span>
      </div>
    </div>
  `;

  const container = document.getElementById('user-reviews');
  container.insertAdjacentHTML('afterbegin', reviewHtml);

  // Reset form
  name.value = '';
  city.value = '';
  message.value = '';
  selectedRating = 0;
  document.querySelectorAll('#star-rating .star-btn').forEach(s => s.classList.remove('active'));

  // Show success
  successMsg.style.display = 'block';
  setTimeout(() => { successMsg.style.display = 'none'; }, 4000);

  // Scroll to the new review
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
