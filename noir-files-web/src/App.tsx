import { ThemeProvider } from './contexts/ThemeContext';
import { AppRoutes } from './routes';

import "./styles/themes.css";
import "./styles/global.css";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
