/**
 * Mobbin Authentic Navigator Client
 * 
 * Rules:
 * 1. Links to external "websites" (Givingli, Fauna Robotics, Lassie, etc.) open NORMALLY in a new tab (NEVER incognito).
 * 2. Mobbin Screen/Section search explore URLs (https://mobbin.com/explore/...) open in INCOGNITO to bypass paywall.
 * 3. Provides full access to ALL 197 screen types & categories via the modal and dropdown.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Real Featured Websites with real external URLs
  const FEATURED_SITES = [
    {
      name: 'Givingli',
      tagline: 'Send gifts and greetings online',
      externalUrl: 'https://givingli.com/',
      mobbinUrl: 'https://mobbin.com/sites/givingli-6d0e6530-9289-42b3-96b6-a4c379a29a1f',
      previewHtml: `
        <div style="width:100%; height:100%; background:#fffaf5; padding:20px; display:flex; flex-direction:column; justify-content:space-between; font-family:'Inter',sans-serif;">
          <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; color:#111;">
            <span>Givingli</span>
            <span style="background:#000; color:#fff; padding:2px 8px; border-radius:999px;">Get app</span>
          </div>
          <div style="margin:20px 0;">
            <h2 style="font-size:26px; font-weight:900; line-height:1.1; color:#111;">Stack<br>your gifts.</h2>
            <div style="background:#fff; border:1px solid #f0e6dc; border-radius:10px; padding:10px 14px; margin-top:12px; display:inline-block; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
              <span style="font-size:11px; color:#888;">Total balance</span>
              <div style="font-size:20px; font-weight:800; color:#111;">$325.00</div>
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <div style="background:#ff5500; color:#fff; font-size:10px; font-weight:800; padding:6px 12px; border-radius:6px;">NIKE</div>
            <div style="background:#fff; border:1px solid #eee; font-size:10px; font-weight:700; padding:6px 12px; border-radius:6px;">Target $50</div>
          </div>
        </div>
      `,
      avatarLetter: 'G',
      avatarBg: '#ff6243',
      categories: ['Shopping', 'Lifestyle'],
      sections: ['Hero', 'Features', 'Pricing', 'Footer']
    },
    {
      name: 'Serus',
      tagline: 'World-class online privacy suite',
      externalUrl: 'https://serus.io/',
      mobbinUrl: 'https://mobbin.com/sites/serus',
      previewHtml: `
        <div style="width:100%; height:100%; background:#f5f3ef; padding:20px; display:flex; flex-direction:column; justify-content:space-between; align-items:center; text-align:center;">
          <div style="font-size:12px; font-weight:800; color:#333; width:100%; display:flex; justify-content:space-between;">
            <span>SERUS</span>
            <span style="font-size:10px; background:#e8e4dc; padding:3px 8px; border-radius:999px;">Private Beta</span>
          </div>
          <div style="position:relative; width:140px; height:180px; border-radius:16px; background:#222; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.15); display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px;">
            <div style="background:linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%); position:absolute; inset:0; display:flex; align-items:flex-end; padding:10px; font-weight:600;">
              Privacy First
            </div>
          </div>
          <div style="font-size:11px; font-weight:600; color:#555;">Zero logs • Encrypted • Hardware Token</div>
        </div>
      `,
      avatarLetter: 'S',
      avatarBg: '#222222',
      categories: ['Technology', 'Business'],
      sections: ['Hero', 'Features', 'About']
    },
    {
      name: 'Patch',
      tagline: 'Digital marketing for clinic owners',
      externalUrl: 'https://patchgrowth.com/',
      mobbinUrl: 'https://mobbin.com/sites/patch',
      previewHtml: `
        <div style="width:100%; height:100%; background:#2530eb; color:#fff; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-weight:900; font-size:14px; letter-spacing:-0.02em;">patch</span>
            <span style="font-size:10px; background:rgba(255,255,255,0.2); padding:2px 8px; border-radius:999px;">Clinic Growth</span>
          </div>
          <div>
            <div style="font-size:11px; text-transform:uppercase; font-weight:800; opacity:0.8;">Proof is in the profit ↗</div>
            <div style="font-size:32px; font-weight:900; letter-spacing:-0.03em; margin:4px 0;">$24,951+</div>
            <div style="font-size:11px; opacity:0.85;">Average revenue generated per clinic client</div>
          </div>
          <div style="background:#fff; color:#2530eb; padding:8px 14px; border-radius:999px; text-align:center; font-weight:800; font-size:11px;">
            Scale your clinic today
          </div>
        </div>
      `,
      avatarLetter: 'P',
      avatarBg: '#2530eb',
      categories: ['Business', 'Marketing'],
      sections: ['Hero', 'Stats', 'Social Proof', 'Pricing']
    },
    {
      name: 'Fauna Robotics',
      tagline: 'Capable, safe, fun robots for everyone',
      externalUrl: 'https://faunarobotics.com/',
      mobbinUrl: 'https://mobbin.com/sites/fauna-robotics-df16ae24-6140-4211-b1a8-63a6e54a8483',
      previewHtml: `
        <div style="width:100%; height:100%; background:#f9f9fb; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:800; color:#111;">
            <span>FAUNA</span>
            <span style="background:#e5e7eb; padding:2px 8px; border-radius:999px; font-size:10px;">Robotics</span>
          </div>
          <div style="text-align:center; padding:10px 0;">
            <div style="font-size:24px; font-weight:900; color:#111; letter-spacing:-0.02em;">Robots for everyone.</div>
            <div style="font-size:11px; color:#666; margin-top:6px;">Next-generation autonomous companionship.</div>
          </div>
          <div style="background:#111; color:#fff; text-align:center; padding:8px; border-radius:999px; font-weight:700; font-size:11px;">
            Pre-order now
          </div>
        </div>
      `,
      avatarLetter: 'F',
      avatarBg: '#10b981',
      categories: ['Technology', 'Hardware'],
      sections: ['Hero', 'Features', 'Footer']
    },
    {
      name: 'Lassie',
      tagline: 'Preventative pet healthcare app & insurance',
      externalUrl: 'https://www.lassie.ai/',
      mobbinUrl: 'https://mobbin.com/sites/lassie-10a7e239-cb38-4bc5-b72a-e735de3127f5',
      previewHtml: `
        <div style="width:100%; height:100%; background:#f0fdf4; padding:20px; display:flex; flex-direction:column; justify-content:space-between; border:1px solid #dcfce7;">
          <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:800; color:#166534;">
            <span>lassie</span>
            <span style="background:#bbf7d0; color:#14532d; font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px;">Pet Care</span>
          </div>
          <div>
            <div style="font-size:22px; font-weight:900; color:#14532d; line-height:1.2;">Happy pets,<br>lower bills.</div>
            <div style="font-size:11px; color:#15803d; margin-top:6px;">The world's first preventative pet health platform.</div>
          </div>
          <div style="background:#166534; color:#fff; text-align:center; padding:8px; border-radius:999px; font-weight:700; font-size:11px;">
            Calculate insurance
          </div>
        </div>
      `,
      avatarLetter: 'L',
      avatarBg: '#16a34a',
      categories: ['Health', 'Finance'],
      sections: ['Hero', 'How It Works', 'Pricing', 'FAQ']
    },
    {
      name: 'MOUTHWASH Studio',
      tagline: 'Visual communication and digital studio',
      externalUrl: 'https://mouthwash.studio/',
      mobbinUrl: 'https://mobbin.com/sites/mouthwash-studio-7b28e24b-87a6-4b49-8af7-55626785cb87',
      previewHtml: `
        <div style="width:100%; height:100%; background:#111; color:#fff; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="font-size:11px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase;">MOUTHWASH</div>
          <div>
            <div style="font-size:24px; font-weight:800; line-height:1.1; letter-spacing:-0.03em;">A design and innovation practice.</div>
            <div style="font-size:11px; color:#888; margin-top:8px;">New York • Los Angeles • Tokyo</div>
          </div>
          <div style="font-size:10px; color:#666; border-top:1px solid #333; padding-top:6px;">Selected Works 2024-2026</div>
        </div>
      `,
      avatarLetter: 'M',
      avatarBg: '#000000',
      categories: ['Portfolio', 'Design'],
      sections: ['Hero', 'Showcase', 'About', 'Contact']
    }
  ];

  // Sections Catalog (from Mobbin Sites: https://mobbin.com/explore/sites/sections)
  const SECTIONS_CATALOG = [
    { name: 'Contact', slug: 'contact' },
    { name: 'FAQ', slug: 'faq-page' },
    { name: 'Features', slug: 'features' },
    { name: 'Footer', slug: 'footer-section' },
    { name: 'Hero', slug: 'hero-section' },
    { name: 'How It Works', slug: 'how-it-works' },
    { name: 'Navigation', slug: 'navigation-section' },
    { name: 'Newsletter', slug: 'newsletter-signup' },
    { name: 'Social Proof', slug: 'social-proof' },
    { name: 'About', slug: 'about' },
    { name: 'Stats', slug: 'stats-section' },
    { name: 'Pricing', slug: 'pricing' },
    { name: 'Blog', slug: 'blog-view' },
    { name: '404', slug: '404' },
    { name: 'Testimonials', slug: 'review-pages' },
    { name: 'Image Gallery', slug: 'image-gallery-website' },
    { name: 'Services', slug: 'services-website' }
  ];

  // Global taxonomy fetched from server
  let fullScreensCatalog = {};
  let fullTaxonomyData = {
    screens: {},
    flows: [],
    uiElements: [],
    sections: [],
    siteCategories: [],
    siteStyles: [],
    counts: {}
  };
  let currentModalTab = 'categories'; // 'categories' | 'sections' | 'styles' | 'screens' | 'flows' | 'elements'

  // State
  let activeFilter = null; // { type, name, slug, url }

  // DOM Elements
  const toggleApps = document.getElementById('toggle-apps');
  const toggleSites = document.getElementById('toggle-sites');
  const globalSearchInput = document.getElementById('global-search-input');
  
  const filterDropdownBtn = document.getElementById('filter-dropdown-btn');
  const filterBtnText = document.getElementById('filter-btn-text');
  const filterControlsGroup = document.querySelector('.filter-controls-group');
  const filterSettingsBtn = document.getElementById('filter-settings-btn');
  const mobbinPopover = document.getElementById('mobbin-popover');
  const popoverSearchInput = document.getElementById('popover-search-input');
  const popoverSearchClear = document.getElementById('popover-search-clear');
  const popoverItemsContainer = document.getElementById('popover-items-container');

  const bannerIncognitoAction = document.getElementById('banner-incognito-action');
  const activeFilterHeader = document.getElementById('active-filter-header');
  const activeFilterValue = document.getElementById('active-filter-value');
  const resetFilterBtn = document.getElementById('reset-filter-btn');
  const openCurrentInIncognito = document.getElementById('open-current-in-incognito');

  const mobbinCardsGrid = document.getElementById('mobbin-cards-grid');
  const toast = document.getElementById('mobbin-toast');
  const toastText = document.getElementById('toast-text');

  // Modal Elements for Full Taxonomy Explorer
  const openAllCategoriesBtn = document.getElementById('open-all-categories-btn');
  const seeAllCategoriesLink = document.getElementById('see-all-categories-link');
  const seeAllSectionsLink = document.getElementById('see-all-sections-link');
  const seeAllStylesLink = document.getElementById('see-all-styles-link');
  const seeAllElementsLink = document.getElementById('see-all-elements-link');
  const seeAllScreensLink = document.getElementById('see-all-screens-link');
  const seeAllFlowsLink = document.getElementById('see-all-flows-link');
  const allCategoriesModal = document.getElementById('all-categories-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSearchInput = document.getElementById('modal-search-input');
  const modalTaxonomyGrid = document.getElementById('modal-taxonomy-grid');
  const modalMainTitle = document.getElementById('modal-main-title');
  const modalTotalBadge = document.getElementById('modal-total-badge');

  const countCategories = document.getElementById('count-categories');
  const countSections = document.getElementById('count-sections');
  const countStyles = document.getElementById('count-styles');
  const countScreens = document.getElementById('count-screens');
  const countFlows = document.getElementById('count-flows');
  const countElements = document.getElementById('count-elements');

  const checkmarkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>`;

  // 1. Initial Setup
  async function init() {
    renderCards(FEATURED_SITES);
    setupDirectoryLinks();
    setupDropdown();
    setupModal();

    // Fetch full taxonomy data from server
    try {
      const res = await fetch('/api/taxonomy');
      const data = await res.json();
      fullTaxonomyData = data;
      fullScreensCatalog = data.screens || {};
      
      // Update badge counts
      if (data.counts) {
        if (countCategories && data.counts.categories) countCategories.textContent = data.counts.categories;
        if (countSections && data.counts.sections) countSections.textContent = data.counts.sections;
        if (countStyles && data.counts.styles) countStyles.textContent = data.counts.styles;
        if (countScreens && data.counts.screens) countScreens.textContent = data.counts.screens;
        if (countFlows && data.counts.flows) countFlows.textContent = data.counts.flows;
        if (countElements && data.counts.uiElements) countElements.textContent = data.counts.uiElements;
      }
      
      renderModalTaxonomy();
      renderPopoverItems();
    } catch (e) {
      console.warn('Could not load full taxonomy:', e);
    }
  }

  // 2. Render Website Cards
  // IMPORTANT: Clicking any website card opens the EXTERNAL WEBSITE in a NORMAL NEW TAB (NOT incognito!)
  function renderCards(sitesList) {
    if (!mobbinCardsGrid) return;
    mobbinCardsGrid.innerHTML = '';

    for (const site of sitesList) {
      const card = document.createElement('div');
      card.className = 'mobbin-site-card';

      card.innerHTML = `
        <a href="${site.externalUrl}" target="_blank" rel="noopener noreferrer" class="card-link" title="Visit ${site.name}">
          <div class="card-preview-frame">
            ${site.previewHtml}
            <div class="external-pill-tag">
              <span>Visit Website</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </div>
          </div>
          
          <div class="card-info-area">
            <div class="site-avatar" style="background-color: ${site.avatarBg};">${site.avatarLetter}</div>
            <div class="site-meta">
              <h4 class="site-name-heading">${site.name}</h4>
              <p class="site-tagline-text">${site.tagline}</p>
            </div>
          </div>
        </a>
      `;

      mobbinCardsGrid.appendChild(card);
    }
  }

  // 3. Directory Links (Categories, Sections, Styles, Screens, Elements, Flows)
  // Clicking any search explore link OPENS IN INCOGNITO to bypass paywall
  function setupDirectoryLinks() {
    document.querySelectorAll('.dir-link').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        const slug = btn.dataset.slug;
        const name = btn.innerText.trim();

        let targetUrl = '';
        if (type === 'section') {
          targetUrl = `https://mobbin.com/explore/sites/sections/${slug}`;
        } else if (type === 'category') {
          targetUrl = `https://mobbin.com/explore/sites/categories/${slug}`;
        } else if (type === 'style') {
          targetUrl = `https://mobbin.com/explore/sites/styles/${slug}`;
        } else if (type === 'screen') {
          targetUrl = `https://mobbin.com/explore/web/screens/${slug}`;
        } else if (type === 'element') {
          targetUrl = `https://mobbin.com/explore/web/ui-elements/${slug}`;
        } else if (type === 'flow') {
          targetUrl = `https://mobbin.com/explore/web/flows/${slug}`;
        }

        applyExploreFilter({ type, name, slug, url: targetUrl });
      });
    });
  }

  // Active dropdown tab: 'categories' | 'screens' | 'elements' | 'flows' | 'sections'
  let activeDropdownType = 'sections';

  // Platform switcher buttons
  const btnIos = document.getElementById('btn-ios');
  const btnWeb = document.getElementById('btn-web');

  // Capsule filter pills
  const pillCategoriesBtn = document.getElementById('pill-categories-btn');
  const pillScreensBtn = document.getElementById('pill-screens-btn');
  const pillElementsBtn = document.getElementById('pill-elements-btn');
  const pillFlowsBtn = document.getElementById('pill-flows-btn');
  const pillSectionsBtn = document.getElementById('pill-sections-btn');

  // 4. Dropdown Popover Setup for (Categories, Screens, UI Elements, Flows, Sections)
  function setupDropdown() {
    if (!mobbinPopover) return;

    const pills = [
      { btn: pillCategoriesBtn, type: 'categories', title: 'Search categories...' },
      { btn: pillScreensBtn, type: 'screens', title: 'Search screens...' },
      { btn: pillElementsBtn, type: 'elements', title: 'Search UI elements...' },
      { btn: pillFlowsBtn, type: 'flows', title: 'Search flows...' },
      { btn: pillSectionsBtn, type: 'sections', title: 'Search sections...' }
    ];

    pills.forEach(({ btn, type, title }) => {
      if (!btn) return;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobbinPopover.classList.contains('open') && activeDropdownType === type) {
          closePopover();
        } else {
          openPopover(type, title, btn);
        }
      });
    });

    if (filterSettingsBtn) {
      filterSettingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal('screens');
      });
    }

    function openPopover(type, placeholder, triggerBtn) {
      activeDropdownType = type;
      // Mark active pill
      pills.forEach(p => { if (p.btn) p.btn.classList.toggle('active', p.type === type); });

      // Position popover under trigger button or container
      mobbinPopover.classList.add('open');
      if (popoverSearchInput) {
        popoverSearchInput.placeholder = placeholder;
        popoverSearchInput.value = '';
        popoverSearchInput.focus();
      }
      if (popoverSearchClear) popoverSearchClear.style.display = 'none';
      renderPopoverItems('');
    }

    function closePopover() {
      mobbinPopover.classList.remove('open');
      pills.forEach(p => { if (p.btn) p.btn.classList.remove('active'); });
    }

    document.addEventListener('click', (e) => {
      if (mobbinPopover && !mobbinPopover.contains(e.target) && !e.target.closest('.filter-pill-btn')) {
        closePopover();
      }
    });

    if (popoverSearchInput) {
      popoverSearchInput.addEventListener('input', (e) => {
        const q = e.target.value;
        if (popoverSearchClear) popoverSearchClear.style.display = q ? 'block' : 'none';
        renderPopoverItems(q);
      });
    }

    if (popoverSearchClear) {
      popoverSearchClear.addEventListener('click', () => {
        if (popoverSearchInput) {
          popoverSearchInput.value = '';
          popoverSearchInput.focus();
        }
        popoverSearchClear.style.display = 'none';
        renderPopoverItems('');
      });
    }

    // iOS / Web Platform pills
    if (btnIos && btnWeb) {
      btnIos.addEventListener('click', () => {
        btnIos.classList.add('active');
        btnWeb.classList.remove('active');
        showToast('Viewing iOS catalog patterns');
      });
      btnWeb.addEventListener('click', () => {
        btnWeb.classList.add('active');
        btnIos.classList.remove('active');
        showToast('Viewing Web catalog patterns');
      });
    }
  }

  // Render items in Popover based on the activeDropdownType (categories, screens, elements, flows, sections)
  function renderPopoverItems(filterQuery = '') {
    if (!popoverItemsContainer) return;
    popoverItemsContainer.innerHTML = '';
    const q = filterQuery.toLowerCase().trim();

    let items = [];
    let type = activeDropdownType;
    let urlPrefix = '';

    if (activeDropdownType === 'categories') {
      items = (fullTaxonomyData.siteCategories || []).map(c => ({ name: c.name, slug: c.slug, url: `https://mobbin.com/explore/sites/categories/${c.slug}` }));
    } else if (activeDropdownType === 'screens') {
      const allScreens = fullTaxonomyData.screensList && fullTaxonomyData.screensList.length > 0
        ? fullTaxonomyData.screensList
        : Object.values(fullScreensCatalog).flat();
      items = allScreens.map(s => ({ name: s.name, slug: s.slug, url: `https://mobbin.com/explore/web/screens/${s.slug}` }));
    } else if (activeDropdownType === 'elements') {
      items = (fullTaxonomyData.uiElements || []).map(e => ({ name: e.name, slug: e.slug, url: `https://mobbin.com/explore/web/ui-elements/${e.slug}` }));
    } else if (activeDropdownType === 'flows') {
      items = (fullTaxonomyData.flows || []).map(f => ({ name: f.name, slug: f.slug, url: `https://mobbin.com/explore/web/flows/${f.slug}` }));
    } else {
      // sections
      const sectionsList = (fullTaxonomyData.sections && fullTaxonomyData.sections.length > 0)
        ? fullTaxonomyData.sections
        : SECTIONS_CATALOG;
      items = sectionsList.map(s => ({ name: s.name, slug: s.slug, url: s.url || `https://mobbin.com/explore/sites/sections/${s.slug}` }));
    }

    const filtered = items.filter(it => !q || it.name.toLowerCase().includes(q));

    if (filtered.length === 0) {
      popoverItemsContainer.innerHTML = '<div style="padding:20px; text-align:center; color:#9ca3af; font-size:13px;">No items match</div>';
      return;
    }

    for (const item of filtered) {
      const isSelected = activeFilter && activeFilter.slug === item.slug;
      const row = document.createElement('div');
      row.className = `popover-item ${isSelected ? 'active' : ''}`;

      row.innerHTML = `
        <div class="item-box">${isSelected ? checkmarkIcon : ''}</div>
        <span class="item-text">${item.name}</span>
      `;

      row.addEventListener('click', () => {
        applyExploreFilter({
          type: activeDropdownType,
          name: item.name,
          slug: item.slug,
          url: item.url
        });
        if (mobbinPopover) mobbinPopover.classList.remove('open');
        document.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
      });

      popoverItemsContainer.appendChild(row);
    }
  }

  // 5. TAXONOMY EXPLORER MODAL SETUP
  function setupModal() {
    if (openAllCategoriesBtn) openAllCategoriesBtn.addEventListener('click', () => openModal('categories'));
    if (seeAllCategoriesLink) seeAllCategoriesLink.addEventListener('click', () => openModal('categories'));
    if (seeAllSectionsLink) seeAllSectionsLink.addEventListener('click', () => openModal('sections'));
    if (seeAllStylesLink) seeAllStylesLink.addEventListener('click', () => openModal('styles'));
    if (seeAllElementsLink) seeAllElementsLink.addEventListener('click', () => openModal('elements'));
    if (seeAllScreensLink) seeAllScreensLink.addEventListener('click', () => openModal('screens'));
    if (seeAllFlowsLink) seeAllFlowsLink.addEventListener('click', () => openModal('flows'));

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => closeModal());
    if (modalBackdrop) modalBackdrop.addEventListener('click', () => closeModal());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    if (modalSearchInput) {
      modalSearchInput.addEventListener('input', (e) => {
        renderModalTaxonomy(e.target.value);
      });
    }
  }

  function openModal(defaultTab = 'categories') {
    currentModalTab = defaultTab;

    if (allCategoriesModal) {
      allCategoriesModal.classList.add('open');
      if (modalSearchInput) {
        modalSearchInput.value = '';
        modalSearchInput.focus();
      }
      renderModalTaxonomy();
    }
  }

  function closeModal() {
    if (allCategoriesModal) allCategoriesModal.classList.remove('open');
  }

  // Renders items according to the active tab: categories, sections, styles, screens, flows, elements
  function renderModalTaxonomy(query = '') {
    modalTaxonomyGrid.innerHTML = '';
    const q = query.toLowerCase().trim();

    if (currentModalTab === 'categories') {
      const items = (fullTaxonomyData.siteCategories || []).filter(c => !q || c.name.toLowerCase().includes(q));
      modalMainTitle.textContent = `All Categories (${items.length})`;
      modalTotalBadge.textContent = '228 Crawled Categories';
      renderFlatTaxonomyList(items, 'category', 'https://mobbin.com/explore/sites/categories/');

    } else if (currentModalTab === 'sections') {
      const items = (fullTaxonomyData.sections || SECTIONS_CATALOG).filter(s => !q || s.name.toLowerCase().includes(q));
      modalMainTitle.textContent = `All Sections (${items.length})`;
      modalTotalBadge.textContent = '132 Crawled Sections';
      renderFlatTaxonomyList(items, 'section', 'https://mobbin.com/explore/sites/sections/');

    } else if (currentModalTab === 'styles') {
      const items = (fullTaxonomyData.siteStyles || []).filter(s => !q || s.name.toLowerCase().includes(q));
      modalMainTitle.textContent = `Site Styles (${items.length})`;
      modalTotalBadge.textContent = '53 Crawled Styles';
      renderFlatTaxonomyList(items, 'style', 'https://mobbin.com/explore/sites/styles/');

    } else if (currentModalTab === 'flows') {
      const items = (fullTaxonomyData.flows || []).filter(f => !q || f.name.toLowerCase().includes(q));
      modalMainTitle.textContent = `User Flows (${items.length})`;
      modalTotalBadge.textContent = '71 Crawled Flows';
      renderFlatTaxonomyList(items, 'flow', 'https://mobbin.com/explore/web/flows/');

    } else if (currentModalTab === 'elements') {
      const items = (fullTaxonomyData.uiElements || []).filter(e => !q || e.name.toLowerCase().includes(q));
      modalMainTitle.textContent = `UI Elements (${items.length})`;
      modalTotalBadge.textContent = '81 Crawled Elements';
      renderFlatTaxonomyList(items, 'element', 'https://mobbin.com/explore/web/ui-elements/');

    } else {
      // Screens tab: Render grouped by category
      modalMainTitle.textContent = 'Screens by Category';
      modalTotalBadge.textContent = '197 Screens';

      for (const [categoryName, screensList] of Object.entries(fullScreensCatalog)) {
        const filteredScreens = screensList.filter(s => !q || s.name.toLowerCase().includes(q) || categoryName.toLowerCase().includes(q));
        if (filteredScreens.length === 0) continue;

        const groupCard = document.createElement('div');
        groupCard.className = 'modal-cat-group';

        groupCard.innerHTML = `
          <div class="modal-cat-heading">
            <span>${categoryName}</span>
            <span class="modal-cat-count">${filteredScreens.length}</span>
          </div>
          <div class="modal-cat-items">
            ${filteredScreens.map(s => `
              <button class="modal-screen-item-btn" data-slug="${s.slug}" data-name="${s.name}" data-category="${categoryName}">
                <span>${s.name}</span>
                <span class="modal-incognito-tag">Incognito ↗</span>
              </button>
            `).join('')}
          </div>
        `;

        groupCard.querySelectorAll('.modal-screen-item-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const slug = btn.dataset.slug;
            const name = btn.dataset.name;
            const url = `https://mobbin.com/explore/web/screens/${slug}`;
            closeModal();
            applyExploreFilter({ type: 'screen', name, slug, url });
          });
        });

        modalTaxonomyGrid.appendChild(groupCard);
      }
    }
  }

  // Helper to render flat lists alphabetically grouped (for categories, sections, styles, flows, elements)
  function renderFlatTaxonomyList(items, type, baseUrlPrefix) {
    if (items.length === 0) {
      modalTaxonomyGrid.innerHTML = '<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: #9ca3af;">No matching items found</div>';
      return;
    }

    // Group alphabetically by first letter
    const grouped = {};
    for (const item of items) {
      const letter = (item.name[0] || '#').toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(item);
    }

    const sortedLetters = Object.keys(grouped).sort();

    for (const letter of sortedLetters) {
      const groupCard = document.createElement('div');
      groupCard.className = 'modal-cat-group';

      groupCard.innerHTML = `
        <div class="modal-cat-heading">
          <span>${letter}</span>
          <span class="modal-cat-count">${grouped[letter].length}</span>
        </div>
        <div class="modal-cat-items">
          ${grouped[letter].map(item => `
            <button class="modal-screen-item-btn" data-slug="${item.slug}" data-name="${item.name}">
              <span>${item.name}</span>
              <span class="modal-incognito-tag">Incognito ↗</span>
            </button>
          `).join('')}
        </div>
      `;

      groupCard.querySelectorAll('.modal-screen-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const slug = btn.dataset.slug;
          const name = btn.dataset.name;
          const targetUrl = `${baseUrlPrefix}${slug}`;
          closeModal();
          applyExploreFilter({ type, name, slug, url: targetUrl });
        });
      });

      modalTaxonomyGrid.appendChild(groupCard);
    }
  }

  // 6. Apply Filter & Trigger Incognito for Search/Screen URLs
  function applyExploreFilter(filter) {
    activeFilter = filter;
    if (filterBtnText) filterBtnText.textContent = filter.name;
    if (activeFilterHeader) activeFilterHeader.style.display = 'flex';
    if (activeFilterValue) activeFilterValue.textContent = filter.name;

    showToast(`Launching ${filter.name} in Incognito...`);
    launchIncognito(filter.url);
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      activeFilter = null;
      if (activeFilterHeader) activeFilterHeader.style.display = 'none';
      renderCards(FEATURED_SITES);
    });
  }

  if (openCurrentInIncognito) {
    openCurrentInIncognito.addEventListener('click', () => {
      if (activeFilter) launchIncognito(activeFilter.url);
    });
  }

  if (bannerIncognitoAction) {
    bannerIncognitoAction.addEventListener('click', () => {
      const url = activeFilter ? activeFilter.url : 'https://mobbin.com/discover/sites/latest';
      launchIncognito(url);
    });
  }

  // 7. Apps / Sites Toggle (Safeguarded)
  if (toggleApps && toggleSites) {
    toggleApps.addEventListener('click', () => {
      toggleApps.classList.add('active');
      toggleSites.classList.remove('active');
      if (filterBtnText) filterBtnText.textContent = 'Screens';
      if (popoverSearchInput) popoverSearchInput.placeholder = 'Search screens...';
      renderPopoverItems();
    });

    toggleSites.addEventListener('click', () => {
      toggleSites.classList.add('active');
      toggleApps.classList.remove('active');
      if (filterBtnText) filterBtnText.textContent = 'Sections';
      if (popoverSearchInput) popoverSearchInput.placeholder = 'Search sections...';
      renderPopoverItems();
    });
  }

  // 8. Global Search with Dropdown Suggestions (Letter groupings, counts, and Incognito launching)
  const navSearchBar = document.getElementById('nav-search-bar');
  const globalSearchClear = document.getElementById('global-search-clear');
  const globalSuggestionsDropdown = document.getElementById('global-suggestions-dropdown');
  const suggestionsContent = document.getElementById('suggestions-content');

  function getAllSearchableItems() {
    const all = [];

    // Screens
    if (fullScreensCatalog) {
      for (const [catName, screens] of Object.entries(fullScreensCatalog)) {
        for (const s of screens) {
          all.push({
            name: s.name,
            slug: s.slug,
            type: 'Screen',
            url: `https://mobbin.com/explore/web/screens/${s.slug}`
          });
        }
      }
    }

    // Sections
    const sections = fullTaxonomyData.sections || SECTIONS_CATALOG;
    for (const sec of sections) {
      all.push({
        name: sec.name,
        slug: sec.slug,
        type: 'Section',
        url: `https://mobbin.com/explore/sites/sections/${sec.slug}`
      });
    }

    // Categories
    const categories = fullTaxonomyData.siteCategories || [];
    for (const cat of categories) {
      all.push({
        name: cat.name,
        slug: cat.slug,
        type: 'Category',
        url: `https://mobbin.com/explore/sites/categories/${cat.slug}`
      });
    }

    // UI Elements
    const elements = fullTaxonomyData.uiElements || [];
    for (const el of elements) {
      all.push({
        name: el.name,
        slug: el.slug,
        type: 'UI Element',
        url: `https://mobbin.com/explore/web/ui-elements/${el.slug}`
      });
    }

    // Flows
    const flows = fullTaxonomyData.flows || [];
    for (const fl of flows) {
      all.push({
        name: fl.name,
        slug: fl.slug,
        type: 'Flow',
        url: `https://mobbin.com/explore/web/flows/${fl.slug}`
      });
    }

    // Deduplicate by name + type
    const seen = new Set();
    return all.filter(item => {
      const key = `${item.name.toLowerCase()}_${item.type}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function renderGlobalSuggestions(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      globalSuggestionsDropdown.style.display = 'none';
      if (globalSearchClear) globalSearchClear.style.display = 'none';
      renderCards(FEATURED_SITES);
      return;
    }

    if (globalSearchClear) globalSearchClear.style.display = 'flex';

    // Also filter cards below
    const filteredSites = FEATURED_SITES.filter(s => 
      s.name.toLowerCase().includes(q) ||
      s.tagline.toLowerCase().includes(q) ||
      (s.categories && s.categories.some(c => c.toLowerCase().includes(q))) ||
      (s.sections && s.sections.some(sec => sec.toLowerCase().includes(q)))
    );
    renderCards(filteredSites);

    // Filter searchable taxonomy patterns
    const allItems = getAllSearchableItems();
    const matched = allItems.filter(it => it.name.toLowerCase().includes(q));

    if (matched.length === 0) {
      suggestionsContent.innerHTML = '<div style="padding: 20px; text-align: center; color: #9ca3af; font-size: 14px;">No matching patterns found</div>';
      globalSuggestionsDropdown.style.display = 'flex';
      return;
    }

    // Sort: items starting with query first, then alphabetical
    matched.sort((a, b) => {
      const aStarts = a.name.toLowerCase().startsWith(q);
      const bStarts = b.name.toLowerCase().startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return a.name.localeCompare(b.name);
    });

    // Group by first letter (e.g. "P" with count "1" as in screenshot)
    const grouped = {};
    for (const item of matched.slice(0, 30)) { // limit top 30
      const letter = (item.name[0] || '#').toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(item);
    }

    suggestionsContent.innerHTML = '';

    for (const [letter, items] of Object.entries(grouped)) {
      const groupEl = document.createElement('div');
      groupEl.className = 'suggestion-group-block';

      groupEl.innerHTML = `
        <div class="suggestion-group-heading">
          <span>${letter}</span>
          <span class="suggestion-group-count">${items.length}</span>
        </div>
        <div class="suggestion-items-list">
          ${items.map(it => `
            <button type="button" class="suggestion-item-btn" data-url="${it.url}" data-name="${it.name}" data-type="${it.type.toLowerCase()}" data-slug="${it.slug}">
              <div class="suggestion-item-left">
                <span class="suggestion-item-name">${it.name}</span>
                <span class="suggestion-item-type">${it.type}</span>
              </div>
              <span class="suggestion-incognito-tag">Incognito ↗</span>
            </button>
          `).join('')}
        </div>
      `;

      groupEl.querySelectorAll('.suggestion-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const url = btn.dataset.url;
          const name = btn.dataset.name;
          const type = btn.dataset.type;
          const slug = btn.dataset.slug;

          globalSuggestionsDropdown.style.display = 'none';
          globalSearchInput.value = name;
          applyExploreFilter({ type, name, slug, url });
        });
      });

      suggestionsContent.appendChild(groupEl);
    }

    globalSuggestionsDropdown.style.display = 'flex';
  }

  globalSearchInput.addEventListener('input', (e) => {
    renderGlobalSuggestions(e.target.value);
  });

  globalSearchInput.addEventListener('focus', () => {
    if (globalSearchInput.value.trim()) {
      renderGlobalSuggestions(globalSearchInput.value);
    }
  });

  if (globalSearchClear) {
    globalSearchClear.addEventListener('click', () => {
      globalSearchInput.value = '';
      globalSearchClear.style.display = 'none';
      globalSuggestionsDropdown.style.display = 'none';
      renderCards(FEATURED_SITES);
      globalSearchInput.focus();
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (navSearchBar && !navSearchBar.contains(e.target)) {
      globalSuggestionsDropdown.style.display = 'none';
    }
  });

  // 9. Launch Mobbin Explore Page in Incognito (ONLY for Mobbin Paywall Bypass)
  async function launchIncognito(targetUrl) {
    showToast('Opening in Google Chrome Incognito...');

    try {
      const res = await fetch('/api/open-incognito', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: targetUrl })
      });
      const result = await res.json();
      if (result.success) {
        showToast(`✓ Opened in ${result.method}`);
      } else {
        window.open(targetUrl, '_blank');
      }
    } catch (err) {
      console.warn('Incognito call failed:', err);
      window.open(targetUrl, '_blank');
    }
  }

  // Toast Helper
  let toastTimer;
  function showToast(msg) {
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Run
  init();
});
