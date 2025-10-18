// Language switching functionality
export function getCurrentLang(): string {
  return localStorage.getItem('lang') || 'en';
}

export function setLang(lang: 'en' | 'pl') {
  localStorage.setItem('lang', lang);
  // Reload page with new language
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace(/^\/(en|pl)/, `/${lang}`);
  window.location.href = newPath;
}
