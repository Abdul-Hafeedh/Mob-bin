const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load precomputed taxonomy and website data
const dataDir = path.join(__dirname, 'data');
let screensWithWebsites = [];
let websitesByScreens = [];

try {
  const screensWithWebsitesPath = path.join(dataDir, 'screen_types_with_websites.json');
  if (fs.existsSync(screensWithWebsitesPath)) {
    screensWithWebsites = JSON.parse(fs.readFileSync(screensWithWebsitesPath, 'utf-8'));
  }

  const websitesByScreensPath = path.join(dataDir, 'featured_websites_by_screens.json');
  if (fs.existsSync(websitesByScreensPath)) {
    websitesByScreens = JSON.parse(fs.readFileSync(websitesByScreensPath, 'utf-8'));
  }
} catch (err) {
  console.error('Error loading crawled data:', err.message);
}
// 1. OFFICIAL MOBBIN SCREENS CATALOG (Crawled directly from https://mobbin.com/explore/web/screens)
let WEB_SCREENS_CATALOG = {};
try {
  const officialScreensPath = path.join(dataDir, 'official_mobbin_screens_by_category.json');
  if (fs.existsSync(officialScreensPath)) {
    WEB_SCREENS_CATALOG = JSON.parse(fs.readFileSync(officialScreensPath, 'utf-8'));
  }
} catch (err) {
  console.error('Error loading official screens catalog:', err.message);
}

// 2. FLOWS CATALOG (71 User Journeys - shown at the bottom of screens)
const WEB_FLOWS_CATALOG = [
  { name: "Onboarding", slug: "onboarding" },
  { name: "Creating Account", slug: "creating-account" },
  { name: "Logging In", slug: "logging-in" },
  { name: "Logging Out", slug: "logging-out" },
  { name: "Resetting Password", slug: "resetting-password" },
  { name: "Deleting & Deactivating Account", slug: "deleting-deactivating-account" },
  { name: "Editing Profile", slug: "editing-profile" },
  { name: "Switching Account", slug: "switching-account" },
  { name: "Uploading & Downloading", slug: "uploading-downloading" },
  { name: "Adding to Cart & Bag", slug: "adding-to-cart-bag" },
  { name: "Booking & Reserving", slug: "booking-reserving" },
  { name: "Subscribing & Upgrading", slug: "subscribing-upgrading" },
  { name: "Canceling Subscription", slug: "canceling-subscription" },
  { name: "Canceling Order & Refunding", slug: "canceling-order-refunding" },
  { name: "Purchasing & Ordering", slug: "purchasing-ordering" },
  { name: "Connecting & Linking", slug: "connecting-linking" },
  { name: "Inviting & Referring Friends", slug: "inviting-referring-friends" },
  { name: "Searching & Finding", slug: "searching-finding" },
  { name: "Filtering & Sorting", slug: "filtering-sorting" },
  { name: "Favoriting & Pinning", slug: "favoriting-pinning" },
  { name: "Sharing", slug: "sharing" },
  { name: "Scheduling", slug: "scheduling" },
  { name: "Setting Up", slug: "setting-up" }
];

// 3. UI ELEMENTS CATALOG (81 Interface Components - shown at the bottom of screens)
const WEB_ELEMENTS_CATALOG = [
  { name: "Banner", slug: "banner" },
  { name: "Text Field", slug: "text-field" },
  { name: "Button", slug: "button" },
  { name: "Logo", slug: "logo" },
  { name: "Modal", slug: "modal-ui" },
  { name: "Table", slug: "table" },
  { name: "Dropdown Button", slug: "dropdown-button" },
  { name: "Checkbox", slug: "checkbox" },
  { name: "Accordion", slug: "accordion" },
  { name: "Breadcrumbs", slug: "breadcrumbs" },
  { name: "Card", slug: "card" },
  { name: "Avatar", slug: "avatar" },
  { name: "Badge", slug: "badge" },
  { name: "Tooltip", slug: "tooltip" },
  { name: "Date Picker", slug: "date-picker" },
  { name: "File Upload", slug: "file-upload" },
  { name: "Color Picker", slug: "color-picker" },
  { name: "Combobox", slug: "combobox" },
  { name: "Editable Text", slug: "editable-text" },
  { name: "Search Bar", slug: "search-bar" },
  { name: "Tab Bar", slug: "tab-bar" },
  { name: "Toggle Switch", slug: "switch" }
];

