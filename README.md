# PRO2001 – Interactive Frontend
## Work Requirement 2: Personal Preference Dashboard

This project was created for **PRO2001 – Interactive Frontend, Work Requirement 2**.

It is a multi-page React application where a user can choose personal display preferences on a **Settings** page and immediately see those choices reflected on a **Preview** page.

## Features

- Two distinct pages using React Router:
  - Settings
  - Preview
- Three configurable preferences:
  - Theme color
  - Mood
  - Text size
- Preferences are stored in one structured state object
- A custom hook (`usePreferences`) manages the preference state
- Shared state is passed to child routes through React Router's `Outlet` context
- The Preview page immediately reflects the currently selected preferences
- Responsive layout for desktop and mobile
- Reusable preference selection component

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- CSS
- Visual Studio Code
- Git and GitHub

## How to Run the Project

### 1. Clone the repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

### 2. Open the project folder

```bash
cd interactive_frontend_work_req_2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local URL

Vite normally starts the application at:

```text
http://localhost:5173
```

## Shared State and Custom Hook

The application uses a custom hook called `usePreferences`.

The hook stores the user's preferences in one structured object:

```ts
{
  themeColor: 'blue',
  mood: 'happy',
  textSize: 'medium'
}
```

It also provides an `updatePreference` function that updates individual values while keeping the rest of the preference object unchanged.

The hook is called in `AppLayout.tsx`. The returned preference state and update function are passed to nested routes through React Router's `Outlet` context:

```tsx
<Outlet context={preferenceState} />
```

Both the Settings and Preview pages access this shared data with `useOutletContext`. Because both pages use the same parent state, the selected preferences remain available when navigating between the routes.

## Project Structure

```text
interactive_frontend_work_req_2/
├── src/
│   ├── components/
│   │   └── PreferenceSelect.tsx
│   ├── hooks/
│   │   └── usePreferences.ts
│   ├── pages/
│   │   ├── PreviewPage.tsx
│   │   └── SettingsPage.tsx
│   ├── AppLayout.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Author

**Sameer Ahmad Mustafa**

## Course

**PRO2001 – Interactive Frontend**

## Work Requirement

**Work Requirement 2 – Personal Preference Dashboard: Theme & Mood**
