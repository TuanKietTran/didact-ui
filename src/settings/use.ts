// stores/settingStore.ts
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import type { SettingKey } from './constants'

export type Setting = {
  key: string
  value: any
}

export const useSettingStore = defineStore('settingStore', () => {
  // State: All settings stored in a map
  const settings = ref<Record<string, any>>({})

  // Actions: Set a single setting
  const setSetting = (key: string, value: any, isServer = false) => {
    settings.value[key] = value

    if (!isServer) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  // Actions: Load all settings from localStorage
  const loadSettings = () => {
    Object.keys(localStorage).forEach((key) => {
      try {
        const value = JSON.parse(localStorage.getItem(key) || 'null')
        if (value !== null) {
          settings.value[key] = value
        }
      } catch (e) {
        console.error(`Failed to load setting: ${key}`, e)
      }
    })
  }

  return { settings, setSetting, loadSettings }
})


export function useSettings(key: SettingKey) {
  const store = useSettingStore()
  const { settings } = storeToRefs(store)

  // Getter: Return the setting value for a specific key
  const setting = computed({
    get: () => settings.value[key],
    set: (value) => store.setSetting(key, value),
  })

  // Action: Update setting
  const set = (value: any) => store.setSetting(key, value)

  return { setting, set }
}