// 4. SITE SECTIONS CATALOG (132 Website Sections)
const SITE_SECTIONS_CATALOG = [
  { name: "Contact", slug: "contact" },
  { name: "FAQ", slug: "faq-page" },
  { name: "Features", slug: "features" },
  { name: "Footer", slug: "footer-section" },
  { name: "Hero", slug: "hero-section" },
  { name: "How It Works", slug: "how-it-works" },
  { name: "Navigation", slug: "navigation-section" },
  { name: "Newsletter", slug: "newsletter-signup" },
  { name: "Social Proof", slug: "social-proof" },
  { name: "Pricing", slug: "pricing" },
  { name: "About", slug: "about" },
  { name: "Stats", slug: "stats-section" },
  { name: "Showcase", slug: "showcase-section" },
  { name: "Testimonials", slug: "review-pages" },
  { name: "Services", slug: "services-website" },
  { name: "404 Error", slug: "404" },
  { name: "Image Gallery", slug: "image-gallery-website" },
  { name: "Registration Page", slug: "registration-page" }
];

// Load site taxonomies (categories, sections, styles)
let siteTaxonomies = { categories: [], sections: [], styles: [] };
try {
  const siteTaxPath = path.join(dataDir, 'sites_taxonomies.json');
  if (fs.existsSync(siteTaxPath)) {
    siteTaxonomies = JSON.parse(fs.readFileSync(siteTaxPath, 'utf-8'));
  }
} catch (err) {
  console.error('Error loading site taxonomies:', err.message);
}

// Load web taxonomies (71 flows, 81 ui-elements, 197 screens)
let webTaxonomies = { flows: [], uiElements: [], screens: [] };
try {
  const webTaxPath = path.join(dataDir, 'web_taxonomies.json');
  if (fs.existsSync(webTaxPath)) {
    webTaxonomies = JSON.parse(fs.readFileSync(webTaxPath, 'utf-8'));
  }
} catch (err) {
  console.error('Error loading web taxonomies:', err.message);
}

// Load all 197 screens
let all197Screens = webTaxonomies.screens && webTaxonomies.screens.length > 0 ? webTaxonomies.screens : [];
if (all197Screens.length === 0) {
  try {
    const allScreensPath = path.join(dataDir, 'all_197_screens.json');
    if (fs.existsSync(allScreensPath)) {
      all197Screens = JSON.parse(fs.readFileSync(allScreensPath, 'utf-8'));
    }
  } catch (err) {
    console.error('Error loading all 197 screens:', err.message);
  }
}

// Screen Websites Lookup
const screenWebsitesLookup = {};
for (const s of screensWithWebsites) {
  screenWebsitesLookup[s.screen_slug] = s.featured_websites || [];
}

// API: Get Full Taxonomy (Screens, Flows, Elements, Sections, Categories, Styles)
app.get('/api/taxonomy', (req, res) => {
  const finalFlows = (webTaxonomies.flows && webTaxonomies.flows.length > 0) ? webTaxonomies.flows : WEB_FLOWS_CATALOG;
  const finalElements = (webTaxonomies.uiElements && webTaxonomies.uiElements.length > 0) ? webTaxonomies.uiElements : WEB_ELEMENTS_CATALOG;
  const finalSections = (siteTaxonomies.sections && siteTaxonomies.sections.length > 0) ? siteTaxonomies.sections : SITE_SECTIONS_CATALOG;

  res.json({
    screens: WEB_SCREENS_CATALOG,
    screensList: all197Screens,
    flows: finalFlows,
    uiElements: finalElements,
    sections: finalSections,
    siteCategories: siteTaxonomies.categories || [],
    siteStyles: siteTaxonomies.styles || [],
    counts: {
      screens: all197Screens.length || Object.values(WEB_SCREENS_CATALOG).flat().length,
      flows: finalFlows.length,
      uiElements: finalElements.length,
      sections: finalSections.length,
      categories: (siteTaxonomies.categories || []).length,
      styles: (siteTaxonomies.styles || []).length
    }
  });
});

// API: Open in Incognito Window
app.post('/api/open-incognito', (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Only allow mobbin.com URLs to be opened in incognito
  if (!url.startsWith('https://mobbin.com/')) {
    return res.status(400).json({ error: 'Only Mobbin explore URLs should be opened in incognito.' });
  }

  const sanitizedUrl = url.replace(/"/g, '\\"');
  const chromeCmd = `open -na "Google Chrome" --args --incognito "${sanitizedUrl}"`;

  console.log(`[Incognito Request] Launching Chrome Incognito: ${url}`);

  exec(chromeCmd, (err) => {
    if (err) {
      console.warn('Chrome launch failed, trying default browser:', err.message);
      exec(`open "${sanitizedUrl}"`, (fbErr) => {
        if (fbErr) return res.status(500).json({ error: fbErr.message });
        return res.json({ success: true, method: 'Default Browser', url: sanitizedUrl });
      });
      return;
    }

    res.json({
      success: true,
      method: 'Google Chrome Incognito',
      url: sanitizedUrl,
      message: 'Opened in Google Chrome Incognito'
    });
  });
});

app.listen(PORT, () => {
  console.log(`Mobbin Navigator running at http://localhost:${PORT}`);
});
