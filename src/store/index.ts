import { defineStore } from 'pinia';

export const useBaseStore = defineStore('base', {
    state: () => {
        return {
            isDarkMode: false,
            isCloseDialog: true
        }
    },
    getters: {},
    actions: {
        /** 
         * Function to set theme in local storage and change isDarkMode value according to theme
         * 
         * @param {string} theme - auto, dark
         */
        setDarkMode(theme: string) {
            localStorage.setItem('vueuse-color-scheme', theme);
            this.isDarkMode = theme === 'dark';
        },

        /** 
         * Function to show dialog box
         */
        setCloseDialog(value: boolean) {
            console.log("🚀 ~ file: index.ts ~ line 26 ~ setCloseDialog ~ value", value)
            this.isCloseDialog = value;
        }
    },
})