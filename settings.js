module.exports = {
  run: [
    {
      method: "input",
      params: {
        title: "Settings",
        description: "Configure your API keys and environment settings for God's Eye View.",
        form: [
          {
            key: "GOOGLE_MAPS_API_KEY",
            title: "Google Maps API Key",
            placeholder: "AIzaSy...",
            description: "Required for photorealistic 3D Earth globe tiles."
          },
          {
            key: "OPENAI_API_KEY",
            title: "OpenAI API Key",
            placeholder: "sk-...",
            description: "Optional for hands-free voice AI agent & scene summary."
          },
          {
            key: "AISSTREAM_API_KEY",
            title: "AISStream API Key",
            placeholder: "...",
            description: "Optional for live vessel tracking."
          },
          {
            key: "FIRMS_MAP_KEY",
            title: "NASA FIRMS Map Key",
            placeholder: "...",
            description: "Optional for live wildfire tracking."
          },
          {
            key: "TOMTOM_API_KEY",
            title: "TomTom API Key",
            placeholder: "...",
            description: "Optional for live traffic density overlays."
          }
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
        html: "Settings updated successfully!"
      }
    }
  ]
}
