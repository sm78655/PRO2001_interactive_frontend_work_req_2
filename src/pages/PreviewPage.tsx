import { useOutletContext } from 'react-router-dom'
import type { PreferenceContextValue } from '../types'

const moodContent = {
  happy: {
    emoji: '😊',
    title: 'Keep smiling!',
    message: 'A positive mindset can make every challenge feel more manageable.',
  },
  calm: {
    emoji: '😌',
    title: 'Take it easy.',
    message: 'A calm space can help you think clearly and enjoy the moment.',
  },
  focused: {
    emoji: '🎯',
    title: 'Stay focused.',
    message: 'Small, consistent steps can move you closer to your goals.',
  },
  energetic: {
    emoji: '⚡',
    title: 'Bring the energy!',
    message: 'Use your momentum to create, learn, and make progress today.',
  },
}

export default function PreviewPage() {
  const { preferences } = useOutletContext<PreferenceContextValue>()
  const content = moodContent[preferences.mood]

  return (
    <section className="panel">
      <div className="section-heading">
        <p className="eyebrow">Step 2</p>
        <h2>Your live preview</h2>
        <p>
          This card reflects the preferences selected on the Settings page.
        </p>
      </div>

      <article
        className={`preview-card theme-${preferences.themeColor} text-${preferences.textSize}`}
      >
        <div className="emoji" aria-hidden="true">
          {content.emoji}
        </div>
        <p className="preview-label">Hello, Sameer!</p>
        <h3>{content.title}</h3>
        <p>{content.message}</p>

        <div className="preview-meta">
          <span>Theme: {preferences.themeColor}</span>
          <span>Mood: {preferences.mood}</span>
          <span>Text size: {preferences.textSize}</span>
        </div>
      </article>
    </section>
  )
}
