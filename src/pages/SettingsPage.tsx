import { useOutletContext } from 'react-router-dom'
import PreferenceSelect from '../components/PreferenceSelect'
import type {
  Mood,
  PreferenceContextValue,
  TextSize,
  ThemeColor,
} from '../types'

const themeOptions: { value: ThemeColor; label: string }[] = [
  { value: 'blue', label: 'Ocean Blue' },
  { value: 'green', label: 'Fresh Green' },
  { value: 'purple', label: 'Creative Purple' },
  { value: 'orange', label: 'Warm Orange' },
]

const moodOptions: { value: Mood; label: string }[] = [
  { value: 'happy', label: 'Happy 😊' },
  { value: 'calm', label: 'Calm 😌' },
  { value: 'focused', label: 'Focused 🎯' },
  { value: 'energetic', label: 'Energetic ⚡' },
]

const textSizeOptions: { value: TextSize; label: string }[] = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
]

export default function SettingsPage() {
  const { preferences, updatePreference } =
    useOutletContext<PreferenceContextValue>()

  return (
    <section className="panel">
      <div className="section-heading">
        <p className="eyebrow">Step 1</p>
        <h2>Choose your preferences</h2>
        <p>
          Change the options below. Your choices are stored in shared state and
          will appear immediately on the Preview page.
        </p>
      </div>

      <div className="settings-grid">
        <PreferenceSelect
          id="theme"
          label="Theme color"
          value={preferences.themeColor}
          options={themeOptions}
          onChange={(value) => updatePreference('themeColor', value)}
        />

        <PreferenceSelect
          id="mood"
          label="Mood"
          value={preferences.mood}
          options={moodOptions}
          onChange={(value) => updatePreference('mood', value)}
        />

        <PreferenceSelect
          id="text-size"
          label="Text size"
          value={preferences.textSize}
          options={textSizeOptions}
          onChange={(value) => updatePreference('textSize', value)}
        />
      </div>

      <div className="current-values" aria-live="polite">
        <strong>Current selections:</strong>
        <span>Theme: {preferences.themeColor}</span>
        <span>Mood: {preferences.mood}</span>
        <span>Text: {preferences.textSize}</span>
      </div>
    </section>
  )
}
