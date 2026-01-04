# PropertyFinder - React Property Finder Application

<div align="center">

**A modern, fully-featured property search application built with React, Vite, and advanced UI components**

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://venuja2003.github.io/Estate-Agent/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[🚀 Live Demo](https://venuja2003.github.io/Estate-Agent/) • [📖 Documentation](#features) • [🐛 Report Bug](https://github.com/Venuja2003/Estate-Agent/issues) • [✨ Request Feature](https://github.com/Venuja2003/Estate-Agent/issues)

</div>

---

## ✨ Features

### 🔍 **Advanced Search**
- Multi-criteria property search (type, price, bedrooms, date, postcode)
- Real-time filtering with instant results
- Smart search algorithm combining 1-5 criteria simultaneously
- React Select dropdowns for enhanced UX

### 🏡 **Property Listings**
- Beautiful card-based layout with property images
- Responsive grid system adapting to all screen sizes
- Hover effects and smooth animations
- Quick property overview with key details

### 📱 **Property Details**
- Professional image gallery with 6-8 images per property
- Thumbnail navigation and fullscreen mode
- Tabbed interface for Description, Floor Plan, and Map
- Google Maps integration for location viewing
- React Image Gallery with touch support

### ❤️ **Favourites System**
- **Dual addition methods:**
  - Click heart icon on property cards
  - Drag and drop properties to favourites list
- Robust duplicate prevention
- Individual removal and clear all functionality
- Persistent favourites sidebar with real-time updates

### 📐 **Responsive Design**
- **4 breakpoints:** Desktop, Tablet, Mobile, Small Mobile
- Hand-written media queries for precise control
- CSS Grid and Flexbox layouts
- Mobile-first approach
- Touch-friendly interface

### 🎨 **Professional Design**
- Custom purple gradient theme
- Distinctive typography (Playfair Display + Poppins)
- Smooth animations and transitions
- Professional shadows and depth
- Consistent design system

### 🔒 **Security**
- Content Security Policy (CSP) implementation
- JSX automatic encoding preventing XSS
- Input sanitization for user data
- Secure by design

### 🧪 **Comprehensive Testing**
- 15+ Vitest tests covering core functionality
- Component testing with React Testing Library
- Search utility function tests
- 100% passing test suite

### 🚀 **Routing**
- React Router v6 with HashRouter
- GitHub Pages compatible URLs
- Shareable property links
- Browser back/forward button support
- Direct URL access to properties

---

## 🛠️ Built With

### Core Technologies
- **[React 18.2](https://reactjs.org/)** - UI Framework
- **[Vite 5.0](https://vitejs.dev/)** - Build Tool & Dev Server
- **[React Router 6](https://reactrouter.com/)** - Client-side Routing

### UI Libraries
- **[React Select](https://react-select.com/)** - Enhanced Dropdowns
- **[React DatePicker](https://reactdatepicker.com/)** - Date Selection
- **[React Tabs](https://github.com/reactjs/react-tabs)** - Tab Interface
- **[React Image Gallery](https://github.com/xiaolin/react-image-gallery)** - Image Carousel
- **[React DnD](https://react-dnd.github.io/react-dnd/)** - Drag and Drop

### Testing
- **[Vitest](https://vitest.dev/)** - Unit Testing Framework
- **[React Testing Library](https://testing-library.com/react)** - Component Testing
- **[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)** - Custom Matchers

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/property-search.git
   cd property-search
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add property images** (optional for demo)
   
   Place images in `public/images/properties/propX/` folders. See [LOCAL_IMAGES_GUIDE.md](LOCAL_IMAGES_GUIDE.md) for details.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run deploy` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run test suite once |
| `npm run test:watch` | Run tests in watch mode |

---

## 🏗️ Project Structure

```
property-search/
├── public/
│   └── images/
│       └── properties/      # Property images
│           ├── prop1/
│           ├── prop2/
│           └── ...
├── src/
│   ├── components/
│   │   ├── SearchPage.jsx         # Main search interface
│   │   ├── PropertyCard.jsx       # Property card component
│   │   ├── FavouritesList.jsx     # Favourites sidebar
│   │   ├── PropertyPage.jsx       # Property details page
│   │   └── Footer.jsx             # Footer component
│   ├── data/
│   │   └── properties.json        # Property data (7 properties)
│   ├── utils/
│   │   └── searchUtils.js         # Search filtering logic
│   ├── App.jsx                    # Main app with routing
│   └── main.jsx                   # Entry point
├── ROUTING_GUIDE.md               # Routing documentation
├── LOCAL_IMAGES_GUIDE.md          # Image setup guide
├── TESTING_GUIDE.md               # Testing documentation
├── SECURITY.md                    # Security implementation
└── README.md                      # This file
```

---

## 🎯 Key Features Explained

### Multi-Criteria Search
Search properties using any combination of:
- **Type**: House, Flat, or Any
- **Price Range**: Minimum and maximum
- **Bedrooms**: Minimum and maximum count
- **Date Added**: After and/or before specific dates
- **Postcode Area**: First part of postcode (e.g., BR1, BR5)

### Drag and Drop Favourites
Two ways to add properties to favourites:
1. **Click** the heart icon on property cards
2. **Drag** property cards to the favourites sidebar

Both methods prevent duplicates automatically.

### Responsive Design
**Breakpoints:**
- **Desktop** (>1024px): Side-by-side layout
- **Tablet** (768-1024px): Adapted grid
- **Mobile** (<768px): Stacked single-column
- **Small Mobile** (<480px): Optimized spacing

---

## 🧪 Testing

Run the comprehensive test suite:

```bash
npm test
```

**Test Coverage:**
- ✅ 15 tests across 2 test suites
- ✅ Search filtering (8 tests)
- ✅ Component interactions (5 tests)
- ✅ Date calculations (2 tests)

All tests pass! 🎉

---

## 🚢 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
   
   Change the base path to match your repository name:
   ```js
   base: '/property-search/',  // Your repo name
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   
   **Option A: Using gh-pages**
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```
   
   **Option B: Manual**
   - Push the `dist/` folder to `gh-pages` branch
   - Enable GitHub Pages in repository settings

4. **Access your site**
   ```
   https://YOUR-USERNAME.github.io/property-search/
   ```

---

## 🔒 Security Features

- **Content Security Policy (CSP)**: Prevents XSS attacks
- **JSX Automatic Encoding**: All dynamic content escaped
- **Input Sanitization**: User inputs sanitized before processing
- **No Inline Scripts**: All scripts external
- **HTTPS Ready**: Secure deployment

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@Venuja2003](https://github.com/Venuja2003)
- Email: venujaransika15@gmail.com

---

## 🙏 Acknowledgments

- Property images from [Pexels](https://www.pexels.com/)
- Icons from [Lucide Icons](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)

---

## 📈 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/YOUR-USERNAME/property-search)
![GitHub stars](https://img.shields.io/github/stars/YOUR-USERNAME/property-search?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR-USERNAME/property-search?style=social)
![GitHub issues](https://img.shields.io/github/issues/YOUR-USERNAME/property-search)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Built with ❤️ using React and Vite**

[⬆ Back to Top](#-propertyfinder---react-property-search-application)

</div>
