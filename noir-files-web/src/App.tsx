import { ThemeProvider } from './contexts/ThemeContext';
import { AppRoutes } from './routes';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import "./styles/themes.css";
import "./styles/global.css";


function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
