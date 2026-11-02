const fs = require('fs')
const path = require('path')

// Post files live in these subfolders of pages/, but their URLs skip the folder:
// pages/poker/Sharpe_Ratio.js is served at /Sharpe_Ratio.
const POST_FOLDERS = ['poker', 'tichu', 'nash_equilibria']

function postRewrites() {
  return POST_FOLDERS.flatMap((folder) =>
    fs.readdirSync(path.join(__dirname, 'pages', folder))
      .filter((file) => file.endsWith('.js'))
      .map((file) => {
        const name = file.slice(0, -'.js'.length)
        return { source: `/${name}`, destination: `/${folder}/${name}` }
      })
  )
}

module.exports = {
  async rewrites() {
    return postRewrites()
  },
}
