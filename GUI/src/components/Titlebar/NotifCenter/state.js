import { ref, computed } from 'vue'

export const inactive = ref(false)
export const toggleNotifCenter = () => (inactive.value = !inactive.value);

export const NOTIFCENTER_WIDTH = 10
export const NOTIFCENTER_WIDTH_COLLAPSED = 1
export const notifCenterWidth = computed(
    () => `${inactive.value ? NOTIFCENTER_WIDTH_COLLAPSED : NOTIFCENTER_WIDTH}px`
)