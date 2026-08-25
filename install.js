module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/bilawalsidhu/gods-eye-view app"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "npm install"
      }
    },
    {
      method: "input",
      params: {
        title: "Configure API Keys",
        description: "Enter your API keys for God's Eye View. (Google Maps API Key is recommended for photorealistic 3D Earth tiles)",
        form: [
          {
            key: "GOOGLE_MAPS_API_KEY",
            title: "Google Maps API Key (Recommended)",
            placeholder: "AIzaSy...",
            description: "Required for photorealistic 3D Earth globe tiles."
          },
          {
            key: "OPENAI_API_KEY",
            title: "OpenAI API Key (Optional)",
            placeholder: "sk-...",
            description: "Optional for hands-free voice AI agent & scene summary."
          },
          {
            key: "AISSTREAM_API_KEY",
            title: "AISStream API Key (Optional)",
            placeholder: "...",
            description: "Optional for live vessel tracking."
          },
          {
            key: "FIRMS_MAP_KEY",
            title: "NASA FIRMS Map Key (Optional)",
            placeholder: "...",
            description: "Optional for live wildfire tracking."
          },
          {
            key: "TOMTOM_API_KEY",
            title: "TomTom API Key (Optional)",
            placeholder: "...",
            description: "Optional for live traffic density overlays."
          }
        ]
      }
    },
    {
      method: "fs.write",
      params: {
        path: "ENVIRONMENT",
        text: [
          "# God's Eye View - Environment Configuration",
          "GOOGLE_MAPS_API_KEY={{input.GOOGLE_MAPS_API_KEY}}",
          "OPENAI_API_KEY={{input.OPENAI_API_KEY}}",
          "AISSTREAM_API_KEY={{input.AISSTREAM_API_KEY}}",
          "FIRMS_MAP_KEY={{input.FIRMS_MAP_KEY}}",
          "TOMTOM_API_KEY={{input.TOMTOM_API_KEY}}"
        ]
      }
    },
    {
      method: "fs.write",
      params: {
        path: "app/.env",
        text: [
          "# God's Eye View - Environment Configuration",
          "GOOGLE_MAPS_API_KEY={{input.GOOGLE_MAPS_API_KEY}}",
          "OPENAI_API_KEY={{input.OPENAI_API_KEY}}",
          "AISSTREAM_API_KEY={{input.AISSTREAM_API_KEY}}",
          "FIRMS_MAP_KEY={{input.FIRMS_MAP_KEY}}",
          "TOMTOM_API_KEY={{input.TOMTOM_API_KEY}}",
          "OPENSKY_AUTH_MODE=anon",
          "OPENAI_REALTIME_MODEL=gpt-realtime-2",
          "OPENAI_REALTIME_MODEL_MINI=gpt-realtime-2.1-mini",
          "OPENAI_REALTIME_VOICE=marin",
          "OPENAI_REALTIME_REASONING_EFFORT=low",
          "OPENAI_REALTIME_CONTEXT_TOKENS=3000",
          "OPENAI_REALTIME_CONTEXT_RETENTION=0.5",
          "OPENAI_HUD_SUMMARY_MODEL=gpt-5-nano"
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "God's Eye View installation completed successfully!"
      }
    }
  ]
}
