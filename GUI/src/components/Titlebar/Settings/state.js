import { ref, computed } from 'vue'

export const inactiveSettings = ref(false)
export const toggleSettings = () => (inactiveSettings.value = !inactiveSettings.value)

export const SETTINGS_WIDTH = 336
export const SETTINGS_WIDTH_COLLAPSED = 1
export const settingsWidth = computed(
    () => `${inactiveSettings.value ? SETTINGS_WIDTH_COLLAPSED : SETTINGS_WIDTH}px`
)
