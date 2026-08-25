const path = require('path')

module.exports = {
  version: "2.0",
  title: "God's Eye View",
  description: "A spy satellite simulator in your browser with real-time spatial intelligence on a photorealistic 3D globe.",
  icon: "gods-eye-view.png",
  menu: async (kernel, info) => {
    let installed = await kernel.exists(path.resolve(__dirname, "app", "node_modules"))
    let running = await kernel.running(__dirname, "start.js")

    if (installed) {
      if (running) {
        let local = await kernel.local(__dirname, "start.js")
        if (local && local.url) {
          return [
            {
              default: true,
              icon: "fa-solid fa-globe",
              text: "Open Web UI",
              href: local.url,
              target: "_blank"
            },
            {
              icon: "fa-solid fa-terminal",
              text: "Terminal",
              href: "start.js"
            },
            {
              icon: "fa-solid fa-arrows-rotate",
              text: "Update",
              href: "update.js"
            }
          ]
        } else {
          return [
            {
              default: true,
              icon: "fa-solid fa-terminal",
              text: "Terminal",
              href: "start.js"
            },
            {
              icon: "fa-solid fa-arrows-rotate",
              text: "Update",
              href: "update.js"
            }
          ]
        }
      } else {
        return [
          {
            default: true,
            icon: "fa-solid fa-play",
            text: "Start",
            href: "start.js"
          },
          {
            icon: "fa-solid fa-arrows-rotate",
            text: "Update",
            href: "update.js"
          },
          {
            icon: "fa-solid fa-trash-can",
            text: "Reset",
            href: "reset.js"
          }
        ]
      }
    } else {
      return [
        {
          default: true,
          icon: "fa-solid fa-download",
          text: "Install",
          href: "install.js"
        }
      ]
    }
  }
}
