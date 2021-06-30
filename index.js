const puppeteer = require('puppeteer')
function run(item) {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({ headless: false, args: ['--incognito'] })
      const page = await browser.newPage()
      await page.setViewport({
        width: item.viewport.width,
        height: item.viewport.height,
      })
      await page.goto('https://globo.com')
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      const indiceClick = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      document.querySelector('body').innerHTML = Math.floor(Math.random() * 8)
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      browser.close()
      return resolve('done')
    } catch (e) {
      return reject(e)
    }
  })
}

const mapViewPortSize = {
  1: {
    // Mobile
    width: 385,
    height: 910,
  },
  2: {
    // Tablet
    width: 805,
    height: 910,
  },
  3: {
    // Desktop
    width: 1285,
    height: 910,
  },
}

const itemsForEach = [
  { id: 1, viewport: mapViewPortSize[3] },
  { id: 2, viewport: mapViewPortSize[1] },
  { id: 3, viewport: mapViewPortSize[2] },
  { id: 4, viewport: mapViewPortSize[1] },
  { id: 5, viewport: mapViewPortSize[2] },
  { id: 6, viewport: mapViewPortSize[3] },
]

itemsForEach.forEach(r => {
  run(r).then(console.log).catch(console.error)
})
