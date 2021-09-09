import { writable } from 'svelte/store';

// load system theme
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

// load saved theme, if it exists
const savedTheme = localStorage.getItem('theme');

// create new store with either the saved theme or system theme
export const theme = writable<'dark' | 'light'>(
	savedTheme || systemTheme.matches ? 'dark' : 'light'
);

// save theme if there's no theme saved
if (!savedTheme) localStorage.setItem('theme', systemTheme.matches ? 'dark' : 'light');

// save theme in storage on change
theme.subscribe((v) => {
	localStorage.setItem('theme', v);
});

// set new theme if system theme changes
systemTheme.addEventListener('change', (newTheme) => {
	theme.set(newTheme.matches ? 'dark' : 'light');
});
