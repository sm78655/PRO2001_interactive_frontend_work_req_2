interface Option<T extends string> {
  value: T
  label: string
}

interface PreferenceSelectProps<T extends string> {
  id: string
  label: string
  value: T
  options: Option<T>[]
  onChange: (value: T) => void
}

export default function PreferenceSelect<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: PreferenceSelectProps<T>) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
