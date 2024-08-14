# Theme Toggler Application

This is a simple React application that demonstrates how to implement a theme toggler (light/dark mode) using the Context API. The theme is managed globally and can be toggled from any component within the application.

## Features

- **Context API**: Centralized state management for the theme.
- **Light/Dark Mode**: Toggle between light and dark themes.
- **Custom Hook**: `useTheme` hook for easy access to theme context.

## Project Setup

### 1. Installation

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/CamiloPinzon/Context-API.git
cd Context-API
```

Then, install the dependencies:

```bash
npm install
```

### 2. Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the application on the default Vite port (usually `http://localhost:5173`).

### 3. Building for Production

To build the application for production, run:

```bash
npm run build
```

The optimized and minified build will be available in the `dist` directory.

## Application Structure

- **`src/context/ThemeContext.tsx`**: Contains the `ThemeContext`, `ThemeProvider`, and `useTheme` hook.
- **`src/components/ThemeToggle.tsx`**: A component that toggles the theme between light and dark.
- **`src/App.tsx`**: The main component that uses the theme context and displays the `ThemeToggle` button.
- **`src/App.css`**: Styles for the application, including the light and dark theme classes.

## Context API Implementation

1. **`ThemeContext`**: A context object created using React's `createContext`. It holds the current theme and a function to toggle the theme.
2. **`ThemeProvider`**: A provider component that wraps the application and provides the theme context to all child components.
3. **`useTheme`**: A custom hook that allows easy access to the theme context.

## How It Works

- The `ThemeProvider` in `src/context/ThemeContext.tsx` manages the theme state (`light` or `dark`).
- The `toggleTheme` function toggles the theme between `light` and `dark`.
- The `App` component applies the current theme class to the root element, and the `ThemeToggle` component allows users to switch between themes.

## Example Usage

```tsx
import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/ThemeContext';
import './App.css';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Hello, Theme Toggler!</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
```

## License

This project is licensed under the MIT License.