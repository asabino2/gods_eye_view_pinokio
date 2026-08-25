# God's Eye View - Pinokio Launcher Script

This repository contains a one-click launcher script suite for [Pinokio](https://pinokio.computer/) to automatically install, configure, start, and update **[God's Eye View](https://github.com/bilawalsidhu/gods-eye-view)**.

God's Eye View is a spy satellite simulator in your browser with real-time open-source spatial intelligence (live flights, ships, satellites, earthquakes, cameras, tactical HUD, and AI voice control) rendered on a photorealistic 3D globe.

---

## 🚀 Features

- **One-Click Installation (`install.js`)**: Clones the official repository, installs Node.js dependencies, sets up configuration templates, and prompts for API keys.
- **One-Click Updates (`update.js`)**: Pulls the latest code directly from GitHub and updates dependencies.
- **Embedded Web UI (`start.js`)**: Launches the Vite server and seamlessly displays the interactive 3D globe within Pinokio's browser window.
- **Native Settings Configuration (`ENVIRONMENT`)**: Manage your `GOOGLE_MAPS_API_KEY`, `OPENAI_API_KEY`, `AISSTREAM_API_KEY`, `FIRMS_MAP_KEY`, and `TOMTOM_API_KEY` directly inside Pinokio's native Settings page.
- **Factory Reset (`reset.js`)**: Cleanly removes the cloned application folder to allow a fresh re-installation if needed.

---

## 🔑 API Keys Guide

While God's Eye View works out-of-the-box with many free/keyless layers, adding API keys unlocks the full experience:

1. **Google Maps API Key** *(Recommended)*:
   - Required for photorealistic 3D Earth terrain tiles.
   - Obtain from [Google Cloud Console](https://console.cloud.google.com/) with **Map Tiles API** enabled.
2. **OpenAI API Key** *(Optional)*:
   - Unlocks hands-free voice commands, AI HUD summaries, and real-time scene analysis.
   - Obtain from [OpenAI Platform](https://platform.openai.com/).
3. **AISStream API Key** *(Optional)*:
   - Enables live global ship and marine vessel tracking.
4. **NASA FIRMS Map Key** *(Optional)*:
   - Enables live thermal anomaly and wildfire tracking.
5. **TomTom API Key** *(Optional)*:
   - Enables live traffic density heatmaps on city streets.

---

## 📦 Quick Start with Pinokio

1. Open **Pinokio**.
2. Click **Download** or paste this repository URL into Pinokio.
3. Click **Install**.
4. Enter your API keys when prompted (or configure them anytime under Pinokio's native **Settings** tab).
5. Click **Start** to launch God's Eye View!
