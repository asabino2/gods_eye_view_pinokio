module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
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
      method: "notify",
      params: {
        html: "God's Eye View update completed successfully!"
      }
    }
  ]
}
