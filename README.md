# Mobbin Web Navigator

A fast, curated web navigation portal modeled directly after [Mobbin.com](https://mobbin.com). It provides quick access to complete design taxonomy sets (Categories, Sections, Styles, UI Elements, Screens, and Flows), search with letter grouping badges, and a local Google Chrome Incognito launcher to browse references without paywall blocks.

---

## 🌟 Features

- **Taxonomy Directory Grid**:
  - **Categories** (228 categories)
  - **Sections** (132 sections)
  - **Styles** (53 styles)
  - **UI Elements** (81 elements)
  - **Screens** (197 official screens categorized by Mobbin groupings: Social, Data, Actions, Layouts, etc.)
  - **Flows** (71 flows)
- **Live Search & Autocomplete**: Instant search suggestions with category pill tags and count grouping.
- **Paywall Bypass (Incognito Launcher)**: Seamlessly launches explore links in Chrome Incognito via the local backend.
- **Curated Discover Cards**: Quick access to Mobbin's **Popular Sites** and **Latest Sites**.
- **Official Mobbin Aesthetic**: Clean typography, subtle dark/light contrast, and exact pill and modal design patterns.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Google Chrome](https://www.google.com/chrome/) installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<YOUR-USERNAME>/Mobbin.git
   cd Mobbin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser:
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Project Structure

```
├── server.js              # Express backend server (handles API & incognito launch)
├── package.json           # Dependencies and scripts
├── .gitignore             # Ignored directories (node_modules, logs)
├── data/                  # Curated Mobbin taxonomy databases
│   ├── official_mobbin_screens_by_category.json
│   ├── sites_taxonomies.json
│   └── web_screens_official_197.json
└── public/                # Frontend assets
    ├── index.html         # Main portal structure
    ├── style.css          # Design system & CSS styles
    └── app.js             # Client search, popovers, and modal logic
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or open a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License
