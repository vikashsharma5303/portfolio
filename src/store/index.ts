import { defineStore } from 'pinia';

export const useBaseStore = defineStore('base', {
    state: () => {
        return {
            isDarkMode: false
        }
    },
    getters: {
        getTheme: (state) => state.isDarkMode
    },
    actions: {
        setDarkMode(theme: string) {
            localStorage.setItem('theme', theme);
            if (theme === 'dark') {
                this.isDarkMode = true;
                document.documentElement.classList.add('dark')
            } else {
                this.isDarkMode = false;
                document.documentElement.classList.remove('dark')
            }
        },
    },
})