import React, { createContext, useContext, useEffect, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

const getCssValue = (token: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
};

const ThemeContext = createContext({});

type Theme = 'legacy-light' | 'play-light';

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const getDefaultThemeValue = (): Theme => {
      return (localStorage.getItem('theme') as Theme | null) ?? 'legacy-light';

  };
  const [squareAntdTheme, setSquareAntdTheme] = useState({});
  const [theme, setTheme] = useState<Theme>(getDefaultThemeValue());

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    setSquareAntdTheme(
      createTheme({
        colors: {
          blue: [
            getCssValue('--vp-core-color-cobalt-100'),
            getCssValue('--vp-core-color-cobalt-100'),
            getCssValue('--vp-core-color-cobalt-100'),
            getCssValue('--vp-core-color-cobalt-200'),
            getCssValue('--vp-core-color-cobalt-300'),
            getCssValue('--vp-core-color-cobalt-400'),
            getCssValue('--vp-core-color-cobalt-500'),
            getCssValue('--vp-core-color-cobalt-600'),
            getCssValue('--vp-core-color-cobalt-700'),
            getCssValue('--vp-core-color-cobalt-800'),
            getCssValue('--vp-core-color-cobalt-900'),
          ],
        },
      })
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MantineProvider theme={squareAntdTheme}>{children}</MantineProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
