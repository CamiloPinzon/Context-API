import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

import "./App.css";

function App() {
	const { theme } = useTheme();
	return (
		<div className={`app ${theme}`}>
			<h1>Theme Toggler</h1>
			<ThemeToggle />
		</div>
	);
}

export default App;
