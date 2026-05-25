# Rep Sheet — Deployment Guide

A fully offline-capable Progressive Web App for tracking Pull / Push / Legs / Full Body workouts.

## What's inside

```
repsheet/
├── index.html              # The app
├── manifest.json           # PWA manifest (name, icons, theme)
├── sw.js                   # Service worker (offline caching)
└── icons/
    ├── icon-192.png        # Home screen icon (Android)
    ├── icon-512.png        # Large icon (splash screens, stores)
    └── icon-maskable-512.png  # Adaptive icon (safe-zone padded)
```

## Features

- **Persistence** — checked exercises save automatically via `localStorage`
- **Offline-first** — service worker caches everything; works with no signal
- **Installable** — adds to iOS/Android home screen, runs full-screen with no browser chrome
- **Per-day tracking** — Pull, Push, Legs, Full Body each track independently
- **Reset button** — clears the currently visible day's progress
- **Haptic feedback** — light vibration on Android when checking an exercise
- **Offline indicator** — small pill appears at top when network is down

## Hosting — pick one

PWAs **must be served over HTTPS** (or `localhost` for testing). Pick any of these:

### Option A — Netlify Drop (easiest, free, ~30 seconds)
1. Go to https://app.netlify.com/drop
2. Drag the entire `repsheet` folder onto the page
3. You'll get a URL like `https://random-name.netlify.app` — that's your app

### Option B — Vercel (free)
1. Create a free account at https://vercel.com
2. Drag the folder in, or connect a GitHub repo
3. Auto-deploys to HTTPS

### Option C — GitHub Pages (free, requires GitHub account)
1. Create a public repo, push the `repsheet` folder contents to the root
2. Settings → Pages → Source: `main` branch
3. Your app lives at `https://yourusername.github.io/reponame`

### Option D — Local testing on your Windows machine
```bash
cd repsheet
python -m http.server 8000
```
Open `http://localhost:8000` in Chrome. PWA features work on `localhost` even without HTTPS.

## Install on your iPhone

Once hosted on HTTPS:
1. Open the URL in **Safari** (must be Safari for iOS install)
2. Tap the **Share** button (square with arrow up)
3. Scroll and tap **"Add to Home Screen"**
4. Done — it now launches like a native app, fully offline

## Install on Android

1. Open the URL in **Chrome**
2. Tap the menu → **"Install app"** or **"Add to Home Screen"**
3. Launches full-screen, fully offline

## Updating the workouts

Edit `index.html` directly — exercise data lives inline. Each exercise needs a unique `data-id` attribute (e.g. `pull-1`, `push-2`) so progress persists correctly. If you add a new exercise, give it a new ID; existing IDs stay tied to existing checks.

When you redeploy, bump the version in `sw.js`:
```js
const VERSION = 'repsheet-v2';  // was v1
```
This invalidates the old cache and forces clients to fetch the new files.

## Storage notes

All progress lives in the browser's `localStorage` under the key `repsheet-v1`. It survives reloads, app restarts, and full offline use. To wipe everything, clear site data in browser settings.
