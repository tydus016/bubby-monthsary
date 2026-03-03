# Bubby Monthsary - React App

A beautiful monthsary celebration app built with React and Tailwind CSS.

## Features

- Password protection with cooldown
- Happy panda transition animation
- Heart-shaped photo collage
- Gallery modal with keyboard navigation
- Responsive design

## Running with Docker

### Prerequisites
- Docker Desktop installed on your system

### Quick Start

1. Build and run the container:
```bash
docker-compose up --build
```

2. Open your browser and visit:
```
http://localhost:3000
```

3. To stop the container:
```bash
docker-compose down
```

### Hot Reload

The Docker setup includes hot reload functionality. Any changes you make to the source code will automatically reflect in the browser without needing to rebuild the container.

Files that support hot reload:
- `src/**` - All React components and JavaScript files
- `public/**` - Public assets
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

### Other Docker Commands

Run in detached mode (background):
```bash
docker-compose up -d
```

View logs:
```bash
docker-compose logs -f
```

Rebuild after dependency changes:
```bash
docker-compose up --build
```

## Running without Docker

If you prefer to run locally with Node.js:

```bash
npm install
npm start
```

## Project Structure

```
bubby-monthsary/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── FloatingHearts.js
│   │   ├── PasswordScreen.js
│   │   ├── HappyPandaScreen.js
│   │   ├── CollageScreen.js
│   │   └── GalleryModal.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   ├── constants.js
│   └── utils.js
├── Dockerfile
├── docker-compose.yml
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Password

The default password is: `090323`

You can change it in `src/constants.js`.
