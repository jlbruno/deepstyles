// ondeck.js | handling user DJing

module.exports = App => {

  App.attemptDJ = function (tries) {
    // check for our reasons to DJ
    let { nextdj, auto_q } = this.config
    if (!nextdj && !auto_q) return false
    // make sure there's an open spot
    let spot = $(".become-dj").length
    if (spot) this.takeSpot()
    else this.Ran("[ondeck] no spot")
    // try again if we aren't already DJing
    let curr = this.current_djs[this.User().id]
    if (!curr && tries) {
      let tried = tries - 1
      let again = () => App.attemptDJ(tried)
      return setTimeout(again.bind(this), 250)
    }
  }

  App.takeSpot = function () {
    this.Ran("[ondeck]: jumping...")
    this.View().becomeDj()
  }

  App.tryNextDJ = function () {
    if (!this.config.nextdj) return
    this.Ran("[nextdj] running...")
    this.attemptDJ()
  }

  App.autoQueue = function (e) {
    if (!this.config.auto_q) return
    if (e.text.indexOf(this.config.q_text) > -1) {
      this.Ran("[autoqueue] running...")
      this.attemptDJ(3)
    }
  }

  App.wasNextDJ = function (e) {
    if (!this.config.nextdj) return
    if (this.User().id != e.user[0].userid) return 
    this.setConfig("nextdj", false)
    this.Bully( disableNextDJ )
  }

  App.escortMe = function (e) {
    if (!this.config.escort) return
    this.setConfig("escort", false)
    this.View().quitDj()
  }

  App.escorting = function (e) {
    if (!this.config.escort) return
    this.Bully( escortWarning )
  }

  App.bindDecks = function () {
    this.Bind("add_dj", this.wasNextDJ)
    this.Bind("rem_dj", this.tryNextDJ)
    this.Bind("update", this.tryNextDJ)
    this.Bind("speak", this.autoQueue)
    this.Bind("pmmed", this.autoQueue)
  }

}

const disableNextDJ = {
  head: "You've hopped on deck!",
  body: "NextDJ has been disabled."
}

const escortWarning = {
  head: "You've started spinning!",
  body: "(turnStyles will escort you after this song)",
  type: "action"
}