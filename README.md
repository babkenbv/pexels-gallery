# Photo Gallery App

A modern, responsive photo gallery application built with React, TypeScript, and Vite. The app features infinite scrolling, image optimization, and a masonry grid layout.

## Features

- 🖼️ Masonry grid layout for optimal photo display
- 🔄 Infinite scrolling with virtualization
- 🔍 Search functionality
- 📱 Fully responsive design
- 🖼️ Image optimization and lazy loading
- 🎨 Modern UI with smooth transitions
- ⚡ Performance optimized

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- TanStack Virtual (for virtualization)
- React Router DOM
- Pexels API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/photo-gallery-app.git
cd photo-gallery-app
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Create a `.env` file in the root directory and add your Pexels API key:
```env
VITE_PEXELS_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```

## Performance Optimizations

### 1. Virtualization
- Implemented virtual scrolling using TanStack Virtual
- Only renders visible photos, significantly reducing DOM nodes
- Maintains smooth scrolling even with large datasets

### 2. Image Optimization
- Responsive images using srcSet and sizes attributes
- Progressive image loading with placeholder
- Lazy loading for off-screen images
- Dynamic image size optimization based on viewport

### 3. Component Optimization
- Memoization of expensive calculations
- Efficient state management
- Proper cleanup of event listeners
- Optimized re-renders using proper React patterns

## Design Decisions

### 1. Layout
- Masonry grid layout for visually appealing photo display
- Responsive design with different column counts based on screen size
- Sticky search bar for easy access
- Modal view for photo details

### 2. State Management
- Used React's built-in state management with hooks
- Implemented proper data fetching patterns
- Efficient handling of photo pagination

### 3. Styling
- Utilized Tailwind CSS for:
  - Consistent design system
  - Reduced bundle size
  - Efficient responsive design
  - Easy maintenance
- Custom CSS classes for specific animations and transitions

### 4. TypeScript Integration
- Strong typing for better development experience
- Interface definitions for API responses
- Type safety across components

## Project Structure
```
src/
├── components/         # Reusable components
│   ├── MasonryGrid.tsx    # Grid layout component
│   ├── PhotoDetails.tsx   # Photo detail view
│   └── SearchBar.tsx      # Search component
├── pages/             # Page components
│   ├── Home.tsx          # Main gallery page
│   └── PhotoView.tsx     # Single photo view
├── types/             # TypeScript type definitions
│   └── index.ts         # Shared interfaces
├── api/               # API related functions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

