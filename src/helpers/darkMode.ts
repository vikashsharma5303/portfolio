import { useDark, useToggle } from '@vueuse/core'
import { getActivePinia } from 'pinia'
import { useBaseStore } from '../store'

const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
    onChanged(dark: boolean) {
        if (getActivePinia()) useBaseStore().setDarkMode(dark ? 'dark' : 'light')
        document.documentElement.classList[dark ? 'add' : 'remove']('dark')
    },
})

const toggleDark = useToggle(isDark)

export default toggleDark;
