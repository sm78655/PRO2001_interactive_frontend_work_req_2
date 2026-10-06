import { useState } from 'react'
import type { Preferences } from '../types'

const defaultPreferences: Preferences = {
  themeColor: 'blue',
  mood: 'happy',
  textSize: 'medium',
}

export default function usePreferences() {
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences)

  const updatePreference = <K extends keyof Preferences>(
    key: K,
    value: Preferences[K]
  ) => {
    setPreferences((current) => ({
      ...current,
      [key]: value,
    }))
  }

  return { preferences, updatePreference }
}
