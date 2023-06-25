import React, { createContext, useState, PropsWithChildren } from 'react';

// Defina o tipo para o tema
type Theme = 'light' | 'dark';

type lightThemeColorsType = {
  primary: '#4287f5',
  secondary: '#888888',
  background: '#ffffff',
  text: '#000000',
};

type darkThemeColorsType = {
  primary: '#f5427b',
  secondary: '#bbbbbb',
  background: '#222222',
  text: '#ffffff',
};

const lightThemeColors: lightThemeColorsType = {
  primary: '#4287f5',
  secondary: '#888888',
  background: '#ffffff',
  text: '#000000',
};

const darkThemeColors: darkThemeColorsType = {
  primary: '#f5427b',
  secondary: '#bbbbbb',
  background: '#222222',
  text: '#ffffff',
};


// Defina a interface para o contexto do tema
interface ThemeContextType {
  theme: Theme;
  themes: {
    light: lightThemeColorsType;
    dark: darkThemeColorsType;
  };
  toggleTheme: () => void;
}

// Crie o contexto do tema com um valor inicial
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => { },
  themes: {
    light: lightThemeColors,
    dark: darkThemeColors,
  }
});

// Crie o provedor do contexto de tema
export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const themes = {
    light: lightThemeColors,
    dark: darkThemeColors,
  };

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Valor do contexto do tema a ser fornecido para os componentes
  const themeContextValue: ThemeContextType = {
    theme,
    themes,
    toggleTheme,
  };

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};
