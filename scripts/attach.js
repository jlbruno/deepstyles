// attach.js | connect tS to the turntable room

module.exports = tS => {

  tS.init = function () {
    if (this.__base) return // don't init if we're here
      
    this.chrome = !!window.tsBase
    this.__base = window.tsBase || 'https://ts.pixelcrisis.co/build'
    // load any saved user configs
    let storage = window.localStorage.getItem("tsdb")
    let configs = storage ? JSON.parse(storage) : {}
    let version = require('../package.json').version
    // load and apply our defaults
    this.config = { ...this.default, ...configs, version }
    this.config.is_afk = false
    this.emit('loaded', this.config)
    this.attach()
  }

  tS.attach = function () {
    let core = window.turntable
    if (!core) return this.Log(`no room`)

    // check for lobby
    this.lobby = $('#turntable #topBG').length
    if (this.lobby) return this.buildWindow()

    // make sure we've attached to everything possible
    let again = () => setTimeout(tS.attach.bind(this), 150)

    if (!core.user) return again()

    let room = findKey(core, "roomId")
    if (!room) return again()
    
    let full = findKey(room, "roomData")
    if (!full) return again()

    // add our logBook output
    $('.room-info-nav').after(`<div id="ts_logs"></div>`)

    // clone realVolume for volume overrides
    this.realVolume = window.turntablePlayer.realVolume
    
    // interpret turntable events as our own
    core.removeEventListener('message', this.handle.bind(this))
    core.addEventListener('message', this.handle.bind(this))
    this.emit('attach', room)
    this.Log(`loaded room`)
  }

  tS.reload = function reload () {
    window.$tS = null
    $('script[href$="turnStyles.js"]').remove()
    
    const script = document.createElement('script')
    script.src = `${this.__base}/turnStyles.js?${Math.random()}`
    script.type = "text/javascript"
    
    this.Log(`reloading`)
    document.body.append(script)
  }

  // look for prop with key in obj
  const findKey = function (obj, key) {
    for (let prop in obj) {
      let data = obj[prop]
      if (data !== null && typeof data != "undefined" && data[key]) {
        return data
      }
    }
  }

}