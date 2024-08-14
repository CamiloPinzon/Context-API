import { createContext, useContext, useState, ReactNode } from "react";

// Define the types for the context value
interface ThemeContextType {
	theme: string;
	toggleTheme: () => void;
}

// Create a default context value
const defaultThemeContextValue: ThemeContextType = {
	theme: "light",
	toggleTheme: () => {},
};

// Create the context
const themeContext = createContext<ThemeContextType>(defaultThemeContextValue);

// Create a provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState(defaultThemeContextValue.theme);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<themeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</themeContext.Provider>
	);
};

// Custom hook to use the ThemeContext
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(themeContext);
