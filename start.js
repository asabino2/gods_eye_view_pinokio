module.exports = {
  daemon: true,
  run: [
    {
      method: "fs.copy",
      params: {
        src: "ENVIRONMENT",
        dest: "app/.env"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "npm run dev -- --host 0.0.0.0 --port 4173",
        on: [
          {
            event: "/http:\\/\\/[0-9.:]+/",
            done: true
          }
        ]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
