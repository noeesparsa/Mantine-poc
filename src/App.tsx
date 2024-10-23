import '@mantine/core/styles.css';

import { Router } from './Router';
import ThemeProvider from "@/ThemeProvider";

export default function App() {
  return (
      <ThemeProvider>
              <Router />
      </ThemeProvider>

  );
}
