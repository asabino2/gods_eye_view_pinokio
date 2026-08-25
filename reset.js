module.exports = {
  run: [
    {
      method: "fs.rm",
      params: {
        path: "app"
      }
    },
    {
      method: "notify",
      params: {
        html: "God's Eye View reset completed successfully."
      }
    }
  ]
}
