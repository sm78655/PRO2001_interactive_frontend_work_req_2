export type ThemeColor = 'blue' | 'green' | 'purple' | 'orange'
export type Mood = 'happy' | 'calm' | 'focused' | 'energetic'
export type TextSize = 'small' | 'medium' | 'large'

export interface Preferences {
  themeColor: ThemeColor
  mood: Mood
  textSize: TextSize
}

export interface PreferenceContextValue {
  preferences: Preferences
  updatePreference: <K extends keyof Preferences>(
    key: K,
    value: Preferences[K]
  ) => void
}
