# GUI Design Gallery

A collection of experimental GUI designs and interfaces built with vanilla HTML, CSS, and JavaScript. Explore different design styles from classic retro interfaces to modern component libraries. Inspired by [GUIdebook Gallery](https://guidebookgallery.org/) and modern design systems like shadcn/ui.

## ✨ Available Designs

### 🎨 Modern Dashboard (`index.html`)
- **Animated Background** - Floating gradient orbs with smooth motion effects
- **Glassmorphism Design** - Modern UI with backdrop blur and translucent surfaces
- **Interactive Dashboard** - Hover effects and smooth transitions throughout
- **Custom Chart Visualization** - Canvas-based revenue chart with gradient fills
- **Real-time Activity Feed** - Recent activity updates with colorful avatars
- **Quick Actions Panel** - Interactive buttons with ripple effects

### 🕰️ Classic Retro GUI (`retro.html`)
- **Windows 95 Style** - Nostalgic interface inspired by classic operating systems
- **Draggable Windows** - Interactive windows with title bars and controls
- **Start Menu** - Classic start button and menu system
- **Desktop Icons** - Clickable desktop icons with selection states
- **Taskbar** - Bottom taskbar with running applications

### ⚡ Shadcn UI Design System (`shadcn.html`)
- **Component Library** - Modern, accessible component designs
- **Button Variants** - Multiple button styles (default, destructive, outline, ghost, etc.)
- **Card Components** - Structured card layouts with headers and footers
- **Form Inputs** - Clean input fields with labels
- **Data Tables** - Responsive table components with hover states
- **Documentation Style** - Component showcase with code examples

### 🎭 Design Gallery (`gallery.html`)
- **Visual Showcase** - Browse all available GUI designs
- **Interactive Previews** - See each design before opening
- **Easy Navigation** - Quick access to all design variants

## 🚀 Getting Started

### Prerequisites

No dependencies required! This is a pure vanilla JavaScript project.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joseb33w/Created-At77.git
cd Created-At77
```

2. Open `gallery.html` in your web browser to see all available designs:
```bash
open gallery.html
```

Or open individual designs:
- `gallery.html` - Design gallery and showcase
- `index.html` - Modern dashboard
- `retro.html` - Classic retro GUI
- `shadcn.html` - Shadcn UI components

## 📁 Project Structure

```
Created-At77/
├── gallery.html    # Design gallery showcase
├── gallery.css     # Gallery styling
├── gallery.js      # Gallery interactions
├── index.html      # Modern dashboard design
├── styles.css      # Modern dashboard styling
├── script.js       # Dashboard functionality
├── retro.html      # Classic retro GUI design
├── retro.css       # Retro styling
├── retro.js        # Retro interactions
├── shadcn.html     # Shadcn UI design system
├── shadcn.css      # Shadcn styling
├── shadcn.js       # Shadcn interactions
└── README.md       # This file
```

## 🎨 Design Highlights

- **Color Palette**: Indigo (#6366f1), Purple (#8b5cf6), Pink (#ec4899)
- **Typography**: Inter font family for modern, clean text
- **Animations**: Smooth transitions and hover effects
- **Glassmorphism**: Backdrop blur effects for depth
- **Gradients**: Beautiful gradient accents throughout

## 🖥️ Components

### Sidebar Navigation
- Fixed sidebar with navigation items
- Active state indicators
- User profile section at the bottom

### Dashboard Header
- Page title and subtitle
- Search functionality
- Notification bell with badge

### Stats Cards
- Four metric cards with icons
- Hover animations
- Color-coded icons (blue, purple, green, orange)

### Revenue Chart
- Custom canvas-based line chart
- Gradient fill under the line
- Interactive data visualization

### Activity Feed
- Recent activity items
- Colorful user avatars
- Timestamp information

### Quick Actions
- Four action buttons
- Ripple effect on click
- Icon-based navigation

## 🎯 Usage

1. **Navigation**: Click on sidebar items to switch between sections (Dashboard, Projects, Analytics, Settings)
2. **Search**: Use the search box in the header to search content
3. **Quick Actions**: Click any quick action button to trigger actions
4. **Interactions**: Hover over cards and buttons to see smooth animations

## 📱 Responsive Design

The dashboard is fully responsive and adapts to different screen sizes:
- **Desktop**: Full sidebar and multi-column layout
- **Tablet**: Adjusted grid layouts
- **Mobile**: Collapsed sidebar and single-column layout

## 🛠️ Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    /* ... more variables */
}
```

### Adding New Sections

1. Add a new navigation item in the sidebar
2. Create corresponding content section
3. Update the navigation handler in `script.js`

### Modifying Chart Data

Edit the `data` array in the `initChart()` function in `script.js`:

```javascript
const data = [
    { month: 'Jan', value: 32000 },
    // Add more data points
];
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

Created with ❤️ by joseb33w

## 🎨 Design Philosophy

This project serves as a **testing ground for GUI designs**, exploring:
- **Historical Interfaces** - Classic OS designs from the 90s and early 2000s
- **Modern Systems** - Contemporary design systems and component libraries
- **Experimental Styles** - Creative and unique interface approaches
- **Best Practices** - Clean code, accessibility, and responsive design

## 🔮 Future Designs

- [ ] Minimalist design variant
- [ ] Neumorphism interface
- [ ] Cyberpunk/futuristic theme
- [ ] macOS Big Sur style
- [ ] Linux desktop environments
- [ ] Mobile-first designs
- [ ] Dark/light theme variations

## 📚 Inspiration

- [GUIdebook Gallery](https://guidebookgallery.org/) - Historical GUI archive
- [shadcn/ui](https://ui.shadcn.com/) - Modern component library
- Classic Windows and Mac OS interfaces

---

**Explore, experiment, and create!** 🎨✨

