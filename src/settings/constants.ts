export const SettingKeys = {
  COLOR_THEME: 'color-theme',
  LANGUAGE: 'language',
  NOTIFICATIONS: 'notifications',
} as const

export type SettingKey = typeof SettingKeys[keyof typeof SettingKeys]