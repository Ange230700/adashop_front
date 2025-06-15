// src/app/utils/color-mode.ts

export type ColorMode = 'light' | 'dark';

export function getSystemColorMode(): ColorMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getStoredColorMode(): ColorMode | null {
  return localStorage.getItem('colorMode') as ColorMode | null;
}

export function setStoredColorMode(mode: ColorMode) {
  localStorage.setItem('colorMode', mode);
}

export function applyColorMode(mode: ColorMode) {
  document.documentElement.classList.toggle('dark', mode === 'dark');
}
