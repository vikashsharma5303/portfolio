function setDarkMode() {
    if (localStorage['vueuse-color-scheme'] === 'dark' || (!('vueuse-color-scheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}


setDarkMode()